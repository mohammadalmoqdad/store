// function suggestProduct(){
// // var table,plant,headphone;
// // table = prompt(" Do YOU NEED AN OFFICE DESKTOP? (please answer with yes and no)");
// // plant=prompt("DO TOU NEED AN Amazonica Plant? (please answer with yes and no)");
// // headphone=prompt("DO YOU NEED AN APPLE HEADPHONE? (please answer with yes and no)");

// // if(table=='y' || table=='yes' ){
// //     $(document).ready(function(){
// //         $('.float_form').hide();
// //         $(".intro1").css("background-color","yellow");
// //       });

// // }
// // if(plant=='y' || plant=='yes' ){
// //     $(document).ready(function(){
// //         $(".intro2").css("background-color","yellow");
// //       });

// // }
// // if(headphone=='y' || headphone=='yes' ){
// //     $(document).ready(function(){
// //         $(".intro3").css("background-color","yellow");
// //       });

// // }
// // }

// suggestProduct();

var item = prompt("DO YOU NEED HEADPHON, DESKTOP OR PLANT? (please answer with THE NAME OF ITEM)");
var num;

while (item != "headphone" && item != "HEADPHONE" && item != "desktop" && item != "DESKTOP" && item != "plant" && item != "PLANT") {
    item = prompt("DO YOU NEED HEADPHON, DESKTOP OR PLANT? (please answer with THE NAME OF ITEM)");
}

var num = parseInt(prompt("HOW MANY PEICES YOU WANT (please NUMBER less than 8)"));
while (!Number.isInteger(num) || num > 8 || num < 0) {
    num = parseInt(prompt("HOW MANY PEICES YOU WANT (please NUMBER less than 8)"));
}



// DEFINE 3 ARRAYS WITH DIFFERENT IMAGES 
// DEFINE INTEGER DIGIT FOR RENDOM PRICE
//LOOP DEPEND ON NUMBER OF ENTERED VALUES 
// while loop TO CHECK WHAT ELEMENT TO not REPEAT 
var emptyArr = [];
var repeated = '';
var randdesk = '';
var randpalnt = '';
var randheadphone = '';

var headphones = ["https://ae01.alicdn.com/kf/HTB1QR5feLWG3KVjSZFgq6zTspXae/New-Wireless-Headphones-Bluetooth-Headset-Foldable-Stereo-Headphone-Gaming-Earphones-With-Microphone-For-PC-Mobile-phone.jpg", "https://images.homedepot-static.com/productImages/62f302d5-15d8-459c-a72b-5afd3449c883/svn/buddy-phones-headphones-bt-bp-play-sakura-64_1000.jpg", "https://cdn.shopify.com/s/files/1/0301/2263/9499/products/WH-CH510_Blue-01_1024x1024.jpg?v=1589972653", "https://images-na.ssl-images-amazon.com/images/I/51z376z5iBL._SL1200_.jpg", "https://ae01.alicdn.com/kf/HTB1Jc5OTxjaK1RjSZKzq6xVwXXa5/JOINRUN-PS4-Gaming-Headphones-4D-Stereo-RGB-Marquee-Earphones-Headset-with-Microphone-for-New-Xbox-One.jpg", "https://images.philips.com/is/image/PhilipsConsumer/TASH402LF_00-IMS-en_SG?$jpglarge$&wid=1250", "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1562927919.71238950.jpg"];
var plants = ["data:image/jpeg;base64,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","https://5.imimg.com/data5/AL/TM/FF/SELLER-55168337/outdoor-plants-500x500.jpg", "https://as2.ftcdn.net/jpg/01/85/64/39/500_F_185643908_t5ulYM7ejukAZERgP54bVsINpkVm8T8r.jpg", "https://images.freeimages.com/images/small-previews/519/plant-on-vase-1365232.jpg", "https://www.vippng.com/png/detail/455-4550445_houseplant-house-plant-white-background.png", "https://img1.cgtrader.com/items/36223/7139d29cfe/green-ivy-plant-in-a-bright-yellow-pot-with-a-white-background-3d-model-obj.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSmLVg35VeVpahc8zD5wkOdhmjH3NYqrOcDPg&usqp=CAU"];
var desks = ["https://imageresizer.furnituredealer.net/img/remote/images.furnituredealer.net/img/products%2Fsignature_design_by_ashley%2Fcolor%2Faldwin%20h837_h837-54-b1.jpg?width=878&height=600&scale=both&trim.threshold=80", "https://www.ikea.com/jo/en/images/products/micke-desk__0735981_PE740299_S5.JPG", "https://media.4rgos.it/i/Argos/8201100_R_Z001A?w=750&h=440&qlt=70 ", "https://media.officebarn.biz/wp-content/uploads/2020/05/16180332/products_signature_design_by_ashley_color_starmore_h633-3434r-b1.jpg", "https://s3-ap-southeast-2.amazonaws.com/wc-prod-pim/JPEG_1000x1000/JBTORO15DK_toro_straight_desk_1500mm_maple_grey.jpg", "https://cdn.shopify.com/s/files/1/0036/4806/1509/products/m007117439_c495926d-fdbb-4e5b-9305-7208d484f17d_1000x1000@2x.jpg?v=1582210519", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0L7fiMdEEZuHiL07KalOkNxhIdsJIgPVm7A&usqp=CAU"];
for (var i = 0; i < num; i++) {

    if (item == "plant" || item == "PLANT") {


        //    randpalnt= plants[Math.floor(Math.random()*plants.length)];

        //   while(!emptyArr.includes(randpalnt)){

        //       emptyArr[i]=randpalnt;
        //   }


        reapeted = '<li ><div class="intro2"><img width="350px" src="' + headphones[i] + '"><br><p> Alocasia Amazonica Plant <br><b>150$</b></p><br></div></li>';
    }
    else if (item == "desktop" || item == "DESKTOP") {

        reapeted = '<li ><div class="intro1"><img width="375px" src="' + desks[i] + '"><br><p>Argos Home Malibu 3 Drawer Office Desk - Grey <br><b>250$</b></p> <br></div></li>';

    }
    else if (item == "headphone" || item == "HEADPHONE") {
        randheadphone = headphones[Math.floor(Math.random() * headphones.length)];

        reapeted = ' <li >                <div class="intro3">                    <img width="350px "                        src="' + headphones[i] + '"><br>                    <p>                        Apple Headphones - Black <br><b>140$</b></p><br>                </div>            </li>';


    }
    document.write(reapeted);


}
