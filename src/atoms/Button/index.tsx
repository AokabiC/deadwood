import * as Styled from "./styled";

type Props = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<Props> = (props) => (
  <Styled.Button onClick={props.onClick}>{props.children}</Styled.Button>
);

export { Button };
