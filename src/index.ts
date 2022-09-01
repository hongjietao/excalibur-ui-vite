import { createApp } from "vue/dist/vue.esm-bundler.js";
import ExcaliburUI, { MyButton } from "./entry";

createApp({
  template: `
            <div>
                <MyButton>普通按钮</MyButton>
            </div>
        `,
})
  .use(ExcaliburUI)
  .mount("#app");
