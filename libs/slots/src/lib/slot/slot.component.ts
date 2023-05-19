import { Component, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { combineLatest, map, switchMap } from 'rxjs'
import { towerNumberRouteParam$ } from '@grow-towers/towers'
import { slotNumberRouteParam$ } from '../slot-number-route-param'
import { TowerService } from '@grow-towers/simulation'

@Component({
  selector: 'grow-towers-slot',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.scss'],
})
export class SlotComponent {
  towerNumber$ = towerNumberRouteParam$()
  slotNumber$ = slotNumberRouteParam$()
  towerService = inject(TowerService)
  slot$ = combineLatest([this.towerNumber$, this.slotNumber$]).pipe(
    switchMap(([towerNumber, slotNumber]) => this.towerService.getSlot(towerNumber, slotNumber))
  )
}
