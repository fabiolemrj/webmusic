import { Music } from './music/model/music-model';
import { MusicResolverGuard } from './music/guard/music-resolver.guard';
import { AddEditMusicComponent } from './music/add-edit-music/add-edit-music.component';
import { ListMusicComponent } from './music/list-music/list-music.component';


import { MainComponent } from './shared/main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FramePageComponent } from './shared/framepage/frame-page/frame-page.component';

const routes: Routes = [
  {path:'', component:FramePageComponent,
children:[{path:'',component:MainComponent},
{path:'music',component:ListMusicComponent},
  { path:'editmusic/:id', component:AddEditMusicComponent,resolve:{music: MusicResolverGuard}},
  { path: 'addmusic', component: AddEditMusicComponent, resolve: { music: MusicResolverGuard } }
]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
