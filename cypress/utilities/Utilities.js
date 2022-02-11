const { phone, vehicle } = require("faker");

class Utilities {
    //password creation criteria
    allowed = {
        uppers: "QWERTYUIOPASDFGHJKLZXCVBNM",
        lowers: "qwertyuiopasdfghjklzxcvbnm",
        numbers: "1234567890",
        symbols: "!@$%&*"
    }

    //countries allowed by the Bussr while signing up the operator
    // countries = ['Philippines', 'Indonesia', 'Singapore', 'Malaysia', 'UAE', 'India'];
    countries = ['Philippines', 'Indonesia'];

    //required for date utilities
    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


    getRandomCharFromString(str) {
        return str.charAt(Math.floor(Math.random() * str.length));
    }

    getCountries() {
        var country = ''
        country = this.countries[Math.floor(Math.random() * this.countries.length)];
        return country;
    }

    generateEmail() {
        var email = '';
        var str = this.allowed.lowers + this.allowed.numbers;
        for (var i = 0; i < 11; i++) {
            email = email + this.getRandomCharFromString(str);
        }
        return email + '@gmail.com'
    }

    generateTravelsName() {
        let travelName='';
        travelName = this.getRandomCharFromString(this.allowed.lowers);
        travelName = travelName + this.getRandomCharFromString(this.allowed.uppers);
        travelName = travelName + this.getRandomCharFromString(this.allowed.lowers);
        travelName = travelName + this.getRandomCharFromString(this.allowed.uppers);

        travelName = travelName + 'Travels';

        return travelName;
    }

    generateVehicleId() {
        var vehicleID=''
        vehicleID = vehicleID + this.getRandomCharFromString(this.allowed.uppers);
        vehicleID = vehicleID + this.getRandomCharFromString(this.allowed.uppers);
        for (var i = 0; i <= 1; i++) {
            vehicleID = vehicleID + this.getRandomCharFromString(this.allowed.numbers);
        }
        vehicleID = vehicleID + this.getRandomCharFromString(this.allowed.uppers);
        for (var i = 0; i <= 3; i++) {
            vehicleID = vehicleID + this.getRandomCharFromString(this.allowed.numbers);
        }
        return vehicleID;
    }

    generateOperatorId() {
        var operatorID=''
        operatorID = operatorID + this.getRandomCharFromString(this.allowed.lowers);
        operatorID = operatorID + this.getRandomCharFromString(this.allowed.lowers);
        for (var i = 0; i <= 3; i++) {
            operatorID = operatorID + this.getRandomCharFromString(this.allowed.numbers);
        }
        return operatorID;
    }

    generateName() {
        var name="";
        for (var i = 0; i < 10; i++) {
            name = name + this.getRandomCharFromString(this.allowed.lowers);
        }
        return name;
    }

    generatePhoneNumber() {
        var phoneNumber="";
        for (var i = 1; i <= 9; i++) {
            phoneNumber = phoneNumber + this.getRandomCharFromString(this.allowed.numbers);
        }
        return "+919" + phoneNumber;
    }

    generatePassword() {
        let pwd="";

        pwd = this.getRandomCharFromString(this.allowed.uppers);
        pwd = pwd + this.getRandomCharFromString(this.allowed.lowers);
        pwd = pwd + this.getRandomCharFromString(this.allowed.numbers);
        pwd = pwd + this.getRandomCharFromString(this.allowed.symbols);

        for (let i = pwd.length; i < 12; i++)
            pwd = pwd + this.getRandomCharFromString(Object.values(this.allowed).join('')); //fill the rest of the pwd with random characters
        return pwd
    }

    getNextMonthDate() {
        date = new Date();
        this.months[date.getNextMonthDate]
    }
}
module.exports = new Utilities();