/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Usuario } from '../../models/Usuario';
import { Establecimiento } from '../../models/Establecimiento';
import { Reserva } from '../../models/Reserva';
import { Categoria } from '../../models/Categoria';
import { Ciudad } from '../../models/Ciudad';
import { Zona } from '../../models/Zona';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Usuario: Usuario,
    Establecimiento: Establecimiento,
    Reserva: Reserva,
    Categoria: Categoria,
    Ciudad: Ciudad,
    Zona: Zona,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
