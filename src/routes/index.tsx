import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { css } from 'styled-system/css'

export default component$(() => {
  return <main class={css({ mwInline: 1120 })}>Hello</main>
})

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
}
