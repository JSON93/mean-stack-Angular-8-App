import { Component, Output, EventEmitter } from "@angular/core";
import { Post } from "../post.model";

@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html",
  styleUrls: ["./post-create.component.css"]
})
export class PostCreateComponent {
  public enteredTitle = "";
  public enteredContent = "";
  @Output() postCreated = new EventEmitter<Post>();

  constructor() {}

  onAddEvent(): void {
    const post: Post = {
      title: this.enteredTitle,
      content: this.enteredContent
    };
    this.postCreated.emit(post);
  }
}
