import { Routes } from '@angular/router';
import { ContentComponent } from './content.component';

export const contentRoutes: Routes = [
  {
    path: '',
    component: ContentComponent,
    children: [
      {
        path: 'form',
        loadChildren: () => import('@pages/ficha-cadastral/ficha-cadastral.routes').then((r) => r.fichaCadastralRoutes),
      },
      {
        path: '',
        loadChildren: () => import('@pages/termos/termos.routes').then((r) => r.termosRoutes),
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      },
    ]
  }
];
