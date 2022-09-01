import { defineComponent, PropType, toRefs } from "vue";
import "uno.css";

export type IColor =
  | "black"
  | "gray"
  | "red"
  | "green"
  | "yellow"
  | "blue"
  | "indigo"
  | "purple"
  | "pink";

export const props = {
  color: {
    type: String as PropType<IColor>,
    default: "blue",
  },
};

export default defineComponent({
  name: "SButton",
  props,
  setup(props, { slots }) {
    return () => (
      <button
        class={`
      py-2 
      px-4 
      font-semibold 
      rounded-lg 
      shadow-md 
      text-white 
      bg-green-500 
      hover:bg-green-700 
      border-none 
      cursor-pointer 
      `}
      >
        {slots.default ? slots.default() : ""}
      </button>
    );
  },
});
