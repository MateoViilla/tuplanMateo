/* tslint:disable */

declare var Object: any;
export interface ReservaInterface {
  "hora"?: string;
  "id"?: any;
  "usuarioId"?: any;
  "establecimientoId"?: any;
}

export class Reserva implements ReservaInterface {
  "hora": string;
  "id": any;
  "usuarioId": any;
  "establecimientoId": any;
  constructor(data?: ReservaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Reserva`.
   */
  public static getModelName() {
    return "Reserva";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Reserva for dynamic purposes.
  **/
  public static factory(data: ReservaInterface): Reserva{
    return new Reserva(data);
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
      name: 'Reserva',
      plural: 'Reservas',
      properties: {
        "hora": {
          name: 'hora',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "usuarioId": {
          name: 'usuarioId',
          type: 'any'
        },
        "establecimientoId": {
          name: 'establecimientoId',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
