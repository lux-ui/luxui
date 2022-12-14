import { DocumentationPageComponent } from './documentation-page/documentation-page.component';
import { DocumentationRoutingModule } from './documentation-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../common/shared.module';

@NgModule({
  declarations: [DocumentationPageComponent],
  imports: [BrowserModule, DocumentationRoutingModule, SharedModule],
})
export class DocumentationModule {}
