import { FormGroup } from '@angular/forms';
import { Engineer, EngineerService } from 'src/app/services/engineer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-add-engineer',
  templateUrl: './admin-add-engineer.component.html',
  styleUrls: ['./admin-add-engineer.component.css']
})
export class AdminAddEngineerComponent implements OnInit {

  constructor(private Engineer:EngineerService) { }

  ngOnInit() {
  }

  submit(f:FormGroup){
    let manag:Engineer={
      name:f.value['name'],
      email:f.value["email"],
      mobile:f.value['mobile'],
      engineerType:f.value['engineerType'],
      status:f.value['status']
    }
    this.Engineer.addEngineer(manag);
  }  
}
