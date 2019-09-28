import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApikeyProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApikeyProvider {
  private baseURL = 'https://api.themoviedb.org/3/';
  private apiKey = 'api_key=10810cc7ad7c4a572a42e3ab7952ebca';
  
  constructor(public http: HttpClient) {
    console.log('Hello ApikeyProvider Provider');
  }

  //คืนค่าเป็น Api web
  get_Api_Movieup() {
    const url = this.baseURL + 'movie/upcoming?' + this.apiKey;
    return this.http.get(url);
  }

  get_Api_Movietop() {
    const url = this.baseURL + 'movie/top_rated?' + this.apiKey;
    return this.http.get(url);
  }

  get_Api_Movienow() {
    const url = this.baseURL + 'movie/now_playing?' + this.apiKey;
    return this.http.get(url);
  }

  get_Api_Moviepop() {
    const url = this.baseURL + 'movie/popular?' + this.apiKey;
    return this.http.get(url);
  }

  search_Api_Movie(query) {
    const url = this.baseURL + 'search/movie?query=' + query + '&' + this.apiKey;
    return this.http.get(url);
  }

  get_Api_MovieDetails(movieID) {
    const url = this.baseURL + 'movie/' + movieID + '?' + this.apiKey + '&language=en-US';
    return this.http.get(url);
  }

  get_Api_Videos(movieID) {
    const url = this.baseURL + 'movie/' + movieID + '/videos?' + this.apiKey + '&language=en-US';
    return this.http.get(url);
  }



}
