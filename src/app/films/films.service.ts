import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http: HttpClient) { }

  getFilms(getInfo) {
    return this.http.get(`https://swapi.co/api/films/?search=${getInfo}`)
  }

}