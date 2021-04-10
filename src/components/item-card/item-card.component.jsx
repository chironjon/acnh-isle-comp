import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// components
import SvgIcon from '../svg-icon/svg-icon.component';
//selectors
import { selectCategory } from '../../redux/input/input.selectors';
//styles
import './item-card.styles.scss';

const capital_letter = (str) => { 
    str = str.split(" ");

    for (let i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

const camelCase = (str) => {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index)
  {
      return index == 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}

// console.log(camelCase('Acc This'))
const maxCheck = (num, max) => {
  if(num > max) {
    return 0;
  } else if (num < 0){
    return max;
  } else {
    return num;
  }
}

const ItemCard = ({ name, item, itemType, selectedCategory }) => {
  // console.log(selectedCategory)
  const itemArrayMax = item.length - 1;
  
  const [arrayPosition, setArrayPosition] = useState(0);

  useEffect(() => {
    setArrayPosition(0)
  }, [selectedCategory])

  const imgLogic = ( item, size ) => {
    return (name === "magic bag" ? <div className={size} style={{backgroundImage: `url(https://acnhcdn.com/latest/MenuIcon/SantaSack.png)`}}/>
    : (name === "Hazure01" || name === "Hazure02" || name === "Hazure03") ? <div className={size}>no img</div>
    : selectedCategory === "recipes" ? <div className={size} style={{backgroundImage: `url(https://acnhcdn.com/latest/DIYRecipeIcon/${item["DIY Icon Filename"]}.png)`}}/>
    : item["Back Color"] ?  <div className={size} style={{backgroundImage: `url(https://acnhcdn.com/latest/MessageCard/${item["Filename"]}.png)`}}/>
    : item["Source"] === "Leif" ? <div className={size} style={{backgroundImage: `url(https://acnhcdn.com/latest/ShopPlant/${item["Filename"]}.png)`}}/>
    : selectedCategory === "other" ? <div className={size} style={{backgroundImage: `url(https://acnhcdn.com/latest/MenuIcon/${item["Inventory Filename"]}.png)`}}/>
    : item["NH Jan"] ? <div className={size} style={{backgroundImage: `url(https://acnhcdn.com/latest/MenuIcon/${item["Icon Filename"]}.png)`}}/>
    : item["Category"] === "Door" ? <div className={size} style={{backgroundImage: `url(https://acnhcdn.com/latest/HouseDoorIcon/${item["Filename"]}.png)`}}/>
    : item["Category"] === "Mailbox" ? <div className={size} style={{backgroundImage: `url(https://acnhcdn.com/latest/HousePostIcon/${item["Filename"]}.png)`}}/>
    : item["Category"] === "Incline" ? <div className={size} style={{backgroundImage: `url(https://acnhcdn.com/drivesync/bridgearamp/${item["Filename"]}.png)`}}/>
    : item["Category"] === "Roofing" ? <div className={size} style={{backgroundImage: `url(https://acnhcdn.com/latest/HouseRoofIcon/${item["Filename"]}.png)`}}/>
    : item["Category"] === "Siding" ? <div className={size} style={{backgroundImage: `url(https://acnhcdn.com/latest/HouseWallIcon/${item["Filename"]}.png)`}}/>
    : item["Category"] === "Bridge" ? <div className={size} style={{backgroundImage: `url(https://acnhcdn.com/drivesync/bridgearamp/${item["Filename"]}.png)`}}/>
    : (item["Source Notes"] !== "Played by K.K. if you request something he doesn't have (does not give take-home track)" && selectedCategory === 'music') ? <div className={size} style={{backgroundImage: `url(https://acnhcdn.com/latest/Audio/${item["Filename"]}.png)`}}/>
    : <div className={size} style={{backgroundImage: `url(https://acnhcdn.com/latest/FtrIcon/${item["Filename"]}.png)`}}/>)
  }

  return (
    <div>
      {
        item[arrayPosition]
        ? <div key={item["Unique Entry ID"]} className='item-card'>
            <div className='type-icon-container'>
              <SvgIcon type={'type-icon'} iconType={itemType}/>
            </div>
            <span className='name'>{capital_letter(name)}</span>
            <div className='menu-icon-container'>
              <SvgIcon type={'menu-icon'} iconType={'menu'} />
            </div>
            <span className='source'>{item[arrayPosition]["Source"]}</span>
            <div className='attr-lists'>
              { (item[arrayPosition]["Unlocked?"] && item[arrayPosition]["Unlocked?"] === 'No') ? <div className='locked-icon-container'><SvgIcon type={'locked-icon'} iconType={'locked'} title={'Not available yet'} /></div> : null }
              { (item[arrayPosition]["Catalog"] && item[arrayPosition]["Catalog"] === 'For sale') ? <div className='cart-icon-container'><SvgIcon type={'cart-icon'} iconType={'cartWhite'} title={'Reorder-able'} /></div>  : null }
              { (item[arrayPosition]["Catalog"] && item[arrayPosition]["Catalog"] !== 'Not in catalog') ? <div className='fave-catalog-icon-container'><SvgIcon type={'catalog-icon'} iconType={'leaf'} title={'In catalog'}></SvgIcon></div> : null }
              { (item[arrayPosition]["DIY"] && item[arrayPosition]["DIY"] === 'Yes') ? <div className='recipe-icon-container'><SvgIcon type={'recipe-icon'} iconType={'craftable'} title={'Can craft'} /></div> : null }
              { ((item[arrayPosition]["Body Customize"] || item[arrayPosition]["Pattern Customize"]) && (item[arrayPosition]["Body Customize"] === 'Yes' || item[arrayPosition]["Pattern Customize"] === 'Yes')) ? <div className='diy-icon-container'><SvgIcon type={'diy-icon'} iconType={'customizable'}  title={'Can customize'} /></div> : null }
            </div>
            <div className='img-container'>
            {
              //image display
              imgLogic(item[arrayPosition], 'full-image')
            }
            </div>
            <div className='list-icon-container'>
              <div className='fave-heart-icon-container'><SvgIcon type={'fave-heart-icon'} iconType={'heartEmpty'} title={'in heart list'} /></div>
              <div className='fave-star-icon-container'><SvgIcon type={'fave-star-icon'} iconType={'starEmpty'} title={'in star list'} /></div>
              <div className='own-icon'>O</div>
              <div className='want-icon'>W</div>
            </div>
            <div className='variation-container'>
              {
                ((item[arrayPosition]["Variation"] && item[arrayPosition]["Variation"] !== "NA") || (item[arrayPosition]["Genuine"] && item.length > 1)) 
                ? <>
                    {
                      item[arrayPosition]["Genuine"] ? <div className='genuine'>{`Genuine: ${item[arrayPosition]["Genuine"]}`}</div>
                      : <div className='variation'>{item[arrayPosition]["Variation"]}</div>
                    }
                    <div className='variation-display-container'>
                      <div className='decrease-icon' onClick={() => setArrayPosition(maxCheck(arrayPosition - 1, itemArrayMax), 'dec')}><span>-</span></div>
                      <div className='variation-display'>
                        {
                          item.map((x, i) => (
                            i < 5 ? imgLogic(x, 'small-image') : null
                          ))
                        }
                      </div>
                      <div className='increase-icon' onClick={() => setArrayPosition(maxCheck(arrayPosition + 1, itemArrayMax), 'inc')}><span>+</span></div>
                    </div>
                  </>
                : null
              }
              {
                (item[arrayPosition]["Genuine"] && item.length === 1) ? <div className='genuine'>{`Always Genuine`}</div>
                : null
            }
            </div>
            <div className='footer-icons'>
              <div className='size-icon'>S</div>
              {
                (item[arrayPosition]["Buy"] || item[arrayPosition]["Sell"])
                ? <div className='price'>
                    { (item[arrayPosition]["Buy"] && item[arrayPosition]["Buy"] !== "NFS") ? <span className='buy'>-{item[arrayPosition]["Buy"]}</span> : null }
                    { item[arrayPosition]["Sell"] ? <span className='sell'>+{item[arrayPosition]["Sell"]}</span> : null }
                    { 
                      item[arrayPosition]["Vision"] 
                      ? <span className='cj-price'>CJ: +{item[arrayPosition]["Sell"] * 1.5}</span> 
                      : item[arrayPosition]["Weather"] ? <span className='flick-price'>Flick: +{item[arrayPosition]["Sell"] * 1.5}</span> 
                      : null
                    }
                  </div>
                  : null
              }
              <div className='searchglass-icon-container'><SvgIcon type={'searchglass-icon'} iconType={'searchglass'} title={'Open details'} /></div>
            </div>
          </div>
        : null
      }
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  selectedCategory: selectCategory
})

export default connect(mapStateToProps)(ItemCard);