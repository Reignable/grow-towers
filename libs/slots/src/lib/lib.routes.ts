import { Route } from '@angular/router'
import { SlotsComponent } from './slots/slots.component'
import { SlotComponent } from './slot/slot.component'

export const slotsRoutes: Route[] = [
  {
    path: '',
    component: SlotsComponent,
  },
  { path: ':slotNumber', component: SlotComponent },
]
