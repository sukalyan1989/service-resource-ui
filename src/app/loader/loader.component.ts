import { Component, OnInit } from '@angular/core';
import { HttpStatus } from '../services/loader.service';

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  HTTPActivity: boolean;
  constructor(private httpstatus: HttpStatus){
    this.httpstatus.getHttpStatus().subscribe((status:boolean)=>{this.HTTPActivity=status,console.log(status)})
  }
  
  ngOnInit() {
    
  }

}
