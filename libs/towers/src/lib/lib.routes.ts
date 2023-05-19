import { Route } from '@angular/router'
import { TowersComponent } from './towers/towers.component'
import { TowerComponent } from './tower/tower.component'

export const towersRoutes: Route[] = [
  { path: '', component: TowersComponent },
  { path: ':towerNumber', component: TowerComponent },
]
