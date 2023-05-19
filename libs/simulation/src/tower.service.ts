import { interval, map, Observable } from 'rxjs'
import { StaticDataFactory } from './static-data-factory'
import { Tower } from './tower'
import { TowerProgressSimulator } from './tower-progress-simulator'
import { Slot } from './slot'

export class TowerService {
  public towerData$: Observable<Tower[]>

  constructor() {
    let factory = new StaticDataFactory()
    let towers = factory.build()
    const simulator = new TowerProgressSimulator()

    this.towerData$ = interval(1000).pipe(
      map(() => {
        const newTowers = simulator.incrementProgress(towers)
        towers = newTowers

        return newTowers
      })
    )
  }

  getTowersSummary() {
    return this.towerData$.pipe(map(towers => towers.map(({ number }) => ({ number }))))
  }

  getTower(towerNumber: Tower['number']) {
    return this.towerData$.pipe(map(towers => towers.find(tower => tower.number === towerNumber)))
  }

  getSlot(towerNumber: Tower['number'], slotNumber: Slot['number']) {
    return this.getTower(towerNumber).pipe(map(tower => tower?.slots.find(slot => slot.number === slotNumber)))
  }
}
