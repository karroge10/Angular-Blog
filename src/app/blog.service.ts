import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  // Дефолтные значения
  posts = []
  currentPost = {title: '', content: ''}

  constructor() { }

  // Добавляем пост в блог путем добавления объекта post в массив posts
  addToBlog(post) {
    this.posts.push(post)
  }

  // Получаем все посты
  getPosts() {
    return this.posts
  }

  // Получаем значения открытого поста при его открытии
  getCurrentPost() {
    return this.currentPost;
  }

  // Обнуляем значения текущего поста при нажатии на кнопку "+Добавить"
  resetCurrent() {
    this.currentPost.title = '';
    this.currentPost.content = '';
  }

  // Задаем значения текущего поста при нажатии кнопки перейти
  openPost(post) {
    this.currentPost.title = post.title;
    this.currentPost.content = post.content;
  }
  
  // Находим нужный пост и обновляем title и content
  updatePost(post, oldPost){
    this.posts.map((obj) => {
      if(JSON.stringify(obj) === JSON.stringify(oldPost)){
        let index = this.posts.indexOf(obj)
        this.posts[index].title = post.title
        this.posts[index].content = post.content
      }
    });
  }
  // Находим нужный пост и удаляем его
  deletePost(post) {
    this.posts.map((obj) => {
      if(JSON.stringify(obj) === JSON.stringify(post)){
        let index = this.posts.indexOf(obj)
        this.posts.splice(index, 1)
      }
    });
  }
}
