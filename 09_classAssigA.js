console.log(`=======================Step 1=======================`);
class Vehicle {
    constructor(make, model, year, color, mileage) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.color = color;
      this.mileage = mileage;
    }
  
    logDetails() {
      console.log(`Vehicle Details: ${this.year} ${this.color} ${this.make} ${this.model}, Mileage: ${this.mileage} miles`);
    }
  }
  
  // Creating 5 objects of Vehicle class and adding to arrayOfVehicles
  const arrayOfVehicles = [
    new Vehicle('Toyota', 'Camry', 2022, 'Silver', 15000),
    new Vehicle('Honda', 'Civic', 2021, 'Blue', 18000),
    new Vehicle('Ford', 'Escape', 2023, 'Red', 12000),
    new Vehicle('Chevrolet', 'Malibu', 2020, 'Black', 20000),
    new Vehicle('Nissan', 'Altima', 2022, 'White', 16000)
  ];
  
  // Traversing and logging details of each vehicle
  arrayOfVehicles.forEach((vehicle, index) => {
    console.log(`Vehicle ${index + 1}:`);
    vehicle.logDetails();
  });
  
  console.log(`=========================Step 2=========================`);
  class College {
    constructor(name, location, establishedYear, studentCount) {
      this.name = name;
      this.location = location;
      this.establishedYear = establishedYear;
      this.studentCount = studentCount;
    }
  
    display() {
      console.log(`College Details: ${this.name}, Location: ${this.location}, Established Year: ${this.establishedYear}, Students: ${this.studentCount}`);
    }
  }
  
  // Creating 4 objects of College class and invoking display() method
  const arrayOfColleges = [
    new College('Sweri College', 'Gopalpur', 2000, 5000),
    new College('Fabtech College', 'Sangola', 1995, 7000),
    new College('SKN College', 'Korti', 2010, 6000),
    new College('KEC College', 'Shelve', 1980, 8000)
  ];
  
  arrayOfColleges.forEach((college, index) => {
    console.log(`College ${index + 1} Details:`);
    college.display();
  });
  
  console.log(`=====================Step 3====================`);
  function traverseObject(obj) {
    for (const key in obj) {
      console.log(`${key}: ${obj[key]}`);
    }
  }
  
  // 3.1 Calling traverseObject function for each College object
  arrayOfColleges.forEach((college, index) => {
    console.log(`Traversing College ${index + 1} object:`);
    traverseObject(college);
  });