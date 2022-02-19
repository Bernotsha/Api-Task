import { Component, OnInit } from "@angular/core";
import { Comments } from "../models/comment.model";
import { Poster } from "../models/poster.model";
import { User } from "../models/user.model";
import { PostcreatorServiceService } from "../services/postcreator.service";


@Component({
    selector:'app-allposts-component',
    templateUrl:'./allposters.component.html',
    styleUrls:['./allposters.component.css']
})


export class AllPostcomponent implements OnInit{
    title: string ="All user feeds"
    postList : Poster[] = [];
    comments : Comments[] = [];
    userList : User[] = [];
    constructor(public postServiceService: PostcreatorServiceService){ }
    ngOnInit(): void {
        this.postServiceService.getAllUserPosts().subscribe( res => {
            this.userList = this.postServiceService.getLoggedInUser();
            console.log(this.userList);
            console.log(res);
            for(let i=0; i<res.length;i++){
                if(res[i].userId != this.userList[0].id){
                    this.postList.push(res[i]);
                }
            }
            console.log(this.postList);
        });  
    }

    postclicked(id : number){
        this.postServiceService.getPostComments(id).subscribe( res => {
            this.comments = res;
        });      
    }

    userclicked(id : number){
        this.postServiceService.getclickeduserPosts(id).subscribe(res =>{
            this.postList = res;
            this.title="User "+id+" feeds";
        })
    }
} 