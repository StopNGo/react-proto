import { langUrl, TSupportedLanguages } from 'i18n/i18nConfig'

export async function fetchTranslations (
  lang: keyof TSupportedLanguages
): Promise<any> {
  return await new Promise((resolve) => {
    fetch(langUrl.replace('{lang}', lang))
      .then(
        async (response) => await response.json(),
        () => {}
      )
      .then(
        (data) => resolve(data),
        () => {}
      ).catch(er => console.log(er))
  })
}
