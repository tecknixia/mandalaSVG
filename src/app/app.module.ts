import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { InterfaceNavHomeComponent } from './components/interface-nav-home/interface-nav-home.component';
import { InterfaceDisplayComponent } from './components/interface-display/interface-display.component';
import { InterfaceNavEditLayerComponent } from './components/interface-nav-edit-layer/interface-nav-edit-layer.component';
import { DataService } from './services/data.service';
import { InterfaceNavComponent } from './components/interface-nav/interface-nav.component';
import { InterfaceNavDataComponent } from './components/interface-nav-data/interface-nav-data.component';

@NgModule({
  declarations: [
    AppComponent,
		routingComponents,
    InterfaceNavHomeComponent,
    InterfaceDisplayComponent,
    InterfaceNavEditLayerComponent,
    InterfaceNavComponent,
    InterfaceNavDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
