import React from 'react';

// Icons
import oneAndHalfByOneAndHalf from '../../assets/icons/1.5x1.5.svg';
import oneByOneAndHalf from '../../assets/icons/1x1.5.svg';
import oneByOne from '../../assets/icons/1x1.svg';
import oneByTwo from '../../assets/icons/1x2.svg';
import twoByOneAndHalf from '../../assets/icons/2x1.5.svg';
import twoByOne from '../../assets/icons/2x1.svg';
import twoByTwo from '../../assets/icons/2x2.svg';
import threeByOne from '../../assets/icons/3x1.svg';
import threeByTwo from '../../assets/icons/3x2.svg';
import threeByThree from '../../assets/icons/3x3.svg';
import accessory from '../../assets/icons/accessory.svg';
import apple from '../../assets/icons/apple.svg';
import appleColor from '../../assets/icons/appleColor.svg';
import backArrow from '../../assets/icons/backArrow.svg';
import bags from '../../assets/icons/bags.svg';
import bellBagColor from '../../assets/icons/bellBagColor.svg';
import birthdayIconAquarius from '../../assets/icons/birthdayIconAquarius.svg';
import birthdayIconAries from '../../assets/icons/birthdayIconAries.svg';
import birthdayIconCancer from '../../assets/icons/birthdayIconCancer.svg';
import birthdayIconCapricorn from '../../assets/icons/birthdayIconCapricorn.svg';
import birthdayIconGemini from '../../assets/icons/birthdayIconGemini.svg';
import birthdayIconLeo from '../../assets/icons/birthdayIconLeo.svg';
import birthdayIconLibra from '../../assets/icons/birthdayIconLibra.svg';
import birthdayIconPisces from '../../assets/icons/birthdayIconPisces.svg';
import birthdayIconSagittarius from '../../assets/icons/birthdayIconSagittarius.svg';
import birthdayIconScorpio from '../../assets/icons/birthdayIconScorpio.svg';
import birthdayIconTaurus from '../../assets/icons/birthdayIconTaurus.svg';
import birthdayIconVirgo from '../../assets/icons/birthdayIconVirgo.svg';
import bottoms from '../../assets/icons/bottoms.svg';
import cartWhite from '../../assets/icons/cartWhite.svg';
import checkmark from '../../assets/icons/checkmark.svg';
import cherry from '../../assets/icons/cherry.svg';
import cherryColor from '../../assets/icons/cherryColor.svg';
import coconutColor from '../../assets/icons/coconutColor.svg';
import construction from '../../assets/icons/construction.svg';
import craftable from '../../assets/icons/craftable.svg';
import craftableColor from '../../assets/icons/craftableColor.svg';
import cursorClick from '../../assets/icons/cursorClick.svg';
import cursorHover from '../../assets/icons/cursorHover.svg';
import customizable from '../../assets/icons/customizable.svg';
import customizableKitColor from '../../assets/icons/customizableKitColor.svg';
import doors from '../../assets/icons/doors.svg';
import dressUp from '../../assets/icons/dressUp.svg';
import edible from '../../assets/icons/edible.svg';
import everything from '../../assets/icons/everything.svg';
import fenceColor from '../../assets/icons/fenceColor.svg';
import fish from '../../assets/icons/fish.svg';
import floors from '../../assets/icons/floors.svg';
import fossils from '../../assets/icons/fossils.svg';
import headwear from '../../assets/icons/headwear.svg';
import heartEmpty from '../../assets/icons/heartEmpty.svg';
import heartFilled from '../../assets/icons/heartFilled.svg';
import housewares from '../../assets/icons/housewares.svg';
import insects from '../../assets/icons/insects.svg';
import keyboard from '../../assets/icons/keyboard.svg';
import leaf from '../../assets/icons/leaf.svg';
import leafColor from '../../assets/icons/leafColor.svg';
import locked from '../../assets/icons/locked.svg';
import mailboxes from '../../assets/icons/mailboxes.svg';
import menu from '../../assets/icons/menu.svg';
import messageCards from '../../assets/icons/messageCards.svg';
import misc from '../../assets/icons/misc.svg';
import museum from '../../assets/icons/museum.svg';
import music from '../../assets/icons/music.svg';
import nookmile from '../../assets/icons/nookmile.svg';
import nookMileColor from '../../assets/icons/nookMileColor.svg';
import orange from '../../assets/icons/orange.svg';
import orangeColor from '../../assets/icons/orangeColor.svg';
import peach from '../../assets/icons/peach.svg';
import peachColor from '../../assets/icons/peachColor.svg';
import pear from '../../assets/icons/pear.svg';
import pearColor from '../../assets/icons/pearColor.svg';
import pumpGreen from '../../assets/icons/pumpGreen.svg';
import pumpOrange from '../../assets/icons/pumpOrange.svg';
import pumpWhite from '../../assets/icons/pumpWhite.svg';
import pumpYellow from '../../assets/icons/pumpYellow.svg';
import recipes from '../../assets/icons/recipes.svg';
import roofs from '../../assets/icons/roofs.svg';
import rugs from '../../assets/icons/rugs.svg';
import searchglass from '../../assets/icons/searchglass.svg';
import seaCreatures from '../../assets/icons/seaCreatures.svg';
import shoes from '../../assets/icons/shoes.svg';
import socks from '../../assets/icons/socks.svg';
import starEmpty from '../../assets/icons/starEmpty.svg';
import starFilled from '../../assets/icons/starFilled.svg';
import tops from '../../assets/icons/tops.svg';
import umbrellas from '../../assets/icons/umbrellas.svg';
import villagerPosters from '../../assets/icons/villagerPosters.svg';
import villagers from '../../assets/icons/villagers.svg';
import wallMounted from '../../assets/icons/wallMounted.svg';
import wallpaper from '../../assets/icons/wallpaper.svg';
import walls from '../../assets/icons/walls.svg';

const camelCase = (str) => {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index)
  {
      return index == 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}

const matchType = (type) => {
  // console.log(type)
  switch(camelCase(type)){

    case 'oneAndHalfByOneAndHalf': 
      return oneAndHalfByOneAndHalf;
    case 'oneByOneAndHalf': 
      return oneByOneAndHalf;
    case 'oneByOne': 
      return oneByOne;
    case 'oneByTwo': 
      return oneByTwo;
    case 'twoByOneAndHalf': 
      return twoByOneAndHalf;
    case 'twoByOne': 
      return twoByOne;
    case 'twoByTwo': 
      return twoByTwo;
    case 'threeByOne': 
      return threeByOne;
    case 'threeByTwo': 
      return threeByTwo;
    case 'threeByThree': 
      return threeByThree;
    case 'accessories': 
      return accessory;
    case 'apple': 
      return apple;
    case 'appleColor': 
      return appleColor;
    case 'backArrow': 
      return backArrow;
    case 'bags': 
      return bags;
    case 'bellBagColor': 
      return bellBagColor;
    case 'birthdayIconAquarius': 
      return birthdayIconAquarius;
    case 'birthdayIconAries': 
      return birthdayIconAries;
    case 'birthdayIconCancer': 
      return birthdayIconCancer;
    case 'birthdayIconCapricorn': 
      return birthdayIconCapricorn;
    case 'birthdayIconGemini': 
      return birthdayIconGemini;
    case 'birthdayIconLeo': 
      return birthdayIconLeo;
    case 'birthdayIconLibra': 
      return birthdayIconLibra;
    case 'birthdayIconPisces': 
      return birthdayIconPisces;
    case 'birthdayIconSagittarius': 
      return birthdayIconSagittarius;
    case 'birthdayIconScorpio': 
      return birthdayIconScorpio;
    case 'birthdayIconTaurus': 
      return birthdayIconTaurus;
    case 'birthdayIconVirgo': 
      return birthdayIconVirgo;
    case 'bottoms': 
      return bottoms;
    case 'cartWhite': 
      return cartWhite;
    case 'checkmark': 
      return checkmark;
    case 'cherry': 
      return cherry;
    case 'cherryColor': 
      return cherryColor;
    case 'clothingOther':
    case 'other':
      return menu;
    case 'coconutColor': 
      return coconutColor;
    case 'construction': 
      return construction;
    case 'craftable': 
    case 'tools':
      return craftable;
    case 'craftableColor': 
      return craftableColor;
    case 'cursorClick': 
      return cursorClick;
    case 'cursorHover': 
      return cursorHover;
    case  'customizable': 
      return customizable;
    case 'customizableKitColor': 
      return customizableKitColor;
    case 'doors': 
      return doors;
    case 'dress-Up': 
      return dressUp;
    case 'edible': 
      return edible;
    case 'everything': 
      return everything;
    case 'fencing': 
      return fenceColor;
    case 'fish': 
      return fish;
    case 'floors': 
      return floors;
    case 'fossils': 
      return fossils;
    case 'headwear': 
      return headwear;
    case 'heartEmpty': 
      return heartEmpty;
    case 'heartFilled': 
      return heartFilled;
    case 'housewares': 
      return housewares;
    case 'insects': 
      return insects;
    case 'keyboard': 
      return keyboard;
    case 'leaf': 
      return leaf;
    case 'leafColor': 
      return leafColor;
    case 'locked': 
      return locked;
    case 'mailboxes': 
      return mailboxes;
    case 'menu': 
      return menu;
    case 'messageCards': 
      return messageCards;
    case 'miscellaneous': 
      return misc;
    case 'museum': 
      return museum;
    case 'music': 
      return music;
    case 'nookmile': 
      return nookmile;
    case 'nookMileColor': 
      return nookMileColor;
    case 'orange': 
      return orange;
    case 'orangeColor': 
      return orangeColor;
    case 'peach': 
      return peach;
    case 'peachColor': 
      return peachColor;
    case 'pear': 
      return pear;
    case 'pearColor': 
      return pearColor;
    case 'pumpGreen': 
      return pumpGreen;
    case 'pumpOrange': 
      return pumpOrange;
    case 'pumpWhite': 
      return pumpWhite;
    case 'pumpYellow': 
      return pumpYellow;
    case 'recipes': 
      return recipes;
    case 'roofs': 
      return roofs;
    case 'rugs': 
      return rugs;
    case 'searchglass': 
      return searchglass;
    case 'seaCreatures': 
      return seaCreatures;
    case 'shoes': 
      return shoes;
    case 'socks': 
      return socks;
    case 'starEmpty': 
      return starEmpty;
    case 'starFilled': 
      return starFilled;
    case 'tops': 
      return tops;
    case 'umbrellas': 
      return umbrellas;
    case 'posters': 
    case 'art':
      return villagerPosters;
    case 'photos': 
      return villagers;
    case 'wall-Mounted': 
      return wallMounted;
    case 'wallpaper': 
      return wallpaper;
    case 'walls': 
      return walls;
    default:
      return type;
  }
}

const SvgIcon = ({type, iconType, title}) => {
  return (
    <img className={type} src={matchType(iconType)} alt={iconType} title={title}></img>
  )
}

export default SvgIcon;