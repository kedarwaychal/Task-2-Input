import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControlComponent } from './control/control.component';
import { FormsModule } from '@angular/forms';
import { ControlRemoteComponent } from './control-remote/control-remote.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlComponent,
    ControlRemoteComponent,
    
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
