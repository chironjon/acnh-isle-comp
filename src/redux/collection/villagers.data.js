import villagers from './processedJSData/Villagers';
import specialNPCs from './processedJSData/Special NPCs';

const VILLAGERS_DATA = [
  {
    "items": specialNPCs,
    "subcategory": "NPCs",
    "category": "villagerNPCs"
  },
  {
    "items": villagers,
    "category": "villagers",
    "subcategory": "villagers"
  }
];

export default VILLAGERS_DATA;