import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormControl, ReactiveFormsModule } from '@angular/forms'
import { GrowthJobName } from '@grow-towers/simulation'
import { DropdownModule } from 'primeng/dropdown'

const growthJobNames: GrowthJobName[] = ['Basil', 'Kale', 'Lettuce', 'Rocket', 'Strawberry']

@Component({
  selector: 'grow-towers-growth-job-filter',
  standalone: true,
  imports: [CommonModule, DropdownModule, ReactiveFormsModule],
  templateUrl: './growth-job-filter.component.html',
  styleUrls: ['./growth-job-filter.component.scss'],
})
export class GrowthJobFilterComponent {
  @Input() control!: FormControl<GrowthJobName | null>

  options = [
    { label: 'None', value: null },
    ...growthJobNames.map(label => ({ label, value: label })),
  ]
}
