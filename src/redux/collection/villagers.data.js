import villagers from './processedJSData/Villagers';
import specialNPCs from './processedJSData/Special NPCs';

const VILLAGERS_DATA = [
  {
    "items": specialNPCs,
    "tags": "NPCs",
    "category": "villagerNPCs"
  },
  {
    "items": villagers,
    "category": "villagers",
    "tags": "villagers"
  }
];

export default VILLAGERS_DATA;