import { Component, OnInit } from "@angular/core";
import { Comments } from "../models/comment.model";
import { Poster } from "../models/poster.model";
import { PostcreatorServiceService } from "../services/postcreator.service";


@Component({
    selector:'app-currentuser-component',
    templateUrl:'./currentuserpost.component.html',
    styleUrls:['./currentuserpost.component.css']
})


export class CurrentUserPostcomponent implements OnInit{
    postList : Poster[] = [];
    comments : Comments[] = [];
    constructor(public postServiceService: PostcreatorServiceService){ }
    ngOnInit(): void {
        this.postServiceService.getCurrentUserPosts().subscribe( res => {
            this.postList = res;
            console.log(this.postList);
        });  
    }

    postclicked(id : number){
        this.postServiceService.getPostComments(id).subscribe( res => {
            this.comments = res;
        });      
    }

} 
