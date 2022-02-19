import { Component, OnInit } from "@angular/core";
import { User } from "../models/user.model";
import { PostcreatorServiceService } from "../services/postcreator.service";


@Component({
    selector:'app-home-component',
    templateUrl:'./home.component.html',
    styleUrls:['./home.component.css']
})


export class Homecomponent implements OnInit{
    userList: User[] = [];
    constructor(public postServiceService: PostcreatorServiceService){ }
    ngOnInit(): void {
        this.userList = this.postServiceService.getLoggedInUser();
    }
} 