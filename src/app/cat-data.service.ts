import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CatImage } from './cat-image';

@Injectable({
	providedIn: 'root'
})
export class CatDataService {
	http: HttpClient = null;
	url: string = 'https://aws.random.cat/meow';

	constructor(http: HttpClient) {
		this.http = http;
	}

	getCat(): Observable<CatImage> {
		// {"file":"https:\/\/purr.objects-us-east-1.dream.io\/i\/img_0349.jpg"}
		return this.http.get<CatImage>(this.url);
	}
}
