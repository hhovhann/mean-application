import { Component, EventEmitter, Output} from '@angular/core'
import { Post } from '../model/post';

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

  onAddPost(){
    const post: Post  = { title:this.enteredTitle, content: this.enteredContent, }
    this.postCreated.emit(post);
  }
}
