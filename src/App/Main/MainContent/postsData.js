import React from "react"


const postsData = [
    {
        id:1,
        title:"My trip to Paris",
        date:"July 26, 2019",
        author: 'Anariel',
        сategories: 'Travels',
        category_link: '/category/travels',
        // сategories: ['Travels','Lifestyle'],
        tags: 'city',
        // tags: ['city', 'fashion','handcrafted','jewellery'],
        image: '/images/postsimg/lisbeth-demo1-2.3-1500x720.jpg',
        image_postitem: "/images/postsimg/lisbeth-demo1-2.3-390x240.jpg",
        image_sidebar: '',
        image_widget: '',
        link: '/post/my-trip-to-paris',
        likes:23,
        excerpt:
        "Paris is the capital and most populous city of France, with an administrative limits area of 105 square kilometres (41 square miles) and a 2015 population of 2,229,621. The...",           
    },
    {
        id:2,
        title:"Why do we think cats are unfriendly?",
        date:"September 01, 2019",
        author: 'Anariel',
        сategories: 'Beauty',
        category_link: '/category/beauty',
        // сategories: ['Beauty','Lifestyle'],
        tags: 'city',
        // tags: ['city', 'fashion','handcrafted','jewellery'],
        image: '/images/postsimg/lisbeth-demo1-9.2g.jpg',
        image_postitem:"/images/postsimg/lisbeth-demo1-9g-390x240.jpg",
        image_sidebar: '',
        image_widget: '',
        link: '/post/why-do-we-think-cats-are-unfriendly',     
        likes:45,
        excerpt:
        "Cats are the only asocial animal we have successfully domesticated. We’re disappointed that we don’t bond with them as easily as dogs. But are we just missing the signs?",   
    },
    {
        id:3,
        title:"Best coffee in town",
        date:"September 24, 2019",
        author: 'Anariel',
        сategories: 'Travels',
        category_link: '/category/travels',
        // сategories: ['Blog','Lifestyle'],
        tags: 'city',
        // tags: ['city', 'fashion','handcrafted','jewellery'],
        image: '/images/postsimg/anariel-post-15.jpg',
        image_postitem:"/images/postsimg/anariel-post-15-390x240.jpg",
        image_sidebar: '/images/postsimg/anariel-post-15-255x170.jpg',
        image_widget: '',
        link: '/post/best-coffee-in-town',     
        likes:50,
        excerpt:
        "Over the past few years there have been a wave of independent coffee shops opening in town, which means caffeine lovers have more places than ever...",         
    },
    {
        id:4,
        title:"Visit the gardens",
        date:"October 18, 2019",
        author: 'Anariel',
        сategories: 'Fashion',
        category_link: '/category/fashion',
        // сategories: ['Blog','Travels'],
        tags: 'city',
        // tags: ['city', 'fashion','handcrafted','jewellery'],
        image: '/images/postsimg/anariel-post-13.jpg',        
        image_postitem:"/images/postsimg/anariel-post-13-390x240.jpg",
        image_sidebar: '',
        image_widget: '',
        link: '/post/visit-the-gardens',     
        likes:40,
        excerpt:
        "Visit the world's largest glass greenhouse where stunning flower displays and plant varieties await...",        
    },
    {
        id:5,
        title:"Come with me on a drive to the country",
        date:"October 30, 2019",
        author: 'Anariel',
        сategories: 'Travels',
        category_link: '/category/travels',
        // сategories: ['Travels', 'Lifestyle'],
        tags: 'city',
        // tags: ['city', 'fashion','handcrafted','jewellery'],
        image: '/images/postsimg/anariel-post-1.jpg',         
        image_postitem:"/images/postsimg/anariel-post-1-390x240.jpg",
        image_sidebar: '/images/postsimg/anariel-post-1-255x170.jpg',
        image_widget: '',
        link: '/post/come-with-me-on-a-drive-to-the-country',     
        likes:51,
        excerpt:
        "I got used to travelling by car a lot and it was very hard for me to dare to travel without it. This article is about advantages of travelling by car...",        
    },
    {
        id:6,
        title:"Fashion tips for autumn days",
        date:"November 23, 2019",
        author: 'Anariel',
        сategories: 'Lifestyle',
        category_link: '/category/lifestyle',
        // сategories: ['Blog', 'Fashion'],
        tags: 'city',
        // tags: ['city', 'fashion','handcrafted','jewellery'],
        image: '/images/postsimg/anariel-post-12.jpg',         
        image_postitem:"/images/postsimg/anariel-post-12-390x240.jpg",
        image_sidebar: '',
        image_widget: "/images/postsimg/anariel-post-12-345x230.jpg",
        link: '/post/fashion-tips-for-autumn-days',     
        likes:11,
        excerpt:
        "Fall is a versatile season for fashion. The weather starts getting cooler, making heavier-knit fabrics, boots, and chunky accessories in vogue. The...",        
    },
    {
        id:7,
        title:"Beautiful view from my home office",
        date:"December 12, 2019",
        author: 'Anariel',
        сategories: 'Lifestyle',
        category_link: '/category/lifestyle',
        // сategories: ['Blog', 'Travels'],
        tags: 'city',
        // tags: ['city', 'fashion','handcrafted','jewellery'],
        image: '/images/postsimg/anariel-post-10.jpg',       
        image_postitem:"/images/postsimg/anariel-post-10-390x240.jpg",
        image_sidebar: '/images/postsimg/anariel-post-10-255x170.jpg',
        image_widget: '/images/postsimg/anariel-post-10-345x230.jpg',
        link: '/post/beautiful-view-from-my-home-office',        
        likes:68,
        excerpt:
        "To be successful, a home office needs to be both functional and efficient. You are going to be working in this environment...",      
    },
    {
        id:8,
        title:"Ten tips for travel by car",
        date:"December 30, 2019",
        author: 'Anariel',
        сategories: 'Travels',
        category_link: '/category/travels',
        // сategories: ['Travels'],
        tags: 'city',
        // tags: ['city', 'fashion','handcrafted','jewellery'],
        image: '/images/postsimg/anariel-post-4.jpg',
        image_postitem: '/images/postsimg/anariel-post-4-390x240.jpg',
        image_sidebar: '/images/postsimg/anariel-post-4-255x170.jpg',
        image_widget: '',
        link: '/post/ten-tips-for-travel-by-car',        
        likes:52,
        excerpt:
        "So many people fly everywhere these days that you might think the classic road trip is a thing of the past. This is not actually the case...",          
    },
    {
        id:9,
        title:"Beautiful Christmas decoration",
        date:"Februery 02, 2020",
        author: 'Anariel',
        сategories: 'Lifestyle',
        category_link: '/category/lifestyle',
        // сategories: ['Beauty', 'Fashion'],
        tags: 'city',
        // tags: ['city', 'fashion','handcrafted','jewellery'],
        image: '/images/postsimg/anariel-post-3.jpg',        
        image_postitem: '/images/postsimg/anariel-post-3-390x240.jpg',
        image_sidebar: '/images/postsimg/anariel-post-3-255x170.jpg',
        image_widget: '/images/postsimg/anariel-post-3-345x230.jpg',
        link: '/post/beautiful-christmas-decoration',       
        likes:47,
        excerpt:
        "The holidays are perfect for spending time with loved ones and eating delicious food. You can easily spread the holiday cheer this season by embellishing your home with Christmas decorations.",          
    },
    {
        id:10,
        title:"Enjoy the winter time in the city",
        date:"Februery 14, 2020",
        author: 'Anariel',
        сategories: 'Lifestyle',
        category_link: '/category/lifestyle',
        // сategories: ['Blog', 'Lifestyle'],
        tags: 'city',
        // tags: ['city', 'fashion','handcrafted','jewellery'],
        image: '/images/postsimg/anariel-post-11.jpg',         
        image_postitem:"/images/postsimg/anariel-post-11-390x240.jpg",
        image_sidebar: '/images/postsimg/anariel-post-11-255x170.jpg',
        image_widget: '',        
        likes:49,
        link: '/post/enjoy-the-winter-time-in-the-city',
        excerpt:
        "Buying pieces of jewelry can be pretty expensive, even if it’s just costume jewelry. However, crafting handmade jewelry can mean much more...",
        post_text: 
        React.createElement(
            "div", {className: "post-text"},
            React.createElement(
                "span", {className: "main-letter"}, "B"), 
                "uying pieces of jewelry can be pretty expensive, even if it\u2019s just costume jewelry. However, crafting handmade jewelry can mean much more than making nice pieces of jewelry pieces at lower cost; you can also make jewelry that closely matches your personal style and taste. By learning a few basic techniques, you should be able to construct unique styles of jewelry sets, necklaces, bracelets, earrings, and more.",
            React.createElement(
                "div", {className: "post-quote"},
                    React.createElement(
                        "span", {className: "quote-text"}, 
                        "Try making Swarovski crystal earrings. These earrings are fairly simple to make, and only require two crystals for your charms, two jump rings, and two earring findings. You will also need a set of pliers to help open and close the jewelry pieces..")),
            React.createElement(
                "p", null,
                    React.createElement("strong", null, "1. Buy a jewelry making kit."), 
                    " Jewelry making kits provide you with basic supplies and tools that allow you to customize different jewelry pieces and make them all your own. Most kits come with some basic instructions with different jewelry ideas, but you can use your imagination to create whatever kind of jewelry you want."),
            React.createElement(
                "ul", null, 
                    React.createElement(
                        "li", null, "There are many variations of jewelry making kits depending on what specific kind of jewelry you want to make."),
                    React.createElement(
                        "li", null, "For example, there are beading jewelry kits, stringing jewelry kits, and wire jewelry kits, just to name a few.")),
            React.createElement(
                "p", null, 
                "Common skills and techniques that must be learned include opening jump rings, cutting wire, wire working, stringing, and using jigs and pegs, just to name a few."), 
            React.createElement(
                "p", null,
                    React.createElement("strong", null, "2. Pick out a specific jewelry project you want to try."),
                    " Because there is such a variety in possible pieces of jewelry (necklaces, bracelets, earrings), made out of many possible materials (beads, wire, string, resin, paper, etc.), pick out a material and piece of jewelry you want to work on making. Find inspiration by visiting jewelry stores or looking online at social platforms, visual organizational websites, or jewelry retailer websites."),
            React.createElement(
                "p", null,
                    React.createElement(
                        "img", {
                            className: "alignleft",
                            src: "/images/postsimg/postsitemimg/lisbeth-demo1.jpg",
                            alt: ""
                        })),
            React.createElement(
                "p", null,
                    React.createElement("strong", null, "3. Purchase jewelry making tools."), 
                    " Depending on what kind of jewelry you plan to make, you\u2019ll probably need some basic tools to complete your project. Some basic tools all beginners should consider having include:"),
            React.createElement(
                "ul", null,
                    React.createElement(
                        "li", null, "A variety of pliers \u2013 round nose pliers, chain nose pliers, step jaw pliers, bent closing pliers, and nylon jaw pliers."),
                    React.createElement(
                        "li", null, "A metal ruler that measures both centimeters and inches."),
                    React.createElement(
                        "li", null, "Wire cutters."),
                    React.createElement(
                        "li", null, "Practice wire, to practice bending and shaping your wire before you attempt to bend your more expensive wire for your actual project."),
                    React.createElement(
                        "li", null, 
                        "Pegboards for bending wire.")),
            React.createElement(
                "p", null,
                    React.createElement("strong", null, "4. Purchase handmade jewelry supplies."),
                    " Handmade jewelry can be crafted with many different kinds of supplies, but there are a few basic supplies that are used on most handmade jewelry pieces. Jewelry kits can provide you with general or project specific supplies, but if you plan to start making jewelry without using a kit, you need to purchase some supplies on your own. Consider buying some:"),
            React.createElement(
                "ul", null,
                    React.createElement(
                        "li", null, "Beads."),
                    React.createElement(
                        "li", null, "Jewelry wire in common gauge sizes (18, 20, and 22); 20 gauge is best for beginners."),
                    React.createElement(
                        "li", null, "Headpins for earrings."),
                    React.createElement(
                        "li", null, "Clasps and closures."),
                    React.createElement(
                        "li", null, "Jump rings.")),
            React.createElement(
                "p", null,
                    React.createElement("strong", null, "5. Become familiar with basic jewelry measurements."),
                    " In order to determine how big or small you want your jewelry piece to be, familiarize yourself with some basic jewelry measurements. There are common, standard sizes for necklaces, and bracelets (depending on if the jewelry is for men or women), and how long you want the piece to hang."),
            React.createElement(
                "ul", null,
                    React.createElement(
                        "li", null,"For example, different necklace styles are certain lengths. Chokers are about 14 \u2013 16 inches in length, princes\u2019 style necklaces are about 17 \u2013 19 inches in length and rope necklaces are about 34 inches in length and longer."),
                    React.createElement(
                        "li", null, "Necklaces that fall just below the collar bone tend to measure about 17 inches for women and about 20 inches for men. Common bracelet lengths measure about 7 inches for women, and between 8 \u2013 11 inches for men.")),
            React.createElement(
                "p", null,
                    React.createElement("strong", null, "6. Learn some basic jewelry making skills and techniques."), 
                    " In order to begin the process of making your own jewelry piece, you must learn some basic skills and techniques in order to successfully complete your project. Common skills and techniques that must be learned include opening jump rings, cutting wire, wire working, stringing, and using jigs and pegs, just to name a few."),
            React.createElement(
                "ul", null,
                    React.createElement(
                        "li", null, "To learn these different techniques you can read jewelry making books, search for tutorials, and take jewelry-making workshops."),
                    React.createElement(
                        "li", null, "Search online for instructions on how to make the specific earrings, bracelet, ring, or other kinds of jewelry you want to try making.")),
            React.createElement(
                "p", null,
                    React.createElement("strong", null, "7. Assemble your required materials."), 
                    " Once you have a chosen jewelry project that you want to make, gather and assemble all of the needed materials. Again, your materials can come from a jewelry making kit, or you can research a style of jewelry, determine the level of difficulty, and then buy the necessary materials yourself."),
            React.createElement(
                "ul", null,
                    React.createElement(
                        "li", null, "For example, in order to start making charm earrings, you first have to select the charms you want to use. Charms can be found online, at craft stores, or jewelry stores. Then you have to select your earring findings, which are the parts of the earring that fit through your ear piercing."),
                    React.createElement(
                        "li", null, "When you are ready to begin making your jewelry, go over the instructions that you have acquired on how to make the jewelry piece.")),
            React.createElement(
                "p", null,
                    React.createElement("strong", null, "8. Practice the technique before you make the real thing."), 
                    " As mentioned earlier, for wire jewelry, having practice wire is a good idea to practice and conquer a jewelry-making technique before you move on to bending and cutting your more expensive wire. That way, you get the hang of the technique with lots of repetition, so your final product is of high quality."),
            React.createElement(
                "ul", null,
                    React.createElement(
                        "li", null, "No matter what kind of jewelry material you are using, always try to practice the technique first, before using your actual, precious jewelry materials."),
                    React.createElement(
                        "li", null, "Thin, copper wire is always a good choice for practice wire.")),
            React.createElement(
                "p", {className: "post-source"},
                    React.createElement("strong", null, "Source:",
                    React.createElement(
                        "a", {href: ""}, " Wikihow")))),
    },
]

export const getPostsMap = (array) => {
    return array.reduce((accObj,post)=>({
        ...accObj,
        [post.id]:post
    }),{})
}

// console.log(getPostsMap(postsData)[10].posttext)

export default postsData