const {Product} = require('./models/category');
const {Category}=require("./models/category");
const vegetableproducts= [
    {
     
      name: "Tomato",
      imageUrl:
        "https://media.istockphoto.com/id/466175630/photo/tomato-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=ELzCVzaiRMgiO7A5zQLkuws0N_lvPxrgJWPn7C7BXz0=",
      price: 15,
      tags:[
        "Vegetables","Fresh","Natural"
      ]
    },
    {
      
      name: "Carrot",
      imageUrl: "https://static.toiimg.com/photo/105672842.cms",
      price: 10,
      tags:[
        "Vegetables","Vitamin"
      ]
    },
    {
     
      name: "Onion",
      imageUrl:
        "https://timesofindia.indiatimes.com/photo/103397270/103397270.jpg",
      price: 10,
      tags:[
        "Vegetables","Fresh","Dried","onion"
      ]
    },
    {
      
      name: "Potato",
      imageUrl:
        "https://farmfreshbangalore.com/cdn/shop/products/i6i3gdx_1500x.jpg?v=1647265311",
      price: 15,
      tags:[
        "Vegetables","Carbohydrate","Potato","Tubers"
      ]
    },
    {
      
      name: "Chilli",
      imageUrl:
        "https://media.istockphoto.com/id/468484516/photo/pepper.jpg?s=612x612&w=0&k=20&c=HWFJLWvWc7CWApipb8kfEBB1WbxnnEXndnSwsl4_obw=",
      price: 20,
      tags:[
        "Vegetables","Chilli"
      ]
    },
    {
      
      name: "Raddish",
      imageUrl:
        "https://rukminim2.flixcart.com/image/850/1000/kc0u7bk0/plant-seed/c/w/g/50-raddish-seeds-001-agrey-original-imaft8zgvtsmhgdv.jpeg?q=90&crop=false",
      price: 25,
      tags:[
        "Vegetables","Raddish","White"
      ]
    },
    {
      
      name: "Cauli flower",
      imageUrl:
        "https://media.istockphoto.com/id/534039738/photo/broccoli-cauliflower-and-cabbage.webp?b=1&s=170667a&w=0&k=20&c=GccsfUYWG0U2TAHehsRh2L39obr66yCYFzJTOe9mT8U=",
      price: 25,
      tags:[
        "Vegetables","Cauli Flower"
      ]
    },
    {
      
      name: "Capsicum",
      imageUrl:
        "https://media.istockphoto.com/id/157476648/photo/one-green-bell-pepper-isolated-on-a-plain-white-background.webp?b=1&s=170667a&w=0&k=20&c=NUz-y3erVZ01P8l_2nZbSLdPla9_jN_Q_pup_XUlpCs=",
      price: 15,
      tags:[
        "Vegetables","Capsicum"
      ]
    },
    {
     
      name: "Drumstick",
      imageUrl:
        "https://media.istockphoto.com/id/648365960/photo/green-drumsticks-background.webp?b=1&s=170667a&w=0&k=20&c=ANhMduYDF64fqDxTRD__hq0i8s5iRDVpv4gGgCwqXiw=",
      price: 25,
      tags:[
        "Vegetables","Drumstick"
      ]
    },
    {
      
      name: "Cabbage",
      imageUrl:
        "https://media.istockphoto.com/id/136540710/photo/red-cabbage.webp?b=1&s=170667a&w=0&k=20&c=zfUd4bC40BGW6bhiwq99-U54de0N-69ZXf1zfKQXQh8=",
      price: 15,
      tags:[
        "Vegetables","Cabbage","Fresh"
      ]
    },
    {
     
      name: "Yam",
      imageUrl:
        "https://media.istockphoto.com/id/1283725581/photo/elephant-foot-yam.webp?b=1&s=170667a&w=0&k=20&c=rg2trwK2yncp3Gtxijin5tLTqj8JqlhOCiUNyI1hy3E=",
      price: 25,
      tags:[
        "Vegetables","Yam","Tubers"
      ]
    },
    {
      
      name: "Beans",
      imageUrl:
        "https://media.istockphoto.com/id/1140726381/photo/green-organic-beans-in-marketplace.webp?b=1&s=170667a&w=0&k=20&c=IvIN1W2o6SXB35I-l3vG7LYPnlrFsTHdHJBCB8untTY=",
      price: 15,
      tags:[
        "Vegetables","Proteins","Beans"
      ]
    },
    {
      
      name: "lady's finger",
      imageUrl:
        "https://media.istockphoto.com/id/1171305503/photo/okra-or-ladys-finger-in-indian-vegetable-market.webp?b=1&s=170667a&w=0&k=20&c=FQNdPi6HfIWJ7ZBeIp4wu8UDOdNJYTChYXgsr1MM2KA=",
      price: 20,
      tags:[
        "Vegetables","Lady's Finger"
      ]
    },
    {
      
      name: "Cucumber",
      imageUrl:
        "https://media.istockphoto.com/id/470216836/photo/cucumber.webp?b=1&s=170667a&w=0&k=20&c=2tfXLrSufejLev1DvhNNYL_yz-rra8EgXAmfurYQJ1E=",
      price: 25,
      tags:[
        "Vegetables","Healthy","Cucumber"
      ]
    },
    {
      
      name: "Beetroot",
      imageUrl:
        "https://media.istockphoto.com/id/626331104/photo/fresh-beetroots-in-wooden-tray-beet-with-leaves.webp?b=1&s=170667a&w=0&k=20&c=z6V8OLtcfk8DA1hDKlxXe_A2h9Jf687yNmrUJeF8QeE=",
      price: 30,
      tags:[
        "Vegetables","Proteins","Beetroot"
      ]
    },
    {
      id: 2,
      name: "Spinash",
      imageUrl:
        "https://media.istockphoto.com/id/1006196472/photo/bunch-of-spinach-leaves-on-isolated-white-background.webp?b=1&s=170667a&w=0&k=20&c=QWLt15npw7SWO4AyNWyB3dwzZAxB4lcrvo7Phvz_8gY=",
      price: 10,
      tags:[
        "Vegetables","Proteins","Healthy"
      ]
    },
    {
      id: 1,
      name: "Ash Gouard",
      imageUrl:
        "https://media.istockphoto.com/id/1308804048/photo/closeup-shot-of-wax-gourd-vegetable-on-a-plate.webp?b=1&s=170667a&w=0&k=20&c=dAtQ_rtUKyhaLr1pMk0KsXmdHwZ2XXTV845zGyW3iP8=",
      price: 25,
      tags:[
        "Vegetables","Fresh"
      ]
    },
    {
      id: 2,
      name: "Snake Gouard",
      imageUrl:
        "https://media.istockphoto.com/id/1273690321/photo/two-snake-gourd-on-white-backgrounds-top-view.webp?b=1&s=170667a&w=0&k=20&c=IaQhGAGt1yZCdb4ET9MW8_F2PFqlRehOcn3n8b-_-mk=",
      price: 25,
      tags:[
        "Vegetables","Dried","Fresh"
      ]
    },
    {
      
      name: "Bitter Goaurd",
      imageUrl:
        "https://media.istockphoto.com/id/1249983832/photo/bitter-gourd-in-ladle-red-background.webp?b=1&s=170667a&w=0&k=20&c=hJtz0EK8HCrczv9ae2MeIhy9ZrN0fauGX1CsUneKr9Y=",
      price: 20,
      tags:[
        "Vegetables","Bitter","Healthy"
      ]
    },
    {
     
      name: "Mushroom",
      imageUrl:
        "https://media.istockphoto.com/id/1030920584/photo/ripe-champignon-mushrooms-in-bowl-on-wooden-table-isolated-on-black.webp?b=1&s=170667a&w=0&k=20&c=dA8H7zFkroVCTD8BQVQEGW63BD8FhUiYUQ6TNnVUd_U=",
      price: 35,
      tags:[
        "Vegetables","Proteins"
      ]
    },
    {
     
      name: "Garlic",
      imageUrl:
        "https://media.istockphoto.com/id/499147864/photo/garlic.webp?b=1&s=170667a&w=0&k=20&c=hwlpUfQr-CFYFrfJtpWM0OAV5DiKFc092VNULCkZA6k=",
      price: 10,
      tags:[
        "Vegetables","Garlic","onion"
      ]
    },
    {
     
      name: "Gooseberries",
      imageUrl:
        "https://media.istockphoto.com/id/1438550132/photo/full-frame-image-of-pile-of-indian-gooseberries-in-crate-on-supermarket-shelves-elevated-view.webp?b=1&s=170667a&w=0&k=20&c=EWgFKjLphF5Ar-m6dRDOXjtePuWzo-M8vyXAjMmUDtI=",
      price: 45,
      tags:[
        "Vegetables","Healthy","Proteins","Bitter"
      ]
    },
    {
     
      name: "Raw Bannana",
      imageUrl:
        "https://media.istockphoto.com/id/672788388/photo/green-banana-isolated-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=qoO3Ijchg-_-_7_0JsS9ggMz_oYlrgQXyu4oqb1-Bkk=",
      price: 20,
      tags:[
        "Vegetables","Raw Bannana"
      ]
    },
    {
     
      name: "Banana Stem",
      imageUrl:
        "https://media.istockphoto.com/id/1452630616/photo/thor-or-white-banana-stem-is-eaten-as-vegetable-in-south-east-asian-countries.webp?b=1&s=170667a&w=0&k=20&c=_GvqVWKblj8W-XNSgYSqCtJljKW_vfiK3yeX8MEjTbg=",
      price: 30,
      tags:[
        "Vegetables","Banana Stem"
      ]
    },
    {
      
      name: "Brinjal",
      imageUrl:
        "https://media.istockphoto.com/id/1189368291/photo/eggplant.webp?b=1&s=170667a&w=0&k=20&c=qqv1pCLt1BYmuWhNh97ADC8BHctpzO8jv7dQwwy3ipc=",
      price: 20,
      tags:[
        "Vegetables","Brinjal","Fresh"
      ]
    },
    {
     
      name: "Pea",
      imageUrl:
        "https://media.istockphoto.com/id/468662606/photo/fresh-green-pea-pod.webp?b=1&s=170667a&w=0&k=20&c=HJAYup0bFbnNaoFnETj6vupyGgFeKNj-EAK0w1xXywg=",
      price: 15,
      tags:[
        "Vegetables","Proteins","Pea","Green Pea"
      ]
    },
    {
     
      name: "Chinese Potato",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNVri-AR1HKDiSMMe4o8hOFrXz--0myy5aL9hM5J1r_w&s",
      price: 35,
      tags:[
        "Vegetables","Tubers"
      ]
    },
    {
      
      name: "Tapioca",
      imageUrl:
        "https://media.istockphoto.com/id/1199132068/photo/yucca-root.webp?b=1&s=170667a&w=0&k=20&c=yEpscGjENvOAp28JMzLcFpHk4QAMO-N3XnCz_i1alOU=",
      price: 35,
      tags:[
        "Vegetables","Tapioca","Tubers"
      ]
    },
    {
     
      name: "Ginger",
      imageUrl:
        "https://media.istockphoto.com/id/1269132686/photo/fresh-ginger-roots-isolated-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=rA7sfPHV6HkGGPHqeX--Ozvz0ko3NQtQ5c0D2jFcvos=",
      price: 10,
      tags:[
        "Vegetables","Ginger","Healthy"
      ]

    },
    {
      
      name: "Tamarind",
      imageUrl:
        "https://media.istockphoto.com/id/1281004959/photo/top-close-view-of-fresh-tamarind-leaves-bunch-isolated-on-plain-background.webp?b=1&s=170667a&w=0&k=20&c=qX0MUfy2CUj4_v1Szjlrg2mj_R0uf5_sRFv0pPcHZHU=",
      price: 25,
      tags:[
        "Vegetables","Tamarind"
      ]
    },
    {
      
      name: "Coriander leaves",
      imageUrl:
        "https://media.istockphoto.com/id/641373188/photo/cilantro-isolated-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=j9_yOpjZySZCvp5lN9iPXmjNuHJRlnVd2JbPAy46zSw=",
      price: 10,
      tags:[
        "Vegetables","Fresh","Healthy","Dried"
      ]
    },
    {
      
      name: "Curry Leaves",
      imageUrl:
        "https://media.istockphoto.com/id/136146217/photo/curry-leaves.webp?b=1&s=170667a&w=0&k=20&c=98jWmxn1DxHaPboAX7StZHtME7Aa_EMtxN1O8Eyhriw=",
      price: 15,
      tags:[
        "Vegetables","Healthy"
      ]
    },
    {
      
      name: "Sweet Potato",
      imageUrl:
        "https://media.istockphoto.com/id/104091897/photo/sweet-potatoes.webp?b=1&s=170667a&w=0&k=20&c=hoGbM_IuohfQIZKZsEqRBV7LxSNRx7qUuzFYfEDOoAA=",
      price: 25,
      tags:[
        "Vegetables","Tubers"
      ]
    },
    {
     
      name: "Pumpkin",
      imageUrl:
        "https://media.istockphoto.com/id/933930040/photo/green-pumpkin-on-a-wooden-table.webp?b=1&s=170667a&w=0&k=20&c=hbiHHgDeVMgw6RliqBTR5Z-t4KpRuUDORrfBFQvzeaE=",
      price: 20,
      tags:[
        "Vegetables","Pumpkin"
      ]
    },
    {
     
      name: "Taro root",
      imageUrl:
        "https://media.istockphoto.com/id/171307161/photo/taro.webp?b=1&s=170667a&w=0&k=20&c=Lc837e_i_YdOip83kxt_I1DTGBEDdgcSRunka5uRECY=",
      price: 30,
      tags:[
        "Vegetables","Tubers"
      ]
    },
];
const fruitproducts=[
    
        {
          
          name: "Apple",
          imageUrl:
            "https://media.istockphoto.com/id/185262648/photo/red-apple-with-leaf-isolated-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=wbm2rjFuYpgQewyfKF2bGMrxTReYgwoKXMC7BRdXC54=",
          price: 60,
          tags:[
            "Fruits","Apple","Green Apple","Fresh"
          ]
        },
        {
          
          name: "Banana",
          imageUrl:
            "https://media.istockphoto.com/id/173242750/photo/banana-bunch.webp?b=1&s=170667a&w=0&k=20&c=0tf5f84ouowwcY08dpp6XrWUTLJLL_dWwjqAlyueU60=",
          price: 50,
          tags:[
            "Fruits","Morris","Banana"
          ]
        },
        {
          
          name: "Orange",
          imageUrl:
            "https://media.istockphoto.com/id/907999120/photo/picked-orange-fruits.webp?b=1&s=170667a&w=0&k=20&c=ZfeXbmmtgV1D1GvpmOg6ucoLPyOyNj17PT-ymDCZwro=",
          price: 40,
          tags:[
            "Fruits","Orange","Fresh"
          ]
        },
        {
          
          name: "Guava",
          imageUrl:
            "https://media.istockphoto.com/id/171575811/photo/guava.webp?b=1&s=170667a&w=0&k=20&c=Z9ntk9NzARJA7DIr09qEpBU2I7o8WG6LFl0gpUnTYNU=",
          price: 60,
          tags:[
            "Fruits","Fresh","Guava"
          ]
        },
        {
         
          name: "Pineapple",
          imageUrl:
            "https://media.istockphoto.com/id/166637723/photo/pineapple.webp?b=1&s=170667a&w=0&k=20&c=w07loRiF2vIHqMsRzY7iY3jLHN5e4C44PcXBvtRbr44=",
          price: 70,
          tags:[
            "Fruits","Pineapple","Fresh"
          ]
        },
        {
          
          name: "Grapes",
          imageUrl:
            "https://media.istockphoto.com/id/1316673701/photo/black-grapes-on-bowl.webp?b=1&s=170667a&w=0&k=20&c=GgfonLeIuHWjJjt5UWlpVNNPWfnyjyjcrw9p_kWB0GM=",
          price: 90,
          tags:[
            "Fruits","Grapes","Dried","Fresh"
          ]
        },
        {
          
          name: "Lemon",
          imageUrl:
            "https://media.istockphoto.com/id/587928448/photo/five-lemons-in-white-bowl.webp?b=1&s=170667a&w=0&k=20&c=yB-qPavi1sUduzgiRnfBNvOILJZbCJsVf8W4Z8Ad97w=",
          price: 20,
          tags:[
            "Fruits","Lemon"
          ]
        },
        {
          
          name: "Water Melon",
          imageUrl:
            "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdhdGVybWVsb258ZW58MHx8MHx8fDA%3D",
          price: 20,
          tags:[
            "Fruits","Water Melon"
          ]
        },
        {
         
          name: "Musambi",
          imageUrl:
            "https://media.istockphoto.com/id/1501767704/photo/this-fruit-is-known-as-sweet-lemon-or-mousambi-scientific-name-citrus-limetta.webp?b=1&s=170667a&w=0&k=20&c=X1C0ohKZxy7eIxXT4k55S2cXEwx_eFz8Ar7jFu_uvwM=",
          price: 70,
          tags:[
            "Fruits","Fresh"
          ]
        },
        {
         
          name: "chikoo",
          imageUrl:
            "https://media.istockphoto.com/id/851039094/photo/sapodilla-fruits.webp?b=1&s=170667a&w=0&k=20&c=7_X8UKUopr0Gpw28sIJ6ULlObZmdESjl_EetmMqvqM8=",
          price: 50,
          tags:[
            "Fruits","Fresh"
          ]
        },
        {
         
          name: "Papaya",
          imageUrl:
            "https://media.istockphoto.com/id/466740633/photo/green-papaya.webp?b=1&s=170667a&w=0&k=20&c=UCMEOZ5_hwUkpZTOpMMBI-xcN05jIdrFAt5nWkw_5ZA=",
          price: 25,
          tags:[
            "Fruits","Fresh","Proteins"
          ]
        },
        {
         
          name: "Blueberry",
          imageUrl:
            "https://media.istockphoto.com/id/157197337/photo/blueberries.webp?b=1&s=170667a&w=0&k=20&c=CtNUngEQO9L8ItL-d4La-YUHdyvIL13i3etMz6lFvkU=",
          price: 90,
          tags:[
            "Fruits","Blueberry","Fresh","Bitter"
          ]
        },
        {
          
          name: "Strawberry",
          imageUrl:
            "https://media.istockphoto.com/id/157686310/photo/sliced-strawberries-background.webp?b=1&s=170667a&w=0&k=20&c=C2k4rFjVe3KJMu_ZyTCpVda32UXZeQzoQlVXTF1W5Bs=",
          price: 80,
          tags:[
            "Fruits","Strawberry"
          ]
        },
        {
         
          name: "Dates",
          imageUrl:
            "https://media.istockphoto.com/id/1393276566/photo/close-up-of-fresh-date-fruit-in-a-bowl-on-table.webp?b=1&s=170667a&w=0&k=20&c=iVNjh9zr_ABpZ34qY6pfndVi6dHvrQS3fd_uH05_BaM=",
          price: 100,
          tags:[
            "Fruits","Dates","Fresh","Healthy"
          ]
        },
        {
        
          name: "Plums",
          imageUrl:
            "https://media.istockphoto.com/id/687478414/photo/red-cherry-plum-with-green-leaves-isolated-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=JjKuxsJX8ssNxbuolP3wuAgoS2klcSrI8FfiYBwjrao=",
          price: 60,
          tags:[
            "Fruits","Plums","Healthy"
          ]
        },
        {
          
          name: "cherry",
          imageUrl:
            "https://media.istockphoto.com/id/181099124/photo/a-pile-of-cherries-with-leaves-attached.webp?b=1&s=170667a&w=0&k=20&c=p0cy6YAkmly-H5RqlN_g8H9H7R1lcGSW1EQgh2P4Hps=",
          price: 75,
          tags:[
            "Fruits","Cherries","Sweet"
          ]
        },
        {
          
          name: "Jackfruit",
          imageUrl:
            "https://media.istockphoto.com/id/503570393/photo/jackfruit-tree.webp?b=1&s=170667a&w=0&k=20&c=t4jvTnGayzRXsjZmVjnUf0N6-mOf2rbqk0yg6QvsoZA=",
          price: 40,
          tags:[
            "Fruits","Jackfruit","Sweet"
          ]
        },
        {
          
          name: "Sugarcane",
          imageUrl:
            "https://media.istockphoto.com/id/1290693390/photo/raw-sugarcane.webp?b=1&s=170667a&w=0&k=20&c=1vwCD3cazCYkgcT_fIxSyFJzAPXKvsc-q_hbZZ6regs=",
          price: 40,
          tags:[
            "Fruits","Sugarcane","Sweet"
          ]
        },
        {
          
          name: "Pomogranate",
          imageUrl:
            "https://media.istockphoto.com/id/150894962/photo/pomegranate-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=f1rBt4hQOPmaeae0GcFBmGcyc8vgZuU9YQh1bQSZXuE=",
          price: 50,
          tags:[
            "Fruits","Pomogranate","Healthy"
          ]
        },
        {
          
          name: "Custard Apple",
          imageUrl:
            "https://media.istockphoto.com/id/983856776/photo/custard-apple-on-tree-india.webp?b=1&s=170667a&w=0&k=20&c=hfYwdFOtHRVoMapw3OsRzuxo_ANdjTor9gzpaYpRpHs=",
          price: 45,
          tags:[
            "Fruits","Custard Apple"
          ]
        },
        {
          
          name: "Mango",
          imageUrl:
            "https://media.istockphoto.com/id/168370138/photo/mango.webp?b=1&s=170667a&w=0&k=20&c=xraujw-bJkOOBKXcqtNaU65kDaBK2szprAGynpRhSIg=",
          price: 40,
          tags:[
            "Fruits","Mango","Sour","Taste"
          ]
        },
        {
          
          name: "Kiwi",
          imageUrl:
            "https://media.istockphoto.com/id/493890436/photo/kiwi-fruit-slices-on-wooden-table.webp?b=1&s=170667a&w=0&k=20&c=H6SnSDW0YavkqUVLZEHPy1gwCk1kqSjvGxFafXW85xA=",
          price: 95,
          tags:[
            "Fruits","Kiwi","Sweet"
          ]
        },
      
];
const icecreamproducts= [
    {
      
      name: "Chocobar",
      imageUrl:
        "https://media.istockphoto.com/id/466367212/photo/breadsticks-covered-with-chocolate.webp?b=1&s=170667a&w=0&k=20&c=jFej7wYLCL4m73GNgFQe8s111woZwN9b24mYlRnuTNs=",
      price: 10,
      tags:[
        "Icecream","chocobar","Taste","Sweet"
      ]
    },
    {
      
      name: "Kulfi",
      imageUrl:
        "https://media.istockphoto.com/id/1406503828/photo/special-indian-shahi-pista-kulfi-served-in-glass-isolated-on-dark-background-top-view.webp?b=1&s=170667a&w=0&k=20&c=wTSr68vC7lOfiNRTWvV8RzC4jt6pTdbXt7rxWRiw8Ck=",
      price: 15,
      tags:[
        "Icecream","kulfi","Sweet"
      ]
    },
    {
      
      name: "Vanilla Icecream",
      imageUrl:
        "https://media.istockphoto.com/id/684032230/photo/vanilla-ice-cream.webp?b=1&s=170667a&w=0&k=20&c=DBGU0aigIyPe7DeIln8hZzBhY-8G7d41SJZzIun_mdw=",
      price: 120,
      tags:[
        "Vanilla","Icecream","Healthy"
      ]
    },
    {
     
      name: "Chocolate Icecream",
      imageUrl:
        "https://media.istockphoto.com/id/487960671/photo/homemade-dark-chocolate-ice-cream-cone.webp?b=1&s=170667a&w=0&k=20&c=8aKc7erHqHuZ7zUZMbbgivS-FKIJVXBwRzRSKu4ZoyU=",
      price: 172,
      tags:[
        "Icrecream","Chocolate icecream"
      ]
    },
    {
      
      name: "Butterscotch Icecream",
      imageUrl:
        "https://media.istockphoto.com/id/1405413437/photo/ice-cream-cup-background.webp?b=1&s=170667a&w=0&k=20&c=qx93Yf7RContEiCDFE-nQlVVtlzhZR6TqKRR3pIqbfU=",
      price: 148,
      tags:[
        "Butterscotch","Butterscotch Icecream"
      ]
    },
    {
      
      name: "Strawberry Icrecream",
      imageUrl:
        "https://media.istockphoto.com/id/479524476/photo/scoop-of-strawberry-ice-cream-from-birds-eye-view.webp?b=1&s=170667a&w=0&k=20&c=mU9veGR0FuXLq_zP34f5JQ0Bu-Ii4JeaMAuu1VVkK_w=",
      price: 150,
      tags:[
        "Icecream","Strawberry"
      ]
    },
    {
      
      name: "Sipup",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_dYGlzRuPmv9ED7x25T2T_vM9oboN111RdbAG1uk1Uw&s",
      price: 5,
      tags:[
        "Sipup","Tasty"
      ]
    },
    {
      
      name: "Falooda",
      imageUrl:
        "https://media.istockphoto.com/id/1560138634/photo/delicious-sweet-cool-dish-falooda-in-a-glass-served-in-a-cool-house-rich-in-ice-cream-fruits.webp?b=1&s=170667a&w=0&k=20&c=B28IwjXd5bHoH94I1IF-u0eObRHDaAw3srLcyrHodw8=",
      price: 85,
      tags:[
        "Falooda","Tasty"
      ]
    },
    {
      
      name: "Cookie deserts",
      imageUrl:
        "https://media.istockphoto.com/id/481742880/photo/chocolate-chip-ice-cream-cookie-sandwiches.webp?b=1&s=170667a&w=0&k=20&c=BHUfAdGcq9O6ZfTnX1cNE_f0JfK_Cn4BZWvUKahKGkU=",
      price: 75,
      tags:[
        "Deserts","Cookie deserts"
      ]
    },
    {
      
      name: "Vanila desserts",
      imageUrl:
        "https://media.istockphoto.com/id/622804354/photo/various-ice-cream-balls-with-chocolate-sauce.webp?b=1&s=170667a&w=0&k=20&c=9O4rkbjuLb1snqKCC9BicOaq47-4OQS3vNR8tIxdD5E=",
      price: 162,
      tags:[
        "Deserts","Vanila","Vanila deserts"
      ]
    },
    {
      
      name: "Chocolate desserts",
      imageUrl:
        "https://media.istockphoto.com/id/1881482989/photo/baked-deserts.webp?b=1&s=170667a&w=0&k=20&c=t4CDuIxpGq4fxlWKv5s0ycLm85OhIt4nJ7J2ulPkDSQ=",
      price: 138,
      tags:[
        "Chocolate deserts","Chocolate"
      ]
    },
];
const electronics=[
    
        {
          
          name: "TV",
          imageUrl:
            "https://media.istockphoto.com/id/613753096/photo/big-led-tv-isolated-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=wkYcwK4d7koJxSM55gT94ujJqZRTalZ24S2skWIGWQE=",
          price: 25000,
          tags:[
            "TV","tv","electronics"
          ]
        },
        {
          
          name: "Laptop",
          imageUrl:
            "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: 20000,
          tags:[
            "Laptop","electronics","pc"
          ]
        },
        {
          
          name: "Mobile",
          imageUrl:
            "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vYmlsZXxlbnwwfHwwfHx8MA%3D%3D",
          price: 3000,
          tags:[
            "Mobile","electronics"
          ]
        },
        {
         
          name: "Earphones",
          imageUrl:
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWFycGhvbmVzfGVufDB8fDB8fHww",
          price: 1200,
          tags:[
            "Earphones","electronics"
          ]
        },
        {
         
          name: "Radio",
          imageUrl:
            "https://media.istockphoto.com/id/1452468326/photo/antique-red-retro-radio-on-red-background-3d-illustration-render.webp?b=1&s=170667a&w=0&k=20&c=zEYFJcz8un223jLg63OgMYFP221UACdCxscR1O_P7Es=",
          price: 7800,
          tags:[
            "Radio","electronics","Sounder"
          ]
        },
        {
          
          name: "Instruments",
          imageUrl:
            "https://media.istockphoto.com/id/1219335974/photo/instruments-in-white-wooden-background.webp?b=1&s=170667a&w=0&k=20&c=nz9zD0n9-kxeLta4ytcEmIqVuC-FLP5CKmqa0ut1GaE=",
          price: 10000,
          tags:[
            "Instruments","electronics"
          ]
        },
        {
          
          name: "Power Bank",
          imageUrl:
            "https://media.istockphoto.com/id/1331274930/photo/charging-device-for-electronic-equipment-like-smart-phone-and-power-bank.webp?b=1&s=170667a&w=0&k=20&c=yBsGeDFxrjq6JvpFg4jGBu5h9nR5nJx8Ermut5Evqjs=",
          price: 1200,
          tags:[
            "Power Bank","electronics"
          ]
        },
        {
          
          name: "Watches",
          imageUrl:
            "https://media.istockphoto.com/id/469328286/photo/smartwatch.webp?b=1&s=170667a&w=0&k=20&c=xr5HBTTLw9QNlmCfXZHLdPsrX5K0Z1W2pG_ho3Jh3WA=",
          price: 1000,
          tags:[
            "electronics","watches","solar"
          ]
        },
      
];

const cakes=[
    
        {
          
          name: "Plum Cake",
          imageUrl:
            "https://media.istockphoto.com/id/1293840244/photo/top-view-rich-plum-nuts-cake.webp?b=1&s=170667a&w=0&k=20&c=TubRH7f5wZGoQqRSZ3KhLm4ebX48WrFYtW_YtotRZo0=",
          price: 80,
          tags:[
            "Cakes","plum","healthy"
          ]
        },
        {
          
          name: "BlackForest Cake",
          imageUrl:
            "https://media.istockphoto.com/id/1182587314/photo/black-forest-cake-decorated-with-whipped-cream-and-cherries.webp?b=1&s=170667a&w=0&k=20&c=FQ6LDqNqUJPEs2IxCrBtFVloECEdslWsI4bJTi0ijMk=",
          price: 640,
          tags:[
            "Cakes","blackforest","Black Forest","chocolate"
          ]
        },
        {
          
          name: "Vanila Cake",
          imageUrl:
            "https://media.istockphoto.com/id/880443720/photo/vanilla-sponge-cake-with-cream-and-white-chocolate-decorate-sliced-piece-of-cake-on-white.webp?b=1&s=170667a&w=0&k=20&c=b3y8PdCpvNlYedNxzbcfhByIF4T_tBQqAn-q2N5oiFY=",
          price: 480,
          tags:[
            "Cakes","vanila","Vanila Cake"
          ]
        },
        {
          
          name: "Moffin",
          imageUrl:
            "https://media.istockphoto.com/id/980412020/photo/chocolate-muffin-isolated-on-a-white-background.webp?b=1&s=170667a&w=0&k=20&c=KZM95HsDkxzUG3hlir73oLNBD-DaZWfj2mcBoqJzTeA=",
          price: 20,
          tags:[
            "Moffin","Tasty","Cakes"
          ]
        },
        {
          
          name: "Nut cake",
          imageUrl:
            "https://media.istockphoto.com/id/487879013/photo/slice-of-date-bread.webp?b=1&s=170667a&w=0&k=20&c=TpMUeUI1qF5xfT-Pcq83qQEcYnoc1zf3qUviSKaHBvE=",
          price: 200,
          tags:[
            "Nut cake","Cakes"
          ]
        },
        {
         
          name: "Cream cake",
          imageUrl:
            "https://media.istockphoto.com/id/1218487059/photo/fresh-fruit-cream-cake.webp?b=1&s=170667a&w=0&k=20&c=kU8U8HScAAwXw857yDmfmm67jVr_KngyGyR20MM1ugM=",
          price: 150,
          tags:[
            "Cream cake","Cakes","Cream"
          ]
        },
        {
          
          name: "pastry",
          imageUrl:
            "https://media.istockphoto.com/id/1607382510/photo/pastry.webp?b=1&s=170667a&w=0&k=20&c=v6c1j8B5TqfpkJB-yzpZ2XYxg4SZGX_xcboh6BmtbOY=",
          price: 130,
          tags:[
            "Cakes","pastry"
          ]
        },
      
];

const beverage=[
    
        {
         
          name: "Coffee",
          imageUrl:
            "https://media.istockphoto.com/id/157528129/photo/mug-on-plate-filled-with-coffee-surrounded-by-coffee-beans.webp?b=1&s=170667a&w=0&k=20&c=6K7HLoSqH9i-uP4ngjLe2jSwTpNSNRn3JBeUsZ006JI=",
          price: 15,
          tags:[
            "Coffee","Black Coffee","beverages"
          ]
        },
        {
         
          name: "Tea",
          imageUrl:
            "https://media.istockphoto.com/id/1296650267/photo/indian-chai-in-glass-cups-with-metal-kettle-and-other-masalas-to-make-the-tea.webp?b=1&s=170667a&w=0&k=20&c=dsyZbd7z8DAcVeTeWnrCok0NBM9-PgV5mi9P4uge5cw=",
          price: 10,
          tags:[
            "Tea","Black Tea","beverages","Green Tea"
          ]
        },
        {
          
          name: "Energy Drink",
          imageUrl:
            "https://media.istockphoto.com/id/618206470/photo/energy-drink-pass-through-ice-cubes-3d-rendering.webp?b=1&s=170667a&w=0&k=20&c=ocyQgtsO0J3nT6VV0ujphgk9Pw_D5GpkPROQG8ri4PQ=",
          price: 45,
          tags:[
            "Energy Drink","Stamina","beverages"
          ]
        },
        {
          
          name: "Cool Drinks",
          imageUrl:
            "https://media.istockphoto.com/id/1062831310/photo/pour-soft-drink-in-glass-with-ice-splash-on-dark-background.webp?b=1&s=170667a&w=0&k=20&c=VJSejmdGbxDiXmBdart54Yl8R5zece_ZTHcvHenk2w0=",
          price: 170,
          tags:[
            "Cool Drinks","beverages"
          ]
        },
        {
         
          name: "Beer",
          imageUrl:
            "https://media.istockphoto.com/id/519728153/photo/mug-of-beer.webp?b=1&s=170667a&w=0&k=20&c=UEBojW0-3NFOx8oZj2swQQzJGsYIikhkOe3qAii_4WM=",
          price: 240,
          tags:[
            "Beer","beverages","Cool Beer","Ice Beer"
          ]
        },
        {
         
          name: "Juices",
          imageUrl:
            "https://media.istockphoto.com/id/485131020/photo/green-vegetable-juice-on-rustic-wood-table.webp?b=1&s=170667a&w=0&k=20&c=-Czk2wWuR1hMmaDRuDNzikhp1VJQi80y9ni4n64aw5o=",
          price: 50,
          tags:[
            "Juices","Fresh Juice","Healthy"
          ]
        },
      
];

const kitchen=[

        {
          
          name: "Bucket",
          imageUrl:
            "https://media.istockphoto.com/id/1460159275/photo/stack-of-colorful-old-rusty-buckets-isolated-cut-out-on-white-cleaning-equipments.webp?b=1&s=170667a&w=0&k=20&c=nEvLdmNdnXf2Yva2okVBOHzITyWOS0dTyoV0Z0Tfs0k=",
          price: 570,
          tags:[
            "Bucket","kitchen","steel","plastic"
          ]
        },
        {
          
          name: "Vessels",
          imageUrl:
            "https://media.istockphoto.com/id/1773911685/photo/a-collection-of-metal-antique-vase-pot-and-water-vessel.webp?b=1&s=170667a&w=0&k=20&c=XlgEzrzbAyYhNX497sRSXISRqTFDQ1iaP7iVAh4CpOs=",
          price: 1200,
          tags:[
            "Vessels","steel","plastic","kitchen"
          ]
        },
        {
          
          name: "Spoons",
          imageUrl:
            "https://media.istockphoto.com/id/172925301/photo/silverware-set.webp?b=1&s=170667a&w=0&k=20&c=2ARF-qkuxDDMoN3MkriCZ8CIOlnWg1veGqAHhW0P35s=",
          price: 450,
          tags:[
            "Vessels","steel","plastic","kitchen"
          ]
        },
        {
          
          name: "Stove",
          imageUrl:
            "https://media.istockphoto.com/id/675233076/photo/gas-stove-burner.webp?b=1&s=170667a&w=0&k=20&c=M27g-FK4dCUsvvANM4s2JsVmjRxtqX-efxmHogCm54s=",
          price: 1400,
          tags:[
            "Vessels","steel","three pin stove","two pin stove","kitchen"
          ]
        },
        {
         
          name: "Knife Sets",
          imageUrl:
            "https://media.istockphoto.com/id/1127558653/photo/set-of-knives-for-kitchen.webp?b=1&s=170667a&w=0&k=20&c=_NaBusS1Pf9OyBHHxNIQW-2ctrPScyQrOLpssgE4ibc=",
          price: 380,
          tags:[
            "Knife Sets","Sharp","kitchen"
          ]
        },
        {
          
          name: "Pan",
          imageUrl:
            "https://media.istockphoto.com/id/1223923141/photo/empty-cast-iron-grill-pan.webp?b=1&s=170667a&w=0&k=20&c=o9pDP-NtfQFBsjffq1Cy7KyGKCdeQ5entQMqLPVrz6w=",
          price: 470,
          tags:[
            "Pan","Steel Pan","Plastic pan","Induction Pan"
          ]
        },
        {
          
          name: "Cooker Set",
          imageUrl:
            "https://media.istockphoto.com/id/1005331184/photo/set-of-stainless-pots-and-pan-with-glass-lids-on-the-white-wooden-background.webp?b=1&s=170667a&w=0&k=20&c=QGSbTd4fcWs8SaTcdhDe62p_1YyIu3oJg0xKWZ7Od0k=",
          price: 7500,
          tags:[
            "Cooker Set","Cookers","kitchen"
          ]
        },
        {
         
          name: "Mixer",
          imageUrl:
            "https://media.istockphoto.com/id/504046512/photo/electric-blender-kitchen-appliance-equipment-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=GMO5bE5KLlU-jGNk_SRgISn5emzV4XBGx67yJZbj9ww=",
          price: 1820,
          tags:[
            "Mixer","kitchen"
          ]
        },
        {
          
          name: "Grinder",
          imageUrl:
            "https://media.istockphoto.com/id/500455404/photo/single-electric-food-processor-in-retail-store.webp?b=1&s=170667a&w=0&k=20&c=HwIG6eUZ_r9nMkeGL6wiWRaTfXqvlytQMn1s1sJu_C0=",
          price: 3700,
          tags:[
            "Grinder","kitchen","food grinder","mixer grinder","kitchen"
          ]
        },
        {
          
          name: "Plate",
          imageUrl:
            "https://media.istockphoto.com/id/489909851/photo/isolated-shot-of-empty-white-plate-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=HjMIf2KkF4Q0X6FUJMmJHNO1RoEmWMyLgKk3t-WdKuE=",
          price: 250,
          tags:[
            "Plate","Steel Plate","Wood Plate","Plastic Plate","kitchen"
          ]
        },
        {
          
          name: "Glass",
          imageUrl:
            "https://images.unsplash.com/photo-1514651029128-173d2e6ea851?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: 490,
          tags:[
            "Glass","Steel Glass","Plastic Glass","Transparent Glass","Clear Glass","kitchen"
          ]
        },
        {
          
          name: "ovens",
          imageUrl:
            "https://media.istockphoto.com/id/175001121/photo/appetizing-roast-turkey-in-the-oven-for-thanksgiving-day.webp?b=1&s=170667a&w=0&k=20&c=uiSHf4-ZG4bMIgc8gyIf3sRUQwPVD6Q7ZKHHqdrcXk0=",
          price: 7200,
          tags:[
            "ovens","microwave ovens","kitchen"
          ]
        },
      
];
const furniture=[
   
        {
          
          name: "Sofa",
          imageUrl:
            "https://media.istockphoto.com/id/1386471399/photo/modern-living-room-interior-3d-render.webp?b=1&s=170667a&w=0&k=20&c=ZJHxSY7Pg6xA9lx7df7xZe7KjH9z_16SfZj5wwZzC9E=",
          price: 7800,
          tags:[
            "Sofa","furniture","home sofa"
          ]
        },
        {
          
          name: "Chair",
          imageUrl:
            "https://media.istockphoto.com/id/913363280/photo/vintage-green-armchair-in-room.webp?b=1&s=170667a&w=0&k=20&c=QCV2NJL0ZcbB_G7Px_KHEsTGg_xI7JOz-gDXoRKQbEk=",
          price: 3300,
          tags:[
            "Chair","Steel Chair","Plastic Chair","furniture"
          ]
        },
        {
          
          name: "Table",
          imageUrl:
            "https://media.istockphoto.com/id/1195741430/photo/3d-rendering-wooden-top-table-on-isolated-white-blackgroud.webp?b=1&s=170667a&w=0&k=20&c=gx0uiNNZdDHTItmZBjtC3R3PAYB6_fqx_PJPM1rhX5w=",
          price: 5500,
          tags:[
            "Table","Dinning Table","Wood Table","furniture","Plastic Table"
          ]
        },
        {
          
          name: "Stool",
          imageUrl:
            "https://media.istockphoto.com/id/827667992/photo/studio-shot-of-classic-black-tall-wooden-barstool-standing-on-white.webp?b=1&s=170667a&w=0&k=20&c=PEs5dYdxXdYsg9NuKS9HxE6urm8Vh-zZg5Lafj0GwXM=",
          price: 1200,
          tags:[
            "Plastic Stool","Stool","Steel Stool","furniture"
          ]
        },
        {
          
          name: "Wooden Rolling Pin",
          imageUrl:
            "https://media.istockphoto.com/id/1395803038/photo/wooden-rolling-pin.webp?b=1&s=170667a&w=0&k=20&c=CKltv9STcVwvSqjC5TrzpcB4gamp7duNTxdJGpppN5Y=",
          price: 1700,
          tags:[
            "Wooden Rolling Pin","furniture"
          ]
        },
        {
          
          name: "Cusion",
          imageUrl:
            "https://media.istockphoto.com/id/182354999/photo/red-orange-and-white-throw-pillows-on-a-white-background.webp?b=1&s=170667a&w=0&k=20&c=_-HqROlzdb2ajLluvDVbvr6XQgc5rgtyiidMiL1EfaE=",
          price: 1250,
          tags:[
            "Cusion","smooth","furniture"
          ]
        },
        {
          
          name: "Pillow",
          imageUrl:
            "https://media.istockphoto.com/id/682061388/photo/comfortable-pillow-on-isolated-background-with-clipping-path-for-your-design.webp?b=1&s=170667a&w=0&k=20&c=TTUlN6Xr5j4fYquBYnufezbTpgvK4dlf5oIL2Feuf6s=",
          price: 550,
          tags:[
            "Pillow","smooth Pillow","soft pillow","furniture"
          ]
        },
        {
          
          name: "Bed",
          imageUrl:
            "https://plus.unsplash.com/premium_photo-1676968002954-d165313b5601?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVkfGVufDB8fDB8fHww",
          price: 1350,
          tags:[
            "Bed","Soft Beds","furniture"
          ]
        },
        {
          
          name: "Door",
          imageUrl:
            "https://plus.unsplash.com/premium_photo-1678998932668-3bcc0831366e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9vcnxlbnwwfHwwfHx8MA%3D%3D",
          price: 5700,
          tags:[
            "Door","Steel Door","Plastic Door","furniture"
          ]
        },
        {
          
          name: "Shelf",
          imageUrl:
            "https://images.unsplash.com/photo-1602990721338-9cbb5b983c4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hlbGZ8ZW58MHx8MHx8fDA%3D",
          price: 6500,
          tags:[
            "Wood Shelf","Shelf","furniture"
          ]
        },
        {
         
          name: "Ladders",
          imageUrl:
            "https://images.unsplash.com/photo-1519963759188-0e9264cd7992?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxhZGRlcnN8ZW58MHx8MHx8fDA%3D",
          price: 4000,
          tags:[
            "Wood Ladders","Ladders","furniture","Plastic Ladders","Steel Ladders"
          ]
        },
        {
          
          name: "Clocks",
          imageUrl:
            "https://media.istockphoto.com/id/1460539564/photo/table-alarm-clock.webp?b=1&s=170667a&w=0&k=20&c=RFbIhkoK7I3O7nd0Z1PW5Smq2BpqPJoqIjcTd5z-kIQ=",
          price: 1500,
          tags:[
            "Clocks","furnitures","Time"
          ]
        },
        {
          
          name: "Desks",
          imageUrl:
            "https://plus.unsplash.com/premium_photo-1691844987972-fd36840179a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGVza3N8ZW58MHx8MHx8fDA%3D",
          price: 6700,
          tags:[
            "Desks","furniture","Wood Desks"
          ]
        },
        {
          
          name: "Cabinets",
          imageUrl:
            "https://images.unsplash.com/photo-1610733374054-59454fe657cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FiaW5ldHN8ZW58MHx8MHx8fDA%3D",
          price: 9500,
          tags:[
            "Cabinets","furniture"
          ]
        },
        {
          
          name: "Tv Stand",
          imageUrl:
            "https://media.istockphoto.com/id/1308740147/photo/wood-tv-cabinet-interior-wall-mockup-in-modern-empty-room-minimal-design.webp?b=1&s=170667a&w=0&k=20&c=M-aRfrLSL0Ki3nHgXbk9GvdwRjZ9aQ9SsulWHScRS60=",
          price: 8500,
          tags:[
            "Tv Stand","furniture","plastic stand","wooden stand"
          ]
        },
        {
          
          name: "Wardrobe",
          imageUrl:
            "https://media.istockphoto.com/id/1263659609/photo/interior-design-architecture-computer-generated-image-of-bed-room-architectural-visualization.webp?b=1&s=170667a&w=0&k=20&c=bzE_pmV22PyaoOxuUwQvG0uS9hvMr-cyDTgvD2KvmEk=",
          price: 12000,
          tags:[
            "Wardrobe","furniture"
          ]
        },
        {
          
          name: "Fridge",
          imageUrl:
            "https://media.istockphoto.com/id/990894662/photo/modern-fridge-in-front-of-white-wall.webp?b=1&s=170667a&w=0&k=20&c=WMEUix4zvDRc0baQ2i-E1IxjpS6lXw_vWgiIGeKurKk=",
          price: 16000,
          tags:[
            "Fridge","furniture","2-tier Fridge","3-tier Fridge"
          ]
        },
      
];

const cleaning=[
    
        {
          
          name: "Disinfectant Wipes",
          imageUrl:
            "https://media.istockphoto.com/id/1220595524/photo/wet-antibacterial-wipes-isolated-on-a-white-background.webp?b=1&s=170667a&w=0&k=20&c=DnHpnBkRCrQwAihMQnc7EeBjYhJhEVrHqRJS513ypiU=",
          price: 250,
          tags:[
            "disinfectant","wipes","disinfectant wipes","cleaning and hygeine"
          ]
        },
        {
         
          name: "Hand Sanitizer",
          imageUrl:
            "https://media.istockphoto.com/id/1214073892/photo/clear-hand-sanitizer-in-a-clear-pump-bottle-isolated-on-a-white-background-hand-sanitizer-is.webp?b=1&s=170667a&w=0&k=20&c=hCNb--asSPfUlGBNRpam8cWRvRQDO_1TNDRmXq223bA=",
          price: 340,
          tags:[
            "hand sanitizer","sanitizer","cleaning and hygeine"
          ]
        },
        {
          
          name: "Disposable Gloves",
          imageUrl:
            "https://media.istockphoto.com/id/173610205/photo/pair-of-blue-surgical-gloves-laying-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=G0jUlDGmUvIcFiu6FO1g8aYHTq4fcTmekaxrMh6fKwE=",
          price: 120,
          tags:[
            "gloves","cleaning and hygeine","disposable gloves"
          ]
        },
        {
          
          name: "Surface Cleaner Spray",
          imageUrl:
            "https://media.istockphoto.com/id/1241052262/photo/cleaning-home-table-disinfecting-spray-spraying-on-surface-to-sanitize-covid-19-prevention.webp?b=1&s=170667a&w=0&k=20&c=GeGWUWDp9caOIp0TgxQTFSBqfoAEFrw1CyotuoZj5p4=",
          price: 170,
          tags:[
            "surface cleaner spray","cleaning and hygeine","spray"
          ]
        },
        {
         
          name: "Face Masks",
          imageUrl:
            "https://images.unsplash.com/photo-1586942593568-29361efcd571?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZSUyMG1hc2tzfGVufDB8fDB8fHww",
          price: 150,
          tags:[
            "face masks","masks","cleaning and hygeien"
          ]
        },
        {
          
          name: "Hand Soap",
          imageUrl:
            "https://media.istockphoto.com/id/178561092/photo/yellow-soap-bubble.webp?b=1&s=170667a&w=0&k=20&c=7i7jkhUPHUPev5n1iBeovOVsY44Sc9vzRrG_GI_rUYw=",
          price: 230,
          tags:[
            "hand soap","cleaning and hygeine","soap"
          ]
        },
        {
         
          name: "Toilet Paper",
          imageUrl:
            "https://media.istockphoto.com/id/455237921/photo/toilet-paper.webp?b=1&s=170667a&w=0&k=20&c=iYlSZXJsyf1KZH6TKkuVYP5y7tUe3j-z1tBNjOWrZko=",
          price: 150,
          tags:[
            "Toilet paper","cleaning and hygeine"
          ]
        },
        {
          id: 8,
          name: "Laundry Detergent",
          imageUrl:
            "https://media.istockphoto.com/id/1419454071/photo/household-chemical-plastic-bottle-isolated.webp?b=1&s=170667a&w=0&k=20&c=numgKoKbImCdMyxlMj56a-zN8-W1nAOJ2HZnB2L8rfE=",
          price: 250,
          tags:[
            "laundry detegergent ","laundary","cleaning and hygeine"
          ]
        },
        {
          id: 9,
          name: "Toothbrush",
          imageUrl:
            "https://media.istockphoto.com/id/481774026/photo/toothbrushes.webp?b=1&s=170667a&w=0&k=20&c=9SGsFNRbfZE02isfRNMbe7tHPpl0Fx60Efknwz8YwxI=",
          price: 100,
          tags:[
            "Toothbrush","tooth","cleaning and hygeine"
          ]
        },
        {
          id: 10,
          name: "Toothpaste",
          imageUrl:
            "https://images.unsplash.com/photo-1612705166160-97d3b2e8e212?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRvb3RocGFzdGV8ZW58MHx8MHx8fDA%3D",
          price: 120,
          tags:[
            "Tooth paste","cleaning and hygeine"
          ]
        },
        {
          id: 11,
          name: "Disinfectant Spray",
          imageUrl:
            "https://media.istockphoto.com/id/1225146171/photo/surface-cleaning-home-kitchen-all-purpose-cleaner-disinfectant-spray-bottle-with-towel-to.webp?b=1&s=170667a&w=0&k=20&c=ennQ29a4aXIC-SzFFKjh8KrDPPlTV7gI0j4m52TuIE8=",
          price: 299,
          tags:[
            "disinfectant spray","cleaning and hygeine"
          ]
        },
        {
          id: 12,
          name: "Shampoo",
          imageUrl:
            "https://media.istockphoto.com/id/1356587396/photo/shampoo-and-hair-conditioner-bottle-with-soapy-bubbles-beauty-hair-care-cosmetic-packaging.webp?b=1&s=170667a&w=0&k=20&c=yHL1aCO6Cq8MAfjkIbU9N0WttrWfF-yWH2I46xZx3Pg=",
          price: 240,
          tags:[
            "shampoo","cleaning and hygeine"
          ]
        },
        {
          id: 13,
          name: "Tissue Paper",
          imageUrl:
            "https://media.istockphoto.com/id/181086528/photo/blank-papaer-napkin.webp?b=1&s=170667a&w=0&k=20&c=AKwQo0JVoodASxprM5xwf6b-iqhbTOpnClaGD6cNVc8=",
          price: 140,
          tags:[
            "tissue paper","cleaning and hygeine"
          ]
        },
        {
          id: 14,
          name: "Bath Towels",
          imageUrl:
            "https://media.istockphoto.com/id/1153570964/photo/stacked-soft-cotton-bath-towel.webp?b=1&s=170667a&w=0&k=20&c=32cJAV02YAlbBu7bEB4egGj3Bmt22CWp_k5WagZwk8o=",
          price: 70,
          tags:[
            "bath towels","cleaning and hygeine"
          ]
        },
        {
          id: 15,
          name: "Hand Towels",
          imageUrl:
            "https://media.istockphoto.com/id/1263992557/photo/hand-towels-isolate-white-background.webp?b=1&s=170667a&w=0&k=20&c=E_Nf6Z6MVySJQshCPmed8Pk7Slw0geJJw3E029PCViE=",
          price: 150,
          tags:[
            "hand towels","cleaning and hygeine"
          ]
        },
        {
          id: 16,
          name: "Mop",
          imageUrl:
            "https://media.istockphoto.com/id/936143410/photo/cleaning-background-mop-washing-wooden-floor-before-and-after-effect.webp?b=1&s=170667a&w=0&k=20&c=RIWwQMJ2pMK5CRTnjGLk9YlhJc1NUN7LgpC_ss8dlJQ=",
          price: 150,
          tags:[
            "mop","cleaning and hygeine"
          ]
        },
        {
          id: 17,
          name: "Bucket",
          imageUrl:
            "https://media.istockphoto.com/id/184290246/photo/red-metal-bucket-with-aluminum.webp?b=1&s=170667a&w=0&k=20&c=k19oPMBoTbsE-al_UkXnn5i0eZnzRP9AvJpMW7C_jZs=",
          price: 170,
          tags:[
            "bucket","cleaning and hygeine"
          ]
        },
        {
          id: 18,
          name: "Broom",
          imageUrl:
            "https://media.istockphoto.com/id/1154734244/photo/broom-lying-on-floor-in-the-room.webp?b=1&s=170667a&w=0&k=20&c=W154zvYA2g6dKB9AyOq9r2cVdC8_DtkmlWI-ha1shcE=",
          price: 130,
          tags:[
            "broom","cleaning and hygeine"
          ]
        },
        {
          id: 19,
          name: "Dustpan and Brush Set",
          imageUrl:
            "https://media.istockphoto.com/id/1477405164/photo/cleaning-supplies.webp?b=1&s=170667a&w=0&k=20&c=4ducpHaZi57rfxRkproNXMhq8heS0ECrTH9J11g24LQ=",
          price: 3.99,
          tags:[
            "brush set","dustpan","cleaning and hygeine"
          ]
        },
        {
          id: 20,
          name: "Sponges",
          imageUrl:
            "https://media.istockphoto.com/id/171143980/photo/detail-of-a-sponge-over-a-black-car-during-a-car-wash.webp?b=1&s=170667a&w=0&k=20&c=zJw4ggS1eKI40sYNfEaJvWdbV1HnuP5NmpPAThXsYJw=",
          price: 150,
          tags:[
            "sponges","cleaning and hygeine"
          ]
        },

        {
          id: 22,
          name: "Window Cleaner",
          imageUrl:
            "https://media.istockphoto.com/id/1044454168/photo/window-cleaning.webp?b=1&s=170667a&w=0&k=20&c=_lqBFugCiPRkH15TrDJJti_D-rVvHhViJFZJS0lQCjQ=",
          price: 230,
          tags:[
            "window cleaner","cleaning and hygeine"
          ]
        },
        {
          id: 23,
          name: "Dish Soap",
          imageUrl:
            "https://media.istockphoto.com/id/167172953/photo/dishwashing.webp?b=1&s=170667a&w=0&k=20&c=OoUk4mA20asmsv-sDnMlAMgVFT1rNxK3jvFDUEhXLbM=",
          price: 180,
          tags:[
            "soap","dish soap","cleaning and hygeine"
          ]
        },

      
];

const oils=[
    
        {
          id: 1,
          name: "Olive Oil",
          imageUrl:
            "https://media.istockphoto.com/id/1656416581/photo/bottle-of-fresh-olive-oil-and-olives-with-leaves-isolated-on-white-background-fragrant.webp?b=1&s=170667a&w=0&k=20&c=JDQnt-giXChXkSSXjHQghKuX1y8U1vhsRoOcX52wQoM=",
          price: 135,
          tags:[
            "olive oil","oils","olive"
          ]
        },
        {
          id: 2,
          name: "Coconut Oil",
          imageUrl:
            "https://media.istockphoto.com/id/136398161/photo/coconut-oil.webp?b=1&s=170667a&w=0&k=20&c=YrsXbeE4uDWIrNjr1v2t8gSumdCHE3w3IQfNWFTP6iQ=",
          price: 178,
          tags:[
            "cocunut oil","oils","cocunut"
          ]
        },
        {
          id: 3,
          name: "Sunflower Oil",
          imageUrl:
            "https://media.istockphoto.com/id/500479042/photo/oil-of-mustard-in-a-small-jar.webp?b=1&s=170667a&w=0&k=20&c=XlQ3CWC93lQ58KO8xKyGHGepcj6AUh1EVq-wjYT8UQY=",
          price: 175,
          tags:[
            "sunflower oil","oils","sunflower"
          ]
        },

        {
          id: 6,
          name: "Sesame Oil",
          imageUrl:
            "https://media.istockphoto.com/id/672901490/photo/sesame-oil-isolated-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=Zkcn83HsOR1BHK5RF1M6P6Ga87hf0b4lo2eN9SzxUug=",
          price: 155,
          tags:[
            "seasame oil","oils","seasame"
          ]
        },
        {
          id: 7,
          name: "Peanut Oil",
          imageUrl:
            "https://media.istockphoto.com/id/895763548/photo/peanut-oil-in-a-glass-bottle-with-peanuts.webp?b=1&s=170667a&w=0&k=20&c=xeYZ8GaRX6M-uilBYzcOXrE_QYjvyiesG3M9iUCLrSA=",
          price: 195,
          tags:[
            "peanut oil","oils","peanut"
          ]
        },
        {
          id: 8,
          name: "Grapeseed Oil",
          imageUrl:
            "https://media.istockphoto.com/id/1060744718/photo/grape-seed-oil-in-a-glass-jar-and-fresh-grapes-on-old-wooden-table-in-the-garden-spa-bio-eco.webp?b=1&s=170667a&w=0&k=20&c=AaH8Fbz5xHnx00Yq4eUnJKvAvW4sFtwn9PB57LowL3Q=",
          price: 205,
          tags:[
            "grapessed oil","oils"
          ]
        },
        {
          id: 9,
          name: "Walnut Oil",
          imageUrl:
            "https://media.istockphoto.com/id/1290469245/photo/walnut-oil.webp?b=1&s=170667a&w=0&k=20&c=aB1WZ4WOPaTSnfgQKMAN52Lxqhp7eCuZZtjByhT9cNs=",
          price: 225,
          tags:[
            "walnut oil","oils"
          ]
        },
        {
          id: 10,
          name: "Safflower Oil",
          imageUrl:
            "https://media.istockphoto.com/id/515402113/photo/bottle-with-safflower-oil.webp?b=1&s=170667a&w=0&k=20&c=jAKMmaY1TqkfV1I71NZ0MAE_7QuaEdHUCCaNjR9ZSG0=",
          price: 249,
          tags:[
            "safflower oil","oils"
          ]
        },
        {
          id: 11,
          name: "Gingerly Oil",
          imageUrl: "data:image/jpeg;base64,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",
          price: 185,
          tags:[
            "gingerly oils","oils"
          ]
        },
        {
          id: 12,
          name: "Corn Oil",
          imageUrl:
            "https://media.istockphoto.com/id/613246396/photo/plastic-bottle-with-corn-oil.webp?b=1&s=170667a&w=0&k=20&c=vcKpKR0OT0atpRcKkAJ2Ph1cqo53vDB7ezbqu0ERvBo=",
          price: 175,
          tags:[
            "corn oil","oils"
          ]
        },
        {
          id: 13,
          name: "Rice Bran Oil",
          imageUrl:
            "https://media.istockphoto.com/id/501667759/photo/rice-bran-oil-in-a-bottle.webp?b=1&s=170667a&w=0&k=20&c=zwMS5RaQsku-2FkyedRowVD-aHC2PjGpJlpfr2DX820=",
          price: 245,
          tags:[
            "rice bran oil","oils"
          ]
        },

        {
          id: 15,
          name: "Almond Oil",
          imageUrl:
            "https://media.istockphoto.com/id/1343719245/photo/top-view-and-flat-lay.webp?b=1&s=170667a&w=0&k=20&c=DuxM4v4N4Qm1dVlBJK0frY1K83ZQ8289BYCDwhby7o0=",
          price: 215,
          tags:[
            "almond oil","oils"
          ]
        },
        {
          id: 16,
          name: "Palm Oil",
          imageUrl:
            "https://media.istockphoto.com/id/1390643480/photo/palm-oil-and-oil-palm-fruit.webp?b=1&s=170667a&w=0&k=20&c=81rDbmZGaGu3KfUD7-a7idnS_wb0T5LKaFaRtZZ5bD0=",
          price: 225,
          tags:[
            "palm oil","oils"
          ]
        },
      
];

const snacks=[
    
          {
            id: 1,
            name: "Potato Chips",
            imageUrl:
              "https://media.istockphoto.com/id/1383475280/photo/potato-chips-in-bowl-isolated-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=cTaIqsm6W7qgygAqlQLjbs8SA62PQtEKlGevextq8W0=",
            price: 85,
            tags:[
              "potato","snacks and foods"
            ]
          },
          {
            id: 2,
            name: "Chocolate Bar",
            imageUrl:
              "https://media.istockphoto.com/id/1276645382/photo/chocolate-assortment-background-top-view-of-different-kinds-of-chocolate.webp?b=1&s=170667a&w=0&k=20&c=QE1BqetRXVKuVduV4Km0fTRvKTT6NOuKciljjYnUA24=",
            price: 95,
            tags:[
              "chocolate bar ","snacks and foods"
            ]
          },
          {
            id: 3,
            name: "Popcorn",
            imageUrl:
              "https://media.istockphoto.com/id/184963640/photo/popcorn.webp?b=1&s=170667a&w=0&k=20&c=yDcg_bNdW1naV_zKjQXEcbP6BFWIXW2mcNwPTSQaYls=",
            price: 50,
            tags:[
              "popcorn","snacks and foods"
            ]
          },
          {
            id: 4,
            name: "Peanuts",
            imageUrl:
              "https://media.istockphoto.com/id/155420683/photo/peanuts.webp?b=1&s=170667a&w=0&k=20&c=tLdNdPikGIOvejBkYYzWB4V_rBDEeD2yGG6Oc5ZeiQo=",
            price: 125,
            tags:[
              "peanuts","snacks and foods"
            ]
          },
          {
            id: 5,
            name: "Biscuits",
            imageUrl:
              "https://media.istockphoto.com/id/941695046/photo/danish-butter-cookies-butter-cookies-on-white.webp?b=1&s=170667a&w=0&k=20&c=sLpQIIHoVEXF6IS90s7fa8ve_CMm0MrnVHwb5R-7wpA=",
            price: 100,
            tags:[
              "biscuits","snacks and foods"
            ]
          },
          {
            id: 6,
            name: "Caramel Candy",
            imageUrl:
              "https://media.istockphoto.com/id/1223558902/photo/caramel-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=g1ptijhY8ns3K6qbyr7EMIWc6PJhVATcTL4Yi2GOIOU=",
            price: 85,
            tags:[
              "caramel","caramel candy","snacks and foods"
            ]
          },
          {
            id: 7,
            name: "Cheese Crackers",
            imageUrl:
              "https://media.istockphoto.com/id/175733946/photo/cheddar-cheese-crackers.webp?b=1&s=170667a&w=0&k=20&c=vtTAhGMEBRLD2HTKxAxnenpvKo-qm2aTPLnxyk43Tco=",
            price: 105,
            tags:[
              "cheese","cheese crackers","snacks and foods"
            ]
          },
          {
            id: 8,
            name: "Granola Bar",
            imageUrl:
              "https://media.istockphoto.com/id/889564030/photo/cereal-granola-bar-energy-snack.webp?b=1&s=170667a&w=0&k=20&c=AOpJufhlN8N2KkkLYEeDXeWq_ATIfjfOynoOsDgExAQ=",
            price: 55,
            tags:[
              "granola bar","snacks and foods"
            ]
          },
          {
            id: 9,
            name: "Pretzels",
            imageUrl:
              "https://media.istockphoto.com/id/173005166/photo/pretzels-in-a-pile-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=UF31_R6dpK73mWxSUvSyB1EdyK0s1qSDxYz8e6pGD_0=",
            price: 85,
            tags:[
              "pretzels","snacks and foods"
            ]
          },
          {
            id: 10,
            name: "Trail Mix",
            imageUrl:
              "https://media.istockphoto.com/id/1303216839/photo/trail-mix-texture-background-full-frame-of-trail-mixture.webp?b=1&s=170667a&w=0&k=20&c=3tJQTdnpXqYfATTrA-q937CMRbMZ3GhJEBh_scwDMVw=",
            price: 95,
            tags:[
              "Trail mix","snacks and foods"
            ]
          },
          {
            id: 11,
            name: "Fruit Snacks",
            imageUrl:
              "https://media.istockphoto.com/id/1127746968/photo/assorted-nuts-on-white-dry-fruits-mix-nuts-almond-cashew-pistachio-raisin.webp?b=1&s=170667a&w=0&k=20&c=uSs4uRRjogTxrGB_68smb4XFxmBXzO_WS8Qvb4A1DAs=",
            price: 165,
            tags:[
              "fruit snacks","snacks and foods"
            ]
          },
  
          
        
      
];

const fast=[
    
          {
            id: 1,
            name: "Pizza",
            imageUrl:
              "https://media.istockphoto.com/id/1492214312/photo/pizza-on-pan-pan-pizza-image.webp?b=1&s=170667a&w=0&k=20&c=i2kDBTXQsAiI4xv5IxLg6WuirlnBw7kGh2GQrwRXIgw=",
            price: 99,
            tags:[
              "pizza","fast foods"
            ]
          },
          {
            id: 2,
            name: "Burger",
            imageUrl:
              "https://media.istockphoto.com/id/1363407092/photo/two-big-homemade-delicious-cheeseburger-with-onion-grilled-bacon-fresh-tomatoes-cheese-and.webp?b=1&s=170667a&w=0&k=20&c=L8KPrtP_vrCDwvotOTA_U_D9tTt74h30Acxbj1kyWyE=",
            price: 99,
            tags:[
              "burger","fast foods"
            ]
          },
          {
            id: 3,
            name: "French Fries",
            imageUrl:
              "https://media.istockphoto.com/id/157510962/photo/french-fries-on-plate.webp?b=1&s=170667a&w=0&k=20&c=uU5tkHsEHAcyK0r1aMZLrkxS6MDCIvZNim2-o58laVc=",
            price: 135,
            tags:[
              "french fries","fast foods"
            ]
          },
          {
            id: 4,
            name: "Hot Dog",
            imageUrl:
              "https://media.istockphoto.com/id/1130731707/photo/hot-dog-on-white.webp?b=1&s=170667a&w=0&k=20&c=4U4_f7VcJbeShtn3Gin5zLmDtMTOXjK-VULOKpQkcXo=",
            price: 149,
            tags:[
              "Hot Dog","fast foods"
            ]
          },
          {
            id: 5,
            name: "Chicken Wings",
            imageUrl:
              "https://media.istockphoto.com/id/835903320/photo/baked-chicken-wings-with-sesame-seeds-and-sweet-chili-sauce-on-white-wooden-board.webp?b=1&s=170667a&w=0&k=20&c=7dXJKCGrJLvgl7cso90N6QKQOumIr00J2aLNzR_zCM4=",
            price: 199,
            tags:[
              "chicken wings","fast foods"
            ]
          },
          {
            id: 6,
            name: "Tacos",
            imageUrl:
              "https://media.istockphoto.com/id/614313140/photo/soft-beef-tacos-with-fries.webp?b=1&s=170667a&w=0&k=20&c=cLe3RgvsdwBnzxsp6QOsZfC9w-rTlgiW1l5QArV_NrY=",
            price: 199,
            tags:[
              "Tacos","fast foods"
            ]
          },
          {
            id: 7,
            name: "Sandwich",
            imageUrl:
              "https://media.istockphoto.com/id/153761835/photo/vegetarian-sandwich.webp?b=1&s=170667a&w=0&k=20&c=lLSfAsLhADuPM84FEPcNXe-j6D-ZhDNF2Gn2T303YIU=",
            price: 79,
            tags:[
              "Sandwich","fast foods"
            ]
          },
          {
            id: 8,
            name: "Noodles",
            imageUrl:
              "https://media.istockphoto.com/id/641820384/photo/noodles-in-green-bowl.webp?b=1&s=170667a&w=0&k=20&c=dWovUpIS9msUKCHuDQycoWdCNra2L8Obt0CBl4Tf0HM=",
            price: 100,
            tags:[
              "Noodles","fast foods"
            ]
          },
          {
            id: 9,
            name: "Pasta",
            imageUrl:
              "https://media.istockphoto.com/id/1321474706/photo/italian-food-cooked-pasta-on-a-plate.webp?b=1&s=170667a&w=0&k=20&c=55z69LrK221DkhFVP-nJD6ld9gAdRzK_UNCYFJhDqTo=",
            price: 130,
            tags:[
              "pasta","fast foods"
            ]
          },
          {
            id: 10,
            name: "Macaroni and Cheese",
            imageUrl:
              "https://media.istockphoto.com/id/1391007036/photo/american-creamy-macaroni-and-cheese-pasta.webp?b=1&s=170667a&w=0&k=20&c=xbuNIp9olCjLsIElUedhQRTC_Xz9LsBR6HWtB7cZ5Sg=",
            price: 199,
            tags:[
              "Macaroni and cheese","macaroni","cheese","fast foods"
            ]
          },
          {
            id: 11,
            name: "Chicken Nuggets",
            imageUrl:
              "https://media.istockphoto.com/id/600064422/photo/chicken-nuggets-with-barbecue-sauce.webp?b=1&s=170667a&w=0&k=20&c=R_5yNZF-QNZTLsyq4xxRqZ36X4B5H9mYdgRI_9eAsxo=",
            price: 249,
            tags:[
              "Chicken","Chicken Nuggets","fast foods"
            ]
          },
        
      
];

const powders=[
   
          {
            id: 1,
            name: "Rice Powder",
            imageUrl:
              "https://media.istockphoto.com/id/1400351263/photo/rice-flour.webp?b=1&s=170667a&w=0&k=20&c=qdA2PahIJtYJ02sgGv-YAe8Zj5gNQ-Dxkk9hk7EZESY=",
            price: 140,
            tags:[
              "powders","rice","rice powder"
            ] 
          },
          {
            id: 2,
            name: "Chili Powder",
            imageUrl:
              "https://media.istockphoto.com/id/1211175885/photo/indian-spices-chilli-turmeric-coriander-powder-in-terracotta-bowls.webp?b=1&s=170667a&w=0&k=20&c=Sj3B0ZHNZ00-jNyCYskBabbL7uxcMr10pZuLEi7Jo98=",
            price: 110,
            tags:[
              "chilli powder","powders"
            ] 
          },
          {
            id: 3,
            name: "Turmeric Powder",
            imageUrl:
              "https://media.istockphoto.com/id/965503302/photo/turmeric-powder-and-roots.webp?b=1&s=170667a&w=0&k=20&c=9kIoFEX36hd-QxfyhGVmg0NPuizVBgtTDLfGRB1fNJQ=",
            price: 110,
            tags:[
              "tumeric powder","powders"
            ] 
          },
          {
            id: 4,
            name: "Coriander Powder",
            imageUrl:
              "https://media.istockphoto.com/id/508457072/photo/coriander-powder-aromatic-ingredients-on-rustic-wooden-table.webp?b=1&s=170667a&w=0&k=20&c=s8JtBUhvtZrEMHvrHJMX-AYyzTh8SA-oL-3Lhqrs-sY=",
            price: 149,
            tags:[
              "coriander powder","powder"
            ] 
          },
          {
            id: 5,
            name: "Cumin Powder",
            imageUrl:
              "https://media.istockphoto.com/id/157402556/photo/ground-cumin.webp?b=1&s=170667a&w=0&k=20&c=XI7L9mrC0cRErPkmWfnn41Yp78TeYHnllLlX86nqFdI=",
            price: 150,
            tags:[
              "cumin powder","powders"
            ] 
          },
          {
            id: 6,
            name: "Garam Masala",
            imageUrl:
              "https://media.istockphoto.com/id/1158646265/photo/garam-masala-powder.webp?b=1&s=170667a&w=0&k=20&c=8uRFldLibE29oUNC7DXmzU0hu0j3hL9LySPLLqau8us=",
            price: 109,
            tags:[
              "garam masala","powders"
            ] 
          },
          {
            id: 7,
            name: "Black Pepper Powder",
            imageUrl:
              "https://media.istockphoto.com/id/178793183/photo/black-pepper.webp?b=1&s=170667a&w=0&k=20&c=UiEDUNVXrC9RYnESLX9QQtqv9PBguQZZ5fRDx65oZiU=",
            price: 149,
            tags:[
             "black pepper powder","powders"
            ] 
          },
          {
            id: 8,
            name: "Wheat Powder",
            imageUrl:
              "https://media.istockphoto.com/id/465622812/photo/flour-background.webp?b=1&s=170667a&w=0&k=20&c=m2dOQHyzhAr_JLwiCCOVkAsG1l7Xr9k1gaM59crTNUc=",
            price: 99,
            tags:[
              "powders","wheat powder"
            ] 
          },
          {
            id: 9,
            name: "Corn Powder",
            imageUrl:
              "https://media.istockphoto.com/id/1154467984/photo/raw-organic-masarepa-corn-meal.webp?b=1&s=170667a&w=0&k=20&c=3FJq02R_zhI2GNQ2k-70YhciCXuSWQB7uWNlpxCLGzs=",
            price: 169,
            tags:[
              "corn powder","powders"
            ] 
          },
          {
            id: 10,
            name: "Curry Powder",
            imageUrl:
              "https://media.istockphoto.com/id/185296258/photo/yellow-spice.webp?b=1&s=170667a&w=0&k=20&c=uSoMA0HFAD7iAYwpB-axfIt3IjTdlRMGtBbXR8kcVu4=",
            price: 110,
            tags:[
             "powders","curry powder"
            ] 
          },
          {
            id: 11,
            name: "Milk Powder",
            imageUrl:
              "https://media.istockphoto.com/id/175170797/photo/powdered-milk.webp?b=1&s=170667a&w=0&k=20&c=C7X68TFjEJHqoNxtn5SPWLDHUOUjc5uy_UpyQbBjE8Q=",
            price: 130,
            tags:[
              "milk","milk powder","powders"
            ] 
          },
  
          
];

const grains=[
    
          {
            id: 1,
            name: "Rice",
            imageUrl:
              "https://media.istockphoto.com/id/157476197/photo/thai-rice-for-sale-in-a-market.webp?b=1&s=170667a&w=0&k=20&c=xo5xXC_Cuhbx-cJ38FCRCrpf2ZEKJImPMKTwm_9mv9o=",
            price: 29,
            tags:[
              "Rice","grains"
            ]
          },
          {
            id: 2,
            name: "Wheat",
            imageUrl:
              "https://media.istockphoto.com/id/1188375216/photo/wheat-ears-grains-and-bowl-of-flour-on-a-wooden-table.webp?b=1&s=170667a&w=0&k=20&c=oCWOvrOD39orHE_-64OfHCWYAs7azRoKrG93fwefzG0=",
            price: 99,
            tags:[
              "Wheat","grains"
            ]
          },
          {
            id: 3,
            name: "Barley",
            imageUrl:
              "https://media.istockphoto.com/id/154903927/photo/barley.webp?b=1&s=170667a&w=0&k=20&c=ORkJWz0y6qywmbGpJ0P7yqOYtuE811RpRCLMnLbD4fQ=",
            price: 99,
            tags:[
              "Barley","grains"
            ]
          },
          {
            id: 4,
            name: "Oats",
            imageUrl:
              "https://media.istockphoto.com/id/1369543877/photo/oat-flake-oatmeal-in-a-bowl-vertical-photo.webp?b=1&s=170667a&w=0&k=20&c=0KfmFEQ_FDMRd9sL0tizyrUFtw0BtkqDGG41QVKC0uE=",
            price: 179,
            tags:[
              "Oats","grains"
            ]
          },
          {
            id: 5,
            name: "Ragi",
            imageUrl:
              "https://media.istockphoto.com/id/985916506/photo/ragi-nachni-also-known-as-finger-millet-and-ragi-flour-which-is-a-healthy-food-and-is-gluten.webp?b=1&s=170667a&w=0&k=20&c=BX3tDX6XwFrwiGFEyYU0vWtRCA9RvrHovhWe8oN_-zg=",
            price: 150,
            tags:[
              "ragi","grains"
            ]
          },
          {
            id: 6,
            name: "Millet",
            imageUrl:
              "https://media.istockphoto.com/id/1316801095/photo/top-view-of-millet-grains-in-round-ceramic-bowls.webp?b=1&s=170667a&w=0&k=20&c=Ac0HAMJH-8qK7u1fqbieiBFOzI7xvkIyQfqjej6Qyx4=",
            price: 139,
            tags:[
              "millet","grains"
            ]
          },
          {
            id: 7,
            name: "Buckwheat",
            imageUrl:
              "https://media.istockphoto.com/id/183795839/photo/close-up-of-buckwheat-in-a-wooden-spoon.webp?b=1&s=170667a&w=0&k=20&c=DRlOTbJXSAaankc0Lv6g-8dr88PbR4r7xDcxHegWxjQ=",
            price: 150,
            tags:[
              "buck wheat","wheat","grains"
            ]
          },
          {
            id: 8,
            name: "Corn",
            imageUrl:
              "https://media.istockphoto.com/id/1316525593/photo/sweet-corn.webp?b=1&s=170667a&w=0&k=20&c=ixy7EESrwsSNKFyAA_7cL0uXSXnkSyp2l1e4ajyM4Zc=",
            price: 189,
            tags:[
              "corn","grains"
            ]
          },
          {
            id: 9,
            name: "Sorghum",
            imageUrl:
              "https://media.istockphoto.com/id/1355947615/photo/sorghum-bicolor-commonly-called-sorghum-and-also-known-as-great-millet-durra-jowari-jowar-or.webp?b=1&s=170667a&w=0&k=20&c=o6pptc4in8sQB5fe7jeW71N3AEKX29Vpi2HD53AMsgg=",
            price: 140,
            tags:[
              "sorghum","grains"
            ]
          },
          {
            id: 10,
            name: "Mustard",
            imageUrl:
              "https://media.istockphoto.com/id/1256463245/photo/wholegrain-mustard-in-a-bowl-on-a-table.webp?b=1&s=170667a&w=0&k=20&c=200lSFqUJmKkxohyzPkfF_2BfXJcXw6E_w2Pa1WvC04=",
            price: 79,
            tags:[
              "Mustard","grains"
            ]
          },
          { id: 11, name: "Bulgur", imageUrl: "https://media.istockphoto.com/id/1301675046/photo/variety-kinds-of-natural-cereal-and-grain-seed-in-sack-and-dark-tone-for-clean-food-raw.webp?b=1&s=170667a&w=0&k=20&c=OlQAhVFKLiK26iMVKrcc-GWz8fOtdr26KWTPumobR6w=", tags:[
            "bulgur","grains"
          ], price: 229 },
       
];

const school=[
          { id: 1, name: "Notebook", imageUrl: "https://media.istockphoto.com/id/1427124873/photo/a4-a5-rounded-corner-spiral-notebook-3d-rendering-white-blank-mockup.webp?b=1&s=170667a&w=0&k=20&c=kyIClB8P672WzlhTFndzbORQkKBFfsJFBI8QRhIB6B4=", tags:[
            "school belongigs","school"
          ], price: 125 },
          { id: 2, name: "Pencil", imageUrl: "https://media.istockphoto.com/id/184985275/photo/pencils.webp?b=1&s=170667a&w=0&k=20&c=hVAY7WxsUBHWgvhVodYfbF_RHXVgohKU_Y07MMyAiM0=", price: 49, tags:[
            "pencil","school belongigs"
          ] },
          { id: 3, name: "Eraser", imageUrl: "https://media.istockphoto.com/id/937822154/photo/pink-eraser.webp?b=1&s=170667a&w=0&k=20&c=M8y6FVWyYJ8ty7aFf8dNeYmP3Bi0cCbgm3IzMPtnjs4=", price: 29, tags:[
            "eraser","school belongigs"
          ] },
          { id: 4, name: "Pen", imageUrl: "https://media.istockphoto.com/id/807223884/photo/fountain-pen.webp?b=1&s=170667a&w=0&k=20&c=aOqIyhSEmKdGln15U-Cx0BgtaGRwVogoPdA8JDtDgTs=", price: 20, tags:[
            "pen","school belongigs"
          ] },
          { id: 5, name: "Ruler", imageUrl: "https://media.istockphoto.com/id/1332509908/photo/geometric-measuring-tools-drawing-items-and-mathematical-instruments-placed-on-white-paper.webp?b=1&s=170667a&w=0&k=20&c=K-bbV_JPx6zt4hq6E-2o3MrZspgZxm9TCIYAB5og0Nc=", price: 20, tags:[
            "Ruler","school belongigs"
          ] },
          { id: 6, name: "Backpack", imageUrl: "https://media.istockphoto.com/id/1617878544/photo/black-school-bag-isolated-on-a-white-background-back-to-school-concept.webp?b=1&s=170667a&w=0&k=20&c=4DrNbR6k2RgvezZH2hh8ApKcq1B81E3ooaJYFjQu_xc=", price: 510, tags:[
            "backpack","school belongigs"
          ] },
          { id: 7, name: "Lunch Box", imageUrl: "https://media.istockphoto.com/id/477535286/photo/stainless-steel-tiffin-box.webp?b=1&s=170667a&w=0&k=20&c=O-9n22jMUXDnKRRNouuZUjp0lhNjtCbVt2UP13_nPDY=", price: 399, tags:[
            "lunch box","school belongigs"
          ] },
          { id: 8, name: "Water Bottle", imageUrl: "https://media.istockphoto.com/id/1387067219/photo/modern-water-bottles-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=k3JyeHQZ97P0XUqOLKtuJ-8z4hkDXhJ8MVkU2u7JPHI=", price: 50, tags:[
            "water bottle","school belongigs"
          ] },
          { id: 9, name: "Calculator", imageUrl: "https://media.istockphoto.com/id/1324369882/photo/piggy-bank-with-calculator-on-yellow-background.webp?b=1&s=170667a&w=0&k=20&c=TOVcodVONlEanQA2158Xj-inlhFodYmyk1zAEshNNhA=", price: 799, tags:[
            "calculator","school belongigs"
          ] },
          { id: 10, name: "Scissors", imageUrl: "https://media.istockphoto.com/id/175601846/photo/isolated-shot-of-opened-black-handle-scissors-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=7f-PmukIgyQAI-88EE8CUEaKpDaBpMvMTQEudWJfqD0=", price: 100 , tags:[
            "scissors","school belongigs"
          ]},
          { id: 11, name: "Glue Stick", imageUrl: "https://media.istockphoto.com/id/1398474751/photo/open-paper-glue-stick-on-blue-background-3d-illustration.webp?b=1&s=170667a&w=0&k=20&c=2xpQ2ePHojoQC8vaaxTDLdUgzOvI6cg3enpaJSbukh8=", price: 30, tags:[
            "glue stick","school belongigs"
          ] }
         
       
      
];
const home=[
    
          { id: 1, name: "Marble Tiles", imageUrl: "https://media.istockphoto.com/id/1369002680/photo/white-and-gold-marble-texture-background-used-in-design-for-skin-tile-wallpaper-interiors.webp?b=1&s=170667a&w=0&k=20&c=IZzGajWAiAcMhFa1djZIWPY9hFhvaKxecxsUNHqpibk=", price: 6500, tags:[
            "marbile tiles","home belongigs"
          ] },
          { id: 2, name: "Granite Tiles", imageUrl: "https://media.istockphoto.com/id/174374712/photo/close-up-of-black-galaxy-granite-building-material.webp?b=1&s=170667a&w=0&k=20&c=nlxlabUw7M8qr-qgPZxCKmYvIKchT0iROmbQ_nnXvQE=", tags:[
            "granite tiles","tiles","home belongigs"
          ], price: 7500 },
          { id: 3, name: "Bed Sheets", imageUrl: "https://media.istockphoto.com/id/653539598/photo/white-cotton-sheet-texture-or-background.webp?b=1&s=170667a&w=0&k=20&c=D_6lrh2ozbene-6-67Kpqt7GhBZafTFyX1xsq1RPKto=", price: 450, tags:[
            "bed sheets","home belongigs"
          ] },
          { id: 4, name: "Tap", imageUrl: "https://media.istockphoto.com/id/1136343601/photo/water-is-dripping-from-a-metal-water-tap-close-up.webp?b=1&s=170667a&w=0&k=20&c=cr5l7tLAsl4fNv9ROASkdt-SXT9ragjq1N1ACZlGy34=", price: 399, tags:[
            "Tap","home belongigs"
          ] },
          { id: 5, name: "Curtains", imageUrl: "https://media.istockphoto.com/id/1277338988/photo/beautiful-variety-of-colors-fabric-curtains-textured-or-drapes-interior-modern-luxury-room.webp?b=1&s=170667a&w=0&k=20&c=JP2OfTEg8Q53GJsM4vysEaG4dXIZv9fbp4LZM5lOb1Q=", price: 500, tags:[
            "curtains","home belongigs"
          ] },
          { id: 6, name: "Vacuum Cleaner", imageUrl: "https://media.istockphoto.com/id/1158194938/photo/vacuum-cleaner-in-living-room-at-home.webp?b=1&s=170667a&w=0&k=20&c=F9XUGiyi6wOrzAwoYiT3yPH8HuH_Um1Of-ry4wgxOfU=", price: 5000, tags:[
            "vaccum cleaner","home belongigs"
          ] },
          { id: 7, name: "Rope", imageUrl: "https://media.istockphoto.com/id/904856754/photo/string-rope-cord-cable-line.webp?b=1&s=170667a&w=0&k=20&c=wlJTSQdOLcVA-v7gRYb7Kf5tu1PBKy0Q9rP9TLsAWN8=", price: 60, tags:[
            "rope","home belongigs"
          ] },
          { id: 8, name: "Table Lamp", imageUrl: "https://media.istockphoto.com/id/534400418/photo/desk-lamp.webp?b=1&s=170667a&w=0&k=20&c=Kkf2qQwlXa0KbMQIt3PO_-ZcqcBAQJncCmCznvSUGAM=", price:900, tags:[
            "Table Lamp","home essentials"
          ] },
          { id: 9, name: "Bath Towels", imageUrl: "https://media.istockphoto.com/id/1166806377/photo/crumpled-blue-towel-on-white.webp?b=1&s=170667a&w=0&k=20&c=886eWyN-TczrQ8If4XAlNs9qRo_70gMwIO4HUJYFcH0=", price: 199, tags:[
            "home essentials","bath towels"
          ] },
          { id: 10, name: "Dinnerware Set", imageUrl: "https://media.istockphoto.com/id/1089072216/photo/dinner-set.webp?b=1&s=170667a&w=0&k=20&c=k5DcZ86WDKjxIGkzJ8zifoSI2hNRSd84W6BZpVEMsOY=", price: 9000, tags:[
            "Dinnerware set","home essentials"
          ] },
          { id: 11, name: "Tool Set", imageUrl: "https://media.istockphoto.com/id/596042932/photo/set-of-hand-various-work-tools-on-grey-background.webp?b=1&s=170667a&w=0&k=20&c=1jJ2jXgN-Fd6ziYiXhyJkYCwBnl6KwbnXkcyM-lu3P0=", tags:[
            "Tool set","home essentials"
          ], price: 7000 }
       
];

const medicine=[
   
          { id: 1, name: "Paracetamol Tablets", imageUrl: "https://media.istockphoto.com/id/1217172454/photo/heap-of-white-round-pills-or-tablets.webp?b=1&s=170667a&w=0&k=20&c=MVO4IZMjcUh3v2Ispa2QD8R18Ey87HIlrEaoS8b6HGw=", price:10, tags:[
            "medicine","paracetamol","tablets"
          ] },
          { id: 2, name: "Ayurveda Tablets", imageUrl: "https://media.istockphoto.com/id/1210097794/photo/ayurvedic-pills-in-three-wooden-spoons-with-green-leaves-of-ocimum-sanctum-on-white.webp?b=1&s=170667a&w=0&k=20&c=TbJRn1MGMalgF7lzn5K5s-7hsW2H9lGwFp5jsjK-OMY=", price: 79, tags:[
            "ayurveda tablets","medicine"
          ] },
          { id: 3, name: "Antacid Tablets", imageUrl: "https://media.istockphoto.com/id/185090412/photo/antacid-tablets-on-gray.webp?b=1&s=170667a&w=0&k=20&c=FCJFW6pAZXgCLGO6-xYOckmsAyTVGIUgtgbQNBfJKUs=", tags:[
            "antacid tablets","medicine"
          ], price: 25 },
          { id: 4, name: "Oilment", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjZZlscq_CPzRlZhdZ1k84zuu_KQhojqkUZQ&usqp=CAU", price: 99, tags:[
            "medicine","oilment"
          ] },
          { id: 5, name: "Bandages", imageUrl: "https://media.istockphoto.com/id/104263310/photo/white-medical-gauze-bandage.webp?b=1&s=170667a&w=0&k=20&c=ifPDUFNRR3fUevsM8qTzBNEyE-VFh7lYOs1BT117wFw=", price: 50, tags:[
            "bandages","medicine"
          ] },
          { id: 6, name: "Syringe", imageUrl: "https://media.istockphoto.com/id/1262837313/photo/doctor-hand-in-medical-gloves-holding-syringe.webp?b=1&s=170667a&w=0&k=20&c=1eCSO9iyplAEzocyCX5UmrmxftSTXMR6lqkxt4ivJMo=", price: 40, tags:[
            "syringe","medicine"
          ] },
          { id: 7, name: "Cough Syrup", imageUrl: "https://media.istockphoto.com/id/145848947/photo/cough-syrup.webp?b=1&s=170667a&w=0&k=20&c=rq3gDf4ukzxutQ8ocQ8R0-dk7MRFwN0t9EZ8HWt9wQc=", price: 80, tags:[
            "cough syrup","medicine"
          ] },
          { id: 8, name: "First Aid Kit", imageUrl: "https://media.istockphoto.com/id/168313972/photo/first-aid-kit.webp?b=1&s=170667a&w=0&k=20&c=8sCRRBxZFzfy818gDZ7pqHItZWVjqDEuZc3FjfQ1LMY=", price: 199, tags:[
            "first aid kit","medicine"
          ] },
          { id: 9, name: "Thermometer", imageUrl: "https://media.istockphoto.com/id/1308910176/photo/hand-holding-infrared-thermometer-to-measuring-temperature.webp?b=1&s=170667a&w=0&k=20&c=xxzFYHhPHXgqYPfOgWLZ11YoqYxWHq8TuRMtqM82CpQ=", price: 499, tags:[
            "thermometer","medicine"
          ] },
          { id: 10, name: "Pain Relief Cream", imageUrl: "https://media.istockphoto.com/id/878062432/photo/aloe-vera-juice-gel-moisturising-cream-soap-and-powder-powder.webp?b=1&s=170667a&w=0&k=20&c=kp_VDdj1wVpWjvoiP5CAuuKqx4R2wmAuJbe2z4-ht4o=", price: 89, tags:[
            "pain releif cream","medicine"
          ] },
          { id: 11, name: "Multivitamin Supplements", imageUrl: "https://media.istockphoto.com/id/1368216051/photo/alternative-medicine-herbal-organic-capsule-with-vitamin-e-omega-3-fish-oil-mineral-drug-with.webp?b=1&s=170667a&w=0&k=20&c=b1KreS4PYatRUs8tY2Y1R6MlarjK2qg6zQm-i9RxD00=", price: 59, tags:[
            "multivitamin supplements","medicine"
          ] }
        
];

const nonveg=[
    
          { "id": 1, "name": "Fish", "imageUrl": "https://media.istockphoto.com/id/1889075290/photo/ruhi-fish-ready-to-cook.webp?b=1&s=170667a&w=0&k=20&c=tMrK0efOXzvV1Rbq0G1shBVQghLT4LDU5XMKPQjgPFA=", "price": 150, tags:[
            "fish","non veg"
          ] },
          { "id": 2, "name": "Chicken", "imageUrl": "https://media.istockphoto.com/id/1322432988/photo/raw-chicken-cuts-without-skin.webp?b=1&s=170667a&w=0&k=20&c=AoCFlZYSwhINISGF3JuMEHR83_YWWMZ0egCWnnC68y8=", "price": 180, tags:[
            "chicken","non veg"
          ] },
          { "id": 3, "name": "Beef", "imageUrl": "https://media.istockphoto.com/id/183524113/photo/beef-cubes.webp?b=1&s=170667a&w=0&k=20&c=64jtHXp6PAFlrEWN9fbp2Z7t72EI7xU8z35hLjvLHpI=", "price": 220, tags:[
            "non veg","beef"
          ] },
          { "id": 4, "name": "Pork", "imageUrl": "https://media.istockphoto.com/id/184997093/photo/roasted-pork-tenderloin.webp?b=1&s=170667a&w=0&k=20&c=V1mtAtle3B9OBoi8mnhYD2hw7F1XvmmikEBW2UYxoyo=", "price": 290, tags:[
            "pork","non veg"
          ] },
        
          { "id": 6, "name": "Prawns", "imageUrl": "https://media.istockphoto.com/id/157376365/photo/cooked-shrimp-with-full-shell-isolated-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=tvQu6GNXLNJfhnrYJ2B6mUB5CR5qY6fAdSUeHF0w9N0=", "price": 120, tags:[
            "prawns","non veg"
          ] },
          { "id": 7, "name": "Duck", "imageUrl": "https://media.istockphoto.com/id/1040706374/photo/kaeng-pled-ped-yang.webp?b=1&s=170667a&w=0&k=20&c=BBl9YPmGmbkJx7z4eVH2QSBGRRYnH9DVEtjur98YY3Q=", "price": 190, tags:[
            "duck","non veg"
          ] },
          { "id": 8, "name": "Egg", "imageUrl": "https://media.istockphoto.com/id/924202150/photo/white-eggs.webp?b=1&s=170667a&w=0&k=20&c=CmiUG42fmWjbV_tHTdFCRPG-hCD4OgcDAx6PsDh8XnQ=", "price": 10, tags:[
            "egg","non veg"
          ] },
          { "id": 9, "name": "Mutton", "imageUrl": "https://media.istockphoto.com/id/1397328185/photo/chopped-raw-meat-on-black-background-top-view-raw-lamb-and-mutton-meat-isolated.webp?b=1&s=170667a&w=0&k=20&c=6Q1aM73UlfgVYleTuMCEgIdD4EeaNwPqKOvGlkSZid4=", "price": 160, tags:[
            "mutton","non veg"
          ] }
        
];
const other=[
    
          { "id": 5, "name": "Sugar", "imageUrl": "https://media.istockphoto.com/id/643271764/photo/sugar-in-a-bag-and-spoon.webp?b=1&s=170667a&w=0&k=20&c=-9uZzEqLXXlS9mMo8V7RDFwqz7OSu_VYNQEJpVzxLws=", "price": 45, tags:[
            "sugar","other grocery items"
          ] },
          { "id": 6, "name": "Salt", "imageUrl": "https://media.istockphoto.com/id/1214753043/photo/salt-shaker-on-rustic-wooden-table-copy-space.webp?b=1&s=170667a&w=0&k=20&c=N0-1aqSkXxtLX9JclwRLMCw5ikYjGxPybsO-tE9iv4I=", "price": 70 , tags:[
            "salt","other grocery items"
          ]},
          { "id": 7, "name": "Jaggery", "imageUrl": "data:image/jpeg;base64,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", "price": 40, tags:[
            "jaggery","other grocery items"
          ] },
          { "id": 8, "name": "Tea Powder", "imageUrl": "https://media.istockphoto.com/id/1287223556/photo/a-picture-of-tea-powder.webp?b=1&s=170667a&w=0&k=20&c=Rba_RYsSerJk6i-Un5D05RNY5U33wXaLjjVYhy2gKCc=", "price": 95, tags:[
            "tea powder","other grocery items"
          ] },
          { "id": 9, "name": "Coffee Powder", "imageUrl": "https://media.istockphoto.com/id/1090012772/photo/ground-coffee-in-spoon.webp?b=1&s=170667a&w=0&k=20&c=WmGufMR8VsExFDH6dLUSq1bc8_o7L63vF400zDO1rIY=", "price": 140, tags:[
            "coffee powder","other grocery items"
          ] },
          { "id": 10, "name": "Ragi Powder", "imageUrl": "https://media.istockphoto.com/id/985914876/photo/nachni-laddu-or-ragi-laddoo-or-balls-made-using-finger-millet-sugar-and-ghee-its-a-healthy.webp?b=1&s=170667a&w=0&k=20&c=eAiUy2pMF3QLEm6NS3DYWInMZpVVYpbAIzVeQRSkV0Y=", "price": 152, tags:[
            "ragi powder","other grocery items","ragi"
          ] },
          { "id": 11, "name": "Jaggery Powder", "imageUrl": "https://media.istockphoto.com/id/1464076428/photo/panela-sugar-background-close-up-view-of-raw-cane-sugar-in-a-jar.webp?b=1&s=170667a&w=0&k=20&c=rJYPF2I5v839BgyDKPLQMkkwrNGxRpI0NTWcLtCxQIE=", "price": 155, tags:[
            "jaggery powder","other grocery items","jaggery"
          ] },
          { "id": 12, "name": "Protein Powder", "imageUrl": "https://media.istockphoto.com/id/155387152/photo/protein-powder-and-black-plastic-container.webp?b=1&s=170667a&w=0&k=20&c=OHxII1Kyp8UptPaz56-zH_naH9P1awpXZ8Yur5ADRsI=", "price": 250, tags:[
            "protein powder","protein","other grocery items"
          ] },
          { "id": 13, "name": "Salt Powder", "imageUrl": "https://plus.unsplash.com/premium_photo-1666174323324-24ca53b2e268?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2FsdCUyMHBvd2RlcnxlbnwwfHwwfHx8MA%3D%3D", "price": 170, tags:[
            "Salt","salt powder","other grocery items"
          ] },
          { "id": 14, "name": "Sugar Powder", "imageUrl": "https://media.istockphoto.com/id/1369570818/photo/white-tapioca-starch-in-wooden-bowl-and-spoon-isolated-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=vdaj9_faUjORXqh1zR4c70FeKSMA373IUxc8JKfIoWI=", "price": 158, tags:[
            "sugar powder","sugar","other grocery items"
          ] },
          { "id": 15, "name": "Chickpeas", "imageUrl": "https://plus.unsplash.com/premium_photo-1675237625824-40a9c6400ad8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hpY2twZWFzfGVufDB8fDB8fHww", "price": 110, tags:[
            "chickpeas","other grocery items","proteins"
          ] },
          { "id": 16, "name": "Pickles", "imageUrl": "https://media.istockphoto.com/id/1338316873/photo/image-ceramic-pickle-lidded-pots-hessian-covered-glass-jar-of-green-mango-chutney-recipe.webp?b=1&s=170667a&w=0&k=20&c=Tl-L0ul2Pq7xX2MAlZLOhCPVqgedX1k2k0K5Q6JIQWQ=", "price": 130,tags:[
            "pickles","other grocery items",
          ]  },
          { "id": 17, "name": "Asafoetida", "imageUrl": "https://media.istockphoto.com/id/1932667729/photo/asafoetida-asafetida-ferula-assa-foetida-or-duiwelsdrek.webp?b=1&s=170667a&w=0&k=20&c=2SRxjkZ7ZaXUesQRQc8L0pBEthaM1i70ypDmUreECuQ=", "price": 99,tags:[
            "other grocery items","asafoetida"
          ]  },
          { "id": 18, "name": "Clove", "imageUrl": "https://media.istockphoto.com/id/155826517/photo/clove.webp?b=1&s=170667a&w=0&k=20&c=-HL9E_jkDKsqelpUTTuYbafWMZ4Svq0GgCoFqpRFE_M=", "price": 78,tags:[
            "other grocery items","clove"
          ]  },
          { "id": 19, "name": "Butter", "imageUrl": "https://media.istockphoto.com/id/179875636/photo/butter.webp?b=1&s=170667a&w=0&k=20&c=e_KmthIDfJWKUfQKhDFyYNLjMd_QIJZ5Hkd4BjDzx-U=", "price": 102 ,tags:[
            "butter","other grocery items"
          ] },
          { "id": 20, "name": "Ghee", "imageUrl": "https://media.istockphoto.com/id/857450176/photo/ghee-or-clarified-butter-close-up-in-wooden-bowl-and-silver-spoon-selective-focus.webp?b=1&s=170667a&w=0&k=20&c=OjVW-RTn_Yf8ELhXSGU3rQWmLnrJOZEg6z4vOVUJEWY=", "price": 135,tags:[
            "ghee","other grocery items"
          ]  },
          { "id": 21, "name": "Milk", "imageUrl": "https://media.istockphoto.com/id/1159981203/photo/bottle-of-milk-and-a-glass-full-of-milk-on-a-wooden-table-against-turquoise-wooden-background.webp?b=1&s=170667a&w=0&k=20&c=u0ZJC9pVw6_bHMtZrdS6aVvG8FGZnS6qNUaznA9dVhU=", "price": 28,tags:[
            "other grocery items","milk"
          ]  },
          { "id": 22, "name": "Cheese", "imageUrl": "https://media.istockphoto.com/id/1282821708/photo/sliced-cheese-basil-and-tomatoes.webp?b=1&s=170667a&w=0&k=20&c=MmaFhgtA4NalPHYE7PDL8JrTQtJWUjfyotdwyk4sjKc=", "price": 130,tags:[
            "other grocery items","cheese"
          ]  },
          { "id": 23, "name": "Rasam Powder", "imageUrl": "https://media.istockphoto.com/id/846099636/photo/rasam-powder-in-scoop.webp?b=1&s=170667a&w=0&k=20&c=CrLKDkC9pm3-3H6Xu2ZtjwguhKYdSHhWsq0Wz4TPucw=", "price": 110,tags:[
            "other grocery items","rasam powder"
          ]  },
          { "id": 24, "name": "Sambar Powder", "imageUrl": "data:image/jpeg;base64,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", "price": 130,tags:[
            "other grocery items","sambar powder"
          ]  },
          { "id": 25, "name": "Cumin", "imageUrl": "https://media.istockphoto.com/id/935829718/photo/cumin.webp?b=1&s=170667a&w=0&k=20&c=nCLoA-6swIJeKkx0TOvz6wTbkboC_bjeNNKy65PZdVQ=","price": 80,tags:[
            "cumin","other grocery items"
          ]  },
          { "id": 26, "name": "Shaving Cream", "imageUrl": "https://media.istockphoto.com/id/490286404/photo/texture-of-shaving-foam.webp?b=1&s=170667a&w=0&k=20&c=4A-ziMvB0MPoxJbaMjGxB0cmSPTQGxNp6ThrlFQkCbQ=", "price": 120,tags:[
            "shaving cream","other grocery items"
          ]  },
          { "id": 27, "name": "Blade", "imageUrl": "https://media.istockphoto.com/id/157290547/photo/razor-blade-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=_Arl114B8iLYfIWbqOvv6pa0TpIAdYTdTwCGZwTRaxQ=", "price": 20,tags:[
            "other grocery items","blade"
          ]  },
          { "id": 28, "name": "Marshmallow", "imageUrl": "https://media.istockphoto.com/id/1356090411/photo/marshmallow-candy-in-a-bowl-on-blue.webp?b=1&s=170667a&w=0&k=20&c=65b_A5R2pIaN0_PmVC4ZuOwwtSAvWNeSdOO8RZhTAmE=", "price": 350,tags:[
            "other grocery items","marshmallow"
          ]  },
          { "id": 29, "name": "Honey", "imageUrl": "https://media.istockphoto.com/id/1298667562/photo/honey-jar-and-honey-dipper-shot-from-above-on-white-background-copy-space.webp?b=1&s=170667a&w=0&k=20&c=CeMEhn2H_fVgMpqT2RlgNqxr7M8k3Md7Z1bcy-bQnzk=", "price": 160,tags:[
            "other grocery items","honey"
          ]  },
          { "id": 30, "name": "Almonds", "imageUrl": "https://media.istockphoto.com/id/1153088551/photo/almond-backgrounds-nut-food-textured-harvesting.webp?b=1&s=170667a&w=0&k=20&c=V9r5fPruAIi2kjNd8vyqqc29qXrBVdchiWJy_CcYgl0=", "price": 270,tags:[
            "other grocery items","almonds"
          ]  },
          { "id": 31, "name": "Cashews", "imageUrl": "https://media.istockphoto.com/id/182673285/photo/cashew-nuts.webp?b=1&s=170667a&w=0&k=20&c=EzJHDbGquEiZK1iCnLbkAHNXzSkLuHqQXXsQAvESwEw=", "price": 300,tags:[
           "other grocery items","cashews"
          ]  },
          { "id": 32, "name": "Groundnuts", "imageUrl": "https://media.istockphoto.com/id/948504560/photo/close-up-of-groundnuts-in-a-terracotta-container.webp?b=1&s=170667a&w=0&k=20&c=S_IMRfhkq0Iqxt5tdhMFIDbRsaZgelN4Fgefz_rKBAA=", "price": 40,tags:[
            "other grocery items","groundnuts"
          ]  },
          { "id": 33, "name": "Dry Grapes", "imageUrl": "https://media.istockphoto.com/id/1334606226/photo/close-up-of-organic-golden-long-size-raisins-in-a-black-ceramic-bowl-over-white-background.webp?b=1&s=170667a&w=0&k=20&c=iOZS3-wez2ntMuYt0YZB3GZQZGVMN0wsbtXQmN7E1Yk=", "price": 100,tags:[
            "other grocery items","dry grapes"
          ]  },
          { "id": 34, "name": "Bread", "imageUrl": "https://media.istockphoto.com/id/1004827186/photo/sliced-bread-on-white.webp?b=1&s=170667a&w=0&k=20&c=5laV77Kd6uU4i3-ARUbx5koj01h-V1WAVSeUzUIBKpA=", "price": 50,tags:[
            "other grocery items","bread"
          ]  },
         
          { "id": 35, "name": "Jam", "imageUrl": "https://media.istockphoto.com/id/610751534/photo/jar-of-wild-berry-jam.webp?b=1&s=170667a&w=0&k=20&c=H9CpiEbC_gr41XwgQMSofoXj-iZYAMOAgWg49uB4-eU=", "price": 70,tags:[
            "other grocery items","jam"
          ]  },
          { "id": 36, "name": "Bun", "imageUrl": "https://images.unsplash.com/photo-1609889132680-4e2ea2befbef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVufGVufDB8fDB8fHww", "price": 30 ,tags:[
           "other grocery items","bun"
          ] },
          { "id": 37, "name": "Mustard Oil", "imageUrl": "https://media.istockphoto.com/id/1311256168/photo/mustard-oil-in-glass-jar-with-black-mustard-seed-flower-and-mustard-cake-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=UQL-rHEjFr22HCWIitg_Wbgy-PzLHD4KfclWlH1Soo0=", "price": 140,tags:[
           "other grocery items","mustard oil","mustard oils","oils"
          ]  },
          {"id": 38, "name": "Tapioca Chips", "imageUrl":"https://media.istockphoto.com/id/1134820350/photo/indian-traditional-cassava-or-tapioca-chips.webp?b=1&s=170667a&w=0&k=20&c=FhstN0Zbs-imrMq1GFG0qImajqI9Mf1YzDJ43-4t5gU=","price":50,tags:[
            "other grocery items","tapioca","tapioca chips"
          ] },
          {"id": 39, "name": "Mineral Water", "imageUrl":"https://media.istockphoto.com/id/803155598/photo/close-up-the-pouring-purified-fresh-drink-water-from-the-bottle-on-table-in-living-room.webp?b=1&s=170667a&w=0&k=20&c=ByoPMSugjrCNqELmhRFiWm0IN_6Az3ayt1RImDEp2Fc=","price":20,tags:[
            "other grocery items","mineral water"
          ] },
          {"id": 40, "name": "Curd", "imageUrl":"https://media.istockphoto.com/id/1218711576/photo/home-made-curd-in-a-earthen-bowl.webp?b=1&s=170667a&w=0&k=20&c=fI12qx1ePGlfher_7e10mzuN8qTUZaK88g4YNNL13V4=","price":22,tags:[
            "other grocery items","curd"
          ] },
          
        
];

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

const insertProductss = async (productsArray) => {
  try {
    await Product.deleteMany({});
    const insertedProducts = await Product.insertMany(productsArray.flat());
    console.log(insertedProducts);
    console.log("Products added successfully");
  } catch (err) {
    console.error(err);
  }
};

const allProducts = [
  vegetableproducts,
  fruitproducts,
  icecreamproducts,
  snacks,
  oils,
  furniture,
  electronics,
  other,
  school,
  grains,
  powders,
  kitchen,
  cleaning,
  cakes,
  fast,
  nonveg,
  medicine,
  beverage,
  home
];

insertProductss(allProducts);

    const insertProducts = async (categoryTitle, products) => {
        try {
            // Find the category by its title
            const category = await Category.findOne({ title: categoryTitle });
    
            // If category doesn't exist, return early
            if (!category) {
                console.error(`Category not found: ${categoryTitle}`);
                return;
            }
    
            // Iterate over products and insert them one by one
            for (const product of products) {
                // Check if the product is already in the category
                const existingProduct = category.products.find(p => p.name === product.name);
                if (!existingProduct) {
                    // If not, create and insert the product
                    const createdProduct = await Product.create(product);
                    // Add the newly created product to the category
                    category.products.push(createdProduct);
                    console.log(`Product '${product.name}' inserted successfully.`);
                } else {
                    console.log(`Product '${product.name}' already exists in the category.`);
                }
            }
    
            // Save the updated category
            await category.save();
    
            console.log(`Products inserted successfully for category: ${categoryTitle}`);
        } catch (error) {
            console.error(`Error inserting products for category ${categoryTitle}:`, error);
        }
    };
    
    




insertProducts('Vegetables',  vegetableproducts);


insertProducts('Fruits', fruitproducts);

insertProducts('Ice Cream and Deserts',icecreamproducts);
insertProducts('Electronics and Accessories', electronics);
insertProducts('Cakes', cakes);
insertProducts('Beverages', beverage);
insertProducts('Kitchen Equipments', kitchen);
insertProducts('Furnitures', furniture);
insertProducts('Cleaning and Hygiene',cleaning);
insertProducts('Oils', oils);
insertProducts('Snacks and Foods', snacks);
insertProducts('Fast Foods',  fast);
insertProducts('Powders', powders);
insertProducts('Grains', grains);
insertProducts('School Belongings', school);
insertProducts('Home Essentials', home);
insertProducts('Medicine Essentials', medicine);
insertProducts('Non Veg',  nonveg);
insertProducts('Other Grocery Items', other);