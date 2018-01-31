import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpPostService } from 'app/services/http-post.service';
import { post } from 'selenium-webdriver/http';
import { error } from 'util';
import { AppError } from 'app/common/app-error';
import { NotFoundError } from 'app/common/not-found-error';
import { BadInput } from 'app/common/bad-input';
 

@Component({
  selector: 'app-http-post',
  templateUrl: './http-post.component.html',
  styleUrls: ['./http-post.component.css']
})
export class HttpPostComponent implements OnInit{

 posts:any[];


  constructor(private service:HttpPostService) {};

   ngOnInit(){
     this.service.getAll()
    .subscribe(posts=>this.posts = posts );
   }

  createPost(input: HTMLInputElement){
    let post = {title:input.value};
    this.posts.splice(0,0,post);

    input.value='';
       this.service.create(post)
        .subscribe(newpost=>{
          post['id']=newpost.id;
        
          console.log(newpost);
        },
        (error:AppError)=>{
          this.posts.splice(0,1);
          if(error instanceof BadInput){
            //this.form.setErrors(error.originalError);
          }else{
           throw error;
          }
             
        }
      )
  };

  updatePost(post){
   this.service.update(post)
    .subscribe(updatedPost=>{
      console.log(updatedPost);
    });
  };

  deletePost(post){

    let index = this.posts.indexOf(post);
    this.posts.splice(index,1);

    this.service.delete(post.id)
              .subscribe(
               null,
               (error:AppError)=>{
                //roll back, add the delete one back
                this.posts.splice(index,0,post);

                if(error instanceof NotFoundError){
                  alert('This post has already been deleted.')
                }else{
                 throw error;
                }
              });
  }
   
}
