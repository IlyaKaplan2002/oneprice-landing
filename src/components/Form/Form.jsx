import {
  Box,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Wrapper } from "./form.styled";
import { Icon } from "../Icon";
import { MuiFileInput } from "mui-file-input";

const Form = ({ open, onClose }) => {
  return (
    <Wrapper open={open}>
      <Box component="form" className="modal" id="modal">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={4}
        >
          <Box component="h2" className="logo c-font-raleway c-fw-700">
            OnePrice
          </Box>
          <Icon name="menuClose" className="close" onClick={onClose} />
        </Box>

        <Box
          display="flex"
          alignItems="flex-start"
          mb="10px"
          component="label"
          style={{ cursor: "pointer" }}
          className="checkbox"
        >
          <Checkbox
            sx={{
              padding: 0,
              mr: 1,
              color: "#A7F306",
              "&.Mui-checked": {
                color: "#A7F306",
              },
            }}
          />
          Даю згоду на обробку персональних даних
        </Box>

        <Box className="inputWrapper">
          <Box className="label">Назва підприємства</Box>
          <input type="text" className="input" placeholder="Your answer" />
        </Box>

        <Box className="inputWrapper">
          <Box className="label">Код ЄДРПОУ</Box>
          <input type="text" className="input" placeholder="Your answer" />
        </Box>

        <Box className="inputWrapper">
          <Box className="label">Місто і область</Box>
          <input type="text" className="input" placeholder="Your answer" />
        </Box>

        <Box className="inputWrapper">
          <Box className="label">Державна реєстрація</Box>
          <RadioGroup
          //   value={value}
          // onChange={handleChange}
          >
            <Box
              sx={{ fontSize: "16px", mb: 1, display: "block" }}
              component="label"
            >
              <FormControlLabel
                value={"ТОВ з ПДВ"}
                sx={{ m: 0, p: 0 }}
                control={
                  <Radio
                    sx={{
                      color: "#a7f306",
                      p: 0,
                      mr: 1,
                      "&.Mui-checked": {
                        color: "#a7f306",
                      },
                    }}
                  />
                }
              />
              ТОВ з ПДВ
            </Box>

            <Box
              sx={{ fontSize: "16px", mb: 1, display: "block" }}
              component="label"
            >
              <FormControlLabel
                value={"ФОП з ПДВ"}
                sx={{ m: 0, p: 0 }}
                control={
                  <Radio
                    sx={{
                      color: "#a7f306",
                      p: 0,
                      mr: 1,
                      "&.Mui-checked": {
                        color: "#a7f306",
                      },
                    }}
                  />
                }
              />
              ФОП з ПДВ
            </Box>

            <Box
              sx={{ fontSize: "16px", mb: 1, display: "block" }}
              component="label"
            >
              <FormControlLabel
                value={"ПП з ПДВ"}
                sx={{ m: 0, p: 0 }}
                control={
                  <Radio
                    sx={{
                      color: "#a7f306",
                      p: 0,
                      mr: 1,
                      "&.Mui-checked": {
                        color: "#a7f306",
                      },
                    }}
                  />
                }
              />
              ПП з ПДВ
            </Box>

            <Box
              sx={{ fontSize: "16px", mb: 1, display: "block" }}
              component="label"
            >
              <FormControlLabel
                value={"ФОП без ПДВ (не працюємо)"}
                sx={{ m: 0, p: 0 }}
                control={
                  <Radio
                    sx={{
                      color: "#a7f306",
                      p: 0,
                      mr: 1,
                      "&.Mui-checked": {
                        color: "#a7f306",
                      },
                    }}
                  />
                }
              />
              ФОП без ПДВ (не працюємо)
            </Box>

            <input
              type="text"
              className="input"
              placeholder="Індивідуальний номер платника ПДВ"
            />
          </RadioGroup>
        </Box>

        <Box className="inputWrapper">
          <Box className="label">Вид діяльності</Box>
          <RadioGroup
          //   value={value}
          // onChange={handleChange}
          >
            <Box
              sx={{ fontSize: "16px", mb: 1, display: "block" }}
              component="label"
            >
              <FormControlLabel
                value={"Трейдер"}
                sx={{ m: 0, p: 0 }}
                control={
                  <Radio
                    sx={{
                      color: "#a7f306",
                      p: 0,
                      mr: 1,
                      "&.Mui-checked": {
                        color: "#a7f306",
                      },
                    }}
                  />
                }
              />
              Трейдер
            </Box>

            <Box
              sx={{ fontSize: "16px", mb: 1, display: "block" }}
              component="label"
            >
              <FormControlLabel
                value={"Виробник"}
                sx={{ m: 0, p: 0 }}
                control={
                  <Radio
                    sx={{
                      color: "#a7f306",
                      p: 0,
                      mr: 1,
                      "&.Mui-checked": {
                        color: "#a7f306",
                      },
                    }}
                  />
                }
              />
              Виробник
            </Box>
            <Box
              sx={{ fontSize: "16px", mb: 1, display: "block" }}
              component="label"
            >
              <FormControlLabel
                value={"Дистриб’ютор"}
                sx={{ m: 0, p: 0 }}
                control={
                  <Radio
                    sx={{
                      color: "#a7f306",
                      p: 0,
                      mr: 1,
                      "&.Mui-checked": {
                        color: "#a7f306",
                      },
                    }}
                  />
                }
              />
              Дистриб’ютор
            </Box>
            <Box sx={{ fontSize: "16px", display: "block" }} component="label">
              <FormControlLabel
                value={"Імпортер"}
                sx={{ m: 0, p: 0 }}
                control={
                  <Radio
                    sx={{
                      color: "#a7f306",
                      p: 0,
                      mr: 1,
                      "&.Mui-checked": {
                        color: "#a7f306",
                      },
                    }}
                  />
                }
              />
              Імпортер
            </Box>
          </RadioGroup>
        </Box>

        <Box className="inputWrapper">
          <Box className="label">Торгові марки, які Ви представляєте</Box>
          <input type="text" className="input" placeholder="Your answer" />
        </Box>

        <Box className="inputWrapper">
          <Box className="label">Сайт</Box>
          <input type="text" className="input" placeholder="Your answer" />
        </Box>

        <Box className="inputWrapper">
          <Box className="label">Послуги, які надаєте </Box>
          <RadioGroup
          //   value={value}
          // onChange={handleChange}
          >
            <Box
              sx={{ fontSize: "16px", mb: 1, display: "block" }}
              component="label"
            >
              <FormControlLabel
                value={"Відстрочка платежу"}
                sx={{ m: 0, p: 0 }}
                control={
                  <Radio
                    sx={{
                      color: "#a7f306",
                      p: 0,
                      mr: 1,
                      "&.Mui-checked": {
                        color: "#a7f306",
                      },
                    }}
                  />
                }
              />
              Відстрочка платежу
            </Box>

            <Box
              sx={{ fontSize: "16px", mb: 1, display: "block" }}
              component="label"
            >
              <FormControlLabel
                value={"Гарантія на товар"}
                sx={{ m: 0, p: 0 }}
                control={
                  <Radio
                    sx={{
                      color: "#a7f306",
                      p: 0,
                      mr: 1,
                      "&.Mui-checked": {
                        color: "#a7f306",
                      },
                    }}
                  />
                }
              />
              Гарантія на товар
            </Box>
            <Box
              sx={{ fontSize: "16px", mb: 1, display: "block" }}
              component="label"
            >
              <FormControlLabel
                value={"Обмін"}
                sx={{ m: 0, p: 0 }}
                control={
                  <Radio
                    sx={{
                      color: "#a7f306",
                      p: 0,
                      mr: 1,
                      "&.Mui-checked": {
                        color: "#a7f306",
                      },
                    }}
                  />
                }
              />
              Обмін
            </Box>
            <Box
              sx={{ fontSize: "16px", mb: 1, display: "block" }}
              component="label"
            >
              <FormControlLabel
                value={"Доставка"}
                sx={{ m: 0, p: 0 }}
                control={
                  <Radio
                    sx={{
                      color: "#a7f306",
                      p: 0,
                      mr: 1,
                      "&.Mui-checked": {
                        color: "#a7f306",
                      },
                    }}
                  />
                }
              />
              Доставка
            </Box>
            <Box
              sx={{ fontSize: "16px", mb: 1, display: "block" }}
              component="label"
            >
              <FormControlLabel
                value={"Сертифікати"}
                sx={{ m: 0, p: 0 }}
                control={
                  <Radio
                    sx={{
                      color: "#a7f306",
                      p: 0,
                      mr: 1,
                      "&.Mui-checked": {
                        color: "#a7f306",
                      },
                    }}
                  />
                }
              />
              Сертифікати
            </Box>
            <Box
              sx={{ fontSize: "16px", mb: 1, display: "block" }}
              component="label"
            >
              <FormControlLabel
                value={"Ретро бонуси"}
                sx={{ m: 0, p: 0 }}
                control={
                  <Radio
                    sx={{
                      color: "#a7f306",
                      p: 0,
                      mr: 1,
                      "&.Mui-checked": {
                        color: "#a7f306",
                      },
                    }}
                  />
                }
              />
              Ретро бонуси
            </Box>
            <Box sx={{ fontSize: "16px", display: "block" }} component="label">
              <FormControlLabel
                value={"Інші бонуси"}
                sx={{ m: 0, p: 0 }}
                control={
                  <Radio
                    sx={{
                      color: "#a7f306",
                      p: 0,
                      mr: 1,
                      "&.Mui-checked": {
                        color: "#a7f306",
                      },
                    }}
                  />
                }
              />
              Інші бонуси
            </Box>
          </RadioGroup>
        </Box>

        <Box className="inputWrapper">
          <Box className="label">ПІБ заповнювача</Box>
          <input type="text" className="input" placeholder="Your answer" />
        </Box>

        <Box className="inputWrapper">
          <Box className="label">Посада заповнювача</Box>
          <input type="text" className="input" placeholder="Your answer" />
        </Box>

        <Box className="inputWrapper">
          <Box className="label">E-mail</Box>
          <input type="text" className="input" placeholder="Your answer" />
        </Box>

        <Box className="inputWrapper">
          <Box className="label">Номер телефону</Box>
          <input type="text" className="input" placeholder="Your answer" />
        </Box>

        <Box className="inputWrapper">
          <Box className="label">Ваші додаткові коментарі</Box>
          <input type="text" className="input" placeholder="Your answer" />
        </Box>

        <Box className="inputWrapper">
          <Box className="label">Ваші додаткові коментарі</Box>
          <input type="text" className="input" placeholder="Your answer" />
        </Box>

        <Box className="inputWrapper">
          <Box className="label">
            Додайте установчі документи, копії сертифікатів та ліцензії на 5
            ходових позицій
          </Box>
          <MuiFileInput
            className="fileInput"
            placeholder="Insert a file"
            value={[
              new File(["foo"], "foo.txt", {
                type: "text/plain",
              }),
              new File(["foo"], "foo.txt", {
                type: "text/plain",
              }),
            ]}
            multiple
            // onChange={handleChange}
            hideSizeText
          />
        </Box>

        <Box className="inputWrapper">
          <Box className="label">Додайте прайс та каталог товарів</Box>
          <MuiFileInput
            className="fileInput"
            placeholder="Insert a file"
            value={[
              new File(["foo"], "foo.txt", {
                type: "text/plain",
              }),
              new File(["foo"], "foo.txt", {
                type: "text/plain",
              }),
            ]}
            multiple
            // onChange={handleChange}
            hideSizeText
          />
        </Box>

        <Box component="button" type="submit" className="formButton hover">
          Надіслати
        </Box>
      </Box>
    </Wrapper>
  );
};

export default Form;
