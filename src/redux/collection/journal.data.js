import achievements from './processedJSData/Achievements';
import reactions from './processedJSData/Reactions';
import seasonsAndEvents from './processedJSData/Seasons and Events';

const JOURNAL_DATA = [
  {
    "items": achievements,
    "subcategory": "achievements"
  },
  {
    "items": reactions,
    "subcategory": "character"
  },
  {
    "items": seasonsAndEvents,
    "subcategory": "seasonsAndEvents"
  }
];

export default JOURNAL_DATA;