/* tslint:disable */
import {
  Establecimiento,
  Categoria
} from '../index';

declare var Object: any;
export interface ZonaInterface {
  "nombre"?: string;
  "sector"?: string;
  "id"?: any;
  "categoriaId"?: any;
  "ciudadId"?: any;
  establecimientosXzona?: Establecimiento[];
  catXzona?: Categoria[];
}

export class Zona implements ZonaInterface {
  "nombre": string;
  "sector": string;
  "id": any;
  "categoriaId": any;
  "ciudadId": any;
  establecimientosXzona: Establecimiento[];
  catXzona: Categoria[];
  constructor(data?: ZonaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Zona`.
   */
  public static getModelName() {
    return "Zona";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Zona for dynamic purposes.
  **/
  public static factory(data: ZonaInterface): Zona{
    return new Zona(data);
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
      name: 'Zona',
      plural: 'zonas',
      properties: {
        "nombre": {
          name: 'nombre',
          type: 'string'
        },
        "sector": {
          name: 'sector',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "categoriaId": {
          name: 'categoriaId',
          type: 'any'
        },
        "ciudadId": {
          name: 'ciudadId',
          type: 'any'
        },
      },
      relations: {
        establecimientosXzona: {
          name: 'establecimientosXzona',
          type: 'Establecimiento[]',
          model: 'Establecimiento'
        },
        catXzona: {
          name: 'catXzona',
          type: 'Categoria[]',
          model: 'Categoria'
        },
      }
    }
  }
}
