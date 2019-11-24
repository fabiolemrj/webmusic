import { Injectable } from '@angular/core';
import { tap, delay, take } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { Music } from '../model/music-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusicServiceService {

  constructor(private http: HttpClient) { }

   _url = `${environment.url}/music`;

  getAll() {
    return this.http.get<Music[]>(this._url).pipe(take(1));
  }

  getMusicbyid(id: string) {    
    return this.http.get<Music>(`${this._url}/getbyid/${id}`).pipe(take(1));
  }

  create(music: Music) {    
    return this.http.post(this._url, music).pipe(take(1));
  }

  update(music: Music) {    
    return this.http.put(`${this._url}/${music.Id}`, music).pipe(take(1));
  }

  save(music: Music) {
    if (music.Id) {
      return this.update(music);
    } else {
      return this.create(music);
    }
  }

  remove(id: string) {
    return this.http.delete(`${this._url}/${id}`).pipe(take(1));
  }


}
