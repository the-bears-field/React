import styled from "styled-components";
import { Copyright } from "../text/Copyright";

export const Footer = () => {
  return (
    <StyledFooter>
      <Copyright className="copyright">
        ©2022 John Smith
      </Copyright>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background-color: gray;
  position: absolute;
  bottom: 0;
  width: 100%;
`;
