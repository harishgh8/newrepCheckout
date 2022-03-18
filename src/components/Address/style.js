import styled from "styled-components";
import { TextBox } from "@veneer/core";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  & > div {
    margin-bottom: 1rem;
  }
`;

export const Row = styled.div`
  display: flex;
  &>div: first-of-type {
    margin-right: 0.5rem;
  }
  &>div: last-of-type {
    margin-left: 0.5rem;
  }
`;

export const StyledColorBox = styled(TextBox)`
  && {
    input {
      color: red;
    }
  }
`;
