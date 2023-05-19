import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { Slot } from '@grow-towers/simulation'
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
  @Input() slot!: Slot
}
