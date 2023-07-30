import styled from "@emotion/styled";
import { Backdrop } from "@mui/material";

export const Wrapper = styled(Backdrop)`
  z-index: 2000;

  .modal {
    width: 360px;
    padding: 20px;
    border-radius: 20px;
    background: #1a1a1a;
    font-size: 20px;
    font-weight: 400;
    line-height: 131.687%;
    max-height: 90vh;
    overflow: scroll;
  }

  .logo {
    font-size: 72px;
    background: -webkit-linear-gradient(308deg, #a7f306 0%, #f3cd06 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 24px;
  }

  .close {
    cursor: pointer;
  }

  .checkbox {
    font-family: "Roboto", sans-serif;
    font-size: 14px;
  }

  .inputWrapper:not(:last-child) {
    margin-bottom: 10px;
  }

  .label {
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 4px;
  }

  .input {
    background: transparent;
    outline: none;
    border: 1px solid #a7f306;
    width: 100%;
    display: block;
    padding: 16px 20px;
    border-radius: 10px;
    color: #ffffff;
    font-family: "Roboto", sans-serif;
    font-size: 15px;

    &::placeholder {
      color: #b3b3b3;
      font-family: "Roboto", sans-serif;
      font-size: 15px;
      font-weight: 100;
    }
  }

  .fileInput {
    border: 1px solid #a7f306;
    border-radius: 10px;
    color: #a7f306;

    .MuiFileInput-IconButton,
    svg,
    input + span {
      color: #a7f306;
    }
  }

  .formButton {
    display: block;
    margin: 0 auto;
    font-size: 14px;
    font-weight: 600;
    background: linear-gradient(228deg, #a7f306 26.56%, #f3cd06 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    border-radius: 120px;
    border: 1px solid rgba(167, 243, 6, 0.2);
    padding: 16px 36px;
  }

  @media screen and (min-width: 1024px) {
    .modal {
      width: 500px;
    }
  }
`;
