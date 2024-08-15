import { Container, Logo } from "./style";
import logoImg from "@assets/Logo.png";

export function Header() {
  return (
    <Container>
      <Logo source={logoImg} />
    </Container>
  );
}
