import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PersonasService} from './services/personas.service';
import { HttpClientModule } from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [
    PersonasService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
