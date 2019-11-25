import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FramePageComponent } from './shared/framepage/frame-page/frame-page.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { MainComponent } from './shared/main/main.component';
import { ListMusicComponent } from './music/list-music/list-music.component';
import { AddEditMusicComponent } from './music/add-edit-music/add-edit-music.component';



@NgModule({
  declarations: [
    AppComponent,
    FramePageComponent,
    NavBarComponent,
    MainComponent,
    ListMusicComponent,
    AddEditMusicComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
