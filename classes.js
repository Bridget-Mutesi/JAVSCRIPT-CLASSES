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

//  Create a Question class with the following properties:
//  ● text(string): The text of the question.
//  ● options(array): An array containing the multiple-choice options.
//  ● correctAnswer(string): The correct answer to the question.
//  The Question class should also have a method called checkAnswer that takes a
//  user's answer as a parameter and returns true if the answer is correct and false
//  otherwise.

class Question {
    constructor(text, options, correctAnswer) {
      this.text = text;
      this.options = options;
      this.correctAnswer = correctAnswer;
    }
  
    checkAnswer(userAnswer) {
      return userAnswer === this.correctAnswer;
    }
  }
 const qtn1 = new Question(
    "What is the capital of Uganda?",
    ["Nairobi", "paris", "Lagos", "Madrid"],
    "Kampala"
  );
  
  const qtn2 = new Question(
    "How many days are their in a week?",
    ["7days","3days","5days","10days"],
    
  );
  console.log(qtn1.checkAnswer("Kampala")); // true
  console.log(qtn1.checkAnswer("Nairobi")); // false

  console.log(qtn2.checkAnswer("7days")); // true
  console.log(qtn2.checkAnswer("10days")); // false


