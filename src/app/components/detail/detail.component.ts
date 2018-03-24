import { MessageToastViewService } from './../../services/messagetoas.service';
import { PlacesService } from './../../services/numbers.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

  id = null;
  numbers = null;
  dataView: any = {};

  // tslint:disable-next-line:max-line-length
  constructor(private route: ActivatedRoute, private placesService: PlacesService, private messageToastViewService: MessageToastViewService) {
    //  console.log(this.route.snapshot.queryParams);
    //  console.log(this.route.snapshot.queryParams['action']);
    // tslint:disable-next-line:radix
    this.id = parseInt(this.route.snapshot.params['id']);
    this.placesService.findPlace(this.id).subscribe(
      result => {
        this.dataView = result;
      },
      error => {
        console.log(<any>error);
        this.messageToastViewService.showMessagError('Aviso', 'No se pudo obtener el detalle del lugar.');
      }
    );


  }

}

