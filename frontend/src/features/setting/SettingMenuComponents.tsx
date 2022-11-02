import React from "react";
import styles from "./Setting.module.css";

import MyInfoInput from "./MyInfoInput";
import MyBlogInfoInput from "./MyBlogInfoInput";
import CategoryLayout from "./CategoryLayout";

export const blogTabs = [
  {
    label: "블로그 정보 설정",
    Component: (
      <div>
        <MyInfoInput />
        <div className={styles.hr}></div>
        <MyBlogInfoInput />
      </div>
    ),
  },
  {
    label: "카테고리 설정",
    Component: <CategoryLayout />,
  },
];

export const layoutTabs = [
  {
    label: "레이아웃 선택",
    Component: <div>Hello, I am tab 1</div>,
  },
  {
    label: "세부 레이아웃 설정",
    Component: <div>Hello, I am tab 2</div>,
  },
];