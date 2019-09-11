import { Manager } from 'src/app/services/manager.service';
import { environment } from "../../environments/environment";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EngineerService {
  hostName:string
  constructor(private http: HttpClient) { 
    this.hostName=environment.host_name
  }

   //add new manager to database
   addEngineer(m:Engineer){
    this.http.post(this.hostName+"engineer",m).subscribe(msg=>alert(msg['message']))
  }

  //get all manager 
  getAllEngineer():Observable<Engineer[]>{
   return this.http.get<Engineer[]>(this.hostName+"engineer").pipe(map(x=>x['items']))
}

//update engineer 
 updateEngineer(id:string,status:string){
   return this.http.patch(this.hostName+"engineer/"+id,{status:status}).toPromise()
 }
}
export interface Engineer {
  _id?:string,
  name: string,
  email: string,
  mobile: string|number,
  engineerType: string,
  status :string

}