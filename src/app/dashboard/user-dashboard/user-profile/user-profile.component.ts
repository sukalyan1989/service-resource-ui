import { EmailService } from 'src/app/services/email.service';
import { FileUploadService } from './../../../services/file-upload.service';
import { UserService, User } from "src/app/services/user.service";
import { FormBuilder } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { environment } from 'src/environments/environment.prod';

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
  constructor(private email:EmailService, private fb: FormBuilder, private user: UserService , private upload:FileUploadService) {
    this.currentUser = {
      firstname: "Loading..",
      lastname: "Loading..",
      companyName: "Loading..",
      email: "Loading..",
      address: "Loading..",
      city: "Loading..",
      zip: "Loading..",
      mobile: 0,
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
    firstname: [""],
    lastname:[""],
    companyName: [""],
    email: [""],
    address: [""],
    city: [""],
    zip: [""],
    mobile: [""],
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
      lastname:this.currentUser.lastname,
      firstname: this.currentUser.firstname,
      companyName: this.currentUser.companyName,
      email: this.currentUser.email,
      address: this.currentUser.address,
      city: this.currentUser.city,
      zip: this.currentUser.zip,
      mobile: this.currentUser.mobile,
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
        this.userFiles['idDoc']=m['url']
        this.email.sendEmail({
          to:environment.admin_email,
          subject:"A Member Named : "+this.currentUser.firstname+' '+this.currentUser.lastname+" Has uploaded document",
          text:'',
          html:`
          <pre>          
          Hi Admin,
          
          A subscriber  has uploaded their document.
          Below is the Subscriber Details:
          <br>
          <br>
          Name: ${this.currentUser.firstname} ${this.currentUser.lastname}
          <br>
          Email : ${this.currentUser.email}
          <br>
          Phone : ${this.currentUser.mobile}
          
          <br><b>N.B: This is system generated message.Please do not reply at this emailid.</b>
          
          </pre>
          
        `
        }).toPromise().then(m=>{
          this.RefreshFiles();
          alert("Identity Verification Document Uploaded Successfully")
        })
        
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
