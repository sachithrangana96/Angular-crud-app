import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  list:Array<any> = [];

  constructor(private http:HttpClient,private postService:PostService){

  }

  ngOnInit(): void {
   this.postService.findAll()
    .subscribe(response =>{
      console.log(response);
      this.list = response;
    });
  }
}
