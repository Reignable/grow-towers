import { GrowthJob, GrowthTray, Slot } from '@grow-towers/simulation'
import { render, screen } from '@testing-library/angular'
import { SlotCardComponent } from './slot-card.component'

describe(SlotCardComponent, () => {
  it('Shows information about the given slot', async () => {
    const identifier = 'IDENTIFIER'
    const name = 'Strawberry'
    const progress = 42
    const slot = new Slot(1, new GrowthTray(identifier, new GrowthJob(name, progress)))
    await render(SlotCardComponent, {
      componentInputs: {
        slot,
      },
    })
    expect(screen.getByText(identifier)).toBeInTheDocument()
    expect(screen.getByText(name)).toBeInTheDocument()
    expect(screen.getByText(`${progress}%`)).toBeInTheDocument()
  })
})
