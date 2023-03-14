import { access, mkdir, writeFile, appendFile } from 'fs'
import { EOL } from 'os'

const name = process.argv[2]

const compDir = 'src/components/'
const path = `${compDir}${name}/`
const compName = name
  .replace(/[-](.?)/g, (e) => e.toUpperCase())
  .replace(/[-]/g, '')
const compNameCap = compName.charAt(0).toUpperCase() + compName.slice(1)

const compTmp = `
import { FC, ReactElement } from 'react'
import cn from 'classnames'

import styles from './${compName}.module.scss'

interface I${compNameCap} {
  className?: string
}

const ${compNameCap}: FC<I${compNameCap}> = ({ className }): ReactElement => (
  <div className={cn(className, styles.)} />
)

export { ${compNameCap} }
`

const exportTmp = `export { ${compNameCap} } from 'components/${name}/${compNameCap}'${EOL}`

console.log(`Creating component ${compNameCap} in folder ${name}...`)

access(path, (error) => {
  if (error) {
    mkdir(path, (error) => {
      if (error) {
        console.log(error)
      } else {
        writeFile(`${path}${compNameCap}.tsx`, compTmp, (error) => {
          if (error) {
            throw error
          }

          console.log('...TSX file is created successfully.')
        })

        writeFile(`${path}${compName}.module.scss`, '', (error) => {
          if (error) {
            throw error
          }

          console.log('...SCSS Module file is created successfully.')
        })
      }

      appendFile(`${compDir}index.ts`, exportTmp, (error) => {
        if (error) {
          throw error
        }

        console.log('...export definition added to index file successfully.')
      })
    })
  } else {
    console.log('Error: Component with given name already exists.')
  }
})
