/* tslint:disable */
import {
  Reserva
} from '../index';

declare var Object: any;
export interface EstablecimientoInterface {
  "nombre": string;
  "direccion": string;
  "descripcion"?: string;
  "telefono"?: string;
  "numReservas"?: number;
  "img"?: string;
  "fmaxPrice"?: number;
  "flowPrice"?: number;
  "dmaxPrice"?: number;
  "dlowPrice"?: number;
  "music"?: string;
  "cover"?: number;
  "bday"?: boolean;
  "ubicacion"?: string;
  "images": Array<any>;
  "color"?: string;
  "services": Array<any>;
  "id"?: any;
  "categoriaId"?: any;
  "zonaId"?: any;
  reservasXestablecimiento?: Reserva[];
}

export class Establecimiento implements EstablecimientoInterface {
  "nombre": string;
  "direccion": string;
  "descripcion": string;
  "telefono": string;
  "numReservas": number;
  "img": string;
  "fmaxPrice": number;
  "flowPrice": number;
  "dmaxPrice": number;
  "dlowPrice": number;
  "music": string;
  "cover": number;
  "bday": boolean;
  "ubicacion": string;
  "images": Array<any>;
  "color": string;
  "services": Array<any>;
  "id": any;
  "categoriaId": any;
  "zonaId": any;
  reservasXestablecimiento: Reserva[];
  constructor(data?: EstablecimientoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Establecimiento`.
   */
  public static getModelName() {
    return "Establecimiento";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Establecimiento for dynamic purposes.
  **/
  public static factory(data: EstablecimientoInterface): Establecimiento{
    return new Establecimiento(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Establecimiento',
      plural: 'Establecimientos',
      properties: {
        "nombre": {
          name: 'nombre',
          type: 'string'
        },
        "direccion": {
          name: 'direccion',
          type: 'string'
        },
        "descripcion": {
          name: 'descripcion',
          type: 'string'
        },
        "telefono": {
          name: 'telefono',
          type: 'string'
        },
        "numReservas": {
          name: 'numReservas',
          type: 'number'
        },
        "img": {
          name: 'img',
          type: 'string'
        },
        "fmaxPrice": {
          name: 'fmaxPrice',
          type: 'number'
        },
        "flowPrice": {
          name: 'flowPrice',
          type: 'number'
        },
        "dmaxPrice": {
          name: 'dmaxPrice',
          type: 'number'
        },
        "dlowPrice": {
          name: 'dlowPrice',
          type: 'number'
        },
        "music": {
          name: 'music',
          type: 'string'
        },
        "cover": {
          name: 'cover',
          type: 'number'
        },
        "bday": {
          name: 'bday',
          type: 'boolean'
        },
        "ubicacion": {
          name: 'ubicacion',
          type: 'string'
        },
        "images": {
          name: 'images',
          type: 'Array&lt;any&gt;'
        },
        "color": {
          name: 'color',
          type: 'string'
        },
        "services": {
          name: 'services',
          type: 'Array&lt;any&gt;'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "categoriaId": {
          name: 'categoriaId',
          type: 'any'
        },
        "zonaId": {
          name: 'zonaId',
          type: 'any'
        },
      },
      relations: {
        reservasXestablecimiento: {
          name: 'reservasXestablecimiento',
          type: 'Reserva[]',
          model: 'Reserva'
        },
      }
    }
  }
}
