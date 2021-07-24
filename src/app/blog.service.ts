import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  // Дефолтные значения
  posts = []
  currentPost = {title: '', content: '', id: 0}
  lastId = 0;

  constructor() { }

  // Добавляем пост в блог путем добавления объекта post в массив posts
  addToBlog(post) {
    this.currentPost.id += 1;
    this.lastId = this.currentPost.id
    console.log(post)
    this.posts.push(post)
  }

  // Получаем все посты
  getPosts() {
    console.log(this.posts)
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
    this.currentPost.id = this.lastId;
  }

  // Задаем значения текущего поста при нажатии кнопки перейти
  openPost(post) {
    this.lastId = this.currentPost.id; // Сохраняем id последнего поста, чтобы продолжить счетчик id в будущем
    this.currentPost.title = post.title;
    this.currentPost.content = post.content;
    this.currentPost.id = post.id;
  }
  
  // Находим нужный пост по id и обновляем title и content
  updatePost(post){
    this.posts.forEach(obj => {
      if (obj.id === post.id){
        obj.title = post.title;
        obj.content = post.content;
        return obj
      }
    });
    console.log(post, this.posts)
  }

  deletePost(post) {
    // Находим нужный пост по id и удаляем из массива
    this.posts.forEach((obj) => {
      if (obj.id === post.id) {
        this.posts.splice(obj.id, 1);
      }
    });
    // Правильно отображаем id после удаления поста
    this.posts.forEach((obj) => {
      if (obj.id > 0 && obj.id > post.id){
        obj.id -= 1;
      }
    })
    this.lastId -= 1;
    console.log(post)
  }
}
