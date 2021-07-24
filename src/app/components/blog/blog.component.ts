import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts = this.blogService.getPosts();
  
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
     
  }
  
  resetCurrentPost() {
    this.blogService.resetCurrent()
  }
}
