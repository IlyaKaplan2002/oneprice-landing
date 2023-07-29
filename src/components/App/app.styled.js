import styled from "@emotion/styled";
import { Box } from "@mui/material";
import mainBg from "../../assets/mainBg.png";

export const Wrapper = styled(Box)`
  max-width: 360px;
  padding-top: 80px;
  margin: 0 auto;

  .header {
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    background: #1a1a1a;
    z-index: 200;
    padding-top: 15px;
    padding-bottom: 15px;

    .headerContainer {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      max-width: 360px;
      margin: 0 auto;
    }
  }

  .menu {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }

  .logo {
    cursor: pointer;
    font-size: 72px;
    background: -webkit-linear-gradient(308deg, #a7f306 0%, #f3cd06 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 24px;
  }

  .hero {
    background: url(${mainBg});
    background-size: 351px;
    background-repeat: no-repeat;
    background-position: bottom 16px left 14px;
  }

  .title {
    text-align: center;
    font-size: 35px;
    letter-spacing: 1px;
    background: -webkit-linear-gradient(
      91deg,
      #fff 0%,
      rgba(255, 255, 255, 0.3) 49.48%,
      #fff 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 49px;

    span {
      background: -webkit-linear-gradient(308deg, #a7f306 0%, #f3cd06 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .heroList {
    display: flex;
    margin-bottom: 60px;
  }

  .heroItem {
    padding-top: 16px;
    padding-left: 22px;
    position: relative;
    width: 137px;
    height: 78px;

    &:first-child {
      margin-right: 5px;
    }

    .itemTitle {
      font-size: 20px;
      letter-spacing: 1.5px;
      text-transform: uppercase;
    }

    .itemSubTitle {
      font-size: 12px;
      line-height: 24px;
      opacity: 0.5;
    }

    .heroIcon {
      position: absolute;
      top: 0;
      left: 0;

      &.right {
        transform: rotate(180deg);
      }
    }
  }

  .heroText {
    text-align: center;
    font-size: 14px;
    line-height: 28px;
    margin-bottom: 49px;
  }

  .buttonsBox {
    display: flex;
    align-items: flex-start;
    padding-left: 31px;
  }

  .heroButton {
    border-radius: 120px;
    padding: 10px 15px;

    &.left {
      background: #fff;
      color: rgba(26, 26, 26, 0.75);
      font-size: 14px;
    }

    &.right {
      color: #fff;
      font-size: 12px;
      font-weight: 600;
      position: relative;
      width: 106px;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      align-self: center;

      .heroButtonIcon {
        position: absolute;
        left: 0;
        top: 0;
      }
    }
  }

  .buttonsDivider {
    margin-top: 18px;
  }

  .movingStringBox {
    height: 56px;
    margin-bottom: 16px;
  }

  .movingStringCont {
    width: 100vw;
    position: absolute;
    left: 0;
  }

  .movingString {
    background: linear-gradient(308deg, #a7f306 0%, #f3cd06 100%);
    padding-top: 8px;
    padding-bottom: 8px;
  }

  .marqueeItem {
    margin-right: 40px;
    display: flex;
    align-items: center;
    background: linear-gradient(270deg, #1a1a1a 0%, #000 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 16px;
    line-height: 32px;
    letter-spacing: 0.64px;

    .marqueeIcon {
      margin-right: 8px;
    }
  }

  .marqueeBottomLine {
    height: 8px;
    background: rgba(169, 169, 169, 0.2);
  }

  .sectionTitle {
    font-size: 33px;
    letter-spacing: 1px;
    letter-spacing: 1px;
    margin-bottom: 16px;
  }

  .sectionDivider {
    height: 2px;
    background: linear-gradient(308deg, #a7f306 0%, #f3cd06 100%), #d9d9d9;
    margin-bottom: 16px;
  }

  .sectionLogo {
    text-align: center;
    font-size: 40px;
    letter-spacing: 1px;
    background: linear-gradient(308deg, #a7f306 0%, #f3cd06 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 21px;
  }

  .sectionText {
    text-align: center;
    font-size: 16px;
    line-height: 32px;
    margin-bottom: 16px;
  }

  .aboutList {
    .aboutItem {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-size: 20px;
      font-weight: 400;
      line-height: 40px;
    }

    .aboutItem:not(:last-child) {
      margin-bottom: 20px;
    }

    .aboutIcon {
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.08);
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 16px;
    }
  }

  .aboutSection {
    margin-bottom: 40px;
  }

  .video {
    display: block;
    width: 360px;
    height: 203px;
    margin-bottom: 40px;
  }

  .videoButton {
    width: 157px;
    height: 38px;
    color: #fff;
    font-size: 14px;
    border-radius: 120px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    display: block;
    margin: 0 auto;
  }

  .videoSection {
    margin-bottom: 40px;
  }

  .partnerSection {
    margin-bottom: 40px;

    .sectionDivider {
      margin-bottom: 29px;
    }

    .partnerList {
      margin-bottom: 40px;

      li {
        display: flex;
        justify-content: space-between;

        &:not(:last-child) {
          margin-bottom: 20px;
        }

        img {
          height: 90px;
        }

        h3 {
          margin-bottom: 4px;
          font-size: 18px;
          font-weight: 600;
          line-height: 28px;
        }

        p {
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          opacity: 0.5;
        }

        .content {
          max-width: 225px;
        }
      }
    }

    .partnerButton {
      width: 157px;
      height: 38px;
      font-size: 14px;
      border-radius: 120px;
      border: 1px solid rgba(167, 243, 6, 0.2);
      display: block;
      margin: 0 auto;
      background: linear-gradient(219deg, #a7f306 51.04%, #f3cd06 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .contactSection {
    margin-bottom: 20px;

    .sectionDivider {
      margin-bottom: 25px;
    }

    .contactForm {
      background: #fff;
      border-radius: 14px;
      color: #1a1a1a;
      padding: 30px 43px 16px;
    }

    .contactFormTitle {
      text-align: center;
      font-size: 18px;
      text-transform: uppercase;
      margin-bottom: 8px;
    }

    .contactFormText {
      text-align: center;
      font-size: 14px;
      line-height: 18.436px;
      margin-bottom: 24px;
    }

    .contactInputWrapper {
      margin-bottom: 16px;
    }

    .contactLabel {
      font-size: 16px;
      margin-bottom: 8px;
    }

    .contactInput {
      padding: 16px 14px;
      font-family: "Roboto", sans-serif;
      font-size: 14px;
      display: block;
      width: 100%;
      font-weight: 100;
      border-radius: 10px;
      border: 0.5px solid #a7f306;
      outline: none;

      &::placeholder {
        color: #b3b3b3;
      }
    }

    .contactFormBottomWrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .contactFormButton {
      padding: 10px 24px;
      border-radius: 35px;
      background: #efefef;
      font-size: 14px;
      font-weight: 600;
      line-height: 14px;
      text-transform: uppercase;
    }

    .contactFormLogo {
      font-size: 20px;
      background: linear-gradient(308deg, #a7f306 0%, #f3cd06 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .footerDivider {
    margin-bottom: 16px;
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 14px;
  }

  .rights {
    font-size: 14px;
    letter-spacing: -0.42px;
    opacity: 0.6000000238418579;
  }
`;
