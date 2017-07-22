/* tslint:disable */
import {
  Zona
} from '../index';

declare var Object: any;
export interface CiudadInterface {
  "nombre": string;
  "pais"?: string;
  "id"?: any;
  zonasXciudad?: Zona[];
}

export class Ciudad implements CiudadInterface {
  "nombre": string;
  "pais": string;
  "id": any;
  zonasXciudad: Zona[];
  constructor(data?: CiudadInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Ciudad`.
   */
  public static getModelName() {
    return "Ciudad";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Ciudad for dynamic purposes.
  **/
  public static factory(data: CiudadInterface): Ciudad{
    return new Ciudad(data);
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
      name: 'Ciudad',
      plural: 'Ciudads',
      properties: {
        "nombre": {
          name: 'nombre',
          type: 'string'
        },
        "pais": {
          name: 'pais',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
        zonasXciudad: {
          name: 'zonasXciudad',
          type: 'Zona[]',
          model: 'Zona'
        },
      }
    }
  }
}
