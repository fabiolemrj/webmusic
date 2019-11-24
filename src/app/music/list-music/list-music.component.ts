import { MusicServiceService } from './../service/music-service.service';
import { Component, OnInit } from '@angular/core';
import { Music } from '../model/music-model';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-list-music',
  templateUrl: './list-music.component.html',
  styleUrls: ['./list-music.component.css']
})
export class ListMusicComponent implements OnInit {

  public musics: Observable<Music[]> = null;
  public _musics: Music[] = [];

  constructor(private service: MusicServiceService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.load();
  }

  load(){
    this.musics = this.service.getAll();
    this.musics.subscribe(
      resp =>(this._musics = resp)
    );
  }

}
