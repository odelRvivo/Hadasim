import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

 



@Component({
  selector: 'app-coronainformation',
  templateUrl: './coronainformation.component.html',
  styleUrls: ['./coronainformation.component.css']
})


export class CoronainformationComponent {

  
	constructor() {
	}
a(){
	window.location.reload();
}
}