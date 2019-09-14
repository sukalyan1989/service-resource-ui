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
  userFiles:{
    addressDoc:string,
    idDoc:string,
    comDoc:string
  };
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
    this.userFiles={
      idDoc:"",
      comDoc:"",
      addressDoc:""
    }
    this.user.GetUserById(this.user.getUserId()._id).subscribe(m => {
      this.userFiles=m["user"];
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
//file upload for address verification document
  addressDocSubmit(f:Object){
    
    const formData = new FormData();
    formData.append('image',this.selectedFile)
    formData.append('Uid',f['value'].Uid)
    formData.append('docType',f['value'].docType)


    this.upload.uploadFile(formData).then(m=>{
      
      this.user.UpdateProfile({addressDoc:m['url']}).toPromise().then(m=>{
        alert("Address Verification Document Uploaded Successfully")
        this.userFiles['addressDoc']=m['url']
        this.RefreshFiles();
      })
    },err=>console.log(err))
  }



  //file upload for ID document
  idDocSubmit(f:Object){
    
    const formData = new FormData();
    formData.append('image',this.selectedFile)
    formData.append('Uid',f['value'].Uid)
    formData.append('docType',f['value'].docType)


    this.upload.uploadFile(formData).then(m=>{
      
      this.user.UpdateProfile({idDoc:m['url']}).toPromise().then(m=>{
        alert("Identity Verification Document Uploaded Successfully")
        this.userFiles['idDoc']=m['url']
        this.RefreshFiles();
      })
    },err=>console.log(err))
  }
  comDocSubmit(f:Object){
    const formData = new FormData();
    formData.append('image',this.selectedFile)
    formData.append('Uid',f['value'].Uid)
    formData.append('docType',f['value'].docType)


    this.upload.uploadFile(formData).then(m=>{
      
      this.user.UpdateProfile({comDoc:m['url']}).toPromise().then(m=>{
        alert("Company Verification Document Uploaded Successfully")
        this.userFiles['comDoc']=m['url']
        this.RefreshFiles();
      })
    },err=>console.log(err))
  }

  RefreshFiles(){
    this.user.GetUserById(this.user.getUserId()._id).toPromise().then(m => {
      this.userFiles=m["user"];
  });
  }
  fileSelect(e:Event){
    this.selectedFile=e.target['files'][0]
  }
}
