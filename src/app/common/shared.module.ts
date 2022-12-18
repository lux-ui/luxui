import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RwdMenuComponent } from './components/navbar/rwd-menu/rwd-menu.component';

@NgModule({
  declarations: [NavbarComponent, RwdMenuComponent],
  imports: [RouterModule],
  exports: [NavbarComponent],
})
export class SharedModule {}
