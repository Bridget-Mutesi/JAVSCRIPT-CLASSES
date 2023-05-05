//car class function
class Car{
    constructor(make,model,year,isAvailable,){
        this.make = make;
        this.model = model;
        this.isAvailable = isAvailable;
    }
    toggleAvailability(){
        this.isAvailable = !this.isAvailable;
        
    }
}
let carA = new Car("MarkX","zio",2020,true);
console.log(carA.isAvailable);
let carB = new Car("Toyota","Accord",2021,false);
console.log(carB.isAvailable);

carA.toggleAvailability(Car);
carB.toggleAvailability();

//Create a Rental class 
 class Rental{
     constructor(car,renterName,rentalStartDate,rentalEndDate){
        this.car = car;
        this.renterName = renterName;
        this.rentalStartDate = rentalStartDate;
        this.rentalEndDate = rentalEndDate;
     }
     calculateRentaDuration(){
         const start = this.rentalStartDate.getTime();
         const end = this.rentalEndDate.getTime();
         const take = end - start;
         return Math.ceil(take/(1000 * 3600 * 24));
     }
 }
 let car1 = new Car("MarkX","zio",2020,true);
 let rental1 = new Rental(Car,"Bridgette",new Date("2023-03-1"),new Date("2023-3-10"));

 console.log(rental1.calculateRentaDuration()); // the number of days btn the rental start date and the rental end date


// // Create an instance of the Car class or function constructor for a car in the
// // inventory. Then, create an instance of the Rental class or function constructor for
// // a rental involving the car you created. Finally, calculate the rental duration using
// // the calculateRentalDuration method.
 let car = new Car("MarkX","zio",2020,true);
 let rental = new Rental(Car,"Bridgette",new Date("2023-03-1"),new Date("2023-3-10"));
 let rentalDuration = rental.calculateRentaDuration();
 console.log(`Rental duration: ${rentalDuration} days(s)`);