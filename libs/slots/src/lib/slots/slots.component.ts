import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import { RouterLink } from '@angular/router'
import { GrowthJobName, Slot, TowerService } from '@grow-towers/simulation'
import { towerNumberRouteParam$ } from '@grow-towers/towers'
import { CardModule } from 'primeng/card'
import { combineLatest, map, startWith, switchMap } from 'rxjs'
import { FormControl } from '@angular/forms'
import { SlotCardComponent } from '../slot-card/slot-card.component'
import { GrowthJobFilterComponent } from './growth-job-filter/growth-job-filter.component'

@Component({
  selector: 'grow-towers-slots',
  standalone: true,
  imports: [CardModule, CommonModule, GrowthJobFilterComponent, RouterLink, SlotCardComponent],
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.scss'],
})
export class SlotsComponent {
  towerNumber$ = towerNumberRouteParam$()

  towerService = inject(TowerService)

  growthJobNameFilter = new FormControl<GrowthJobName | null>(null)

  slots$ = this.towerNumber$.pipe(
    switchMap(towerNumber => this.towerService.getTower(towerNumber)),
    map(tower => tower?.slots),
  )

  filteredSlots$ = combineLatest([
    this.slots$,
    this.growthJobNameFilter.valueChanges.pipe(startWith(null)),
  ]).pipe(
    map(([slots, growthJobNameFilter]) => {
      if (!growthJobNameFilter) return slots
      return slots?.filter(slot => slot.growthTray?.growthJob?.name === growthJobNameFilter)
    }),
  )

  trackBy(index: number, slot: Slot): number {
    return slot.number
  }
}
