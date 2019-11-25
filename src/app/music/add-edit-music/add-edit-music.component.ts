import { MusicServiceService } from "./../service/music-service.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: "app-add-edit-music",
  templateUrl: "./add-edit-music.component.html",
  styleUrls: ["./add-edit-music.component.css"]
})
export class AddEditMusicComponent implements OnInit {
  public form: FormGroup;
  public busy = false;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private data: MusicServiceService,
    private router: Router,
    private service: MusicServiceService,
    private location: Location,
    private route: ActivatedRoute
  ) {
    this.form = fb.group({
      Name:[Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(50),
        Validators.required
      ])],
      Code:[Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(6),
        Validators.required
      ])],
      Genre: [Validators.compose([
        Validators.required
      ])]
    });
  }

  ngOnInit() {


    const _music = this.route.snapshot.data['music'];

    this.form = this.fb.group({
      Id:[_music.Id],
      Name:[_music.Name],
      Code:[_music.Code],
      Genre:[_music.Genre]
    });
  }
  
  onSubmit(){
    this.submitted = true;
    if (this.form.valid) {
      console.log('submit');

      this.service.save(this.form.value).subscribe(
        success=>{
          this.location.back();
        },
        error => console.log(error)
        
      );
    }
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
    this.location.back();
    // console.log('onCancel');
  }
}
