import { DocumentationPageComponent } from './documentation-page/documentation-page.component';
import { DocumentationRoutingModule } from './documentation-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../common/shared.module';
import { PaginationComponent } from './ui/pages/pagination/pagination.component';
import { ButtonsComponent } from './elements/pages/buttons/buttons.component';
import { TooltipComponent } from './ui/pages/tooltip/tooltip.component';

@NgModule({
  declarations: [DocumentationPageComponent, PaginationComponent, ButtonsComponent, TooltipComponent],
  imports: [BrowserModule, DocumentationRoutingModule, SharedModule],
})
export class DocumentationModule {}
