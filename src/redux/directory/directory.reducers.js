import utilities from '../../assets/icons/utilities.svg'
import catalog from '../../assets/icons/catalogcart.svg'
import journal from '../../assets/icons/journal.svg'
import villagers from '../../assets/icons/friendsicon.svg'
import home from '../../assets/icons/islandlogo.svg';

const titleArray = [
  'home',
  'catalog',
  'villagers',
  'utilities',
  'journal'
]

const INITIAL_STATE = {
  sections: [
    {
      title: titleArray[0],
      subtitle: 'coming soon',
      imageUrl: home,
      id: 1,
      size: 'box',
      linkUrl: ""
    },
    {
      title: titleArray[1],
      subtitle: 'coming soon',
      imageUrl: catalog,
      id: 2,
      size: 'box',
      linkUrl: "/" + titleArray[1]
    },
    {
      title: titleArray[2],
      subtitle: 'coming soon',
      imageUrl: villagers,
      id: 3,
      size: 'box',
      linkUrl: "/" + titleArray[2]
    },
    {
      title: titleArray[3],
      subtitle: 'coming soon',
      imageUrl: utilities,
      id: 4,
      size: 'box',
      linkUrl: "/" + titleArray[3]
    },
    {
      title: titleArray[4],
      subtitle: 'coming soon',
      imageUrl: journal,
      id: 5,
      size: 'box',
      linkUrl: "/" + titleArray[4]
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;