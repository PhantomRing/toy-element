// 常量，存放依赖注入的key
import type { InjectionKey } from "vue";
import type { ButtonGroupContext } from "./types";

export const BUTTON_GROUP_CTX_KEY: InjectionKey<ButtonGroupContext> =
  Symbol("buttonGroupContext");
