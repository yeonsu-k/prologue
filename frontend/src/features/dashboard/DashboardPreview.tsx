import React, { useEffect } from "react";
import styles from "features/dashboard/Dashboard.module.css";
import Text from "components/Text";
import IconButton from "@mui/material/IconButton";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Box, Link, Tooltip } from "@mui/material";
import { rootState } from "app/store";
import { useSelector } from "react-redux";
import axios from "axios";

function DashboardPreview(props: { buildState: boolean }) {
  const { githubId } = useSelector((state: rootState) => state.auth);

  const blogLink = `https://${githubId}.github.io/`;

  useEffect(() => {
    axios.get(blogLink).catch((err) => {
      const iframe = document.getElementById("iframeDiv") as HTMLParagraphElement;
      iframe.style.backgroundColor = "OldLace";
      console.error("아이프레임 실패", err);
    });
  }, []);

  return (
    <div className={styles.container}>
      <Box className={styles.preview}>
        {props.buildState && (
          <Tooltip title="블로그 배포는 최소 3분 걸립니다" arrow followCursor>
            <Box className={styles.bildProgress}>
              <span>P</span>
              <span>r</span>
              <span>o</span>
              <span>g</span>
              <span>r</span>
              <span>e</span>
              <span>s</span>
              <span>s</span>
            </Box>
          </Tooltip>
        )}
        <Link href={blogLink} target="_blank">
          <div id="iframeDiv" className={styles.previewIframe} />
          <iframe src={blogLink} scrolling="no" />
        </Link>
        <div className={styles.previewInfo}>
          <div className={styles.flexRow}>
            <Link href={blogLink} underline="none" color="black" target="_blank">
              <Text value={`${githubId}.github.io`} bold />
            </Link>
            <IconButton href="/setting">
              <SettingsOutlinedIcon fontSize="small" sx={{ color: "#424242", fontSize: "1.2rem" }} />
            </IconButton>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default DashboardPreview;
