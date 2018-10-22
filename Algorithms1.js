//Bianca Gandolofo's algorithm class on Frontend Masters


    //In this exercise, we were supposed to create an object and then add some methods and see how it works out.
    //This example was done copying a lot from the website.
    function Building(type, floors)
    {
        this.what = "building";
        this.floors = floors
        this.type = type
    }

    Building.prototype.countFloors = function()
    {
        console.log("There are "+this.floors+" floors in this building")
    }

    Building.prototype.showType = function()
    {
        console.log("This " +this.what+" is primarily a: "+this.type)
    }

    var myHouse = new Building("Rambler", 1)
    var mikesHouse = new Building("Cape Cod", 2)
    var waMu = new Building("Skyscraper", 23)

    console.log("myHouse: "+myHouse)
    myHouse.countFloors()
    myHouse.showType()

    console.log("The code has successfully created 'waMu' which is an "+typeof waMu)
    waMu.showType()


    //This example is the one I am creating my self.
    //Basically I am creating a Vehicle class and then making several methods which can apply across all instances.

    function Vehicle(wheels, color, doors, mpg)
    {
        this.mpg = mpg
        this.wheels = wheels
        this.color = color
        this.doors = doors
        this.odometer = 0;
        this.distance = 0;
    }

    Vehicle.prototype.moveForward = function(miles)
    {
        this.odometer =+ miles
        this.distance =+ miles
    }
    Vehicle.prototype.moveBackward = function(miles)
    {
        //Even though the vehicle is moving backwards, the odometer never goes backwards.
        this.distance += miles
        this.odometer += miles
    }
    Vehicle.prototype.showDetails = function()
    {
        console.log("This car's details are as follows: \n\t\tColor: "+this.color+"\n\t\tDoors: "+this.doors+"\n\t\tMPG: "+this.mpg)
    }
    Vehicle.prototype.showOdometer = function()
    {
        console.log("Current odometer reading: "+this.odometer)
    }

    var mySubbie = new Vehicle(4, "purple", 4, 24)
    var prius = new Vehicle(4, "Siver", 4, 63)
    var myBike = new Vehicle(2,"Black", 0, "infinite")

    mySubbie.showDetails()
    prius.showDetails()
    prius.showOdometer()
    prius.moveForward(234)
    prius.showOdometer()
    myBike.showDetails()
    mySubbie.showOdometer()
    mySubbie.moveForward(200)
    mySubbie.moveBackward(30)
    mySubbie.showOdometer()
