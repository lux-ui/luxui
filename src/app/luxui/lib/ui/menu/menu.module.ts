import { MenuItemModule } from './menu-item/menu-item.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, MenuItemModule],
  exports: [MenuComponent],
})
export class MenuModule {}
