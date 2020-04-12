import { Component, OnInit, OnDestroy } from "@angular/core";
import { Post } from "../post.model";
import { PostsService } from "../posts.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"],
})
export class PostListComponent implements OnInit, OnDestroy {
  // public posts = [
  //   {
  //     title: "First post",
  //     content: "This is the posts content"
  //   },
  //   { title: "Second post", content: "This is the posts content" },
  //   { title: "Third post", content: "This is the posts content" }
  // ];
  public posts: Post[] = [];
  private sub$: Subscription;

  constructor(private _postService: PostsService) {}

  ngOnInit() {
    this.posts = this._postService.getPosts();
    this.sub$ = this._postService
      .getPostUpdatedListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  ngOnDestroy() {
    this.sub$.unsubscribe();
  }
}
