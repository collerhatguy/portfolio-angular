import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ArticleListComponent } from './components/article-list/article-list.component';

const routes: Routes = [
  { path: "articles", component: ArticleListComponent },
  { path: "", component: ProjectListComponent },
  { path: "**", component: ProjectListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
