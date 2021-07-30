import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import Article from 'src/data/Article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  animations: [
    trigger("reveal", [
      state("shown", style({
        transform:'scaleY(1)',
        display: 'flex'
      })),
      state("hidden", style({
        transform: 'scaleY(0)',
        display: 'none'
      })),
      transition("hidden => shown", animate("300ms", keyframes([
        style({
          transform: 'scaleY(0)', 
          display: 'flex', 
          offset: 0
        }),
        style({
          transform: 'scaleY(1)', 
          display: 'flex', 
          offset: 1
        })
      ]))),
      transition("shown => hidden", animate("300ms ease-in-out")),
    ])
  ]
})
export class ArticleComponent implements OnInit {
  @Input() article!: Article;
  visible: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  reveal() {
    this.visible = !this.visible;
  }
  revealState() {
    return this.visible ? 'shown' : 'hidden';
  }
}
