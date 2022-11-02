import React, { useEffect } from "react";
import styles from "./Blog.module.css";
import Text from "components/Text";
import Button from "components/Button";
import { Stack } from "@mui/material";

interface Props {
  onClick: () => void;
}

function BlogCreateBox({ onClick }: Props) {
  return (
    <div className={styles.Box}>
      <div className={styles.BlogCreateTitle}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={0.5}
        >
          <Text value="GitHub 블로그 생성" type="title" />
          <Text
            value="깃허브 블로그가 이미 존재한다면 생성이 불가능합니다."
            type="groupTitle"
          />
        </Stack>
      </div>
      <Button label="Github blog Create" width="50%" onClick={onClick} />
    </div>
  );
}

export default BlogCreateBox;