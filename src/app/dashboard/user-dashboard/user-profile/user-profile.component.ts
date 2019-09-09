import { FileUploadService } from './../../../services/file-upload.service';
import { UserService, User } from "src/app/services/user.service";
import { FormBuilder } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.css"]
})
export class UserProfileComponent implements OnInit {
  selectedFile
  currentUser: User;
  constructor(private fb: FormBuilder, private user: UserService , private upload:FileUploadService) {
    this.currentUser = {
      firstname: "",
      lastname: "",
      fullName: "Loading..",
      companyName: "Loading..",
      email: "Loading..",
      address: "Loading..",
      city: "Loading..",
      zip: "Loading..",
      phone: 0,
      state: "Loading..",
      country: "Loading.."
    };
    this.user.GetUserById(this.user.getUserId()._id).subscribe(m => {
      console.log(m["user"]);
      this.currentUser = m["user"];
      this.RefreshForm();
    });
  }

  profileForm = this.fb.group({
    fullName: [""],
    companyName: [""],
    email: [""],
    address: [""],
    city: [""],
    zip: [""],
    phone: [""],
    state: [""],
    country: [""]
  });

  ngOnInit() {
    this.RefreshForm();
  }

  formSubmit(f) {
    //  console.log(f['value'])
    this.user.UpdateProfile(f["value"]).subscribe(m => {
      console.log(m);
      this.currentUser = f["value"];
      this.RefreshForm();
      //  this.user.GetUserById(this.user.getUserId()._id)
      // this.currentUser=this.user.getUserId();

      alert("update success");
    });
  }
  RefreshForm() {
    this.profileForm.patchValue({
      fullName: this.currentUser.fullName,
      companyName: this.currentUser.companyName,
      email: this.currentUser.email,
      address: this.currentUser.address,
      city: this.currentUser.city,
      zip: this.currentUser.zip,
      phone: this.currentUser.phone,
      state: this.currentUser.state,
      country: this.currentUser.country
    });
  }

  addressDocSubmit(f:Object){
    //console.log(f['value'].image)
    const formData = new FormData();
    formData.append('image',this.selectedFile)
    formData.append('Uid',f['value'].Uid)
    formData.append('docType',f['value'].docType)

console.log(formData)
    this.upload.uploadFile(formData).then(m=>console.log(m),err=>console.log(err))
  }
  fileSelect(e:Event){
    this.selectedFile=e.target['files'][0]
  }
}
