import { Storage } from "@/constant";
import { reactive } from "vue";
import { useRoute } from "vue-router";

export interface CreatePageProps {
  path?: string;
  title?: string;
}

export interface PageConfig {
  bgImage: string;
  bgColor: string;
  keepAlive: boolean;
}

export interface PageInstance extends CreatePageProps {
  config: PageConfig;
  blocks: any[];
}

export interface Page {
  [key: string]: PageInstance;
}

export interface PageData {
  pages: Page;
  models: any[];
}

export interface StateProps {
  currentPage: PageInstance;
  pageData: PageData;
}

/**
 * 默认数据
 */

export const useVisualData = () => {
  const route = useRoute();
  /**
   * 创建新的页面
   * @param title 页面标题
   * @param path  页面路径
   * @returns
   */
  const createPage = ({
    title = "新页面",
    path = "/",
  }: CreatePageProps): PageInstance => ({
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
  const defaultPageData: PageData = {
    pages: {
      "/": createPage({ path: "/" }),
    },
    models: [],
  };

  /**
   * 配置路由路径
   * @param path 页面路径
   * @returns
   */
  const getPathPrefix = (path: string) => {
    return path.startsWith("/") ? path : `/${path}`;
  };

  /**
   * 本地缓存的页面数据
   */
  const sessionPageData: PageData = JSON.parse(
    sessionStorage.getItem(Storage.PAGE) as string
  );

  const pageData =
    sessionPageData && Object.keys(sessionPageData.pages || {}).length
      ? sessionPageData
      : defaultPageData;

  const currentPage = pageData.pages[route.path];

  const state = reactive<StateProps>({
    pageData,
    currentPage,
  });

  const incrementPage = (path: string, page: PageInstance) => {
    state.pageData.pages[getPathPrefix(path)] ??= page ?? createPage({ path });
  };

  return {
    pageData,
    currentPage,
    createPage,
    incrementPage,
  };
};
