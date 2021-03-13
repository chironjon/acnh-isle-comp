import CATALOG_DATA from './catalog.data.js'
import VILLAGERS_DATA from './villagers.data.js'
import JOURNAL_DATA from './journal.data.js'

const INITIAL_STATE = {
  'collections': {
    'catalog': CATALOG_DATA,
    'villagers': VILLAGERS_DATA,
    'journal': JOURNAL_DATA
  }
};

const collectionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default collectionReducer;