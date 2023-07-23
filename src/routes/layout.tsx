import { component$, Slot } from '@builder.io/qwik'
import type { RequestHandler } from '@builder.io/qwik-city'
import { routeLoader$ } from '@builder.io/qwik-city'

import Footer from 'components/starter/footer/footer'
import Header from 'components/starter/header/header'
import { MAX_AGE_TIME, SWR_TIME } from 'libs/cache'

export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    staleWhileRevalidate: SWR_TIME,
    maxAge: MAX_AGE_TIME,
  })
}

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  }
})

export default component$(() => {
  return (
    <>
      <Header />
      <Slot />
      <Footer />
    </>
  )
})
