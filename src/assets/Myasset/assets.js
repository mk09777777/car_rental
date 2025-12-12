import logo from "./logo.svg";
import gmail_logo from "./gmail_logo.svg";
import facebook_logo from "./facebook_logo.svg";
import instagram_logo from "./instagram_logo.svg";
import twitter_logo from "./twitter_logo.svg";
import menu_icon from "./menu_icon.svg";
import search_icon from "./search_icon.svg"
import close_icon from "./close_icon.svg"
import users_icon from "./users_icon.svg"
import car_icon from "./car_icon.svg"
import location_icon from "./location_icon.svg"
import fuel_icon from "./fuel_icon.svg"
import addIcon from "./addIcon.svg"
import carIcon from "./carIcon.svg"
import carIconColored from "./carIconColored.svg"
import dashboardIcon from "./dashboardIcon.svg"
import dashboardIconColored from "./dashboardIconColored.svg"
import addIconColored from "./addIconColored.svg"
import listIcon from "./listIcon.svg"
import listIconColored from "./listIconColored.svg"
import cautionIconColored from "./cautionIconColored.svg"
import arrow_icon from "./arrow_icon.svg"
import star_icon from "./star_icon.svg"
import check_icon from "./check_icon.svg"
import tick_icon from "./tick_icon.svg"
import delete_icon from "./delete_icon.svg"
import eye_icon from "./eye_icon.svg"
import eye_close_icon from "./eye_close_icon.svg"
import filter_icon from "./filter_icon.svg"
import edit_icon from "./edit_icon.svg"
import calendar_icon_colored from "./calendar_icon_colored.svg"
import location_icon_colored from "./location_icon_colored.svg"
import testimonial_image_1 from "./testimonial_image_1.png"
import testimonial_image_2 from "./testimonial_image_2.png"
import main_car from "./main_car.png"
import banner_car_image from "./banner_car_image.png"
import user_profile from "./user_profile.png"
import upload_icon from "./upload_icon.svg"
import car_image1 from "./car_image1.png"
import car_image2 from "./car_image2.png"
import car_image3 from "./car_image3.png"
import car_image4 from "./car_image4.png"
import car_image5 from "./car_image5.avif"
import  car_image6 from "./car_image6.avif"
import car_image7 from "./car_image7.webp"
import car_image8 from "./car_image8.jpg"
import car_image9 from "./car_image9.jpg"
import car_image10 from "./car_image10.jpg"
import car_image11 from "./car_image11.jpg"
import car_image12 from "./car_image12.jpg"
import car_image13 from "./car_image13.jpg"
import car_image14 from "./car_image14.avif"
import car_image15 from "./car_image15.jpeg"
import  car_image16 from "./car_image16.jpg"
import car_image17 from "./car_image17.jpeg"
import car_image18 from "./car_image18.jpg"
import myicon from "./myicon.jpg"
import lg from "./lg.jpg"



export const cityList = ["Mumbai","Delhi","Banglore","Chennai","Kolkata","Pune",'Hyderabad',"Dombivli",'Navi Mumbai',"Gurgaon","Kalyan","Badlapur","Ulhasnagar"]

export const assets = {
    logo,
    myicon,
    gmail_logo,
    facebook_logo,
    instagram_logo,
    twitter_logo,
    menu_icon,
    search_icon,
    close_icon,
    users_icon,
    edit_icon,
    car_icon,
    location_icon,
    fuel_icon,
    addIcon,
    carIcon,
    carIconColored,
    dashboardIcon,
    dashboardIconColored,
    addIconColored,
    listIcon,
    listIconColored,
    cautionIconColored,
    calendar_icon_colored,
    location_icon_colored,
    arrow_icon,
    star_icon,
    check_icon,
    tick_icon,
    delete_icon,
    eye_icon,
    eye_close_icon,
    filter_icon,
    testimonial_image_1,
    testimonial_image_2,
    main_car,
    banner_car_image,
    car_image1,
    upload_icon,
    user_profile,
    lg,
    car_image2,
    car_image3,
    car_image4,
    car_image5,
    car_image6,
    car_image7,
    car_image8,
    car_image9,
    car_image10,
    car_image11,
    car_image12,
    car_image13,
    car_image14,
    car_image15,
    car_image16,
    car_image17,
    car_image18
}

export const menuLinks = [
    { name: "Home", path: "/" },
     { name: "about", path: "/About" },
    { name: "cars", path: "/Cars" },  
    { name: "My Bookings", path: "/My-bookings" },
]




    {/* <a href="#" className="block">Home</a>
                <a href="#" className="block">About</a>
                <a href="#" className="block">Contact</a>
                <a href="#">Cars</a>
                 <a href="#">My Bookings</a> */}






export const ownerMenuLinks = [
    { name: "Dashboard", path: "/owner", icon: dashboardIcon, coloredIcon: dashboardIconColored },
    { name: "Add car", path: "/owner/add-car", icon: addIcon, coloredIcon: addIconColored },
    { name: "Manage Cars", path: "/owner/manage-cars", icon: carIcon, coloredIcon: carIconColored },
    { name: "Manage Bookings", path: "/owner/manage-bookings", icon: listIcon, coloredIcon: listIconColored },
]




export const dummyUserData = {
    
  "_id": "6847f7cab3d8daecdb517095",
  "name": "Chetan",
  "email": "admin@example.com",
  "role": "owner",
  "image": user_profile,
}










// export const dummyUserData = [

// {
//   "_id": "6847f7cab3d8daecdb517095",
//   "name": "Chetan",
//   "email": "admin@example.com",
//   "role": "owner",
//   "image": user_profile,
// },
    
// {
//   "_id": "6847f7cab3d8daecdb517096",
//   "name": "Mayur",
//   "email": "admin@example.com",
//   "role": "user",
//   "image": user_profile,
// },

    
// {
//   "_id": "6847f7cab3d8daecdb517097",
//   "name": "Vicky",
//   "email": "admin@example.com",
//   "role": "user",
//   "image": user_profile,
// },

    
// {
//   "_id": "6847f7cab3d8daecdb517098",
//   "name": "Akshay",
//   "email": "admin@example.com",
//   "role": "owner",
//   "image": user_profile,
// }




// ]


export  const  CarData=[{
        id:1,
        brand:"BMW",
        model:" M5",
        // name:"BMW M5",
        category:"Suv",
        image:"/src/assets/car_image1.png",
        type:"Luxury Sedan",
        year:"2019",
        seats:"5 seaters",
        pricePerDay:"350",
        rating:4.8,
        fuelType:"Turbo-Hybrid",
        transmission:"Automatic",
        location:"Navi Mumbai",
        isAvailable: true

    },{
        id:2,
        brand:"BMW ",
        model:" M4",
        category:"Suv",
        // name:"BMW M4",
        image:"/src/assets/car_image2.png",
        type:"Exclusive Sedan",
         year:"2018",
        seats:"5 seaters",
        pricePerDay:"140",
        rating:4.7,
        fuelType:"Hybrid",
        transmission:"Automatic",
        location:"Dombivli",
        isAvailable: true

    },{
        id:3,
        brand:"Tesla",
        model:"  model 3",
         category:"Suv",
        // name:"Tesla model 3",
        image:"/src/assets/car_image3.png",
        type:"Luxury Sedan",
         year:"2022",
        seats:"5 seaters",
        pricePerDay:"335",
        rating:4.6,
        fuelType:"Electric",
        transmission:"Automatic",
        location:"Chennai",
        isAvailable: true

    },{
        id:4,
        brand:"Chovrolet",
        model:" Camaro",
         category:"Sedan",
        // name:"Chovrolet Camaro",
        image:"/src/assets/car_image4.png",
        type:"Sports Sedan",
         year:"2020",
        seats:"4 seaters",
        pricePerDay:"280",
        rating:4.9,
        fuelType:"Petrol",
        transmission:"Automatic",
        location:"Mumbai",
        isAvailable: false


    },   
    
   {
         id:5,
        brand:"Mercedez Benz",
        model:" GMT GT-4",
         category:"Sports",
        //  name:"Mercedez Benz GMT GT-4 ",
         image:"/src/assets/car_image5.avif",
         type:"Luxury Sedan",
          year:"2024",
         seats:"5 seaters",
         pricePerDay:"130",
         rating:4.5,
         fuelType:"Hybrid",
         transmission:"Automatic",
         location:"Hydrabad",
         isAvailable: false

     },{
         id:6,
        brand:"Mercedez Benz",
        model:"GMT GT-4 Door Coupe",
         category:"Sports",
        //  name:"Mercedez Benz GMT GT-4 Door Coupe",
         image:"/src/assets/car_image6.avif",
         type:"Luxury Coupe",
          year:"2019",
         seats:"4 seaters",
         pricePerDay:"250",
         rating:4.9,
         fuelType:"Petrol",
         transmission:"Automatic",
         location:"Pune",
         isAvailable: false

     },{
         id:7,
          brand:"Toyota",
        model:"Crown Hybrid Z",
         category:"Sedan",
      //   name:"Toyota Crown Hybrid Z" ,
         image:"/src/assets/car_image7.webp",
         type:"Ultra Luxury",
          year:"2016",
         seats:"5 seaters",
         pricePerDay:"350",
         rating:5.0,
         fuelType:"Petrol",
         transmission:"Automatic",
         location:"Banglore",
         isAvailable: true

     },{
         id:8,
         brand:"Jaguar",
        model:" F-Type 2016",
         category:"Sports",
     //    name:"Jaguar F-Type 2016",
         image:"/src/assets/car_image8.jpg",
         type:"Electric Sedan",
          year:"2016",
         seats:"5 seaters",
         pricePerDay:"2120",
         rating:4.7,
         fuelType:"Electric",
         transmission:"Semi-Automatic",
         location:"Santacruz",
         isAvailable: true

     },{
         id:9,
          brand:"Jaguar",
        model:"F-type",
         category:"Sports",
     //    name:"Jaguar F-type",
         image:"/src/assets/car_image9.jpg",
         type:"Luxury Sedan",
          year:"2019",
         seats:"5 seaters",
         pricePerDay:"245",
         rating:4.6,
         fuelType:"Petrol",
         transmission:"Automatic",
         location:"Thane",
         isAvailable: true

     },
    

    {
        id:10,
         brand:"Audi",
        model:" R8",
         category:"Sports",
    //    name:"Audi R8 ",
        image:"/src/assets/car_image10.jpg",
        type:"Luxury Sedan",
         year:"2013",
        seats:"2 seaters",
        pricePerDay:"350",
        rating:4.8,
        fuelType:"Petrol",
        transmission:"Automatic",
        location:"Navi Mumbai",
        isAvailable: false

    },{
        id:11,
         brand:"Hyundai",
        model:" Elantra",
         category:"Sedan",
       // name:"Hyundai Elantra ",
        image:"/src/assets/car_image11.jpg",
        type:"Executive Sedan",
         year:"2016",
        seats:"5 seaters",
        pricePerDay:"140",
        rating:4.7,
        fuelType:"Hybrid",
        transmission:"Semi-Automatic",
        location:"Banglore",
        isAvailable: true

    },{
        id:12,
         brand:"Hyundai ",
        model:"Elantra 2023",
         category:"Sedan",
     //   name:"Hyundai Elantra 2023",
        image:"/src/assets/car_image12.jpg",
        type:"Luxury Sedan",
         year:"2023",
        seats:"5 seaters",
        pricePerDay:"135",
        rating:4.6,
        fuelType:"Electric",
        transmission:"Manual",
        location:"Chennai",
        isAvailable: true

    },{
        id:13,
         brand:"BYD ",
        model:" Sealion 7 ",
         category:"Suv",
      //  name:"BYD Sealion 7 ",
        image:"/src/assets/car_image13.jpg",
        type:"Sports Sedan",
         year:"2022",
        seats:"4 seaters",
        pricePerDay:"260",
        rating:4.9,
        fuelType:"Electric",
        transmission:"Automatic",
        location:"Mumbai",
        isAvailable: true


    },   
    
   {
         id:14,
          brand:"Volvo",
        model:"S90",
         category:"Sedan",
        // name:"Volvo S90  ",
         image:"/src/assets/car_image14.avif",
         type:"Luxury Sedan",
          year:"2017",
         seats:"5 seaters",
         pricePerDay:"440",
         rating:4.5,
         fuelType:"Hybrid",
         transmission:"Semi-Automatic",
         location:"Santacruz",
         isAvailable: true

     },{
         id:15,
        brand:"Volvo",
        model:"S90",
         category:"Sedan",
      //   name:"Volvo S90 ",
         image:"/src/assets/car_image15.jpeg",
         type:"Luxury Coupe",
          year:"2020",
         seats:"4 seaters",
         pricePerDay:"253",
         rating:4.9,
         fuelType:"Petrol",
         transmission:"Automatic",
         location:"Badlapur",
         isAvailable: false

     },{
         id:16,
          brand:"Lamboghini",
        model:"Aventador",
         category:"Sports",
        // name:"Lamboghini Aventador ",
         image:"/src/assets/car_image16.jpg",
         type:"Sports ",
          year:"2013",
         seats:"2 seaters",
         pricePerDay:"350",
         rating:5.0,
         fuelType:"Petrol",
         transmission:"Automatic",
         location:"Kalyan",
         isAvailable: true

     },{
         id:17,
          brand:"Porche 911",
        model:" GT3 RS",
         category:"Sports",
       //  name:"Porche 911 GT3 RS",
         image:"/src/assets/car_image17.jpeg",
         type:"Sports Sedan",
          year:"2019",
         seats:"5 seaters",
         pricePerDay:"120",
         rating:4.7,
         fuelType:"Electric",
         transmission:"Automatic",
         location:"Dombivli",
         isAvailable: true

     },{
         id:18,
          brand:"Lexus",
        model:" LC 500h",
         category:"Sports",
        // name:"Lexus LC 500h",
         image:"/src/assets/car_image18.jpg",
         type:"Luxury Sedan",
          year:"2021",
         seats:"4 seaters",
         pricePerDay:"145",
         rating:4.6,
         fuelType:"Petrol",
         transmission:"Automatic",
         location:"Hyderabad",
         isAvailable: false

     }

     
    ]









export const dummyMyBookingsData = [
    {
        "_id": "68482bcc98eb9722b7751f70",
        "car": CarData[0],
          name:"BMW M5",

        "user": "6847f7cab3d8daecdb517095",
        "owner": "6847f7cab3d8daecdb517095",
        "pickupDate": "2025-06-13T00:00:00.000Z",
        "returnDate": "2025-06-14T00:00:00.000Z",
        "status": "confirmed",
        "price": 440,
        "createdAt": "2025-06-10T12:57:48.244Z",
    },
    {
        "_id": "68482bb598eb9722b7751f602",
        "car": CarData[1],
           name:"BMW M4",
        "user": "6847f7cab3d8daecdb517095",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "pickupDate": "2025-06-12T00:00:00.000Z",
        "returnDate": "2025-06-12T00:00:00.000Z",
        "status": "pending",
        "price": 130,
        "createdAt": "2025-07-10T12:57:25.613Z",
    },
    {
        "_id": "684800fa0fb481c5cfd92e568",
        "car": CarData[2],
         name:"Tesla model 3",
        "user": "6847f7cab3d8daecdb517095",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "pickupDate": "2025-06-11T00:00:00.000Z",
        "returnDate": "2025-06-12T00:00:00.000Z",
        "status": "pending",
        "price": 600,
        "createdAt": "2025-06-10T09:55:06.379Z",
    },
    {
        "_id": "6847fe790fb481c5cfd92d106",
        "car": CarData[3],
          name:"Chovrolet Camaro",
        "user": "6847f7cab3d8daecdb517095",
        "owner": "6847f7cab3d8daecdb517095",
        "pickupDate": "2025-06-11T00:00:00.000Z",
        "returnDate": "2025-06-12T00:00:00.000Z",
        "status": "confirmed",
        "price": 440,
        "createdAt": "2025-06-10T09:44:25.410Z",
    },

    {
        "_id": "6847fe790fb481c5cfd92d94",
        "car": CarData[4],
           name:"Mercedez Benz GMT GT-4 ",
        "user": "6847f7cab3d8daecdb517095",
        "owner": "6847f7cab3d8daecdb517095",
        "pickupDate": "2025-06-11T00:00:00.000Z",
        "returnDate": "2025-06-12T00:00:00.000Z",
        "status": "confirmed",
        "price": 440,
        "createdAt": "2025-06-10T08:44:25.410Z",
    },

    {
        "_id": "6847fe790fb481c5cfd92d99",
        "car": CarData[5],
          name:"Mercedez Benz GMT GT-4 Door Coupe",
        "user": "6847f7cab3d8daecdb517095",
        "owner": "6847f7cab3d8daecdb517095",
        "pickupDate": "2025-06-11T00:00:00.000Z",
        "returnDate": "2025-06-12T00:00:00.000Z",
        "status": "confirmed",
        "price": 440,
        "createdAt": "2025-06-14T09:48:25.410Z",
    },
    
   {
        "_id": "6847fe790fb481c5cfd92d999",
        "car": CarData[7],
        name:"Toyota Crown Hybrid Z" ,
        "user": "6847f7cab3d8daecdb517095",
        "owner": "6847f7cab3d8daecdb517095",
        "pickupDate": "2025-06-11T00:00:00.000Z",
        "returnDate": "2025-06-12T00:00:00.000Z",
        "status": "confirmed",
        "price": 160,
        "createdAt": "2025-06-15T09:44:25.410Z",
    }
 
    
]

export const dummyDashboardData = {
    "totalCars": 4,
    "totalBookings": 2,
    "pendingBookings": 0,
    "completedBookings": 2,
    "recentBookings": [
        dummyMyBookingsData[0],
        dummyMyBookingsData[1]
    ],
    "monthlyRevenue": 840
}































