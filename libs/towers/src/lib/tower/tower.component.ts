import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { SlotsComponent } from '@grow-towers/slots'
import { towerNumberRouteParam$ } from '@grow-towers/utils'
import { tap } from 'rxjs'

@Component({
  selector: 'grow-towers-tower',
  standalone: true,
  imports: [CommonModule, SlotsComponent],
  templateUrl: './tower.component.html',
  styleUrls: ['./tower.component.scss'],
})
export class TowerComponent {
  titleService = inject(Title)

  towerNumber$ = towerNumberRouteParam$().pipe(
    tap(towerNumber => this.titleService.setTitle(`Tower ${towerNumber} - Tower Monitor`)),
  )
}
