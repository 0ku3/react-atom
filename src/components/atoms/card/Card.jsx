import styled from "styled-components";

export const Card = (props) => {
  const { children } = props;
  return <div>{children}</div>;
};

const SCard = styled.div`
  background-color: #fff;
`;
