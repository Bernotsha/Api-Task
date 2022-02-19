import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from "../models/user.model";
import { PostcreatorServiceService } from "../services/postcreator.service";


@Component({
    selector:'app-login-component',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.css']
})


export class LoginComponent implements OnInit{

    loginForm : FormGroup;

    userList: User[] = [];


    constructor(public postServiceService: PostcreatorServiceService,
        private fb: FormBuilder,
        public router: Router
        ){ 
        this.loginForm =  fb.group({
            email  : ['',[Validators.email, Validators.required]],
      });
    }
    ngOnInit(): void {
  
    }
    onSubmit() {
        this.postServiceService.getLoginInfo(this.loginForm.value.email).subscribe( res => {
            this.userList = res;
            if(this.userList.length>0){
                this.postServiceService.saveLoggedInUser(this.userList[0]);
                this.router.navigate(["/home"]);
            } else {
                alert("No Accounts found for this email Id");
            }
        });  
    }
} 