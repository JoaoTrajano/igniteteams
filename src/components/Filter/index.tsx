import { TouchableHighlightProps } from "react-native";

import { Container, Title, FilterStyleProps } from "./style";

type Props = TouchableHighlightProps &
  FilterStyleProps & {
    title: string;
  };

export function Filter({ title, isActive = false, ...rest }: Props) {
  return (
    <Container isActive={isActive} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
