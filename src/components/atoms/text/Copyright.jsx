import styled from "styled-components";
import { DefaultParagraph } from "./DefaultParagraph";

export const Copyright = (props) => {
  const { children, className } = props;

  return (
    <StyledCopyright
      className={className}
    >
      {children}
    </StyledCopyright>
  );
}

const StyledCopyright = styled(DefaultParagraph)`
  color: ghostwhite;
  width: 100vw;
  height: auto;
  margin: 16px auto;
  text-align: center;
`;
