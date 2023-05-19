import { Component, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TowerService } from '@grow-towers/simulation'
import { map } from 'rxjs'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'grow-towers-towers',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './towers.component.html',
  styleUrls: ['./towers.component.scss'],
})
export class TowersComponent {
  towers$ = inject(TowerService).getTowersSummary()
}
