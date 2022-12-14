import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [RouterModule],
  exports: [NavbarComponent],
})
export class SharedModule {}
