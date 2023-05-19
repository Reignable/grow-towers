import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import { towerNumberRouteParam$ } from '../tower-number-route-param'
import { map, switchMap } from 'rxjs'
import { TowerService } from '@grow-towers/simulation'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'grow-towers-tower',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './tower.component.html',
  styleUrls: ['./tower.component.scss'],
})
export class TowerComponent {
  towerNumber$ = towerNumberRouteParam$()
  towerService = inject(TowerService)
  slots$ = this.towerNumber$.pipe(
    switchMap(towerNumber => this.towerService.getTower(towerNumber)),
    map(tower => tower?.slots)
  )
}
