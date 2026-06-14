/**
 * ════════════════════════════════════════════════════════════════
 *  SHOP CONFIGURATION — Edit ONLY this file
 * ════════════════════════════════════════════════════════════════
 *
 *  This is the ONLY file you need to edit to update your website.
 *  All your store details, products, and content live here.
 *
 *  HOW TO EDIT:
 *  ─────────────
 *  1. Replace anything inside 'single quotes' with your real data.
 *  2. Keep the quotes and commas exactly as they are.
 *  3. Save the file and refresh your website — changes appear instantly.
 *  4. No coding knowledge needed!
 *
 *  TIPS:
 *  ─────
 *  • Text must stay inside 'single quotes' or "double quotes"
 *  • Don't remove commas at the end of lines
 *  • For apostrophes in text, use: it\'s  (backslash before the quote)
 *    OR wrap that entire text in "double quotes" instead
 *  • Lines starting with // are comments — they are ignored by the website
 *
 * ════════════════════════════════════════════════════════════════
 */

const SHOP_CONFIG = {

  // ┌───────────────────────────────────────────────────────────┐
  // │  BASIC STORE INFORMATION                                  │
  // └───────────────────────────────────────────────────────────┘

  name    : 'Match & Design',
  tagline : 'Elegant Styles Crafted for Every Occasion',

  // A short description of your store (2-3 sentences)
  description: 'A premium store offering the finest collections of sarees, designer dresses, fabrics and more — curated with love and an eye for detail.',


  // ┌───────────────────────────────────────────────────────────┐
  // │  CONTACT DETAILS                                          │
  // └───────────────────────────────────────────────────────────┘

  // Phone number with country code (used for "Call" buttons)
  phone: '+917847030373',

  // WhatsApp number WITHOUT the + sign (used for WhatsApp chat links)
  whatsapp: '917847030373',


  // ┌───────────────────────────────────────────────────────────┐
  // │  STORE ADDRESS                                            │
  // └───────────────────────────────────────────────────────────┘

  // Your full store address (shown on website & footer)
  address: 'Match & Design, opposite Bamboo forest villa, Naganathapura, Rayasandra, Karnataka 560100',

  // Google Maps Embed URL (leave as empty string '' if you don't want a map):
  //   How to get it:
  //   1. Go to Google Maps → Search your shop
  //   2. Click "Share" → "Embed a map" tab
  //   3. Copy ONLY the URL inside src="..." and paste below
  //   It should look like: 'https://www.google.com/maps/embed?pb=...'
  //   NOTE: A share link (share.google/...) will NOT work — must be an embed URL
  mapEmbedUrl: 'https://maps.google.com/maps?q=Match+%26+Design+Naganathapura+Rayasandra+Karnataka+560100&t=&z=16&ie=UTF8&iwloc=&output=embed',


  // ┌───────────────────────────────────────────────────────────┐
  // │  STORE TIMINGS                                            │
  // └───────────────────────────────────────────────────────────┘

  timings: {
    weekdays : 'Monday – Saturday: 10:00 AM – 8:00 PM',
    sunday   : 'Sunday: 11:00 AM – 6:00 PM',
  },


  // ┌───────────────────────────────────────────────────────────┐
  // │  SOCIAL MEDIA LINKS                                       │
  // │  Replace '#' with your actual profile URLs                │
  // └───────────────────────────────────────────────────────────┘

  social: {
    instagram : '#',   // e.g. 'https://instagram.com/matchndesignbyminal'
    facebook  : '#',   // e.g. 'https://facebook.com/matchndesignbyminal'
  },


  // ┌───────────────────────────────────────────────────────────┐
  // │  STATS (shown on homepage & about page)                   │
  // └───────────────────────────────────────────────────────────┘

  yearsOfService : '1+',      // How many years in business
  happyCustomers : '100+',    // Approximate happy customers
  collections    : '200+',     // Number of collections/styles


  // ┌───────────────────────────────────────────────────────────┐
  // │  PRODUCT CATEGORIES                                       │
  // │                                                           │
  // │  Each category appears on the homepage and products page. │
  // │  • To change text/prices: edit the values below           │
  // │  • To add a new category: copy one block and change it    │
  // │  • To add products: see the example inside 'sarees'       │
  // │                                                           │
  // │  IMAGE FOLDER STRUCTURE:                                  │
  // │    assets/images/                                         │
  // │      site/         ← logo, hero, og-image, favicon        │
  // │      sarees/       ← cover-1.jpg, cover-2.jpg, etc.      │
  // │      dresses/      ← cover-1.jpg, cover-2.jpg, etc.      │
  // │      fabrics/      ← cover-1.jpg, cover-2.jpg, etc.      │
  // │      ...                                                  │
  // │                                                           │
  // │  HOW CATEGORY IMAGES WORK:                                │
  // │    1. Put photos in the category folder as:               │
  // │         cover-1.jpg, cover-2.jpg, cover-3.jpg ...         │
  // │    2. Set 'coverCount' below to how many you added        │
  // │    3. Photos auto-rotate in a carousel!                   │
  // │    4. Set coverCount to 0 to show gradient placeholder    │
  // └───────────────────────────────────────────────────────────┘

  categories: [
    {
      id          : 'sarees',
      name        : 'Sarees',
      description : 'Explore our exquisite range of handpicked sarees — from traditional silk weaves to contemporary prints, crafted to make every occasion memorable.',
      priceRange  : '₹299 – ₹3,999',
      icon        : '🥻',
      coverCount  : 1,   // Number of cover photos (cover-1.jpg, cover-2.jpg, ...)
      products    : [],
    },
    {
      id          : 'dresses',
      name        : 'Dresses (2 & 3 Piece Sets)',
      description : 'Elegant two and three piece dress sets perfect for festive wear, casual outings, and everything in between.',
      priceRange  : '₹999 – ₹5,999',
      icon        : '👗',
      coverCount  : 1,
      products    : [],
    },
    {
      id          : 'fabrics',
      name        : 'Designer Fabrics',
      description : 'Premium designer fabrics sourced from the finest mills — ideal for creating your dream outfit with a personal touch.',
      priceRange  : '₹199 – ₹999 per metre',
      icon        : '🪡',
      coverCount  : 3,
      products    : [],
    },
    {
      id          : 'linings',
      name        : 'Linings & Stitching Materials',
      description : 'Quality lining fabrics and stitching materials to complete your garment with perfection and durability.',
      priceRange  : '₹32 per metre',
      icon        : '🧵',
      coverCount  : 0,
      products    : [],
    },
    {
      id          : 'cordsets',
      name        : 'Cord Sets',
      description : 'Trendy, comfortable cord sets that balance style and ease — a must-have for the modern wardrobe.',
      priceRange  : '₹999 – ₹2,999',
      icon        : '✨',
      coverCount  : 2,
      products    : [],
    },
    {
      id          : 'dupattas',
      name        : 'Dupattas',
      description : 'Complete your ethnic ensemble with our stunning dupatta collection — in organza, chiffon, silk and more.',
      priceRange  : '₹100 – ₹999',
      icon        : '🎀',
      coverCount  : 1,
      products    : [],
    },
    {
      id          : 'lace-latkans',
      name        : 'Lace / Latkans',
      description : 'Beautiful laces, latkans, and trimmings to add the perfect finishing touch to your outfits.',
      priceRange  : '₹50 – ₹999',
      icon        : '🪢',
      coverCount  : 1,
      products    : [],
    },
  ],
  // │  These 8 products appear in "Featured Collection".        │
  // │  • Update titles, prices, and badges as needed            │
  // │  • Set badge to '' (empty quotes) for no label            │
  // │  • Set img to the photo path, e.g. 'assets/images/sarees/1.jpg' │
  // │  • Leave img as '' to show gradient placeholder           │
  // │  • You can add more or remove entries                     │
  // └───────────────────────────────────────────────────────────┘

  featured: [
    { id: 1, title: 'Royal Banarasi Silk Saree',   price: '₹2,499',   badge: 'Bestseller',  category: 'Sarees',    img: '' },
    { id: 2, title: 'Floral 3-Piece Dress Set',    price: '₹3,299',   badge: 'New Arrival', category: 'Dresses',   img: '' },
    { id: 3, title: 'Designer Chanderi Fabric',    price: '₹499/m',   badge: '',            category: 'Fabrics',   img: '' },
    { id: 4, title: 'Embroidered Organza Dupatta', price: '₹899',     badge: 'Trending',    category: 'Dupattas',  img: '' },
    { id: 5, title: 'Pastel Georgette Saree',      price: '₹1,799',   badge: '',            category: 'Sarees',    img: '' },
    { id: 6, title: 'Festive Cord Set',            price: '₹1,599',   badge: 'New Arrival', category: 'Cord Sets', img: '' },
    { id: 7, title: 'Pure Silk Blouse Fabric',     price: '₹699/m',   badge: '',            category: 'Fabrics',   img: '' },
    { id: 8, title: 'Designer 2-Piece Dress Set',  price: '₹2,999',   badge: 'Bestseller',  category: 'Dresses',   img: '' },
  ],


  // ┌───────────────────────────────────────────────────────────┐
  // │  CUSTOMER TESTIMONIALS                                    │
  // │                                                           │
  // │  Replace with real customer names, cities, and reviews.   │
  // │  • 'initials' = 1-2 letters shown in the avatar circle   │
  // │  • 'rating'   = number of stars (1 to 5)                 │
  // └───────────────────────────────────────────────────────────┘

  testimonials: [
    {
      name     : 'Customer Name 1',
      location : 'City',
      rating   : 5,
      text     : 'Absolutely love my saree from Match & Design! The quality is outstanding and Minal personally helped me pick the perfect design for my wedding. Highly recommend!',
      initials : 'C1',
    },
    {
      name     : 'Customer Name 2',
      location : 'City',
      rating   : 5,
      text     : "I've been shopping here for years and the collection keeps getting better. The designer fabrics here are unmatched in quality and variety. Such a wonderful store!",
      initials : 'C2',
    },
    {
      name     : 'Customer Name 3',
      location : 'City',
      rating   : 5,
      text     : 'Visited for a festive outfit and left with so much more! The personalized attention and premium collection make this my go-to store for all occasions.',
      initials : 'C3',
    },
  ],


  // ┌───────────────────────────────────────────────────────────┐
  // │  "WHY CHOOSE US" FEATURES                                 │
  // │                                                           │
  // │  These appear on the homepage & about page.               │
  // │  Change emoji icons, titles, and descriptions as needed.  │
  // └───────────────────────────────────────────────────────────┘

  features: [
    {
      icon  : '💎',
      title : 'Premium Quality',
      desc  : 'Carefully curated fabrics and garments that meet the highest standards of quality and craftsmanship.',
    },
    {
      icon  : '✨',
      title : 'Latest Designs',
      desc  : 'Always updated with current fashion trends while staying rooted in timeless traditional elegance.',
    },
    {
      icon  : '🪡',
      title : 'Custom Stitching Support',
      desc  : 'Expert guidance on fabrics and stitching to create the perfect custom outfit for any occasion.',
    },
    {
      icon  : '🛍️',
      title : 'Wide Variety',
      desc  : 'From sarees to cord sets, designer fabrics to dupattas — everything under one roof.',
    },
    {
      icon  : '🤝',
      title : 'Personal Assistance',
      desc  : 'Enjoy a store experience with dedicated personal attention to find exactly what you need.',
    },
  ],

};
