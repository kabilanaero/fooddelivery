const hotels = [
    {
        id: 1,
        name: "Aqua Oasis",
        image: "image/h6.jpeg",
        menu: [
            { id: 1, name: "Burger", price: 5, image: "image/burger.jpg" },
            { id: 2, name: "Pizza", price: 8, image: "image/pizza.jpg" },
            { id: 3, name: "Pasta", price: 10, image: "image/pasta.jpg" },
            { id: 4, name: "Steak", price: 15, image: "image/steak.jpg" },
            { id: 5, name: "Soup", price: 6, image: "image/soup.jpg" },
            { id: 6, name: "Sandwich", price: 7, image: "image/sandwich.jpg" },
            { id: 7, name: "Fries", price: 3, image: "image/fries.jpg" },
            { id: 8, name: "Sushi", price: 12, image: "image/sushi.jpg" },
            { id: 9, name: "Ramen", price: 9, image: "image/ramen.jpg" },
            { id: 10, name: "Chicken Wings", price: 8, image: "image/wings.jpg" }
        ]
         
    },
    {
        id: 2,
        name: "Moonlit Cove",
        image: "image/hotel4.jpg",
        menu: [
            { id: 11, name: "Salad", price: 4, image: "image/salad.jpg" },
            { id: 12, name: "Fish & Chips", price: 11, image: "image/fish.jpg" },
            { id: 13, name: "Tacos", price: 7, image: "image/tacos.jpg" },
            { id: 14, name: "Muffin", price: 3, image: "image/muffin.jpg" },
            { id: 15, name: "Pancakes", price: 6, image: "image/pancakes.jpg" },
            { id: 16, name: "Waffles", price: 5, image: "image/waffles.jpg" },
            { id: 17, name: "Ice Cream", price: 4, image: "image/ice.jpg" },
            { id: 18, name: "Cake", price: 8, image: "image/cake.jpg" },
            { id: 19, name: "Coffee", price: 2, image: "image/coffee.jpg" },
            { id: 20, name: "Tea", price: 2, image: "image/tea.jpg" }
        

        ]
    },
    {
        id: 3,
        name: "Hotel C",
        image: "image/hotel3.jpg",
        menu: [
            { id: 21, name: "Grilled Chicken Salad", price: 9, image: "image/grilled salad.jpg" },
            { id: 22, name: "Lasagna", price: 12, image: "image/lasagna.jpg" },
            { id: 23, name: "Quesadilla", price: 8, image: "image/ques.jpg" },
            { id: 24, name: "French Toast", price: 7, image: "image/frenchtoast.jpg" },
            { id: 25, name: "Milkshake", price: 5, image: "image/milkshake.jpg" },
            { id: 26, name: "Nachos", price: 10, image: "image/nacos.jpg" },
            { id: 27, name: "Smoothie", price: 6, image: "image/smoothie.jpg" },
            { id: 28, name: "Cheesecake", price: 9, image: "image/cheesecake.jpg" },
            { id: 29, name: "Hot Dog", price: 4, image: "image/hotdog.jpg" },
            { id: 30, name: "Margarita", price: 11, image: "image/margarita.jpg" }
          
        ]
    },
    {
        id: 4,
        name: "Hotel D",
        image: "image/h3.jpg",
        menu: [
            { id: 31, name: "Caesar Salad", price: 8, image: "image/caesarsalad.jpg" },
            { id: 32, name: "Shrimp Scampi", price: 16, image: "image/shrimp.jpg" },
            { id: 33, name: "Beef Stroganoff", price: 14, image: "image/beef.jpg" },
            { id: 34, name: "Vegetable Stir-Fry", price: 12, image: "image/veg fry.jpg" },
            { id: 35, name: "Tiramisu", price: 9, image: "image/tiramsiu.jpg" },
            { id: 36, name: "prawnfry", price: 7, image: "image/prawnfry.jpg" },
            { id: 37, name: "Garlic Bread", price: 5, image: "image/garlicbread.jpg" },
            { id: 38, name: "Mojito", price: 11, image: "image/mojito.jpg" },
            { id: 39, name: "Mimosa", price: 8, image: "image/mimosa.jpg" },
            { id: 40, name: "Lemonade", price: 3, image: "image/lemonade.jpg" }
        ]
                    
    },
    {
        id: 5,
        name: "Hotel E",
        image: "image/hotel5.jpg",
        menu: [
            { id: 41, name: "Vegetarian Pizza", price: 10, image: "image/veg pizza.jpg" },
            { id: 42, name: "Veggie Burger", price: 8, image: "image/veggieburger.jpg" },
            { id: 43, name: "Veggie Salad", price: 9, image: "image/vegsalad.jpg" },
            { id: 44, name: "Stuffed  Veggie", price: 12, image: "image/stuffedveggie.jpg" },
            { id: 45, name: "Vegetable Curry", price: 11, image: "image/vegcurry.jpg" },
            { id: 46, name: "Caprese Sandwich", price: 7, image: "image/capresesandwich.jpg" },
            { id: 47, name: "Greek Salad", price: 8, image: "image/greeksalad.jpg" },
            { id: 48, name: "Hummus Platter", price: 6, image: "image/hummusplatter.jpg" },
            { id: 49, name: "Falafel Wrap", price: 9, image: "image/falafelwrap.jpg" },
            { id: 50, name: "Mushroom Risotto", price: 13, image: "image/mushroomriso.jpg" }
          
             ]
    },
    
    {
        id: 6,
        name: "Hotel F",
        image: "image/h1.jpg",
        menu: [
            { id: 51, name: "Masala Dosa", price: 7, image: "image/masaladosa.jpg" },
            { id: 52, name: "Idli Sambhar", price: 6, image: "image/idli.jpg" },
            { id: 53, name: "Medu Vada", price: 5, image: "image/meduvada.jpg" },
            { id: 54, name: "Puliyogare", price: 8, image: "image/puliyogare.jpg" },
            { id: 55, name: "Pullav", price: 9, image: "image/pullav.jpg" },
            { id: 56, name: "Rava Upma", price: 6, image: "image/ravaupma.jpg" },
            { id: 57, name: "Pongal", price: 7, image: "image/pongal.jpg" },
            { id: 58, name: "Aloo Paratha", price: 8, image: "image/alooparatha.jpg" },
            { id: 59, name: "Onion Uttapam", price: 7, image: "image/onionuttapam.jpg" },
            { id: 60, name: "Coconut Chutney", price: 3, image: "image/coconutchutney.jpg" }

        ]
    },
    {
        id: 7,
        name: "Hotel G",
        image: "image/h2.jpg",
        menu: [
            { id: 61, name: "Chicken Biriyani", price: 12, image: "image/chickenbriyani.jpg" },
            { id: 62, name: "Mutton Biriyani", price: 14, image: "image/muttonbriyani.jpg" },
            { id: 63, name: "Hyderabadi Biryani", price: 13, image: "image/hydrabadibriyani.jpg" },
            { id: 64, name: "Egg Fried Rice", price: 9, image: "image/eggfriedrice.jpg" },
            { id: 65, name: "Prawn Curry", price: 15, image: "image/prawncurry.jpg" },
            { id: 66, name: "Chapati", price: 2, image: "image/chapati.jpg" },
            { id: 67, name: "Chicken 65", price: 10, image: "image/chicken65.jpg" },
            { id: 68, name: "Fish Fry", price: 11, image: "image/fishfry.jpg" },
            { id: 69, name: "Gobi Manchurian", price: 8, image: "image/gopimanchurian.jpg" },
            { id: 70, name: "Paneer Butter Masala", price: 12, image: "image/panneerbuttermasala.jpg" }
        ]
    },
    {
        id: 8,
        name: "Hotel H",
        image: "image/h5.jpg",
        menu: [
            { id: 71, name: "Veg Thali", price: 10, image: " image/vegthali.jpg" },
            { id: 72, name: "Non-Veg Thali", price: 12, image: "image/nonvegthali.jpg" },
            { id: 73, name: "Rajma Chawal", price: 8, image: "image/rajmachawal.jpg" },
            { id: 74, name: "Chole Bhature", price: 9, image: "image/cholebhature.jpg" },
            { id: 75, name: "Palak Paneer", price: 11, image: "image/palakpaneer.jpg" },
            { id: 76, name: "Chicken Curry", price: 13, image: "image/chickencurry.jpg" },
            { id: 77, name: "Dahi Vada", price: 6, image: "image/dahivada.jpg" },
            { id: 78, name: "Vegetable Pakora", price: 7, image: "image/vegpakora.jpg" },
            { id: 79, name: "Mango Lassi", price: 5, image: "image/mangolassi.jpg" },
            { id: 80, name: "Gulab Jamun", price: 4, image: "image/gulabjamun.jpg" }
        ]
    },
    {
        id: 9,
        name: "Hotel I",
        image: "image/h4.jpg",
        menu: [
            { id: 81, name: "Schezwan Noodles", price: 10, image: "image/schezwan.jpg" },
            { id: 82, name: "Paneer Tikka ", price: 9, image: "image/paneertikka.jpg" },
            { id: 83, name: "Lobster Bisque", price: 15, image: "image/lobsterbisque.jpg" },
            { id: 84, name: "Beef Wellington", price: 20, image: "image/beefwellington.jpg" },
            { id: 85, name: "Creme Brulee", price: 8, image: "image/cremebrule.jpg" },
            { id: 86, name: "Lamb Chops", price: 18, image: "image/lambchop.jpg" },
            { id: 87, name: "Crab Cakes", price: 14, image: "image/crabcakes.jpg" },
            { id: 88, name: "Truffle Risotto", price: 16, image: "image/trufflerisotto.jpg" },
            { id: 89, name: "Chocolate Fondant", price: 12, image: "image/choco.jpg" },
            { id: 90, name: "Tandoori", price: 10, image: "image/tandoori.jpg" }
              ]
    },
    {
        id: 10,
        name: "Hotel J",
        image: "image/h7.jpeg",
        menu: [
            { id: 91, name: "Eggs Benedict", price: 9, image: "image/eggsbenedict.jpg" },
            { id: 92, name: "Avocado Toast", price: 7, image: "image/avocadotoast.jpg" },
            { id: 93, name: "Shakshuka", price: 10, image: "image/shakshuka.jpg" },
            { id: 94, name: "Bagel with Lox", price: 12, image: "image/begel.jpg" },
            { id: 95, name: "Croissant", price: 5, image: "image/croissant.jpg" },
            { id: 96, name: "Frittata", price: 8, image: "image/frittata.jpg" },
            { id: 97, name: "Granola Parfait", price: 6, image: "image/granolaparfait.jpg" },
            { id: 98, name: "Quiche Lorraine", price: 11, image: "image/quichelorraine.jpg" },
            { id: 99, name: "Ice Cream Salad", price: 7, image: "image/icesalad.jpg" },
            { id: 100, name: "Blueberry Pancakes", price: 8, image: "image/blueberrypancakes.jpg" }
        ]
    }

];
    
let cart = [];
