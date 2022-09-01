import { createApp } from "vue";
import ExcaliburUI from "./entry";
createApp({
  template: `
            <div>
                <MyButton>普通按钮</MyButton>
            </div>
        `,
})
  .use(ExcaliburUI)
  .mount("#app");
