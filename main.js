console.log("Hotel Booking System - Taso");
const room = "404";
const floor = 4;
const isAvailable = true;
const price = 150.00;
console.log(room);
console.log(floor);
console.log(isAvailable);
console.log(price);
function getRoomInfo(room = "Sea View", floor = 5, isAvailable = true, price = 180) {
    return `ოთახი: ${room}, სართული: ${floor}, თავისუფალია: ${isAvailable}, ფასი ღამეში: ${price} ლარი`;
}
console.log(getRoomInfo());
function getRoomCategory(price) {
    if (price < 100) {
        return "Economy";
    }
    else if (price < 200) {
        return "Standard";
    }
    else {
        return "Luxury";
    }
}
console.log(getRoomCategory(90));
console.log(getRoomCategory(150));
console.log(getRoomCategory(250));
let cities = ["Tbilisi", "Batumi", "Kutaisi", "Rustavi", "Zugdidi"];
for (let i = 0; i < cities.length; i++) {
    console.log(`City ${i + 1}: ${cities[i]}`);
}
// 2.5
let ratings = [7, 8, 9, 10];
let sum = 0;
for (let i = 0; i < ratings.length; i++) {
    if (ratings[i]) {
        sum += ratings[i] ?? 0;
    }
}
console.log(`Average of ratings: ${sum / ratings.length}`);
const hotel = {
    name: "Grand Hotel",
    city: "Tbilisi",
    country: "Georgia",
    foundedYear: 1950,
    website: "https://www.grandhotel.ge"
};
const room1 = {
    id: 1,
    name: "Deluxe Room",
    type: "Deluxe",
    capacity: 2,
    price: 200
};
let rooms = [
    {
        id: 2,
        name: "Sea View",
        type: "Standard",
        capacity: 2,
        price: 180
    },
    {
        id: 2,
        name: "Deluxe Room",
        type: "Deluxe",
        capacity: 2,
        price: 200,
    },
    {
        id: 3,
        name: "Presidential Suite",
        type: "Suite",
        capacity: 4,
        price: 500,
    },
];
rooms.forEach((room) => {
    console.log(`${room.name} - ${room.price} ლარი`);
});
// 4.1
class Guest {
    firstName;
    lastName;
    email;
    age;
    constructor(firstName, lastName, email, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
    }
    getProfile() {
        return `Guest: ${this.firstName} ${this.lastName}, Email: ${this.email}, Age: ${this.age}`;
    }
}
const guest1 = new Guest("Taso", "Mtavrishvili", "Mtvarishvilitasso@itvet.ge", 30);
console.log(guest1.firstName);
console.log(guest1.lastName);
console.log(guest1.email);
const guest2 = new Guest("გიორგი", "ბერიძე,", "giorgi@mail.com", 25);
// 4.3
class VIPGuest extends Guest {
    bookedRooms;
    constructor(firstName, lastName, email, age, bookedRooms) {
        super(firstName, lastName, email, age);
        this.bookedRooms = bookedRooms;
    }
    getBookedRooms() {
        return this.bookedRooms;
    }
}
console.log(guest1.getProfile());
console.log(guest2.getProfile());
const vipGuest = new VIPGuest("eka", "mamulashvili", "eka.mamulashvili@gmail.com", 40, ["Room 101", "Room 102"]);
console.log(vipGuest.getProfile());
console.log(vipGuest.getBookedRooms());
export {};
//# sourceMappingURL=main.js.map