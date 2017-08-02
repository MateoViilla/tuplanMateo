import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the FilterProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class FilterProvider {
  private categoriaId:String;
  private zonaId:String;
  private establecimientoId:String;


  constructor(public http: Http) {
  }
  getCategoriaId():String{
    return this.categoriaId

  }
  setCategoriaId(categoriaId):void{
    this.categoriaId=categoriaId;
  }

  getZonaId():String{
    return this.zonaId;

  }
  setZonaId(zonaId):void{
    this.zonaId=zonaId;
  }

  getEstablecimientoId():String{
    return this.establecimientoId;

  }
  setEstablecimientoId(establecimientoId):void{
    this.establecimientoId=establecimientoId;
  }
}
