import { Component, OnInit } from '@angular/core';
import articles from 'src/article-data';
import Article from 'src/Article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  articles: Article[] = []
  
  constructor() { }

  ngOnInit(): void {
    this.articles = articles;
  }

}
