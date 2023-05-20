import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import { RouterLink } from '@angular/router'
import { TowerService } from '@grow-towers/simulation'
import { towerNumberRouteParam$ } from '@grow-towers/utils'
import { MenuItem } from 'primeng/api'
import { TabMenuModule } from 'primeng/tabmenu'
import { Observable, map } from 'rxjs'

@Component({
  selector: 'grow-towers-towers',
  standalone: true,
  imports: [CommonModule, RouterLink, TabMenuModule],
  templateUrl: './towers.component.html',
  styleUrls: ['./towers.component.scss'],
})
export class TowersComponent {
  towers$ = inject(TowerService).getTowersSummary()

  towerNumberRouteParam$ = towerNumberRouteParam$()

  tabs$: Observable<MenuItem[]> = this.towers$.pipe(
    map(towers =>
      towers.map(({ number }) => ({
        label: `Tower ${number}`,
        routerLink: ['/', 'towers', number],
      })),
    ),
  )
}
