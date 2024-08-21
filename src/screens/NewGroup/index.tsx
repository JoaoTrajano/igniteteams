import { Header } from "@components/Header";
import { Container, Content, Icon } from "./style";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { groupCreate } from "@storage/group/createNewGroup";
import { AppError } from "@utils/AppError";
import { Alert } from "react-native";

export function NewGroup() {
  const [group, setGroup] = useState<string>("");

  const navigation = useNavigation();

  const handleNewGroup = async () => {
    try {
      if (group.trim().length === 0) {
        Alert.alert("Novo grupo", "Informe o nome da turma.");
        return;
      }

      await groupCreate(group);
      navigation.navigate("players", { group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo grupo", error.message);
        return;
      }

      Alert.alert("Novo grupo", "Não foi possível cadastrar um novo grupo");
    }
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
        <Input
          placeholder="Nome da turma"
          style={{ marginBottom: 20 }}
          onChangeText={setGroup}
        />
        <Button title="Criar" onPress={handleNewGroup} />
      </Content>
    </Container>
  );
}
