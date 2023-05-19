import { Route } from '@angular/router'

export const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'towers' },
  { path: 'towers', loadChildren: () => import('@grow-towers/towers').then(m => m.towersRoutes) },
  { path: 'towers/:towerNumber/slots', loadChildren: () => import('@grow-towers/slots').then(m => m.slotsRoutes) },
]
