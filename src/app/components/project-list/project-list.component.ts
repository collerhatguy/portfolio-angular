import { Component, OnInit } from '@angular/core';
import Project from 'src/data/Project';
import projects from "src/data/project-data";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  ProjectList: Project[] = [];
  constructor() { 
  }

  ngOnInit(): void {
    this.ProjectList = projects;
  }

}
