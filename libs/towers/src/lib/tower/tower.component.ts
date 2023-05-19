import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { SlotsComponent } from '@grow-towers/slots'
import { towerNumberRouteParam$ } from '@grow-towers/utils'

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
