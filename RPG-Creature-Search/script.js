const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const creatureName = document.getElementById("creature-name");
const creatureId = document.getElementById("creature-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");

function clearUI() {
  creatureName.textContent = "";
  creatureId.textContent = "";
  weight.textContent = "";
  height.textContent = "";
  types.innerHTML = "";
  hp.textContent = "";
  attack.textContent = "";
  defense.textContent = "";
  specialAttack.textContent = "";
  specialDefense.textContent = "";
  speed.textContent = "";
}

function renderTypes(typeArray) {
  types.innerHTML = "";
  if (!Array.isArray(typeArray)) return;
  typeArray.forEach(typeObj => {
    if (typeObj && (typeObj.type?.name || typeObj.name)) {
      const typeDiv = document.createElement("div");
      typeDiv.textContent = (typeObj.type?.name || typeObj.name).toUpperCase();
      types.appendChild(typeDiv);
    }
  });
}

function renderCreature(data) {
  creatureName.textContent = data && data.name ? data.name.toUpperCase() : "";
  creatureId.textContent = data && data.id ? `#${data.id}` : "";
  weight.textContent = data && data.weight !== undefined ? `Weight: ${data.weight}` : "";
  height.textContent = data && data.height !== undefined ? `Height: ${data.height}` : "";
  renderTypes(Array.isArray(data && data.types) ? data.types : []);
  if (Array.isArray(data && data.stats) && data.stats.length > 0) {
    let statMap = {};
    data.stats.forEach(s => {
      if (s && typeof s.name === "string") {
        statMap[s.name.toLowerCase()] = s.base_stat;
      }
    });
    hp.textContent = statMap["hp"] ?? "";
    attack.textContent = statMap["attack"] ?? "";
    defense.textContent = statMap["defense"] ?? "";
    specialAttack.textContent = statMap["special-attack"] ?? "";
    specialDefense.textContent = statMap["special-defense"] ?? "";
    speed.textContent = statMap["speed"] ?? "";
  } else {
    hp.textContent = "";
    attack.textContent = "";
    defense.textContent = "";
    specialAttack.textContent = "";
    specialDefense.textContent = "";
    speed.textContent = "";
  }
}

async function searchCreature(query) {
  try {
    const res = await fetch(`https://rpg-creature-api.freecodecamp.rocks/api/creature/${query}`);
    if (!res.ok) return null;
    return await res.json();
  } catch {
    console.error("Error fetching data:", error);
    return null;
  }
}

async function checkSearch() {
  const query = searchInput.value.trim();
  clearUI();
  if (!query) return;
  const apiQuery = isNaN(query) ? query.toLowerCase() : query;
  const data = await searchCreature(apiQuery);
  if (!data || typeof data !== "object" || !Array.isArray(data.stats) || !Array.isArray(data.types)) {
    alert("Creature not found");
    return;
  }
  renderCreature(data);
}

searchButton.addEventListener("click", checkSearch);