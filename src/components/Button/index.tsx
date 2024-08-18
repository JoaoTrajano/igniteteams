import { Container, Title, ButtonTypeStyleProps } from "./style";

import { TouchableHighlightProps } from "react-native";

type Props = TouchableHighlightProps & {
  title: string;
  type?: ButtonTypeStyleProps;
};

export function Button({ title, type = "PRIMARY", ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
