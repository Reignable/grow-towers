import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { towerNumberRouteParam$ } from '../tower-number-route-param'

@Component({
  selector: 'grow-towers-tower',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tower.component.html',
  styleUrls: ['./tower.component.scss'],
})
export class TowerComponent {
  towerNumber$ = towerNumberRouteParam$()
}
