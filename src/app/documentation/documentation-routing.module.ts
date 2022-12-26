import { ButtonsComponent } from './elements/pages/buttons/buttons.component';
import { TooltipComponent } from './ui/pages/tooltip/tooltip.component';
import { PaginationComponent } from './ui/pages/pagination/pagination.component';
import { TypographyComponent } from './settings/pages/typography/typography.component';
import { SpacingComponent } from './settings/pages/spacing/spacing.component';
import { ColorsComponent } from './settings/pages/colors/colors.component';
import { DocumentationPageComponent } from './documentation-page/documentation-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DocumentationPageComponent,
    children: [
      { path: 'settings/colors', component: ColorsComponent },
      { path: 'settings/spacing', component: SpacingComponent },
      { path: 'settings/typography', component: TypographyComponent },
      { path: 'ui/pagination', component: PaginationComponent },
      { path: 'ui/tooltip', component: TooltipComponent },
      { path: 'elements/buttons', component: ButtonsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentationRoutingModule {}
