import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControlComponent } from './control/control.component';
import { ControlRemoteComponent } from './control-remote/control-remote.component';

const routes: Routes = [
  { path : 'drop', component : ControlComponent},
  { path : 'radio', component : ControlRemoteComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
