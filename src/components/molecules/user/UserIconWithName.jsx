import styled from "styled-components";
import { ProfileImage } from "../../atoms/img/ProfileImage";
import { ProfileCaption } from "../../atoms/text/ProfileCaption";

export const UserIconWithName = (props) => {
  const { image, name } = props;

  return (
    <StyledContainer>
      <ProfileImage
        height={160}
        width={160}
        name={name}
        image={image}
      />
      <ProfileCaption>{name}</ProfileCaption>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  text-align: center;
`;
