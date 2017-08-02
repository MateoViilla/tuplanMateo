/* tslint:disable */
import {
  Reserva
} from '../index';

declare var Object: any;
export interface UsuarioInterface {
  "email"?: any;
  "telefono": string;
  "birthDate": string;
  "code"?: string;
  "realm"?: string;
  "username"?: string;
  "emailVerified"?: boolean;
  "id"?: any;
  "password"?: string;
  accessTokens?: any[];
  reservasXusuario?: Reserva[];
}

export class Usuario implements UsuarioInterface {
  "email": any;
  "telefono": string;
  "birthDate": string;
  "code": string;
  "realm": string;
  "username": string;
  "emailVerified": boolean;
  "id": any;
  "password": string;
  accessTokens: any[];
  reservasXusuario: Reserva[];
  constructor(data?: UsuarioInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Usuario`.
   */
  public static getModelName() {
    return "Usuario";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Usuario for dynamic purposes.
  **/
  public static factory(data: UsuarioInterface): Usuario{
    return new Usuario(data);
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
      name: 'Usuario',
      plural: 'usuarios',
      properties: {
        "email": {
          name: 'email',
          type: 'any'
        },
        "telefono": {
          name: 'telefono',
          type: 'string'
        },
        "birthDate": {
          name: 'birthDate',
          type: 'string'
        },
        "code": {
          name: 'code',
          type: 'string'
        },
        "realm": {
          name: 'realm',
          type: 'string'
        },
        "username": {
          name: 'username',
          type: 'string'
        },
        "emailVerified": {
          name: 'emailVerified',
          type: 'boolean'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "password": {
          name: 'password',
          type: 'string'
        },
      },
      relations: {
        accessTokens: {
          name: 'accessTokens',
          type: 'any[]',
          model: ''
        },
        reservasXusuario: {
          name: 'reservasXusuario',
          type: 'Reserva[]',
          model: 'Reserva'
        },
      }
    }
  }
}
