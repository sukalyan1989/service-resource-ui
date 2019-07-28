import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  constructor(private loaderService: LoaderService){}
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  ngOnInit() {
    
  }

}
