import styled from "styled-components";
import { ProfileImage } from "../../atoms/img/ProfileImage";
import { ProfileCaption } from "../../atoms/text/ProfileCaption";
import { SecondaryButton } from '../../atoms/button/SecondaryButton';

export const UserIconWithName = (props) => {
  const { image, name, isAdmin } = props;

  return (
    <StyledContainer>
      <ProfileImage
        height={160}
        width={160}
        name={name}
        image={image}
      />
      <ProfileCaption>{name}</ProfileCaption>
      { isAdmin && <SecondaryButton>編集</SecondaryButton> }
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  text-align: center;
`;
