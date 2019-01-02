import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomPipe } from './pipes/custom.pipe';
import { V8custompipesComponent } from './v8custompipes/v8custompipes.component';
import {FormsModule} from '@angular/forms';
import { C9prodComponent } from './c9prod/c9prod.component';
import { C10ratingComponent } from './c10rating/c10rating.component';
import { V12interfaceComponent } from './v12interface/v12interface.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomPipe,
    V8custompipesComponent,
    C9prodComponent,
    C10ratingComponent,
    V12interfaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
