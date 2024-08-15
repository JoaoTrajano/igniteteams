import { Highlight } from "@components/Highlight";
import { Container } from "./style";
import { Header } from "@components/Header";
import { GroupCard } from "@components/GroupCard";

export default function Groups() {
  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
      <GroupCard title="Galera do Ignite" />
    </Container>
  );
}
