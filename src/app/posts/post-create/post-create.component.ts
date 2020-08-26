import { Component, EventEmitter, Output} from '@angular/core'
import { Post } from '../model/post';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
})

export class PostCreateComponent{
  post: Post;
  enteredTitle : string = '';
  enteredContent : string = '';

  @Output() postCreated = new EventEmitter<Post>();

  onAddPost(form: NgForm){
    if(form.invalid) return;
    const post: Post  = { title: form.value.title, content: form.value.content, }
    this.postCreated.emit(post);
  }
}
