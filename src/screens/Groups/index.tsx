import { Highlight } from "@components/Highlight";
import { Container } from "./style";
import { Header } from "@components/Header";
import { GroupCard } from "@components/GroupCard";
import { useState } from "react";
import { FlatList } from "react-native";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";

export function Groups() {
  const [groups, setGroups] = useState<string[]>(["Hell Club"]);
  const navigation = useNavigation();

  const handleNewGroup = () => {
    navigation.navigate("groups");
  };

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar uma nova turma?" />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
      />
      <Button
        title="Criar nova turma"
        type="PRIMARY"
        onPress={handleNewGroup}
      />
    </Container>
  );
}
