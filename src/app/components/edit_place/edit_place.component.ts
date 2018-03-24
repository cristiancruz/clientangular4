import { MessageToastViewService } from './../../services/messagetoas.service';
import { PlacesService } from './../../services/numbers.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-place',
  templateUrl: './edit_place.component.html',
  styleUrls: ['./edit_place.component.css']
})
export class EditPlaceComponent {

  place = {
    'name': '',
    'near': '1',
    'distancy': '',
    'description': '',
    'pay': 'gratuito',
    'active': 'true'
  };
  id = null;

  // tslint:disable-next-line:max-line-length
  constructor( private placesService: PlacesService, private router: Router, public messageToastViewService: MessageToastViewService, private route: ActivatedRoute) {
    // tslint:disable-next-line:radix
    this.id = parseInt(this.route.snapshot.params['id']);
    this.placesService.findPlace(this.id).subscribe(
      result => {
        this.place = result;
      },
      error => {
        console.log(<any>error);
        messageToastViewService.showMessagError('Aviso', 'No se pudo obtener la informacion del lugar.');
      }
    );

  }
  updatePlace() {
        // tslint:disable-next-line:quotemark
        if (this.place.name !== "" && this.place.name !== null && this.place.near !== "" && this.place.near !== null
        // tslint:disable-next-line:quotemark
        && this.place.distancy !== "" && this.place.distancy !== null  && this.place.description !== "" && this.place.description !== null
            // tslint:disable-next-line:quotemark
        && this.place.pay !== "" && this.place.pay !== null  && this.place.active !== "" && this.place.active !== null
      ) {
        this.placesService.updatePlace(this.place).subscribe(
          result => {
            // tslint:disable-next-line:max-line-length
            this.messageToastViewService.showMessageSuccess('Aviso', 'Lugar actualizado exitosamente, espere un momento lo estamos redirigiendo.');
            setTimeout(() => {
              this.router.navigate(['/lugares']);
            }, 2000);

          },
          error => {
            console.log(<any>error);
            this.messageToastViewService.showMessagError('Aviso', 'No se pudo actualizar el lugar.');
          }
        );

        } else {
          this.messageToastViewService.showMessageWarning('Aviso', 'Completa todos los campos.');
        }
  }

}


