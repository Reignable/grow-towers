import { inject } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { map } from 'rxjs'

export const towerNumberRouteParam$ = () =>
  inject(ActivatedRoute).params.pipe(map(({ towerNumber }) => parseInt(towerNumber, 10)))
