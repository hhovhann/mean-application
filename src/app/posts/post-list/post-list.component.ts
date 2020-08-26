import { Component, Input,  OnInit, OnDestroy} from '@angular/core'
import  { Subscription } from 'rxjs'
import { Post } from '../model/post.model';
import { PostsService } from '../service/posts.service';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})

export class PostListComponent implements OnInit, OnDestroy {
  posts: Post [];
  private postSub: Subscription;

  constructor(public postsService: PostsService){
  }
  ngOnDestroy(): void {
    this.postSub.unsubscribe();
  }

  ngOnInit(): void {
    this.posts = this.postsService.getPosts()
    this.postSub = this.postsService.getPostUpdateListener().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }
}
