
import { ManagerService,Manager } from 'src/app/services/manager.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-add-manager',
  templateUrl: './admin-add-manager.component.html',
  styleUrls: ['./admin-add-manager.component.css']
})
export class AdminAddManagerComponent implements OnInit {

  constructor(private manager:ManagerService) { }

  ngOnInit() {
  }
  submit(f:FormGroup){
    let manag:Manager={
      firstName:f.value['firstName'],
      lastName:f.value["lastName"],
      position:f.value['position']
    }
    this.manager.addManager(manag)
  }

}
