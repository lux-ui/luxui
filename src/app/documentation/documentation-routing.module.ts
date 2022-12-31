import { IconButtonsPageComponent } from './elements/icon-buttons-page/icon-buttons-page.component';
import { ButtonsPageComponent } from './elements/pages/buttons-page/buttons-page.component';
import { LinksPageComponent } from './elements/pages/links-page/links-page.component';
import { TooltipPageComponent } from './ui/pages/tooltip-page/tooltip-page.component';
import { MenuPageComponent } from './ui/pages/menu-page/menu-page.component';
import { PaginationPageComponent } from './ui/pages/pagination-page/pagination-page.component';
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
      { path: 'ui/pagination', component: PaginationPageComponent },
      { path: 'ui/tooltip', component: TooltipPageComponent },
      { path: 'ui/menu', component: MenuPageComponent },
      { path: 'elements/links', component: LinksPageComponent },
      { path: 'elements/buttons', component: ButtonsPageComponent },
      { path: 'elements/icon-buttons', component: IconButtonsPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentationRoutingModule {}
