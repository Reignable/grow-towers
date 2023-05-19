import { inject } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { map } from 'rxjs'

export const slotNumberRouteParam$ = () =>
  inject(ActivatedRoute).params.pipe(map(({ slotNumber }) => parseInt(slotNumber, 10)))
