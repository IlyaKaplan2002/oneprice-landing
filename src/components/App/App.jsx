import { Box } from "@mui/material";
import { Wrapper } from "./app.styled";
import { Icon } from "../Icon";
import Marquee from "react-fast-marquee";
import boxPink from "../../assets/boxPink.png";
import boxGreen from "../../assets/boxGreen.png";
import { useCallback, useState } from "react";
import MobileSidebar from "../MobileSidebar/MobileSidebar";
import { scrollTo, scrollTop } from "../../helpers";
import { Form } from "../Form";
import { lock, unlock } from "tua-body-scroll-lock";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  const openForm = useCallback(() => {
    setFormOpen(true);
    lock(document.getElementById("modal") || undefined);
  }, []);

  const closeForm = useCallback(() => {
    setFormOpen(false);
    unlock(document.getElementById("modal") || undefined);
  }, []);

  return (
    <>
      <Wrapper>
        <Box component="header" className="header">
          <Box className="headerContainer">
            <Icon
              color="white"
              name={sidebarOpen ? "menuClose" : "menu"}
              className="menu"
              onClick={() =>
                setSidebarOpen((prev) => {
                  if (prev) {
                    unlock(document.getElementById("modal") || undefined);
                  } else {
                    lock(document.getElementById("modal") || undefined);
                  }
                  return !prev;
                })
              }
            />

            <Box
              onClick={() => scrollTop()}
              component="h1"
              className="logo c-font-raleway c-fw-700"
              m={0}
            >
              OnePrice
            </Box>

            <Box component="nav" className="navigation">
              <Box component="ul">
                <Box component="li" onClick={() => scrollTo("about")}>
                  ПРО НАС
                </Box>
                <Box component="li" onClick={() => scrollTo("video")}>
                  ВІДЕО
                </Box>
                <Box component="li" onClick={() => scrollTo("partner")}>
                  СПІВПРАЦЯ
                </Box>
                <Box component="li" onClick={() => scrollTo("contact")}>
                  ЗВ`ЯЗАТИСЬ
                </Box>
              </Box>
            </Box>

            <Box
              component="button"
              className="navButton c-fw-600"
              onClick={() => {
                openForm();
              }}
            >
              СПІВПРАЦЮВАТИ
            </Box>
          </Box>
        </Box>

        <Box component="section" className="hero" id="hero">
          <Box component="h2" className="title c-fw-800 c-font-raleway" m={0}>
            ЗАПРОПОНУЙ СВОЇ <br className="mobile" />
            <Box component="span">ТОВАРИ</Box>
          </Box>

          <Box className="flexContainer">
            <Box component="ul" className="heroList">
              <Box component="li" className="heroItem">
                <Icon
                  name="heroIcon"
                  width={137}
                  height={78}
                  className="heroIcon mobile"
                />
                <Icon
                  name="heroIconDesktop"
                  width={202}
                  height={160}
                  className="heroIcon desktop"
                />

                <Box className="itemTitle c-font-radio-canada c-fw-400">
                  500+
                </Box>
                <Box className="c-fw-500 itemSubTitle">ПАРТНЕРІВ</Box>
              </Box>
              <Box component="li" className="heroItem">
                <Icon
                  name="heroIcon"
                  width={137}
                  height={78}
                  className="heroIcon right mobile"
                />

                <Icon
                  name="heroIconDesktop"
                  width={202}
                  height={160}
                  className="heroIcon right desktop"
                />

                <Box className="itemTitle c-font-radio-canada c-fw-400">
                  100%
                </Box>
                <Box className="c-fw-500 itemSubTitle">ЗАДОВОЛЕНИХ</Box>
              </Box>
            </Box>

            <Box component="p" className="c-font-op c-fw-400 heroText">
              Великий асортимент товарів - це про OnePrice!
              <br />
              Ми бажаємо й надалі збільшувати кількість товарів на нашому сайті.
              Пропонуємо й Вам розмістити свої товари на OnePrice!
            </Box>
          </Box>

          <Box className="buttonsBox">
            <Box
              component="button"
              onClick={openForm}
              className="heroButton left c-fw-600"
            >
              СПІВПРАЦЮВАТИ
            </Box>

            <Icon
              name="buttonsDivider"
              width={1}
              height={138}
              className="buttonsDivider mobile"
            />

            <Icon
              name="buttonsDividerDesktop"
              width={2}
              height={236}
              className="buttonsDivider desktop"
            />

            <Box component="button" className="heroButton right c-fw-600">
              <Icon
                name="heroButtonIcon"
                className="heroButtonIcon mobile"
                width={106}
                height={35}
                onClick={() => scrollTo("contact")}
              />
              <Icon
                name="heroButtonIconDesktop"
                className="heroButtonIcon desktop"
                width={223}
                height={56}
                onClick={() => scrollTo("contact")}
              />
              ЗВ`ЯЗАТИСЬ
            </Box>
          </Box>
        </Box>

        <Box className="movingStringBox">
          <Box className="movingStringCont">
            <Box className="movingString">
              <Marquee autoFill speed={60}>
                <Box className="marqueeItem c-font-raleway c-fw-700">
                  <Icon name="marqueeIcon" size={24} className="marqueeIcon" />
                  ЗБІЛЬШУЙТЕ СВОЇ ПРОДАЖІ ЗАРАЗ
                </Box>
              </Marquee>
            </Box>
            <Box className="marqueeBottomLine" />
          </Box>
        </Box>

        <Box component="section" id="about" className="aboutSection">
          <Box component="h2" className="sectionTitle c-font-raleway c-fw-700">
            ПРО НАС
          </Box>

          <Box className="sectionDivider" />
          <Box component="h2" className="sectionLogo c-font-raleway c-fw-700">
            OnePrice
          </Box>
          <Box className="flexContainer">
            <Box component="p" className="c-font-op c-fw-400 sectionText">
              Це мережа магазинів з великим асортиментом товарів за мінімальними
              цінами. У магазинах представлені товари з Китаю, а також товари
              українських виробників. У кожному магазині можна знайти понад 10
              000 товарів на всі випадки життя. Перший магазин OnePrice був
              відкритий восени 2018 року, а зараз мережа нараховує{" "}
              <b>більше 70 магазинів</b>! OnePrice - великий вибір, маленькі
              ціни!
            </Box>

            <Box
              component="section"
              id="video"
              className="videoSection desktop"
            >
              <iframe
                className="video"
                src="https://www.youtube.com/embed/sDFq6GftlNw"
                title="Как зарабатывать на магазинах “все по 50”? Сеть магазинов “OnePrice”. Открываем свой магазин"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </Box>
          </Box>

          <Box component="ul" className="aboutList">
            <Box component="li" className="aboutItem">
              <Box className="aboutIcon">
                <Icon name="check" size={24} />
              </Box>
              Великий асортимент
            </Box>
            <Box component="li" className="aboutItem">
              <Box className="aboutIcon">
                <Icon name="check" size={24} />
              </Box>
              Маленькі ціни
            </Box>
            <Box component="li" className="aboutItem">
              <Box className="aboutIcon">
                <Icon name="check" size={24} />
              </Box>
              Швидка доставка
            </Box>
          </Box>

          <Box component="button" className="videoButton desktop c-fw-600">
            БІЛЬШЕ
          </Box>
        </Box>

        <Box component="section" id="video" className="videoSection mobile">
          <iframe
            className="video"
            src="https://www.youtube.com/embed/sDFq6GftlNw"
            title="Как зарабатывать на магазинах “все по 50”? Сеть магазинов “OnePrice”. Открываем свой магазин"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>

          <Box component="button" className="videoButton c-fw-600">
            БІЛЬШЕ
          </Box>
        </Box>

        <Box component="section" id="partner" className="partnerSection">
          <Box component="h2" className="sectionTitle c-font-raleway">
            СПІВПРАЦЯ
          </Box>
          <Box className="sectionDivider" />
          <Box component="ul" className="partnerList">
            <Box component="li">
              <img src={boxGreen} alt="Прозорість" />

              <Box className="content">
                <Box component="h3">Прозорість</Box>
                <Box component="p">
                  Вибір прозорої та задовільної стратегії партнерства
                </Box>
              </Box>
            </Box>

            <Box component="li">
              <img src={boxPink} alt="Прозорість" />

              <Box className="content">
                <Box component="h3">Підтримка</Box>
                <Box component="p">
                  Людина, закріплена за Вами, допоможе впродовж співпраці
                </Box>
              </Box>
            </Box>

            <Box component="li">
              <img src={boxGreen} alt="Прозорість" />

              <Box className="content">
                <Box component="h3">Бонус</Box>
                <Box component="p">
                  Якщо Ваш товар виявиться актуальним , він зможе потрапити на
                  головну сторінку сайту у вигляді баннеру
                </Box>
              </Box>
            </Box>

            <Box component="li">
              <img src={boxPink} alt="Прозорість" />

              <Box className="content">
                <Box component="h3">Фінансова дисципліна</Box>
                <Box component="p">
                  Всі фінансові зобов’язання виконуються вчасно та у повному
                  обсязі
                </Box>
              </Box>
            </Box>
          </Box>

          <Box component="button" className="partnerButton c-fw-600">
            БІЛЬШЕ
          </Box>
        </Box>

        <Box component="section" id="contact" className="contactSection">
          <Box component="h2" className="sectionTitle c-font-raleway">
            ЗВ`ЯЗАТИСЬ З НАМИ
          </Box>

          <Box className="sectionDivider" />

          <Box component="form" className="contactForm">
            <Box
              component="h3"
              className="contactFormTitle c-font-montserrat c-fw-700"
            >
              ФОРМА ДЛЯ ЗВОРОТНЬОГО ЗВ`ЯЗКУ
            </Box>
            <Box
              component="p"
              className="contactFormText c-font-roboto c-fw-300"
            >
              Наші менеджери найближчим часом зв`яжуться з Вами!
            </Box>

            <Box className="contactInputWrapper">
              <Box
                component="p"
                className="c-font-roboto c-fw-300 contactLabel"
              >
                E-mail
              </Box>

              <input
                type="text"
                className="contactInput"
                placeholder="Your answer"
              />
            </Box>

            <Box className="contactInputWrapper">
              <Box
                component="p"
                className="c-font-roboto c-fw-300 contactLabel"
              >
                ПІБ
              </Box>

              <input
                type="text"
                className="contactInput"
                placeholder="Your answer"
              />
            </Box>

            <Box className="contactInputWrapper">
              <Box
                component="p"
                className="c-font-roboto c-fw-300 contactLabel"
              >
                Номер телeфону
              </Box>

              <input
                type="text"
                className="contactInput"
                placeholder="Your answer"
              />
            </Box>

            <Box className="contactInputWrapper">
              <Box
                component="p"
                className="c-font-roboto c-fw-300 contactLabel"
              >
                Питання, які Ви хочете обговoрити
              </Box>

              <input
                type="text"
                className="contactInput"
                placeholder="Your answer"
              />
            </Box>

            <Box className="contactFormBottomWrapper">
              <Box
                component="button"
                className="contactFormButton c-fw-600"
                type="submit"
              >
                НАДІСЛАТИ
              </Box>

              <Box className="contactFormLogo c-font-raleway c-fw-700">
                OnePrice
              </Box>
            </Box>
          </Box>
        </Box>

        <Icon
          name="footerDivider"
          width={360}
          height={3}
          className="footerDivider mobile"
        />

        <Box component="footer" className="footerNav desktop">
          <Box>
            <Box component="h2" className="logo" onClick={() => scrollTop()}>
              OnePrice
            </Box>
            <Box component="p" className="footerText">
              Великий вибір, маленькі ціни
            </Box>
          </Box>

          <Box component="nav" className="navigation desktop">
            <Box component="ul">
              <Box component="li" onClick={() => scrollTo("about")}>
                ПРО НАС
              </Box>
              <Box component="li" onClick={() => scrollTo("video")}>
                ВІДЕО
              </Box>
              <Box component="li" onClick={() => scrollTo("partner")}>
                СПІВПРАЦЯ
              </Box>
              <Box component="li" onClick={() => scrollTo("contact")}>
                ЗВ`ЯЗАТИСЬ
              </Box>

              <Box
                component="li"
                className="button c-fw-600"
                onClick={() => {
                  openForm();
                }}
              >
                СПІВПРАЦЮВАТИ
              </Box>
            </Box>

            <Icon name="footerDividerDesktop" width={669} height={4} />
          </Box>
        </Box>

        <Box component="footer" className="footer">
          <Box className="rights c-fw-500">© 2023 OnePrice</Box>
        </Box>
      </Wrapper>
      <MobileSidebar
        openForm={openForm}
        open={sidebarOpen}
        setOpen={setSidebarOpen}
      />
      <Form open={formOpen} onClose={closeForm} />
    </>
  );
}

export default App;
