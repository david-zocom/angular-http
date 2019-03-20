import { Component, OnInit } from '@angular/core';
// import { CatImage } from '../cat-image';
import { CatDataService } from '../cat-data.service';

@Component({
	selector: 'app-meow',
	templateUrl: './meow.component.html',
	styleUrls: ['./meow.component.css']
})
export class MeowComponent implements OnInit {
	catUrl: string = null;
	// private catData: CatDataService

	constructor(private catData: CatDataService) { }

	ngOnInit() { }

	dropItRightMeow() {
		console.log('MeowComponent.dropItRightMeow catData=', this.catData);
		this.catData.getCat().subscribe(
			catImage => {
				this.catUrl = catImage.file;
			}
		)
	}
}



//
