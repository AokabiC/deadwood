import styled from "@emotion/styled";

type Props = {
  fontSize: number;
};

const Button: React.FC<Props> = styled.button(
  {
    color: "darkorchid",
  },
  (props) => ({
    fontSize: props.fontSize,
  })
);

export { Button };
