import { Component, EventEmitter, Output} from '@angular/core'
import { NgForm } from '@angular/forms';
import { PostsService } from '../service/posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
})

export class PostCreateComponent{
  enteredTitle : string = '';
  enteredContent : string = '';

  constructor(public postsService: PostsService){
  }

  onAddPost(form: NgForm){
    if(form.invalid) return;
    this.postsService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }
}
