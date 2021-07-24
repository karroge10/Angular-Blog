import { Component, Input, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blog.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

    // устанавливает дефолтные значения 
  @Input() title = ''
  @Input() content = ''
  @Input() id = 0

 
  open(){
    this.blogService.openPost(this);
  }

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
  }


}
