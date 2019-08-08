import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
hostName:string
  constructor(private http:HttpClient) { 
    this.hostName=environment.host_name
  }

  sendEmail(mail:emailPattern){
  return  this.http.post(this.hostName + "email",mail)
  }
}

export interface emailPattern{
  to:string,
  subject:string,
  text:string,
  html:string
  
}