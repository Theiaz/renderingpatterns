import { createApp } from "vue";

createApp({
  data: () => ({ count: 1 }),
  template: `<button @click="count++">{{ count }}</button>`,
}).mount("#app");
