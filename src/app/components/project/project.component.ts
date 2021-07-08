import { Component, Input, OnInit } from '@angular/core';
import Project from 'src/Project';
import photo from "../../../projectPhotos/"
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() project!: Project;
  liveServer!: string; 
  repository!: string;
  photoPath!: string;
  constructor() { }

  ngOnInit(): void {
    this.liveServer = `https://collerhatguy.github.io/${this.project.repoName}/`;
    this.repository = `https://github.com/collerhatguy/${this.project.repoName}/`;
    this.photoPath = `url(../../../projectPhotos/${this.project.repoName}.png)`
    console.log(this.project)
  }

}
