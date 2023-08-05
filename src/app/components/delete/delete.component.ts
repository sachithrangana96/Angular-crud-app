import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import { PostService } from 'src/app/services/post.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {
  list:Array<any> = [];

  constructor(private http:HttpClient,private _snackBar:SnackBarService, private postService:PostService){

  }

  ngOnInit(): void {
    this.postService.findAll()
    .subscribe(response =>{
      console.log(response);
      this.list = response;
    });
  }

  delete(id:any):void{
    if(confirm('are you sure '+id)){
     this.postService.delete(id)
      .subscribe(response =>{
        this._snackBar.trigger('Delete','close');
      })

      for (let i = 0; i < this.list.length; i++) {
        if(this.list[i].id==id){
          this.list.splice(i,1);
          return;
        }
      }

    }
  }

}
