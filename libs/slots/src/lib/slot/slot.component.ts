import { Component, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { combineLatest, switchMap } from 'rxjs'
import { slotNumberRouteParam$, towerNumberRouteParam$ } from '@grow-towers/utils'
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
    switchMap(([towerNumber, slotNumber]) => this.towerService.getSlot(towerNumber, slotNumber)),
  )
}
