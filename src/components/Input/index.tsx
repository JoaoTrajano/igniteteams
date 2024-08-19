import { Container } from "./style";
import { TextInputProps } from "react-native";

export function Input({ ...rest }: TextInputProps) {
  return <Container {...rest} />;
}
