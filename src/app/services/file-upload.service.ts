import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  hostName:string
  constructor(private http : HttpClient) { 
    this.hostName=environment.host_name

  }
  uploadFile(data : Object){
   return this.http.post(this.hostName+'uploads',data).toPromise()
  }
}
