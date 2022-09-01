import { createApp } from "vue";

createApp({
  data: () => ({ count: 1 }),
  template: `
    <h1>This button is dynamic</h1>
    <button @click="count++">Count {{ count }}</button>
    <div>
      <img src="https://picsum.photos/300/200" />
    </div>
    `,
}).mount("#app");
