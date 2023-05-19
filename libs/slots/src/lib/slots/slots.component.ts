import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import { RouterLink } from '@angular/router'
import { GrowthJobName, Slot, TowerService } from '@grow-towers/simulation'
import { towerNumberRouteParam$ } from '@grow-towers/towers'
import { CardModule } from 'primeng/card'
import { combineLatest, map, startWith, switchMap } from 'rxjs'
import { FormControl } from '@angular/forms'
import { orderBy, sortBy } from 'lodash'
import { SlotCardComponent } from '../slot-card/slot-card.component'
import { GrowthJobFilterComponent } from './growth-job-filter/growth-job-filter.component'
import { SlotsSortComponent } from './slots-sort/slots-sort.component'

@Component({
  selector: 'grow-towers-slots',
  standalone: true,
  imports: [
    CardModule,
    CommonModule,
    GrowthJobFilterComponent,
    RouterLink,
    SlotCardComponent,
    SlotsSortComponent,
  ],
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.scss'],
})
export class SlotsComponent {
  towerNumber$ = towerNumberRouteParam$()

  towerService = inject(TowerService)

  growthJobNameFilter = new FormControl<GrowthJobName | null>(null)

  slotSort = new FormControl<string>('number', { nonNullable: true })

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

  sortedSlots$ = combineLatest([
    this.filteredSlots$,
    this.slotSort.valueChanges.pipe(startWith('number')),
  ]).pipe(
    map(([slots, slotSort]) => {
      if (!slotSort) return slots
      if (slotSort === 'number' || slotSort === 'growthTray.growthJob.name') {
        return sortBy(slots, slotSort)
      }
      return orderBy(slots, slotSort, 'desc')
    }),
  )

  trackBy(index: number, slot: Slot): number {
    return slot.number
  }
}
