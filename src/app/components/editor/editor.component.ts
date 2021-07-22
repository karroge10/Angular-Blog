import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title: string = '';
  content: string = '';

  savePost() {
    var post = {
      title: this.title,
      content: this.content
    }
    console.log(post);
  }
}
