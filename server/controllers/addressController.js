import Address from "../models/Address.js";


//Add Address : /api/address/add

export const addAddress= async(req,res)=>{
    try {
        const userId=req.userId;
        const addressData=req.body.address
        await Address.create({...addressData, userId});
        return res.json({success: true, message: "Address added Successfully."})
        
    } catch (error) {
        console.log(error.message);
        return res.json({success: false, message: error.message});
    }
}

//Get Address: /api/address/get

export const getAddress= async(req,res)=>{
    try {
        const userId= req.userId;
        const addresses=await Address.find({userId});
        return res.json({success: true, addresses})
        
    } catch (error) {
        console.log(error.message);
        return res.json({success: false, message: error.message});
    }
}