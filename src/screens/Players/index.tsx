import { useState } from "react";

import { Header } from "@components/Header";
import { Container, Form, HeaderList, NumberOfPlayers } from "./style";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { FlatList } from "react-native";

export function Players() {
  const [team, setTeam] = useState<string>("Time A");
  const [players, setPlayers] = useState<string[]>(["João Trajano"]);

  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title="Nome da Turma"
        subtitle="adicione a galera e separe os times"
      />
      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>
      <HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>
    </Container>
  );
}
