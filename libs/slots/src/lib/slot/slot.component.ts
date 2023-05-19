import { Component, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ActivatedRoute } from '@angular/router'
import { map } from 'rxjs'
import { towerNumberRouteParam$ } from '@grow-towers/towers'
import { slotNumberRouteParam$ } from '../slot-number-route-param'

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
}
