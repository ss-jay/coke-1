var config = window.config;
console.log('This is config in ==> en.js file', config);
console.log('This is config in ==> parent =>  en.js file', parent);
console.log('This is config in ==> parent.window ==> en.js file', parent.window);
console.log('This is config in ==> parent.window.config ==> en.js file', parent.window.config);
// var config = {
//     "search" : {
//         "placeholder" : "Search for beverage..."
//     },
//     "tabs_section" : {
//         "tabs_title" : "Drink what makes you happy!", 
//         "tabs" : [
//             {
//                 "tab_icon" : "/coke/assets/images/svg/basket.svg",
//                 "tab_description" : "Promotions <br />& Products",
//                 "active": true
//             },
//             {
//                 "tab_icon" : "/coke/assets/images/svg/promotions.svg",
//                 "tab_description" : "Promotions",
//                 "active": false
//             },
//             {
//                 "tab_icon" : "/coke/assets/images/svg/recent_order.svg",
//                 "tab_description" : "Recently Ordered",
//                 "active": false
//             }
//         ]
//     },
//     "promotions" : {
//         "promotions_title" : "Promotions on",
//         "products" : [
//             {
//                 "name" : "Kinley 5 case offer",
//                 "description" : "7.5 fl oz, 10 pack",
//                 "price" : "$14.95",
//                 "icon" : "/coke/assets/images/png/product_img.png"
//             },
//             {
//                 "name" : "Kinley 5 case offer",
//                 "description" : "7.5 fl oz, 10 pack",
//                 "price" : "$14.95",
//                 "icon" : "/coke/assets/images/png/product_img.png"
//             },
//             {
//                 "name" : "Kinley 5 case offer",
//                 "description" : "7.5 fl oz, 10 pack",
//                 "price" : "$14.95",
//                 "icon" : "/coke/assets/images/png/product_img.png"
//             },
//             {
//                 "name" : "Kinley 5 case offer",
//                 "description" : "7.5 fl oz, 10 pack",
//                 "price" : "$14.95",
//                 "icon" : "/coke/assets/images/png/product_img.png"
//             }
//         ]
//     },
//     "filterbar" : {
//         "title" : "Products",
//         "menu" : [
//             {
//                 "name" : "Name",
//                 "active": false
//             },
//             {
//                 "name" : "Price",
//                 "active": false
//             },
//             {
//                 "name" : "Volume",
//                 "active": true
//             },
//         ]
//     },
//     "products" : [
//         {
//             "icon" : "/coke/assets/images/svg/coke_product.svg",
//             "volume" : "2 Ltr",
//             "items": [
//                 {
// 					"name": "Coca-Cola 400ml",
// 					"description": "7 Bottle",
// 					"price": "644",
//           "icon": "https://cdn.yellowmessenger.com/Zswcic99hKO91633420423934.png"
// 				},
// 				{
// 					"name": "Sprite 400ml",
// 					"description": "7 Bottle",
// 					"price": "644",
//           "icon": "https://cdn.yellowmessenger.com/Zswcic99hKO91633420423934.png"
// 				},
// 				{
// 					"name": "Fanta Orange 400ml",
// 					"description": "4 Bottle",
// 					"price": "368",
//           "icon": "https://cdn.yellowmessenger.com/Zswcic99hKO91633420423934.png"
// 				},
// 				{
// 					"name": "Fanta Cream Soda 400ml",
// 					"description": "3 Bottle",
// 					"price": "276",
//           "icon": "https://cdn.yellowmessenger.com/Zswcic99hKO91633420423934.png"
// 				},
// 				{
// 					"name": "Fanta Portello 400ml",
// 					"description": "3 Bottle",
// 					"price": "276",
//           "icon": "https://cdn.yellowmessenger.com/Zswcic99hKO91633420423934.png"
// 				}
//             ] 
//         },
//         {
//             "icon" : "/coke/assets/images/svg/fanta_xl.svg",
//             "volume" : "1 Ltr",
//             "items": [
//                 {
//                     "name" : "Kinley 5 case offer",
//                     "description" : "7.5 fl oz, 10 pack",
//                     "price" : "$14.95",
//                     "icon" : "/coke/assets/images/svg/fanta_xl.svg"
//                 },
//                 {
//                     "name" : "Kinley 5 case offer",
//                     "description" : "7.5 fl oz, 10 pack",
//                     "price" : "$14.95",
//                     "icon" : "/coke/assets/images/svg/coke_xl.svg"
//                 },
//                 {
//                     "name" : "Kinley 5 case offer",
//                     "description" : "7.5 fl oz, 10 pack",
//                     "price" : "$14.95",
//                     "icon" : "/coke/assets/images/svg/sprite_xl.svg"
//                 },
//                 {
//                     "name" : "Kinley 5 case offer",
//                     "description" : "7.5 fl oz, 10 pack",
//                     "price" : "$14.95",
//                     "icon" : "/coke/assets/images/svg/coke_zero_xl.svg"
//                 }
//             ] 
//         },
//         {
//             "icon" : "/coke/assets/images/svg/sprite_product.svg",
//             "volume" : "250 Ml",
//             "items": [
//                 {
//                     "name" : "Kinley 5 case offer",
//                     "description" : "7.5 fl oz, 10 pack",
//                     "price" : "$14.95",
//                     "icon" : "/coke/assets/images/svg/sprite_xl.svg"
//                 },
//                 {
//                     "name" : "Kinley 5 case offer",
//                     "description" : "7.5 fl oz, 10 pack",
//                     "price" : "$14.95",
//                     "icon" : "/coke/assets/images/svg/coke_xl.svg"
//                 },
//                 {
//                     "name" : "Kinley 5 case offer",
//                     "description" : "7.5 fl oz, 10 pack",
//                     "price" : "$14.95",
//                     "icon" : "/coke/assets/images/svg/fanta_xl.svg"
//                 },
//                 {
//                     "name" : "Kinley 5 case offer",
//                     "description" : "7.5 fl oz, 10 pack",
//                     "price" : "$14.95",
//                     "icon" : "/coke/assets/images/svg/coke_zero_xl.svg"
//                 }
//             ] 
//         }
//     ]
    
    
// };
