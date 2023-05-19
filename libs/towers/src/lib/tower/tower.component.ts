import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { SlotsComponent } from '@grow-towers/slots'
import { towerNumberRouteParam$ } from '../tower-number-route-param'

@Component({
  selector: 'grow-towers-tower',
  standalone: true,
  imports: [CommonModule, SlotsComponent],
  templateUrl: './tower.component.html',
  styleUrls: ['./tower.component.scss'],
})
export class TowerComponent {
  towerNumber$ = towerNumberRouteParam$()
}
