import { createSlice } from "@reduxjs/toolkit";
import { rootState } from "../app/store";
import { Layout } from "react-grid-layout";

export interface KeyConfig {
  key: string;
}

export interface ComponentConfig {
  key: string;
}

export interface ComponentCheckConfig {
  logoCheck: boolean;
  profileCheck: boolean;
  categoryCheck: boolean;
  naviCheck: boolean;
}

interface LayoutConfig {
  categoryLayoutList: Layout[];
  categoryList: KeyConfig[];
  categoryCnt: number;

  pageLayoutList: Layout[];
  pageList: KeyConfig[];
  pageCnt: number;

  componentLayoutList: Layout[];
  componentList: ComponentConfig[];

  checkList: ComponentCheckConfig;
}

const initialState: LayoutConfig = {
  categoryLayoutList: [],
  categoryList: [],
  categoryCnt: 1,

  pageLayoutList: [],
  pageList: [],
  pageCnt: 1,

  componentLayoutList: [
    { i: "블로그 로고", x: 0, y: 0, w: 1, h: 2, isResizable: false },
    { i: "프로필", x: 0, y: 1, w: 1, h: 3, isResizable: false },
    { i: "카테고리", x: 0, y: 2, w: 1, h: 4, isResizable: false },
    { i: "페이지", x: 1, y: 0, w: 4, h: 2, isResizable: false },

    { i: "타이틀", x: 1, y: 2, w: 4, h: 5, static: true, isResizable: false },
    { i: "글 목록", x: 1, y: 7, w: 4, h: 6, static: true, isResizable: false },
  ],
  componentList: [
    { key: "블로그 로고" },
    { key: "프로필" },
    { key: "카테고리" },
    { key: "페이지" },
    { key: "타이틀" },
    { key: "글 목록" },
  ],

  checkList: {
    logoCheck: true,
    profileCheck: true,
    categoryCheck: true,
    naviCheck: true,
  },
};

const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    setCategoryLayoutList: (state, { payload }) => {
      state.categoryLayoutList = payload;
    },
    setCategoryList: (state, { payload }) => {
      state.categoryList = payload;
    },
    setCategoryCnt: (state, { payload }) => {
      state.categoryCnt = payload;
    },

    setPageLayoutList: (state, { payload }) => {
      state.pageLayoutList = payload;
    },
    setPageList: (state, { payload }) => {
      state.pageList = payload;
    },
    setPageCnt: (state, { payload }) => {
      state.pageCnt = payload;
    },

    setComponentLayoutList: (state, { payload }) => {
      state.componentLayoutList = payload;
    },
    setComponentList: (state, { payload }) => {
      state.componentList = payload;
    },

    setCheckList: (state, { payload: { logoCheck, categoryCheck, profileCheck, naviCheck } }) => {
      state.checkList = { logoCheck, categoryCheck, profileCheck, naviCheck };
    },
  },
});
export const {
  setCategoryLayoutList,
  setCategoryList,
  setCategoryCnt,
  setPageList,
  setPageCnt,
  setComponentList,
  setComponentLayoutList,
  setCheckList,
} = settingSlice.actions;

export const selectCategoryLayoutList = (state: rootState) => state.setting.categoryLayoutList;
export const selectCategoryCnt = (state: rootState) => state.setting.categoryCnt;
export const selectCategoryList = (state: rootState) => state.setting.categoryList;

export const selectPageLayoutList = (state: rootState) => state.setting.pageLayoutList;
export const selectPageList = (state: rootState) => state.setting.pageList;
export const selectPageCnt = (state: rootState) => state.setting.pageCnt;

export const selectComponentLayoutList = (state: rootState) => state.setting.componentLayoutList;
export const selectComponentList = (state: rootState) => state.setting.componentList;

export const selectCheckList = (state: rootState) => state.setting.checkList;

export default settingSlice.reducer;

/*

{ i: "a", x: 0, y: 0, w: 1, h: 2, static: true, isResizable: false },
{ i: "b", x: 1, y: 0, w: 1, h: 2, isResizable: false },
{ i: "c", x: 2, y: 0, w: 1, h: 2, isResizable: false },

{ key: "a" }, { key: "b" }, { key: "c" }

*/
