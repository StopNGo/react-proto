const registerSW = async (): Promise<void> => {
  try {
    const registration = await navigator.serviceWorker.register('./sw.js')
    console.log(
      'ServiceWorker registration successful with scope: ',
      registration.scope
    )
  } catch (err) {
    console.log('ServiceWorker registration failed: ', err)
  }
}

export const startServiceWorker = (): void => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      (async () => {
        await registerSW()
      })().then(
        () => {}
      ).catch(er => console.log(er))
    })
  }
}
