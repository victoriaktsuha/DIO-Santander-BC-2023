import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portifolio/card/card.component';
//  Routes = type | RouterModule = class

const routes: Routes = [
  {
    path: '',
    component: TitleComponent,
    pathMatch: 'full',
    // pathMatch: 'full' = url exata / 'prefix' = url deve conter partes desse path para exibir o componente
  },
  // portifolio - parent
  // portifolio/{1} - children
  // portifolio/{1/abc} - children
  {
    path: 'portifolio',
    component: CardComponent,
    children: [
      {
        // tudo que for passado depois de 'portifolio/' estará dentro da variável ':id"
        path: ':id',
        component: CardComponent,
      },
      {
        path: ':id/:token',
        component: CardComponent,
      },
    ],
  },
  // redirecionamento de paths não existentes
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
