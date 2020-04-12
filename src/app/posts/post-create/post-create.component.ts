import { Component, Output, EventEmitter } from "@angular/core";
import { Post } from "../post.model";
import { NgForm } from "@angular/forms";
import { PostsService } from "../posts.service";

@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html",
  styleUrls: ["./post-create.component.css"],
})
export class PostCreateComponent {
  public enteredTitle = "";
  public enteredContent = "";

  constructor(private _postsService: PostsService) {}

  onAddPost(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    this._postsService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }
}
