import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms'
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import { PostService } from 'src/app/services/post.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {
  searchId='';
  list:Array<any>=[];

 
  constructor(private http:HttpClient,private _snackBar:SnackBarService,private postService:PostService){}

  form =new FormGroup({
    id:new FormControl('',[Validators.required,Validators.maxLength(5)]),
    userId:new FormControl('',Validators.required),
    title:new FormControl('',Validators.required),
    body:new FormControl('',Validators.required),
  });

  updateData():void{
    this.postService.update(
      this.form.get('id')?.value,
      this.form.get('userId')?.value,
      this.form.get('title')?.value,
      this.form.get('body')?.value
    )
    .subscribe(response =>{
      if(response){
        this._snackBar.trigger('Update','close')
      }
      console.log(response);
      
    });
  }

  ngOnInit(): void {
    
  }   

  loadData(){
  this.postService.find(this.searchId)
    .subscribe(response =>{
      console.log(response);
     this.form.patchValue({
      id:response[0].id,
      userId:response[0].userId,
      title:response[0].title,
      body:response[0].body,
     })
    });
  }
}
