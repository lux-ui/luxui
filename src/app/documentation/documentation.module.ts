import { TypographyComponent } from './settings/pages/typography/typography.component';
import { SpacingComponent } from './settings/pages/spacing/spacing.component';
import { ColorsComponent } from './settings/pages/colors/colors.component';
import { CommonModule } from '@angular/common';
import { DocumentationPageComponent } from './documentation-page/documentation-page.component';
import { DocumentationRoutingModule } from './documentation-routing.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '../common/shared.module';
import { PaginationComponent } from './ui/pages/pagination/pagination.component';
import { ButtonsComponent } from './elements/pages/buttons/buttons.component';
import { TooltipComponent } from './ui/pages/tooltip/tooltip.component';

@NgModule({
  declarations: [
    DocumentationPageComponent,
    PaginationComponent,
    ButtonsComponent,
    TooltipComponent,
    ColorsComponent,
    SpacingComponent,
    TypographyComponent,
  ],
  imports: [DocumentationRoutingModule, SharedModule, CommonModule],
})
export class DocumentationModule {}
