import styled from "styled-components";
import { ProfileImage } from "../../atoms/img/ProfileImage";
import { ProfileCaption } from "../../atoms/text/ProfileCaption";
import { SecondaryButton } from '../../atoms/button/SecondaryButton';
import { memo, useContext } from "react";
import { UserContext } from '../../../providers/UserProvider';

export const UserIconWithName = memo((props) => {
  const { image, name } = props;
  const { userInfo } = useContext(UserContext);
  const isAdmin = userInfo ? userInfo.isAdmin : false;

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
});

const StyledContainer = styled.div`
  text-align: center;
`;
