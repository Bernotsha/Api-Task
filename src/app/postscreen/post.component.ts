import { Component, OnInit } from "@angular/core";
import { Poster } from "../models/poster.model";
import { PostcreatorServiceService } from "../services/postcreator.service";


@Component({
    selector:'app-post-component',
    templateUrl:'./post.component.html',
    styleUrls:['./post.component.css']
})


export class Postcomponent implements OnInit{
    constructor(){ }
    ngOnInit(): void {

    }
} 