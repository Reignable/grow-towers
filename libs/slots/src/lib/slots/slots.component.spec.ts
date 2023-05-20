import { StaticDataFactory, TowerService } from '@grow-towers/simulation'
import { render, screen, waitFor } from '@testing-library/angular'
import { of } from 'rxjs'
import { SlotsComponent } from './slots.component'

const towerData = new StaticDataFactory().build()
const tower = towerData[0]

const renderSlotsComponent = () =>
  render(SlotsComponent, {
    providers: [
      {
        provide: TowerService,
        useValue: { towerData$: of(towerData), getTower: () => of(tower) },
      },
    ],
  })

describe(SlotsComponent, () => {
  it('Displays all slots for the given tower', async () => {
    await renderSlotsComponent()
    for (const slot of tower.slots) {
      if (!slot.growthTray?.identifier) break
      expect(screen.getByText(slot.growthTray.identifier)).toBeInTheDocument()
    }
  })

  it('Can filter slots by grow job type', async () => {
    const { fixture } = await renderSlotsComponent()
    fixture.componentInstance.growthJobNameFilter.setValue('Basil')
    await waitFor(() => expect(screen.getAllByRole('listitem')).toHaveLength(3))
  })

  it.each`
    sortType      | sortValue
    ${'number'}   | ${'number'}
    ${'job type'} | ${'growthTray.growthJob.name'}
    ${'progress'} | ${'growthTray.growthJob.progressPercentage'}
  `('Can sort jobs by $sortType', async ({ sortValue }) => {
    const { detectChanges, fixture } = await renderSlotsComponent()
    fixture.componentInstance.slotSort.setValue(sortValue)
    detectChanges()
    expect(screen.getAllByRole('listitem').map(({ textContent }) => textContent)).toMatchSnapshot()
  })
})
