import styled from "styled-components";

const Card = () => {
  return (
    <Wrapper>
      <CardWrapper>
        <h2>Card</h2>
      </CardWrapper>
    </Wrapper>
  );
};

const CardWrapper = styled.div`
  width: calc(100% - 60px);
  height: 300px;
  background-color: lightgrey;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Card;
