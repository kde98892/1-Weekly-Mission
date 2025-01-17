import styled from "styled-components";
import ModalInput from "../ModalInput";
import CTA from "../CTA";
import * as React from "react";

interface Props {
  title: string;
}

function EditModal({ title }: Props) {
  return (
    <Container>
      <CustomInput />
      <CustomCTA modal={title}>{title}</CustomCTA>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.4rem;
  gap: 1.5rem;
`;

const CustomInput = styled(ModalInput)`
  width: 28rem;
`;

const CustomCTA = styled(CTA)`
  width: 28rem;
`;

export default EditModal;
