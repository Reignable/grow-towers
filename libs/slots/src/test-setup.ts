// @ts-expect-error https://thymikee.github.io/jest-preset-angular/docs/getting-started/test-environment
import 'jest-preset-angular/setup-jest'
import '@testing-library/jest-dom'

globalThis.ngJest = {
  testEnvironmentOptions: {
    errorOnUnknownElements: true,
    errorOnUnknownProperties: true,
  },
}
