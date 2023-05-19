import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import { FormControl } from '@angular/forms'
import { RouterLink } from '@angular/router'
import { GrowthJobName, Slot, TowerService } from '@grow-towers/simulation'
import { towerNumberRouteParam$ } from '@grow-towers/utils'
import { orderBy } from 'lodash'
import { CardModule } from 'primeng/card'
import { combineLatest, map, startWith, switchMap } from 'rxjs'
import { SlotCardComponent } from '../slot-card/slot-card.component'
import { GrowthJobFilterComponent } from './growth-job-filter/growth-job-filter.component'
import { SlotsSortComponent } from './slots-sort/slots-sort.component'

const trackBySlotNumber = (index: number, slot: Slot): number => slot.number

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
  trackBySlotNumber = trackBySlotNumber

  towerNumber$ = towerNumberRouteParam$()

  towerService = inject(TowerService)

  slots$ = this.towerNumber$.pipe(
    switchMap(towerNumber => this.towerService.getTower(towerNumber)),
    map(tower => tower?.slots),
  )

  growthJobNameFilter = new FormControl<GrowthJobName | null>(null)

  filteredSlots$ = combineLatest([
    this.slots$,
    this.growthJobNameFilter.valueChanges.pipe(startWith(null)),
  ]).pipe(
    map(([slots, growthJobNameFilter]) => {
      if (!growthJobNameFilter) return slots
      return slots?.filter(slot => slot.growthTray?.growthJob?.name === growthJobNameFilter)
    }),
  )

  slotSort = new FormControl<string>('number', { nonNullable: true })

  sortedSlots$ = combineLatest([
    this.filteredSlots$,
    this.slotSort.valueChanges.pipe(startWith('number')),
  ]).pipe(
    map(([slots, slotSort]) => {
      if (!slotSort) return slots
      return orderBy(slots, slotSort, slotSort.includes('Percentage') ? 'desc' : 'asc')
    }),
  )
}
