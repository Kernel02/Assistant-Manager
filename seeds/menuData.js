
const { Menu } = require('../models');

const menudata = [
  {
    Menu_name: 'chicken salad',
    Menu_Description: 'salad/mixed salad with chicken, boiled egg, and salad dressing',
    Menu_Category: 'mixed salad',
    Menu_Price: 11.90,
    menu_Calory: '266 calories per 113 gram'
    
 
  },

  {
    Menu_name: 'para pizza',
    Menu_Description: ' broccoli, tomatoes, onions,mushrooms,green pappers',
    Menu_Category: 'veggie pizza',
    Menu_Price: 15.70,
    menu_Calory: '285 calories per 107 gram'
 
  },

  {
    Menu_name: 'yebeg tibis',
    Menu_Description: ' lamb, berbere, garlic, green chiles, spiced butter, cardamom, tomatoes',
    Menu_Category: 'tibs',
    Menu_Price: 11.90,
    menu_Calory: '444kcal per 113 gram'
 
  },

  {
    Menu_name: 'chicken salad',
    Menu_Description: 'Any salad/mixed salad with chicken, boiled egg, and salad dressing',
    Menu_Category: 'mixed salad',
    Menu_Price: 11.90,
    menu_Calory: '266 calories per 113 gram'
 
  },
    
  {
    Menu_name: 'burger',
    Menu_Description: 'beef, egg,  red onion, garlic, pepper, mayonnaise',
    Menu_Category: 'burger',
    Menu_Price: 6.90,
    menu_Calory: ' 354 calories per 120 gram'
  },
   
];

const seedMenu = () => Menu.bulkCreate(menudata);

module.exports = seedMenu;