import { MessageToastViewService } from './../../services/messagetoas.service';
import { PlacesService } from './../../services/numbers.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-create-place',
  templateUrl: './create_place.component.html',
  styleUrls: ['./create_place.component.css']
})
export class CreatePlaceComponent {

  place;

  // tslint:disable-next-line:max-line-length
  constructor( private placesService: PlacesService, private router: Router, public messageToastViewService: MessageToastViewService) {
      this.place = {
        'name': '',
        'near': '1',
        'distancy': '',
        'description': '',
        'pay': 'gratuito',
        'active': 'true'
      };
  }
  createPlace() {
    // tslint:disable-next-line:quotemark
    if (this.place.name !== "" && this.place.name !== null && this.place.near !== "" && this.place.near !== null
    // tslint:disable-next-line:quotemark
    && this.place.distancy !== "" && this.place.distancy !== null  && this.place.description !== "" && this.place.description !== null
        // tslint:disable-next-line:quotemark
    && this.place.pay !== "" && this.place.pay !== null  && this.place.active !== "" && this.place.active !== null
  ) {

    this.placesService.savePlace(this.place).subscribe(
      result => {
        this.messageToastViewService.showMessageSuccess('Aviso', 'Lugar creado exitosamente, espere un momento lo estamos redirigiendo.');
        setTimeout(() => {
          this.router.navigate(['/lugares']);
        }, 2000);

      },
      error => {
        console.log(<any>error);
        this.messageToastViewService.showMessagError('Aviso', 'No se pudo crear el lugar.');
      }
    );

    } else {
      this.messageToastViewService.showMessageWarning('Aviso', 'Completa todos los campos.');
    }

  }

}


