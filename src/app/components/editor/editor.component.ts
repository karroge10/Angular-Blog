import { Component, Input, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blog.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  // Получаем все посты и текущий пост из сервиса
  posts = this.blogService.getPosts();
  currentPost = this.blogService.getCurrentPost();
  
  constructor(private blogService: BlogService) { }
  
  // Задаем значения title и content, чтобы они отображались правильно при открытии поста
  @Input() title : string = this.currentPost.title;
  @Input() content : string = this.currentPost.content;
  @Input() id : number = this.currentPost.id;
   // id надо получать из прошлого а мы получаем из значения которое всегда обновляется и равно 0

  isPostNew = false;
  ngOnInit() {
    if (this.currentPost.title == '' && this.currentPost.content == ''){
      this.isPostNew = true;
    } else {
      this.isPostNew = false
    }
  }

  // Добавляем пост через сервис
  save() {
    if (this.isPostNew == true){
      var post = {
        title: this.title,
        content: this.content,
        id: this.id
      }
      this.blogService.addToBlog(post);
    } else {
      var post = {
        title: this.title,
        content: this.content,
        id: this.id
      }
      this.blogService.updatePost(post)
    }

  }

  // Удаляем пост через сервис
  delete() {
    if (confirm('Вы уверены что хотите удалить пост?')) {
      var post = {
        title: this.title,
        content: this.content,
        id: this.id
      }
      this.blogService.deletePost(post)
    }
  }

}
