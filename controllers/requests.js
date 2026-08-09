const serviceRequest = require('../models/serviceRequest')

const createRequest = async (req, res)=>{
    try {
        const requestData = {
            requester: req.user._id,
            hero: req.body.hero,
            requestType: req.body.requestType,
            description: req.body.description,
            location: req.body.location,
            requestedDate: req.body.requestedDate,
            status: req.body.status

        } 

        const createdRequest = await serviceRequest.create(requestData)

        res.status(201).json(createdRequest)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const index = async (req, res)=>{
    try {
        const allRequests = serviceRequest.find({}).populate('hero').sort({createdAt: 'desc'})

        if (!allRequests) return res.status(404).json({message: error.message})

    } catch (error) {
        res.status(500).json({message: error.message})
    }
    
}

export {createRequest, index}