import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  angularLogo: string = "../assets/angular.png";
  html5Logo: string = "../assets/HTML5.png";
  ngBootstrapLogo: string = "../assets/ngbootstrap.png";
  scssLogo: string = "../assets/scss.png";
  typeScriptLogo: string = "../assets/Typescript.png";
}
