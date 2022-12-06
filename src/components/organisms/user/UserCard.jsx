import { memo } from "react";
import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";

export const UserCard = memo((props) => {
  const { user } = props;

  return (
    <Card>
      <UserIconWithName image={user.image} name={user.name} />
      <StyledDl>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>Tel</dt>
        <dd>{user.tel}</dd>
        <dt>会社名</dt>
        <dd>{user.company.name}</dd>
        <dt>Web</dt>
        <dd><a href={user.website}>{user.website}</a></dd>
      </StyledDl>
    </Card>
  );
});

const StyledDl = styled.dl`
  margin-bottom: 0;
  text-align: left;
  dt {
    float: left;
  }
  dd {
    overflow-wrap: break-word;
    padding-left: 32px;
    padding-bottom: 8px;
  }
`;
