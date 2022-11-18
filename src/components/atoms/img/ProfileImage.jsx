import styled from "styled-components";

export const ProfileImage = (props) => {
  const { height, width, name, image } = props;
  return (
    <StyledProfileImage
      height={height}
      width={width}
      alt={name}
      src={image}
    />
  );
}

const StyledProfileImage = styled.img`
  border-radius: 50%;
`;
