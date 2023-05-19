import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import { RouterLink } from '@angular/router'
import { Slot, TowerService } from '@grow-towers/simulation'
import { towerNumberRouteParam$ } from '@grow-towers/towers'
import { CardModule } from 'primeng/card'
import { map, switchMap } from 'rxjs'
import { SlotCardComponent } from '../slot-card/slot-card.component'

@Component({
  selector: 'grow-towers-slots',
  standalone: true,
  imports: [CardModule, CommonModule, RouterLink, SlotCardComponent],
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.scss'],
})
export class SlotsComponent {
  towerNumber$ = towerNumberRouteParam$()

  towerService = inject(TowerService)

  slots$ = this.towerNumber$.pipe(
    switchMap(towerNumber => this.towerService.getTower(towerNumber)),
    map(tower => tower?.slots),
  )

  trackBy(index: number, slot: Slot): number {
    return slot.number
  }
}
