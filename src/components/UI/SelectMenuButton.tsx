import styled from "styled-components";
import ModalBox from "../modal/ModalBox";
import { useState } from "react";
import * as React from "react";

interface props {
  children: React.ReactNode;
  modal: string;
  link: string;
}

function SelectMenuButton({ children, modal, link }: props) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handelClick = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <>
      <SelectButton onClick={handelClick}>
        <p>{children}</p>
      </SelectButton>
      {isModalVisible && <ModalBox modal={modal} link={link} closeModal={handelClick} />}
    </>
  );
}

export default SelectMenuButton;

const SelectButton = styled.div`
  display: flex;
  padding: 0.7rem 1.2rem;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  background-color: var(--white);
  width: 10rem;

  p {
    justify-content: center;
    display: inline;
  }

  &:hover {
    background-color: var(--gray10);
    p {
      color: var(--primary);
    }
  }
`;
