import tools from '../../assets/icons/tools.svg';
import catalog from '../../assets/icons/catalogcart.svg';
import journal from '../../assets/icons/journal.svg';
import villagers from '../../assets/icons/friendsicon.svg';
import home from '../../assets/icons/islandlogo.svg';
import login from '../../assets/icons/22_Profile.svg';

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
      imageUrl: tools,
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