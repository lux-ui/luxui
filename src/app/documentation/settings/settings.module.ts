import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpacingComponent } from './pages/spacing/spacing.component';
import { ColorsComponent } from './pages/colors/colors.component';
import { TypographyComponent } from './pages/typography/typography.component';



@NgModule({
  declarations: [
    SpacingComponent,
    ColorsComponent,
    TypographyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SettingsModule { }
