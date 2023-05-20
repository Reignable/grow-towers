import { Route } from '@angular/router'

export const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'towers' },
  {
    title: 'Tower Monitor',
    path: 'towers',
    loadChildren: () => import('@grow-towers/towers').then(m => m.towersRoutes),
  },
]
