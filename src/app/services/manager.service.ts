import { environment } from "../../environments/environment";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  hostName:string
  constructor(private http: HttpClient) { 
    this.hostName=environment.host_name
  }

  //add new manager to database
  addManager(m:Manager){
  this.http.post(this.hostName+"managers",m).subscribe(msg=>alert(msg['message']))

  }

  //get all manager list
  getManagers():Observable<Manager[]>{
   return this.http.get<Manager[]>(this.hostName+"managers").pipe(map(data=>data["managers"]))

  }
  getManagerAssignedJobCount(id:string){
    return this.http.get<number>(this.hostName+"managers/count/"+id)

  }
}

export interface Manager{
  firstName:string,
  lastName:string,
  position:string

}
