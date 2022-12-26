import { PrimaryButtonComponent } from './common/components/primary-button/primary-button.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SigninPageComponent } from './signin-page/signin-page.component';
import { ComponentsPageComponent } from './components-page/components-page.component';
import { DocumentationModule } from './documentation/documentation.module';
import { SharedModule } from './common/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginPageComponent,
    SigninPageComponent,
    ComponentsPageComponent,
    PrimaryButtonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, DocumentationModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
