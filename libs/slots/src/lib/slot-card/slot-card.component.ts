import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { GrowthJob, GrowthTray } from '@grow-towers/simulation'
import { CardModule } from 'primeng/card'
import { ProgressBarModule } from 'primeng/progressbar'

@Component({
  selector: 'grow-towers-slot-card',
  standalone: true,
  imports: [CardModule, CommonModule, ProgressBarModule],
  templateUrl: './slot-card.component.html',
  styleUrls: ['./slot-card.component.scss'],
})
export class SlotCardComponent {
  @Input() growthTrayIdentifier?: GrowthTray['identifier']

  @Input() growthJobName?: GrowthJob['name']

  @Input() growthJobProgressPercentage?: GrowthJob['progressPercentage']

  get header(): string {
    if (!this.growthTrayIdentifier) return 'Empty slot'
    return this.growthTrayIdentifier
  }

  get subheader(): string {
    if (!this.growthTrayIdentifier) return ''
    return this.growthJobName ?? 'No current growth job'
  }
}
