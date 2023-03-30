import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
  
})
export class NavBarComponent {

  constructor() { }

  imageBase: string = '../../../../assets/moon.png';
  imageMoon: string = '../../../../assets/moon.png';
  imageSun: string = '../../../../assets/sun.png';

  NightMode(){
    document.body.classList.toggle("night-theme");
    if(document.body.classList.contains("night-theme")){
      this.imageBase = this.imageSun;
    } else {
      this.imageBase = this.imageMoon;
    }
  }

}
