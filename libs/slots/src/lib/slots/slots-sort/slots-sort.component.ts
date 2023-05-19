import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SelectButtonModule } from 'primeng/selectbutton'
import { FormControl, ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'grow-towers-slots-sort',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SelectButtonModule],
  templateUrl: './slots-sort.component.html',
  styleUrls: ['./slots-sort.component.scss'],
})
export class SlotsSortComponent {
  @Input() control!: FormControl<string>
}
