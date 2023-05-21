import { render, screen } from '@testing-library/angular'
import { SlotCardComponent } from './slot-card.component'

describe(SlotCardComponent, () => {
  it('Shows information about the given slot', async () => {
    const growthTrayIdentifier = 'IDENTIFIER'
    const growthJobName = 'Strawberry'
    const growthJobProgressPercentage = 42
    await render(SlotCardComponent, {
      componentInputs: {
        growthJobName,
        growthJobProgressPercentage,
        growthTrayIdentifier,
      },
    })
    expect(screen.getByRole('listitem').textContent).toMatchInlineSnapshot(
      '" IDENTIFIER  Strawberry 42%"',
    )
  })

  it('Displays information when no growth tray is present', async () => {
    await render(SlotCardComponent)
    expect(screen.getByRole('listitem').textContent).toMatchInlineSnapshot('" Empty slot "')
  })

  it('Displays information when no growth job is present', async () => {
    await render(SlotCardComponent, {
      componentInputs: {
        growthTrayIdentifier: 'IDENTIFIER',
      },
    })
    expect(screen.getByRole('listitem').textContent).toMatchInlineSnapshot(
      '" IDENTIFIER  No current growth job "',
    )
  })
})
