import styled from "styled-components";
import { Button, Form, Select } from "antd";
import Loading from "../loading/loading";
import { useState } from "react";
import Card from "../card/card";

const options = [
  { value: "no", label: "— Выберите гостя —" },
  { value: "ilia", label: "Илья" },
  { value: "yurii", label: "Юра" },
  { value: "kristina", label: "Кристина" },
  { value: "jenya", label: "Женя" },
  { value: "ksyusha", label: "Ксюша" },
  { value: "saidash", label: "Сайдаш" },
  { value: "polina", label: "Полина" },
  { value: "kesha", label: "Кеша" },
  { value: "andrei", label: "Андрей" },
  { value: "ulyana", label: "Ульяна" },
];

const Layout = () => {
  const [intro, setIntro] = useState(true);
  const [card, setCard] = useState(false);

  const onGuestSelect = (e: any) => {
    setIntro(false);
  };

  return (
    <>
      {card && <Card />}

      <Loading intro={intro} setCard={setCard} card={card} />

      <Wrapper>
        <SelectWrapper data-visible={intro ? "visible" : "none"}>
          <Form onFinish={onGuestSelect}>
            <div style={{ marginBottom: "18px" }}>Выберите гостя</div>

            <Form.Item name="guest">
              <Select
                defaultValue="no"
                style={{ width: "100%", height: "80px" }}
                options={options}
              />
            </Form.Item>

            <Form.Item>
              <Button htmlType="submit">Вперед!</Button>
            </Form.Item>
          </Form>
        </SelectWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const SelectWrapper = styled.div`
  transition: opacity 0.3s ease-in-out;

  &[data-visible="none"] {
    opacity: 0;
  }

  &[data-visible="visible"] {
    opacity: 1;
  }

  & {
    width: calc(100% - 80px);
    padding: 0 40px;
    max-width: 400px;

    display: flex;
    flex-direction: column;

    &,
    & * {
      font-size: 1rem;
    }

    & .ant-btn {
      width: 100%;
      height: 150px;
      background-color: #e84330;
      border: none;

      &,
      & * {
        color: white !important;
        font-size: 1.5rem;
      }
    }
  }
`;

export default Layout;
