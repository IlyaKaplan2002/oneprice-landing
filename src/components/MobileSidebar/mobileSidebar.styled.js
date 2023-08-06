import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const Wrapper = styled(Box)`
  position: fixed;
  width: 100vw;
  height: calc(100vh - 57px);
  background: #1a1a1a;
  top: 57px;
  left: 0;
  z-index: 1000;
  transform: translateX(-100%);
  transition: transform 300ms ease;

  &.open {
    transform: translateX(0);
  }

  .container {
    padding-top: 60px;
    max-width: 360px;
    margin: 0 auto;
  }

  .sidebarList {
    margin-bottom: 67px;

    li {
      cursor: pointer;

      &:not(:last-child) {
        margin-bottom: 32px;
      }
    }

    li:hover .sidebarDivider {
      background: linear-gradient(321deg, #a7f306 0%, #f3cd06 100%);
    }

    p {
      font-size: 16px;
      font-weight: 500;
      text-align: center;
      margin-bottom: 8px;
    }

    .sidebarDivider {
      width: 100%;
      height: 1px;
      background: linear-gradient(
        308deg,
        rgba(167, 243, 6, 0.2) 0%,
        rgba(243, 205, 6, 0.2) 100%
      );
    }
  }

  .sidebarButton {
    border-radius: 120px;
    background: #fff;
    padding: 10px 15px;
    color: rgba(26, 26, 26, 0.75);
    font-size: 14px;
    display: block;
    margin: 0 auto;
  }

  @media screen and (min-width: 1024px) {
    transform: translateX(-100%) !important;
  }
`;
