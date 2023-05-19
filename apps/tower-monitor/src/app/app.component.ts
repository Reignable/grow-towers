import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import { RouterModule } from '@angular/router'
import { TowerService } from '@grow-towers/simulation'

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  providers: [TowerService],
  selector: 'grow-towers-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tower-monitor'

  towerData$ = inject(TowerService).towerData$
}
