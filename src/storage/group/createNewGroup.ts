import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAllGroups } from "@storage/group/getAllGroups";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";

export async function groupCreate(newGroup: string) {
  try {
    const storedGroups = await getAllGroups();

    const hasGroup = storedGroups.includes(newGroup);
    if (hasGroup)
      throw new AppError("Já existe uma turma com esse nome cadastrada.");

    storedGroups.push(newGroup);

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(storedGroups));
  } catch (error) {
    throw error;
  }
}
