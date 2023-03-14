import '@testing-library/jest-dom'
// Need for proper typing
import '@testing-library/jest-dom/extend-expect'
// Need for fetching polyfill during testing
import 'cross-fetch/polyfill'

import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// Using an utilty for rendering with Redux Provider
import { renderWithProviders } from 'utils'

import { Home } from './Home'
import defaultLangTranslations from 'i18n/translations/en.json'

const t = defaultLangTranslations

/*
  We do not need a router and a helmet during testing this component,
  so mocking them with empty components.
*/
jest.mock('components', () => ({
  ...jest.requireActual('components'),
  Menu () {
    return <></>
  },
  PageMeta () {
    return <></>
  }
}))

describe('Home page component', () => {
  test('Click counter: 1 click', async () => {
    // Render component with Redux Provider with some preloaded state
    renderWithProviders(<Home />, {
      preloadedState: {
        counter: { value: 42 }
      }
    })

    /*
      According to Testing Library philosophy, we should act as users,
      so we need to find elements not by id or class,
      but by visual or text references.

      So first we click on element with text that calling to action.
    */
    await userEvent.click(screen.getByText(t.homeButtonText))

    /*
      Then we need to find an element that should be changed.
      In our case, these are the elements that are right above their descriptions
      (we get them with closest() method).
      Testing Library has a great method to get elements by labels
      (https://testing-library.com/docs/queries/bylabeltext/),
      but for this you need to design your components with such testing in mind.
    */
    expect(screen.getByText(t.homeButtonText).closest('div')).toHaveTextContent(
      '1'
    )
    expect(
      screen.getByText(t.counterDescription.global).closest('div')
    ).toHaveTextContent('43')
  })
})
