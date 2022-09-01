import { createSSRApp } from "vue";

export function createApp() {
  return createSSRApp({
    data: () => ({ count: 1 }),
    template: `
      <h1>This button is dynamic</h1>
      <button @click="count++">Count {{ count }}</button>
      <div>
        <img src="https://picsum.photos/300/200" />
      </div>
      `,
  });
}
