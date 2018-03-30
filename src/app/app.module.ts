import { RequestService } from './services/request.service';
import { LoginComponent } from './components/login/login.component';
import { AuthguardService } from './services/authguard.service';
import { EditPlaceComponent } from './components/edit_place/edit_place.component';
import { MessageToastViewService } from './services/messagetoas.service';
import { CreatePlaceComponent } from './components/create_place/create_place.component';
import { ApiService } from './services/api.service';


import { DetailComponent } from './components/detail/detail.component';
import { OpacityClicksDirective } from './directive/opacity.directive';
import { HighlightDirective } from './directive/highlight.directive';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { CounterClicksDirective } from './directive/counter-click.directive';
import { Routes, RouterModule } from '@angular/router';
import { PlaceComponent } from './components/places/places.component';
// tslint:disable-next-line:quotemark
import {ContactComponent} from "./components/contact/contact.component";
import { PlacesService } from './services/numbers.service';
import { HttpClientModule } from '@angular/common/http';
// alerts
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SessionService } from './services/session.service';
import { CocheComponent } from './components/coches/coche.component';



const appRoutes = [
  {path: '', component: PlaceComponent},
  {path: 'lugares', component: PlaceComponent},
  {path: 'coche', component: CocheComponent},
  {path: 'detalle/:id', component: DetailComponent},
  {path: 'contacto', component: ContactComponent},
  {path: 'login', component: LoginComponent},
  {path: 'crear-lugar', component: CreatePlaceComponent, canActivate: [AuthguardService]},
  {path: 'lugar/:id/editar', component: EditPlaceComponent , canActivate: [AuthguardService]},
  { path: '**', redirectTo: 'lugares' }
];
@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    CounterClicksDirective,
    OpacityClicksDirective,
    DetailComponent,
    PlaceComponent,
    ContactComponent,
    CreatePlaceComponent,
    EditPlaceComponent,
    LoginComponent,
    CocheComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCWQHwakl_eDVntl-nuaoFYIAhVZahYrDs'
    }),
    RouterModule.forRoot(appRoutes), // Permite controlar las rutas asignadas
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 1990,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      closeButton: true,
      tapToDismiss: true
    }), // ToastrModule added
  ],
  providers: [
    PlacesService,
    ApiService,
    MessageToastViewService,
    AuthguardService,
    SessionService,
    RequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
