import { useEffect } from "react";
import styled, { keyframes } from "styled-components";

interface LoadingProps {
  intro: boolean;
  setCard?: (card: boolean) => void;
  card?: boolean;
}

const Loading: React.FC<LoadingProps> = ({ intro, setCard, card }) => {
  useEffect(() => {
    if (!intro) {
      const f = setTimeout(() => {
        setCard!(true);
      }, 3000);

      return () => {
        clearTimeout(f);
      };
    }
  }, [intro]);

  return (
    <>
      <Wrapper>
        <TextWrapper data-visible={intro || card ? "none" : "visible"}>
          <FadeInDiv
            data-visible={intro || card ? "none" : "visible"}
            delay="0s"
          >
            Прищурь глаза!
          </FadeInDiv>
          <FadeInDiv
            data-visible={intro || card ? "none" : "visible"}
            delay="1s"
          >
            Улыбнись!
          </FadeInDiv>
          <br />
          <FadeInDiv
            data-visible={intro || card ? "none" : "visible"}
            delay="2s"
          >
            Сладкий чак-чак
            <br /> ждет тебя!!
          </FadeInDiv>
        </TextWrapper>
      </Wrapper>
      <Saidash data-visible={intro || card ? "none" : "visible"}></Saidash>
    </>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const FadeInDiv = styled.div<{ delay: string }>`
  &[data-visible="visible"] {
    animation: ${fadeIn} 1s ease forwards;
    animation-delay: ${(props) => props.delay};
    opacity: 0; // Start with opacity 0
  }

  &[data-visible="none"] {
    opacity: 0;
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

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  transform: translateY(100%);

  width: 100%;
  font-size: 1.5rem;
`;

const Saidash = styled.div`
  transition: all 0.3s ease-in-out;

  &[data-visible="none"] {
    transform: translateX(-100%);
  }

  &[data-visible="visible"] {
    transform: translateX(0);
  }

  position: fixed;
  bottom: 0;
  left: 0;

  width: 180px;

  &&::before {
    content: "";
    display: block;
    padding-bottom: 380%;

    background-image: url("/images/1.png");
    background-size: cover;
  }

  pointer-events: none;
`;

export default Loading;
