import { Component, Input, Inject} from '@angular/core'
import { Post } from '../model/post.model';
import { PostService } from '../service/posts.service';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})

export class PostListComponent{
  // the posts date can be called from findAll from server side
  @Input() posts: Post []
  // [
      //  { title: 'First Post', content: 'This is the first post\'s content' },
      //  { title: 'Second Post', content: 'This is the seconde post\'s content' },
      //  { title: 'Third Post', content: 'This is the third post\'s content' },
  // ];
  constructor(public postService: PostService){
  }

}
