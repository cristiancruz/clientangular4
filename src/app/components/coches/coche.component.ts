import { RequestService } from './../../services/request.service';
import { Component } from '@angular/core';
import { Coche } from './coche';

@Component({
  selector: 'app-coches',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.css']
})
export class CocheComponent {
  public coche: Coche;
  public coches: Array<Coche>;
  public articulos: any;

  constructor(private _peticionesService: RequestService) {
    this.coche = new Coche('', '', '');
    this.coches = [
      new Coche('Mazda', '100', 'Rojo'),
      new Coche('Tida', '333', 'Blanco'),
      new Coche('Versa', '398', 'Gris')
    ];
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {

  this._peticionesService.getArticulos().subscribe(
    result => {
      this.articulos = result;
      console.log(result);
    },
    error => {
      console.log(error);
    }
  );
  }

  enviarDatos() {
    this.coches.push(this.coche);
    this.coche = new Coche('', '', '');
  }

}


