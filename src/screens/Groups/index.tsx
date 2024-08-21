import { useCallback, useState } from "react";
import { FlatList } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { Container } from "./style";

import { getAllGroups } from "@storage/group/getAllGroups";

import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { ListEmpty } from "@components/ListEmpty";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);
  const navigation = useNavigation();

  const handleNewGroup = () => {
    navigation.navigate("new");
  };

  const handlePalyers = (group: string) => {
    navigation.navigate("players", { group });
  };

  const fetchGroups = async () => {
    try {
      const data = await getAllGroups();
      setGroups(data);
    } catch (error) {}
  };

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, []),
  );

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupCard title={item} onPress={() => handlePalyers(item)} />
        )}
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
