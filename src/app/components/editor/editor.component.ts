import { Component, Input, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  // Получаем все посты и текущий пост из сервиса
  posts = this.blogService.getPosts();
  currentPost = this.blogService.getCurrentPost();
  
  constructor(private blogService: BlogService, public router: Router) { }
  
  // Задаем значения title и content, чтобы они отображались правильно при открытии поста
  @Input() title : string = this.currentPost.title;
  @Input() content : string = this.currentPost.content;

  isPostNew = false;
  ngOnInit() {
    if (this.currentPost.title == '' && this.currentPost.content == ''){
      this.isPostNew = true;
    } else {
      this.isPostNew = false;
    }
  }

  // Если пост старый то обновляем его, если новый то добавляем его 
  save() {
    if (this.title == '' || this.content == ''){
      alert('Не все поля заполнены')
      this.router.navigate(['/editor']);
    } else {
      if (this.isPostNew == true){
        var post = {
          title: this.title,
          content: this.content
        }
        this.blogService.addToBlog(post);
      } else {
        var post = {
          title: this.title,
          content: this.content
        }
        this.blogService.updatePost(post, this.currentPost)
      }  
    }
    
  }

  // Удаляем пост через сервис
  delete() {
    if (confirm('Вы уверены что хотите удалить пост?')) {
      var post = {
        title: this.currentPost.title,
        content: this.currentPost.content
      }
      this.blogService.deletePost(post)
    } else {
      this.router.navigate(['/editor']);
    }
  }

}
