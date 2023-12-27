import styled from "styled-components";
import roles from "../data/n.json";
import { Button } from "antd";
import { useState } from "react";

interface CardProps {
  guest: string;
}

function Poem({ poemText }: any) {
  // Разбиваем текст на абзацы по двойному переносу строк
  const paragraphs = poemText.split("\n\n");

  const formattedPoem = paragraphs.map(
    (paragraph: any, paragraphIndex: any) => (
      // Для каждого абзаца разбиваем его на строки
      <div key={paragraphIndex} style={{ marginBottom: "16px" }}>
        {paragraph.split("\n").map((line: any, lineIndex: any) => (
          // Оборачиваем каждую строку в блок <div> с заданным стилем
          <div
            style={{
              fontSize: "12px",
              marginBottom: "0px",
              fontWeight: "normal",
            }}
            key={lineIndex}
          >
            {line}
          </div>
        ))}
      </div>
    )
  );

  return <div>{formattedPoem}</div>;
}

const Card: React.FC<CardProps> = ({ guest }) => {
  const role = roles.find((role) => role.guest === guest);

  const [isPoemVisible, setIsPoemVisible] = useState(false);

  console.log("role?.poem.content", role?.poem.content);

  return (
    <Wrapper>
      <CardWrapper>
        <div>{role?.label}</div>
        {!isPoemVisible && (
          <div style={{ marginBottom: "30px" }}>{role?.style}</div>
        )}

        {!isPoemVisible && (
          <>
            <Thumbs>
              <Thumb src={`/styles/${role?.id}/a.png`} />
              <Thumb src={`/styles/${role?.id}/b.png`} />
            </Thumbs>
          </>
        )}

        {isPoemVisible && <Poem poemText={role?.poem.content} />}

        {!isPoemVisible && (
          <div className="ant-btn" onClick={() => setIsPoemVisible(true)}>
            Прочитать стишок {role?.poem.title}
          </div>
        )}

        {isPoemVisible && (
          <div className="ant-btn" onClick={() => setIsPoemVisible(false)}>
            Назад
          </div>
        )}
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
  min-height: 300px;
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

  &&&&&&& .ant-btn {
    background-color: #9f8cff;
    padding: 20px 10px 20px 10px;
    border-radius: 20px;

    &,
    & * {
      font-size: 0.8rem !important;
      color: white !important;
    }
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
