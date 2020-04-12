import { Post } from "./post.model";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class PostsService {
  private post: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  getPosts() {
    return [...this.post];
  }

  getPostUpdatedListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Post = { title: title, content: content };
    this.post.push(post);
    this.postsUpdated.next([...this.post]);
  }
}
