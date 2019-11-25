import { FormGroup } from '@angular/forms';
import { MusicServiceService } from './../service/music-service.service';
import { Component, OnInit, Input } from '@angular/core';
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
    this.load("");
  }

  load(pesq:string){
    if(!pesq){
      alert(pesq);
      pesq = ' ';
    }

    this.musics = this.service.getMusicbyname(pesq);
    this.musics.subscribe(
      resp =>(this._musics = resp)
    );
  }

  onEdit(id){
    
    this.router.navigate(['/editmusic', id], { relativeTo: this.route });
  }

}
