import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import Project from 'src/data/Project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
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
export class ProjectComponent implements OnInit {
  @Input() project!: Project;
  liveServer!: string; 
  repository!: string;
  photoPath!: string;
  visible: boolean = false;
  hover: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.photoPath = `assets/projectPhotos/${this.project.repoName}.png`
  }

  reveal() {
    this.visible = !this.visible;
  }
  revealState() {
    return this.visible ? 'shown' : 'hidden';
  }
  handleHoverChange() {
    this.hover = !this.hover;
  }
  handleHover() {
    return this.hover ? 'hover' : 'notHover';
  }

}
