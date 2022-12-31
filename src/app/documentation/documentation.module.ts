import { MenuItemModule } from './../luxui/lib/ui/menu/menu-item/menu-item.module';
import { MenuModule } from './../luxui/lib/ui/menu/menu.module';
import { RouterModule } from '@angular/router';
import { PaginationModule } from './../luxui/lib/ui/pagination/pagination.module';
import { TypographyComponent } from './settings/pages/typography/typography.component';
import { SpacingComponent } from './settings/pages/spacing/spacing.component';
import { ColorsComponent } from './settings/pages/colors/colors.component';
import { CommonModule } from '@angular/common';
import { DocumentationPageComponent } from './documentation-page/documentation-page.component';
import { DocumentationRoutingModule } from './documentation-routing.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '../common/shared.module';
import { PaginationPageComponent } from './ui/pages/pagination-page/pagination-page.component';
import { MenuPageComponent } from './ui/pages/menu-page/menu-page.component';
import { TooltipPageComponent } from './ui/pages/tooltip-page/tooltip-page.component';
import { ButtonsPageComponent } from './elements/pages/buttons-page/buttons-page.component';
import { LinksPageComponent } from './elements/pages/links-page/links-page.component';
import { IconButtonsPageComponent } from './elements/pages/icon-buttons-page/icon-buttons-page.component';

@NgModule({
  declarations: [
    DocumentationPageComponent,
    ColorsComponent,
    SpacingComponent,
    TypographyComponent,
    PaginationPageComponent,
    MenuPageComponent,
    TooltipPageComponent,
    ButtonsPageComponent,
    LinksPageComponent,
    IconButtonsPageComponent,
  ],
  imports: [
    DocumentationRoutingModule,
    SharedModule,
    CommonModule,
    PaginationModule,
    MenuModule,
    RouterModule,
    MenuItemModule,
  ],
})
export class DocumentationModule {}
