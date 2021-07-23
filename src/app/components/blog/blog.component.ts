import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  posts = [
    {title: 'первый', content: 'контент первого поста'},
    {title: 'второй', content: 'контент второго поста'},
    {title: 'третий', content: 'контент третьего поста'},
    {title: 'четвертый', content: 'контент четвертого поста'},
    {title: 'еще один', content: 'какой то пост'}
  ]
  data = 5;
}
