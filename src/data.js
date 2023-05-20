// import house images
import House1 from './assets/img/houses/house1.png';
import House2 from './assets/img/houses/house2.png';
import House3 from './assets/img/houses/house3.png';
import House4 from './assets/img/houses/house4.png';
import House5 from './assets/img/houses/house5.png';
import House6 from './assets/img/houses/house6.png';
import House7 from './assets/img/houses/house7.png';
import House8 from './assets/img/houses/house8.png';
import House9 from './assets/img/houses/house9.png';
import House10 from './assets/img/houses/house10.png';
import House11 from './assets/img/houses/house11.png';
import House12 from './assets/img/houses/house12.png';
// import house large images
import House1Lg from './assets/img/houses/house1lg.png';
import House2Lg from './assets/img/houses/house2lg.png';
import House3Lg from './assets/img/houses/house3lg.png';
import House4Lg from './assets/img/houses/house4lg.png';
import House5Lg from './assets/img/houses/house5lg.png';
import House6Lg from './assets/img/houses/house6lg.png';
import House7Lg from './assets/img/houses/house7lg.png';
import House8Lg from './assets/img/houses/house8lg.png';
import House9Lg from './assets/img/houses/house9lg.png';
import House10Lg from './assets/img/houses/house10lg.png';
import House11Lg from './assets/img/houses/house11lg.png';
import House12Lg from './assets/img/houses/house12lg.png';

// import apartments images
import Apartment1 from './assets/img/apartments/a1.png';
import Apartment2 from './assets/img/apartments/a2.png';
import Apartment3 from './assets/img/apartments/a3.png';
import Apartment4 from './assets/img/apartments/a4.png';
import Apartment5 from './assets/img/apartments/a5.png';
import Apartment6 from './assets/img/apartments/a6.png';
// import apartments large images
import Apartment1Lg from './assets/img/apartments/a1lg.png';
import Apartment2Lg from './assets/img/apartments/a2lg.png';
import Apartment3Lg from './assets/img/apartments/a3lg.png';
import Apartment4Lg from './assets/img/apartments/a4lg.png';
import Apartment5Lg from './assets/img/apartments/a5lg.png';
import Apartment6Lg from './assets/img/apartments/a6lg.png';

// import agents images
import Agent1 from './assets/img/agents/agent1.png';
import Agent2 from './assets/img/agents/agent2.png';
import Agent3 from './assets/img/agents/agent3.png';
import Agent4 from './assets/img/agents/agent4.png';
import Agent5 from './assets/img/agents/agent5.png';
import Agent6 from './assets/img/agents/agent6.png';
import Agent7 from './assets/img/agents/agent7.png';
import Agent8 from './assets/img/agents/agent8.png';
import Agent9 from './assets/img/agents/agent9.png';
import Agent10 from './assets/img/agents/agent10.png';
import Agent11 from './assets/img/agents/agent11.png';
import Agent12 from './assets/img/agents/agent12.png';

export const housesData = [
  {
    id: 1,
    type: 'House',
    name: 'House 1',
    description:
      'Experience the sublime blend of luxury and comfort in this stunning 6 bedroom, 3 bathroom house, nestled in a serene Lawndale neighborhood. The property boasts of a sprawling 4200 sq ft, exuding opulence at every corner. Built in 2016, the house maintains a remarkable condition and stands ready to welcome you home.',
    image: House1,
    imageLg: House1Lg,
    country: 'United States',
    address: '7240C Argyle St. Lawndale, CA 90260',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '110000',
    agent: {
      image: Agent1,
      name: 'Patricia Tullert',
      phone: '0123 456 78910',
    },
  },
  {
    id: 2,
    type: 'House',
    name: 'House 2',
    description:
      'Welcome to this enchanting 6-bedroom, 3-bathroom residence located in the tranquil environs of Bridgewater. Spread across 4200 sq ft, this house reflects a masterful design and modern luxury. With a construction date in 2016, the property promises pristine living conditions, just for you.',
    image: House2,
    imageLg: House2Lg,
    country: 'Canada',
    address: '798 Talbot St. Bridgewater, NJ 08807',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '140000',
    agent: {
      image: Agent2,
      name: 'Daryl Hawker',
      phone: '0123 456 78910',
    },
  },
  {
    id: 3,
    type: 'House',
    name: 'House 3',
    description:
      'Luxury meets convenience in this 6 bedroom, 3 bathroom home in Alexandria. Enjoy the spacious 4200 sq ft of living space, designed for a modern lifestyle. Built in 2016, this house promises a stellar living experience in a home that feels brand new.',
    image: House3,
    imageLg: House3Lg,
    country: 'United States',
    address: '2 Glen Creek St. Alexandria, VA 22304',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '170000',
    agent: {
      image: Agent3,
      name: 'Amado Smith',
      phone: '0123 456 78910',
    },
  },
  {
    id: 4,
    type: 'House',
    name: 'House 4',
    description:
      'Embrace a luxurious lifestyle in this beautiful 6 bedroom, 3 bathroom home in Cocoa. With an ample surface area of 4200 sq ft and built in 2016, this house represents a harmonious blend of luxury, comfort, and style.',
    image: House4,
    imageLg: House4Lg,
    country: 'Canada',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '200000',
    agent: {
      image: Agent4,
      name: 'Kaitlyn Gonzalez',
      phone: '0123 456 78910',
    },
  },
  {
    id: 5,
    type: 'House',
    name: 'House 5',
    description:
      'Indulge in the grandeur of this beautiful 5 bedroom, 3 bathroom home located in Warminster. With a generous 4200 sq ft layout, this 2015-built house promises spaciousness and comfort in a beautiful neighborhood.',
    image: House5,
    imageLg: House5Lg,
    country: 'United States',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '5',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2015',
    price: '210000',
    agent: {
      image: Agent5,
      name: 'Grover Robinson',
      phone: '0123 456 78910',
    },
  },
  {
    id: 6,
    type: 'House',
    name: 'House 6',
    description:
      'Immerse yourself in the world of comfort and luxury in this sprawling 6 bedroom, 3 bathroom home in Butte. This 6200 sq ft property, built in 2014, delivers on all fronts.',
    image: House6,
    imageLg: House6Lg,
    country: 'Canada',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '6',
    bathrooms: '3',
    surface: '6200 sq ft',
    year: '2014',
    price: '220000',
    agent: {
      image: Agent6,
      name: 'Karen Sorensen',
      phone: '0123 456 78910',
    },
  },
  {
    id: 7,
    type: 'Apartament',
    name: 'Apartament 1',
    description:
      'Experience the epitome of urban living in this chic 2 bedroom, 1 bathroom apartment in Butte. With a comfortable 1200 sq ft of living space and built in 2012, this apartment brings together convenience and modern living.',
    image: Apartment1,
    imageLg: Apartment1Lg,
    country: 'Canada',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1200 sq ft',
    year: '2012',
    price: '20000',
    agent: {
      image: Agent7,
      name: 'Jawhar Shamil Naser',
      phone: '0123 456 78910',
    },
  },
  {
    id: 8,
    type: 'Apartament',
    name: 'Apartament 2',
    description:
      'Step into a world of comfort in this elegantly designed 3 bedroom, 1 bathroom apartment in Warminster. Spanning 1000 sq ft, this 2011-built property offers an urban living experience par excellence.',
    image: Apartment2,
    imageLg: Apartment2Lg,
    country: 'United States',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1000 sq ft',
    year: '2011',
    price: '30000',
    agent: {
      image: Agent8,
      name: 'Juana Douglass',
      phone: '0123 456 78910',
    },
  },
  {
    id: 9,
    type: 'Apartament',
    name: 'Apartament 3',
    description:
      'Discover an immersive living experience in this beautifully designed 2 bedroom, 1 bathroom apartment in Cocoa. Offering 1100 sq ft of space and built in 2011, this apartment is the perfect intersection of style, space, and convenience.',
    image: Apartment3,
    imageLg: Apartment3Lg,
    country: 'United States',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1100 sq ft',
    year: '2011',
    price: '40000',
    agent: {
      image: Agent9,
      name: 'Jerry Schenck',
      phone: '0123 456 78910',
    },
  },
  {
    id: 10,
    type: 'House',
    name: 'House 7',
    description:
      'Bask in the luxury of this stunning 5 bedroom, 3 bathroom home in Lawndale. Spanning 3200 sq ft and built in 2015, this house offers the perfect mix of space and style.',
    image: House7,
    imageLg: House7Lg,
    country: 'Canada',
    address: '7240C Argyle St. Lawndale, CA 90260',
    bedrooms: '5',
    bathrooms: '3',
    surface: '3200 sq ft',
    year: '2015',
    price: '117000',
    agent: {
      image: Agent10,
      name: 'Vera Levesque',
      phone: '0123 456 78910',
    },
  },
  {
    id: 11,
    type: 'House',
    name: 'House 8',
    description:
      'Explore the heights of comfort in this beautiful 7 bedroom, 2 bathroom home in Bridgewater. With a generous 2200 sq ft layout and built in 2019, this house stands ready to become your perfect family home.',
    image: House8,
    imageLg: House8Lg,
    country: 'Canada',
    address: '798 Talbot St. Bridgewater, NJ 08807',
    bedrooms: '7',
    bathrooms: '2',
    surface: '2200 sq ft',
    year: '2019',
    price: '145000',
    agent: {
      image: Agent11,
      name: 'Sofia Gomes',
      phone: '0123 456 78910',
    },
  },
  {
    id: 12,
    type: 'House',
    name: 'House 9',
    description:
      'Uncover a unique blend of comfort and style in this gorgeous 4 bedroom, 4 bathroom home in Alexandria. With 4600 sq ft of living space and built in 2015, this house is the epitome of luxury living.',
    image: House9,
    imageLg: House9Lg,
    country: 'United States',
    address: '2 Glen Creek St. Alexandria, VA 22304',
    bedrooms: '4',
    bathrooms: '4',
    surface: '4600 sq ft',
    year: '2015',
    price: '139000',
    agent: {
      image: Agent12,
      name: 'Raymond Hood',
      phone: '0123 456 78910',
    },
  },
  {
    id: 13,
    type: 'House',
    name: 'House 10',
    description:
      'Step into the world of luxury in this spectacular 5 bedroom, 2 bathroom home in Cocoa. Built in 2014 and spanning.',
    image: House10,
    imageLg: House10Lg,
    country: 'Canada',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '5',
    bathrooms: '2',
    surface: '5200 sq ft',
    year: '2014',
    price: '180000',
    agent: {
      image: Agent1,
      name: 'Patricia Tullert',
      phone: '0123 456 78910',
    },
  },
  {
    id: 14,
    type: 'House',
    name: 'House 11',
    description:
      'A splendid 5-bedroom house located at 32 Pawnee Street, Butte, MT 59701 in Canada. The house covers a vast surface area of 4800 sq ft. Built in 2016, the house includes 4 bathrooms and is priced at $220,000. Agent responsible: Karen Sorensen.',
    image: House11,
    imageLg: House11Lg,
    country: 'United States',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '5',
    bathrooms: '2',
    surface: '3200 sq ft',
    year: '2011',
    price: '213000',
    agent: {
      image: Agent2,
      name: 'Daryl Hawker',
      phone: '0123 456 78910',
    },
  },
  {
    id: 15,
    type: 'House',
    name: 'House 12',
    description:
      'This compact, stylish apartment is situated in Canada, at 32 Pawnee Street, Butte, MT 59701. It includes 3 bedrooms and 1 bathroom over 900 sq ft of space. Built in 2010, this apartment is priced at $20,000. Agent responsible: Jawhar Shamil Naser.',
    image: House12,
    imageLg: House12Lg,
    country: 'Canada',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '4',
    bathrooms: '3',
    surface: '5200 sq ft',
    year: '2013',
    price: '221000',
    agent: {
      image: Agent3,
      name: 'Amado Smith',
      phone: '0123 456 78910',
    },
  },
  {
    id: 16,
    type: 'Apartament',
    name: 'Apartament 16',
    description:
      'Located in United States, at 28 Westport Dr. Warminster, PA 18974, this apartment boasts 3 bedrooms and 1 bathroom. With a total of 950 sq ft of living space, the apartment, built in 2012, is listed at $30,000. Agent responsible: Juana Douglass.',
    image: Apartment4,
    imageLg: Apartment4Lg,
    country: 'Canada',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1300 sq ft',
    year: '2011',
    price: '21000',
    agent: {
      image: Agent4,
      name: 'Kaitlyn Gonzalez',
      phone: '0123 456 78910',
    },
  },
  {
    id: 17,
    type: 'Apartament',
    name: 'Apartament 17',
    description:
      'This 2-bedroom apartment is located in United States, at 84 Woodland St. Cocoa, FL 32927. It includes 1 bathroom and offers 1000 sq ft of living space. Built in 2012, this apartment is priced at $35,000. Agent responsible: Jerry Schenck.',
    image: Apartment5,
    imageLg: Apartment5Lg,
    country: 'United States',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1000 sq ft',
    year: '2012',
    price: '32000',
    agent: {
      image: Agent5,
      name: 'Grover Robinson',
      phone: '0123 456 78910',
    },
  },
  {
    id: 18,
    type: 'Apartament',
    name: 'Apartament 18',
    description:
      'This grand 6-bedroom house is situated in Canada, at 7240C Argyle St. Lawndale, CA 90260. With 3 bathrooms, the house spans an impressive 3800 sq ft. Constructed in 2017, the house is listed at $120,000. Agent responsible: Patricia Tullert.',
    image: Apartment6,
    imageLg: Apartment6Lg,
    country: 'Canada',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1200 sq ft',
    year: '2010',
    price: '38000',
    agent: {
      image: Agent6,
      name: 'Karen Sorensen',
      phone: '0123 456 78910',
    },
  },
];
