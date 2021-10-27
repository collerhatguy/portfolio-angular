import { Component } from '@angular/core';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio-angular';
  dark: boolean = true;
  handleDark() {
    this.dark = !this.dark;
    localStorage.setItem("dark", JSON.stringify(this.dark))
  }
  ngOnInit() {
    if (localStorage.getItem("dark")) {
      this.dark = JSON.parse(localStorage.getItem("dark") || "")
    } else {
      localStorage.setItem("dark", JSON.stringify(this.dark))
    }
  }
}
