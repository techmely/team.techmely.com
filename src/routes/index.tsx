import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return <main>Hello</main>;
});

export const head: DocumentHead = {
  title: "TechMel - ",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
  links: [],
};
