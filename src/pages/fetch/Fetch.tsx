import { FC, ReactElement, useState } from 'react'

import { pokemonApi } from 'api'

import { Button, Menu, PageMeta, PokemonCard } from 'components'
import { WithSpinner } from 'hocs'
import useTranslations from 'i18n/useTranslations'

import styles from './fetch.module.scss'

const rndID = (maxID: number): number => Math.floor(Math.random() * maxID + 1)

const Fetch: FC = (): ReactElement => {
  const [currentPokemonID, setCurrentPokemonID] = useState(1)
  const { data, isFetching } = pokemonApi.useGetPokemonSpriteByIdQuery(
    currentPokemonID,
    {
      selectFromResult: ({ data, isFetching }) => ({
        data,
        isFetching
      })
    }
  )
  const { t } = useTranslations()

  return (
    <div className='main fetch'>
      <PageMeta title={t.pageNames.fetch} />
      <h1>{t.fetchText}</h1>
      <Menu />
      <div className={styles.wrapper}>
        <WithSpinner isSpinnerShown={isFetching} minTimeSpinnerShown={300}>
          <PokemonCard name={data?.name} sprite={data?.sprite} />
        </WithSpinner>
      </div>
      <Button
        className='center'
        onClick={() => {
          setCurrentPokemonID(rndID(99))
        }}
      >
        {t.homeButtonText}
      </Button>
    </div>
  )
}

export { Fetch }
