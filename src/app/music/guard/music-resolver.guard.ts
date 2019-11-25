import { MusicServiceService } from "./../service/music-service.service";
import { Music } from "./../model/music-model";
import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Resolve
} from "@angular/router";
import { Observable, of } from "rxjs";
import { NullVisitor } from "@angular/compiler/src/render3/r3_ast";

@Injectable({
  providedIn: "root"
})
export class MusicResolverGuard implements Resolve<Music> {
  /**
   *
   */
  constructor(private service: MusicServiceService) {}

  resolve(  route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Music |  Observable<Music> |Promise<Music>  {
    if (route.params && route.params["id"]) {
      return this.service.getMusicbyid(route.params["id"]);
    }

    return of({
      Id: null,
      Name: null,
      Code: null,
      Genre: null
    });
  }
}
