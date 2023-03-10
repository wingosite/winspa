import { inject, reactive, type InjectionKey } from "vue";
import { useRoute } from "vue-router";
import type { NewPageProps, StateProps } from "../types";

export const injectKey: InjectionKey<ReturnType<typeof initVisualBoardData>> =
  Symbol();

/**
 * 创建新的页面
 * @author Bronson Qiu
 * @param title 页面标题
 * @param path 页面路径
 * @updatedAt 2023/03/10 16:10
 * @returns
 */
export const createNewPage = ({
  title = "新页面",
  path = "/",
}: NewPageProps) => ({
  title,
  path,
  blocks: [],
  config: {
    bgImage: "",
    bgColor: "",
    keepAlive: false,
  },
});

/**
 * 默认数据
 */
export const defaultValue = {
  pages: {
    "/": createNewPage({ title: "首页" }),
  },
  models: [],
  actions: {
    // 网络请求集合
    fetch: {
      name: "接口请求",
      apis: [],
    },
    // 弹框集合
    dialog: {
      name: "对话框",
      handlers: [],
    },
  },
};

export const initVisualBoardData = () => {
  const route = useRoute();

  // 判断输入的字符串是否符合标准，不符合自动添加 "/"
  const getPrefixPath = (path: string) =>
    path.startsWith("/") ? path : `/${path}`;

  // 获取本地缓存的页面内容
  const localData = JSON.parse(localStorage.getItem("page") as string);

  // 获取页面内容
  const jsonData = Object.keys(localData.pages || {}).length
    ? localData
    : defaultValue;

  // 当前页面的属性
  const currentPage = jsonData.pages[route.path];

  const state = reactive<StateProps>({
    jsonData,
    currentPage,
  });

  /**
   * 增加页面
   * @param path 页面路径
   * @param page 页面内容
   */
  const incrementPage = (path = "", page: any) => {
    state.jsonData.pages[getPrefixPath(path)] ??=
      page ?? createNewPage({ path });
  };

  return {
    incrementPage,
    text: "123",
  };
};

export const useVisualBoardData = () =>
  inject<ReturnType<typeof initVisualBoardData>>(injectKey)!;
