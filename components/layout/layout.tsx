import styled from "styled-components";
import { Button, Form, Select } from "antd";
import Loading from "../loading/loading";
import { useState } from "react";
import Card from "../card/card";

import roles from "../data/n.json";

import _ from "lodash";

const options = [
  { value: "no", label: "— Выберите гостя —" },
  ...roles.map((role) => ({ value: role.guest, label: role.label })),
];

const Layout = () => {
  const [intro, setIntro] = useState(true);
  const [card, setCard] = useState(false);

  const [guest, setGuest] = useState<string | null>(null);

  /* // Shuffle roles
  const shuffledRoles = _.shuffle(roles);

  // Assign roles to people
  const assignedRoles = [...options]
    .filter((a) => a.value !== "no")
    .map((person, index) => {
      // If there are more people than roles, some people will not get a role
      if (index < shuffledRoles.length) {
        return { person: person.label, role: shuffledRoles[index].style };
      } else {
        return { person: person.label, role: null };
      }
    }); */

  const onGuestSelect = (e: any) => {
    setIntro(false);
    setGuest(e.guest);
  };

  return (
    <>
      {card && guest && <Card guest={guest} />}

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

  pointer-events: none;
`;

const SelectWrapper = styled.div`
  transition: opacity 0.3s ease-in-out;

  &[data-visible="none"] {
    opacity: 0;
    pointer-events: none;
  }

  &[data-visible="visible"] {
    opacity: 1;
    pointer-events: all;
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
