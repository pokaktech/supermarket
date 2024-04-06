const Category = require('./models/category'); // Import your CategorySchema model

const categoryTitle = [
    {
        title: "Vegetables",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Marketvegetables.jpg/330px-Marketvegetables.jpg",
    },
    {
        title: "Fruits",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Blackberryraspberrystrawberry.jpg/330px-Blackberryraspberrystrawberry.jpg",
    },
    {
        title: "Ice Cream and Deserts",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg/330px-Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg",
    },
    {
        title: "Electronics and Accessories",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Audion_receiver.jpg/330px-Audion_receiver.jpg",
    },
    {
        title: "Cakes",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Pound_layer_cake.jpg/375px-Pound_layer_cake.jpg",
    },
    {
        title: "Beverages",
        image:"https://images.unsplash.com/photo-1625865019845-7b2c89b8a8a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmV2ZXJhZ2VzfGVufDB8fDB8fHww",
    },
    {
        title: "Kitchen Equipments",
        image:"https://media.istockphoto.com/id/96820469/photo/empty-clean-older-style-kitchen-area.webp?b=1&s=170667a&w=0&k=20&c=_yggd1GVSkB6lmWzLN3b9nTpfSLxxVJ6mt5jBWbiBsw=",
    },
    {
        title: "Furnitures",
        image:"https://media.istockphoto.com/id/878753486/photo/cane-furnitures-handicrafts-on-display.webp?b=1&s=170667a&w=0&k=20&c=v26Y69Kpky-8Hyo-l6Tzz2bxFsVJwXPz5AJGJS2d4ms=",
    },
    {
        title: "Cleaning and Hygiene",
        image:"https://media.istockphoto.com/id/870219332/photo/cleaning-lady-with-a-bucket-and-cleaning-products.webp?b=1&s=170667a&w=0&k=20&c=NyHmCalXyqldIKGk6ti6Hkp22qd7S8kXFM2eSyS-5p4=",
    },
    {
        title: "Oils",
        image:"https://media.istockphoto.com/id/500479042/photo/oil-of-mustard-in-a-small-jar.webp?b=1&s=170667a&w=0&k=20&c=XlQ3CWC93lQ58KO8xKyGHGepcj6AUh1EVq-wjYT8UQY=",
    },
    {
        title: "Snacks and Foods",
        image:"https://media.istockphoto.com/id/1054227912/photo/diwali-rangoli-or-design-made-using-indian-snacks-sweet-and-diya-or-lamp-and-flowers.webp?b=1&s=170667a&w=0&k=20&c=YfbzkWPlgo4JCIspNrXT1Q1Vv67nYeQ6gy3r8Crr0nY=",
    },
    {
        title: "Fast Foods",
        image:"https://media.istockphoto.com/id/1344002306/photo/delicious-cheeseburger-with-cola-and-potato-fries-on-the-white-background-fast-food-concept.webp?b=1&s=170667a&w=0&k=20&c=RLV_nWVedqDW1wIXyFrqRs7FT_aya_cGuIj7jKlKjCE=",
    },
    {
        title: "Powders",
        image:"https://media.istockphoto.com/id/1255965862/photo/turmeric-powder-and-fresh-turmeric-root-on-grey-concrete-background.webp?b=1&s=170667a&w=0&k=20&c=A4xWvCN_kYEwgVNvYkS4lesd_Z5YS1j-0SdUPvTrzaY=",
    },
    {
        title: "Grains",
        image:"https://media.istockphoto.com/id/1152435202/photo/food-background-rice-chia-seeds-nuts-oatmeal-buckwheat-quinoa-mung-beans-and-greens-on-a.webp?b=1&s=170667a&w=0&k=20&c=9ekg3i8TMPdSb_-Ec7-FI19nrf5_JcMjwKmB48n6bx0=",
    },
    {
        title: "School Belongings",
        image:"https://media.istockphoto.com/id/1319637526/photo/bags-of-different-kind-and-belonging-to-different-members-within-a-family.webp?b=1&s=170667a&w=0&k=20&c=lbpzEYgRbkgjUbuZQ55RM9zhIoPNOrus8GYR0xebH08=",
    },
    {
        title: "Home Essentials",
        image:"https://media.istockphoto.com/id/1251694108/photo/scandinavian-concept-of-living-room-interior-with-design-sofa-coffee-table-plant-in-pot.webp?b=1&s=170667a&w=0&k=20&c=nUEPVk_M2ICjec3Zo98IGuwCqB3hXNDgdjqAReJOhsc=",
    },
    {
        title: "Medicine Essentials",
        image:"https://media.istockphoto.com/id/1312765142/photo/businessman-hold-virtual-medical-network-connection-icons-covid-19-pandemic-develop-people.webp?b=1&s=170667a&w=0&k=20&c=o6A0FZptBBeAB6inKsMm4XlV088RvOiR0OQ0c0mwxkI=",
    },
    {
        title: "Non Veg",
        image:"https://media.istockphoto.com/id/1989593651/photo/indian-black-pomfret-fish-fry-halwa-rava-fry-indian-spicy-fish-fry-served-on-black-grill-pan.webp?b=1&s=170667a&w=0&k=20&c=Bc6MnOhZxdbPbPMR1jrTbINarZolqoi3LYtEK51qZas=",
    },
    {
        title: "Other Grocery Items",
        image:"https://media.istockphoto.com/id/521812367/photo/stocked-shelves-in-grocery-store-aisle.webp?b=1&s=170667a&w=0&k=20&c=RpGfG7xC6FZy9XogFZXPSbOW9J-57Q3UCmeUVGcfTZA=",
    }
];
Category.deleteMany({})
    .then(() => {
        console.log('Existing category titles removed successfully.');
        // Use insertMany to insert new category titles
        return Category.insertMany(categoryTitle);
    })
    .then(result => {
        console.log('New category titles inserted successfully:', result);
    })
    .catch(error => {
        console.error('Error:', error);
    });
   
    