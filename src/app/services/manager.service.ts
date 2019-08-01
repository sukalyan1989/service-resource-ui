import { environment } from "../../environments/environment";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  hostName:string
  constructor(private http: HttpClient) { 
    this.hostName=environment.host_name
  }

  addManager(m:Manager){
  this.http.post(this.hostName+"managers",m).subscribe(msg=>alert(msg['message']))

  }
}

export interface Manager{
  firstName:string,
  lastName:string,
  position:string

}
