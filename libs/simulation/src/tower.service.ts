import { BehaviorSubject, interval, map, Observable } from "rxjs";
import { StaticDataFactory } from "./static-data-factory";
import { Tower } from "./tower";
import { TowerProgressSimulator } from "./tower-progress-simulator";

export class TowerService {
  public towerData$: Observable<Tower[]>;

  constructor() {
    let factory = new StaticDataFactory();
    let towers = factory.build();
    const simulator = new TowerProgressSimulator();
    
    this.towerData$ = interval(1000).pipe(
      map(() => {
        const newTowers = simulator.incrementProgress(towers);
        towers = newTowers;

        return newTowers;
      }));
  }
}

