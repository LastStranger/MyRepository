import characters_json from "../data/characters.json";

export const createCharacter = (id) => {
    return characters_json.find(item => item.id === id);
};
