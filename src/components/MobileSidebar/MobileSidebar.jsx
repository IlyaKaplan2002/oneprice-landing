import classNames from "classnames";
import { Wrapper } from "./mobileSidebar.styled";
import { Box } from "@mui/material";
import { enableBodyScroll } from "body-scroll-lock";
import { useCallback } from "react";
import { scrollTo } from "../../helpers";

const MobileSidebar = ({ open, setOpen }) => {
  const navigate = useCallback(
    (to) => {
      enableBodyScroll(document.body);
      scrollTo(to);
      setOpen(false);
    },
    [setOpen]
  );

  return (
    <Wrapper className={classNames({ open })}>
      <Box className="container">
        <Box component="ul" className="sidebarList">
          <Box component="li" onClick={() => navigate("about")}>
            <Box component="p">ПРО НАС</Box>
            <Box className="sidebarDivider" />
          </Box>

          <Box component="li" onClick={() => navigate("video")}>
            <Box component="p">ВІДЕО</Box>
            <Box className="sidebarDivider" />
          </Box>

          <Box component="li" onClick={() => navigate("partner")}>
            <Box component="p">СПІВПРАЦЯ</Box>
            <Box className="sidebarDivider" />
          </Box>

          <Box component="li" onClick={() => navigate("contact")}>
            <Box component="p">ЗВ`ЯЗАТИСЬ</Box>
            <Box className="sidebarDivider" />
          </Box>
        </Box>

        <Box component="button" className="sidebarButton c-fw-600">
          СПІВПРАЦЮВАТИ
        </Box>
      </Box>
    </Wrapper>
  );
};

export default MobileSidebar;
