import { Header } from "@components/Header";
import { Container, Content, Icon } from "./style";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";

export function NewGroup() {
  const navigation = useNavigation();

  const handleNewGroup = () => {
    navigation.navigate("players", { group: "Hell Fire" });
  };
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar pessoas"
        />
        <Input placeholder="Nome da turma" style={{ marginBottom: 20 }} />
        <Button title="Criar" onPress={handleNewGroup} />
      </Content>
    </Container>
  );
}
