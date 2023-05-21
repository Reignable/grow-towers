import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SelectButtonModule } from 'primeng/selectbutton'
import { FormControl, ReactiveFormsModule } from '@angular/forms'
import { SlotSortValue } from '../slot-sort-value'

const options = [
  { label: 'Number', value: SlotSortValue.NUMBER },
  { label: 'Growth Job', value: SlotSortValue.GROWTH_JOB_NAME },
  { label: 'Progress', value: SlotSortValue.GROWTH_JOB_PROGRESS },
]

@Component({
  selector: 'grow-towers-slots-sort',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SelectButtonModule],
  templateUrl: './slots-sort.component.html',
  styleUrls: ['./slots-sort.component.scss'],
})
export class SlotsSortComponent {
  @Input() control!: FormControl<SlotSortValue>

  options = options
}
