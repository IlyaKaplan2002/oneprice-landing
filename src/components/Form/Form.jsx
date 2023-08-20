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
import { useFormik } from "formik";
import { array, boolean, object, string } from "yup";
import classNames from "classnames";
import { useCallback } from "react";
import axios from "axios";

const schema = object({
  name: string().required(),
  codeEDRPO: string().required(),
  place: string().required(),
  registration: string().required(),
  individualNumberPdv: string().required(),
  activityType: string().required(),
  salesMarks: string().required(),
  website: string().required(),
  services: string().required(),
  pib: string().required(),
  role: string().required(),
  email: string().email().required(),
  phone: string().required(),
  comments: string(),
  agree: boolean().isTrue(),
  certificates: array().required().min(1),
  prices: array().required().min(1),
});

const initialValues = {
  name: "",
  codeEDRPO: "",
  place: "",
  registration: "ТОВ з ПДВ",
  individualNumberPdv: "",
  activityType: "Трейдер",
  salesMarks: "",
  website: "",
  services: "Відстрочка платежу",
  pib: "",
  role: "",
  email: "",
  phone: "",
  comments: "",
  agree: false,
  certificates: [],
  prices: [],
};
const initialErrors = {
  name: "",
  codeEDRPO: "",
  place: "",
  registration: "",
  individualNumberPdv: "",
  activityType: "",
  salesMarks: "",
  website: "",
  services: "",
  pib: "",
  role: "",
  email: "",
  phone: "",
  comments: "",
  agree: "",
  certificates: "",
  prices: "",
};

const Form = ({ open, onClose }) => {
  const handleSubmit = useCallback(
    async (data, formikHelpers) => {
      const formData = Object.entries(data).reduce((acc, [key, value]) => {
        if (key === "agree") return acc;
        if (key === "certificates" || key === "prices") {
          value.forEach((item) => {
            acc.append(key, item);
          });

          return acc;
        }
        acc.append(key, value);

        return acc;
      }, new FormData());

      await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/suppliers`,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });

      formikHelpers.resetForm();
      onClose();
    },
    [onClose]
  );

  const formik = useFormik({
    validateOnBlur: true,
    initialValues,
    initialErrors,
    validateOnChange: true,
    validationSchema: schema,
    onSubmit: handleSubmit,
  });

  return (
    <Wrapper open={open}>
      <Box
        component="form"
        className="modal"
        id="modal"
        onSubmit={formik.handleSubmit}
      >
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
            value={formik.values.agree}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="agree"
            sx={{
              padding: 0,
              mr: 1,
              color: formik.errors.agree ? "red" : "#A7F306",
              "&.Mui-checked": {
                color: "#A7F306",
              },
            }}
          />
          Даю згоду на обробку персональних даних
        </Box>

        <Box className="inputWrapper">
          <Box className="label">Назва підприємства</Box>
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={classNames("input", { error: formik.errors.name })}
            placeholder="Your answer"
          />
        </Box>

        <Box className="inputWrapper">
          <Box className="label">Код ЄДРПОУ</Box>
          <input
            type="text"
            name="codeEDRPO"
            value={formik.values.codeEDRPO}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={classNames("input", { error: formik.errors.codeEDRPO })}
            placeholder="Your answer"
          />
        </Box>

        <Box className="inputWrapper">
          <Box className="label">Місто і область</Box>
          <input
            type="text"
            name="place"
            value={formik.values.place}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={classNames("input", { error: formik.errors.place })}
            placeholder="Your answer"
          />
        </Box>

        <Box className="inputWrapper">
          <Box className="label">Державна реєстрація</Box>
          <RadioGroup
            name="registration"
            value={formik.values.registration}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
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
              name="individualNumberPdv"
              value={formik.values.individualNumberPdv}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={classNames("input", {
                error: formik.errors.individualNumberPdv,
              })}
              placeholder="Індивідуальний номер платника ПДВ"
            />
          </RadioGroup>
        </Box>

        <Box className="inputWrapper">
          <Box className="label">Вид діяльності</Box>
          <RadioGroup
            name="activityType"
            value={formik.values.activityType}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
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
          <input
            type="text"
            name="salesMarks"
            value={formik.values.salesMarks}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={classNames("input", { error: formik.errors.salesMarks })}
            placeholder="Your answer"
          />
        </Box>

        <Box className="inputWrapper">
          <Box className="label">Сайт</Box>
          <input
            type="text"
            name="website"
            value={formik.values.website}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={classNames("input", { error: formik.errors.website })}
            placeholder="Your answer"
          />
        </Box>

        <Box className="inputWrapper">
          <Box className="label">Послуги, які надаєте </Box>
          <RadioGroup
            name="services"
            value={formik.values.services}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
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
          <input
            type="text"
            name="pib"
            value={formik.values.pib}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={classNames("input", { error: formik.errors.pib })}
            placeholder="Your answer"
          />
        </Box>

        <Box className="inputWrapper">
          <Box className="label">Посада заповнювача</Box>
          <input
            type="text"
            name="role"
            value={formik.values.role}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={classNames("input", { error: formik.errors.role })}
            placeholder="Your answer"
          />
        </Box>

        <Box className="inputWrapper">
          <Box className="label">E-mail</Box>
          <input
            type="text"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={classNames("input", { error: formik.errors.email })}
            placeholder="Your answer"
          />
        </Box>

        <Box className="inputWrapper">
          <Box className="label">Номер телефону</Box>
          <input
            type="text"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={classNames("input", { error: formik.errors.phone })}
            placeholder="Your answer"
          />
        </Box>

        <Box className="inputWrapper">
          <Box className="label">Ваші додаткові коментарі</Box>
          <input
            type="text"
            name="comments"
            value={formik.values.comments}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={classNames("input", { error: formik.errors.comments })}
            placeholder="Your answer"
          />
        </Box>

        <Box className="inputWrapper">
          <Box className="label">
            Додайте установчі документи, копії сертифікатів та ліцензії на 5
            ходових позицій
          </Box>
          <MuiFileInput
            className="fileInput"
            placeholder="Insert a file"
            value={formik.values.certificates}
            multiple
            onChange={(val) => {
              formik.setFieldValue(
                "certificates",
                val.length ? [...formik.values.certificates, ...val] : []
              );
            }}
            hideSizeText
          />
        </Box>

        <Box className="inputWrapper">
          <Box className="label">Додайте прайс та каталог товарів</Box>
          <MuiFileInput
            className="fileInput"
            placeholder="Insert a file"
            value={formik.values.prices}
            multiple
            onChange={(val) => {
              formik.setFieldValue(
                "prices",
                val.length ? [...formik.values.prices, ...val] : []
              );
            }}
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
