import { Component,OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class FindComponent implements OnInit{
  searchId='';
  list:Array<any>=[];

  constructor(private http:HttpClient,private postService:PostService){

  }

  ngOnInit(): void {
    
  }   

  loadData(){
   this.postService.find(this.searchId)
    .subscribe(response =>{
      console.log(response);
      this.list = response;
    });
  }
}
