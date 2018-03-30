import { Observable } from 'rxjs/Observable';
import { PlacesService } from './../../services/numbers.service';
import { Component } from '@angular/core';
import { MessageToastViewService } from '../../services/messagetoas.service';
import { cleanSession } from 'selenium-webdriver/safari';



@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlaceComponent {
  numbers: {};
  // tslint:disable-next-line:no-inferrable-types
  lat: number = 20.692809;
  // tslint:disable-next-line:no-inferrable-types
  lng: number = -103.3850617;
  btnDelete = false;

  // tslint:disable-next-line:max-line-length
  constructor(private placesService: PlacesService, private messageToastViewService: MessageToastViewService) {

    this.placesService.getPlaces().subscribe(
      result => {
        this.numbers = result;
       },
      error => {
         console.log(<any>error);
         this.messageToastViewService.showMessagError('Aviso', 'No se pudo consultar el listado de lugares.');
        }
    );

    if (localStorage.getItem('currentUser')) {
        this.btnDelete = true;
    }
  }
    deletePlace(place_id) {
    this.placesService.deletePlace(place_id).subscribe(
      result => {
        this.messageToastViewService.showMessageSuccess('Aviso', 'Lugar eliminado exitosamente.');

        this.placesService.getPlaces().subscribe(
          // tslint:disable-next-line:no-shadowed-variable
          result => {
            this.numbers = result;
            // tslint:disable-next-line:no-debugger
           },
          error => {
             console.log(<any>error);
             this.messageToastViewService.showMessagError('Aviso', 'No se pudo actualizar el listado de lugares.');
            }
        );

      },
      error => {
        console.log(<any>error);
        this.messageToastViewService.showMessagError('Aviso', 'No se pudo eliminar el lugar.');
      }
    );

  }
}
