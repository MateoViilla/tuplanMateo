import { CategoriaApi } from '../../shared/sdk/services';
import { ZonaApi } from '../../shared/sdk/services';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CategoriaPage } from '../categoria/categoria';
import { BtnMagicoLugarPage } from '../boton-magico-lugar/btn_magico_lugar';
import { UsuarioApi } from '../../shared/sdk/services';
import { EstablecimientoApi } from '../../shared/sdk/services';
import { FilterProvider } from '../../providers/filter/filter';
import { LoopBackConfig } from '../../shared/sdk';
import { SitioPage } from '../sitio/sitio';


@Component({
  selector: 'page-boton-magico',
  templateUrl: 'btn_magico.html'
  
})

export class BtnMagicoPage {
    private listas: any;
    private zonas: any;

    categorias: any;  
    categoriaSeleccionada; 
    zonaSeleccionada;
    generoSeleccionado; 

    generos = [
        {
            nombre: 'Crossover'
        },
        {
            nombre: 'Urbano Electrónica'
        }
    ];


    constructor(public navCtrl: NavController, 
                private usuarioApi: UsuarioApi,
                private establecimientoApi: EstablecimientoApi,
                private filter: FilterProvider,
                private categoriaApi:CategoriaApi,
                private zonaApi: ZonaApi) {
        LoopBackConfig.setBaseURL('https://tuplan.herokuapp.com');
        LoopBackConfig.setApiVersion('api');

          categoriaApi.find().subscribe((categorias:any)=>{this.categorias=categorias;   
        });
          
         this.zonaApi.find().subscribe((zonas: any) => {this.zonas = zonas
         });
    
}
public toCategories(){
    console.log(this.generoSeleccionado);
    this.navCtrl.push(CategoriaPage);
}
 public toBtnMagicoLugar(){
    
    //this.navCtrl.push(BtnMagicoLugarPage);
}

  public setEstablecimientos(){
    this.establecimientoApi.find({ where: { categoriaId: this.categoriaSeleccionada, zonaId: this.zonaSeleccionada, music: 'Rock' } }).subscribe((sitios: any) => {
      this.listas = sitios
    });
    this.filter.setGenero(this.generoSeleccionado);
    this.filter.setCategoriaId(this.categoriaSeleccionada);
    this.filter.setZonaId(this.zonaSeleccionada);
    this.navCtrl.push(SitioPage);
}


public mostrar(){
    
    console.log(this.listas);
}

public selectCategory(categoria){
    
    console.log(categoria);
}


 

}