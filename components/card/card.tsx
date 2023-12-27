import styled from "styled-components";
import roles from "../data/n.json";

interface CardProps {
  guest: string;
}

const Card: React.FC<CardProps> = ({ guest }) => {
  const role = roles.find((role) => role.guest === guest);

  return (
    <Wrapper>
      <CardWrapper>
        <div>{role?.label}</div>
        <div style={{ marginBottom: "30px" }}>{role?.style}</div>

        <Thumbs>
          <Thumb src={`/styles/${role?.id}/a.png`} />
          <Thumb src={`/styles/${role?.id}/b.png`} />
        </Thumbs>
      </CardWrapper>
    </Wrapper>
  );
};

const Thumbs = styled.div`
  display: flex;
  width: 100%;

  && > * + * {
    margin-left: 20px;
  }
`;

interface ThumbProps {
  src: string;
}

const Thumb = styled.div<ThumbProps>`
  width: 100%;

  &&::before {
    content: "";
    display: block;
    padding-top: 100%;
  }

  border-radius: 30px;
  background-color: #9f8cff;

  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
`;

const CardWrapper = styled.div`
  width: calc(100% - 60px - 60px);
  height: 300px;
  background-color: white;
  border-radius: 20px;
  border: 10px solid #9f8cff;

  padding: 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 400px;

  && * {
    margin-bottom: 20px;
    font-size: 1.5rem;
    font-weight: bold;
  }
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
