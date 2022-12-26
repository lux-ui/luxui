import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RwdMenuComponent } from './components/navbar/rwd-menu/rwd-menu.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [NavbarComponent, RwdMenuComponent, FooterComponent],
  imports: [RouterModule],
  exports: [NavbarComponent],
})
export class SharedModule {}
