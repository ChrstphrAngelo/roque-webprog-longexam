import grayShirtImage from './img/gray-sweatshirt.png'
import capImage from './img/nu-1900-cap.png'
import blackShirtImage from './img/nu-black-shirt.png'
import hoodieImage from './img/nu-hoodie.png'
import keychainImage from './img/nu-keychain.png'
import lanyardImage from './img/nu-lanyard.png'
import tShirtImage from './img/nu-t-shirt.png'
import stickersImage from './img/nu-stickers.png'

const products = [
  {
    name: 'gray-sweatshirt',
    title: 'Gray Sweatshirt',
    category: 'Shirt',
    price: 'PHP 1,750.00',
    image: grayShirtImage,
    stock: 'In stock',
    content: [
      'Show your school pride with the National University Gray Sweatshirt, designed for everyday comfort and a clean, classic look. Made with a regular fit, this sweatshirt features a ribbed crew neck and durable taffeta woven details, making it perfect for casual wear, campus activities, or cooler days. ',
      'Made from a 93% Cotton and 7% Polyester blend, the fabric provides a soft feel with added durability and shape retention. The cotton–polyester blend also helps create the gray heather color effect, giving the sweatshirt its distinctive mixed-tone appearance.',
    ],
  },
  {
    name: '1900-cap',
    title: '1900 Cap',
    category: 'Accessories',
    price: 'PHP 950.00',
    image: capImage,
    stock: 'Out of stock',
    content: [
      'Cap Size: 54cm - 60cm',
      'Materials: High Quality Embroidery 40% Polyester 60% Cotton',
      'Plastic Strap',
      'Mid Crown',
      'Fit Average head sizes',
    ],
  },
  {
    name: 'black-shirt',
    title: 'NU Lady Bulldogs Black T-Shirt',
    category: 'Shirt',
    price: 'PHP 800.00',
    image: blackShirtImage,
    stock: 'In stock',
    content: [
      'The NU black t-shirt is a sleek and versatile piece that features a clean design, making it perfect for everyday wear or showing school pride. Made with comfortable, breathable fabric, it provides both style and ease for casual outings or campus activities.',
    ],
  },
  {
    name: 'hoodie',
    title: 'Hoodie',
    category: 'Shirt',
    price: 'PHP 1,750.00',
    image:hoodieImage,
    stock: 'In stock',
    content: [
      'The NU hoodie is a comfortable and stylish essential designed to keep you warm while showing your school pride. With its soft fabric and relaxed fit, it’s perfect for everyday wear, whether you’re on campus or out with friends.',
      'CARE',
      'Do not bleach',
      'Tumble dry low heat',
      'Do not dry-clean',
      'Touch up with a cool iron',
      'Machine wash warm',
    ],
  },
  {
    name: 'keychain',
    title: 'NU Keychains',
    category: 'Accessories',
    price: 'PHP 150.00',
    image:keychainImage,
    stock: 'Out of stock',
    content: [
      'The NU keychain is a compact and stylish accessory that lets you carry a piece of school pride wherever you go. Designed for durability and everyday use, it’s perfect for keeping your keys organized while representing NU.',
    ],
  },
  {
    name: 'lanyard',
    title: 'NU White Lanyard',
    category: 'Accessories',
    price: 'PHP 250.00',
    image:lanyardImage,
    stock: 'In stock',
    content: [
      'The NU lanyard is a practical and stylish accessory perfect for holding your ID, keys, or badges securely. Made with durable material and a comfortable fit, it’s ideal for everyday use while showcasing your NU pride.',
    ],
  },
  {
    name: 't-shirt',
    title: 'NU T-Shirt',
    category: 'Shirt',
    price: 'PHP 800.00',
    image:tShirtImage,
    stock: 'In stock',
    content: [
      'The NU shirt is a simple and comfortable staple that lets you show your school pride in a clean, everyday style. Made with soft, breathable fabric, it’s perfect for casual wear on campus or any relaxed occasion.',
    ],
  },
  {
    name: 'stickers',
    title: 'NU Stickers',
    category: 'Accessories',
    price: 'PHP 150.00',
    image:stickersImage,
    stock: 'In stock',
    content: [
      'The NU stickers are fun and versatile accessories that let you personalize your laptops, notebooks, or gadgets with school pride. Made with durable, high-quality material, they’re designed to stick well and last through everyday use.',
    ],
  },
  
];

export default products;
