const express = require("express");
const router = express.Router();
const Booking = require("../models/bookingModel")

const Car = require("../models/carModel")
/* const stripe= require('stripe')('sk_test_51KJaH1SBYEO4mMHRhRegvehflwvLW5IWlkkZrvv2NYBUb2puqDV3YEkMkrzt0w0qYoD98SLosCb6Rpr0lV8OqqnE00VxpTlHeP') */
router.post("/bookcar", async(req, res) => {

    req.body.transactionId = '123454'
    
    try{

       

        

        
        const newbooking = new Booking(req.body)
        await newbooking.save()
        const car = await Car.findOne({ _id : req.body.car })
        
        car.bookedTimeSlots.push(req.body.bookedTimeSlots)
        await car.save()
        res.send('Your Booking was Successful')

        
    } catch (error) {
        return res.status(400).json(error);
    }

});

router.get("/getallbookings", async(req, res) => {
    try{
        const bookings = await Booking.find().populate('car')
        res.send(bookings)
    } catch (error) {
        return res.status(400).json(error);
    }
});

module.exports = router