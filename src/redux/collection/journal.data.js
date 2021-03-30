import achievements from './processedJSData/Achievements';
import reactions from './processedJSData/Reactions';
import seasonsAndEvents from './processedJSData/Seasons and Events';

const JOURNAL_DATA = [
  {
    "items": achievements,
    "tags": "achievements"
  },
  {
    "items": reactions,
    "tags": "character"
  },
  {
    "items": seasonsAndEvents,
    "tags": "seasonsAndEvents"
  }
];

export default JOURNAL_DATA;