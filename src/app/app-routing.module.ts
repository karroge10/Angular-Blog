import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorComponent } from './components/editor/editor.component';
import { BlogComponent } from './components/blog/blog.component';

const routes: Routes = [
  { path: '', component: BlogComponent },
  { path: 'editor', component: EditorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EditorComponent, BlogComponent]