import classnames from "classnames";
import styled from "@emotion/styled";

export const Icon = ({
  name,
  size,
  height,
  className,
  width,
  style,
  onClick,
  color,
  id,
}) => {
  const vSize = size ? `${size}px` : "20px";
  const vHeight = `${height}px`;
  const vWidth = `${width}px`;

  return (
    <StyledSvg
      className={classnames(className, "c-icon")}
      style={{
        ...style,
        width: width ? vWidth : vSize,
        height: height ? vHeight : vSize,
        color,
      }}
      onClick={onClick}
      id={id}
    >
      <use xlinkHref={`#${name}`} id={id} />
    </StyledSvg>
  );
};

const StyledSvg = styled.svg`
  transition: fill 0.2s;
`;
