import tools from '../../assets/icons/tools.svg';
import catalog from '../../assets/icons/catalogCart.svg';
import journal from '../../assets/icons/journal.svg';
import villagers from '../../assets/icons/friends.svg';
import home from '../../assets/icons/island.svg';
import login from '../../assets/icons/profile.svg';

const titleArray = [
  'home',
  'catalog',
  'villagers',
  'tools',
  'journal',
  'login'
]

const INITIAL_STATE = {
  sections: [
    {
      title: titleArray[0],
      imageUrl: home,
      id: 1,
      size: 'box',
      linkUrl: ""
    },
    {
      title: titleArray[1],
      imageUrl: catalog,
      id: 2,
      size: 'box',
      linkUrl: "/" + titleArray[1]
    },
    {
      title: titleArray[2],
      imageUrl: villagers,
      id: 3,
      size: 'box',
      linkUrl: "/" + titleArray[2]
    },
    {
      title: titleArray[3],
      imageUrl: tools,
      id: 4,
      size: 'box',
      linkUrl: "/" + titleArray[3]
    },
    {
      title: titleArray[4],
      imageUrl: journal,
      id: 5,
      size: 'box',
      linkUrl: "/" + titleArray[4]
    },
    {
      title: titleArray[5],
      subtitle: '',
      imageUrl: login,
      id: 6,
      size: 'box',
      linkUrl: "/" + titleArray[5]
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