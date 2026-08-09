const ServiceRequest = require('../models/serviceRequest')

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

        const createdRequest = await (await (await ServiceRequest.create(requestData)).populate('requester')).populate('hero')

        res.status(201).json(createdRequest)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const index = async (req, res)=>{
    try {
        const allRequests = await ServiceRequest.find({}).populate('hero').sort({createdAt: 'desc'})

        if (!allRequests) return res.status(404).json({message: error.message})

    } catch (error) {
        res.status(500).json({message: error.message})
    }
    
}

const showRequest = async (req, res)=>{
    try{
        const singleRequest =  await ServiceRequest.findById(req.params.requestId).populate('hero')
        
        if(!singleRequest) return res.status(404).json({message: error.message})


        res.status(200).json(singleRequest)

    } catch(error){
res.status(500).json({message: error.message})
    }
}

const deleteRequest = async (req, res)=>{
    try{
        const deletedRequest = await ServiceRequest.findByIdAndDelete(req.params.requestId) 

        if(!deletedRequest.requester.equals(res.user._id)) return res.status(403).json({message: 'Unfortunately, you are NOT authorized to take such action!'})

        res.status(200).json({message: "deleted successfully"})
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

const updateRequest = async (req, res)=>{
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

        const updatedRequest = await ServiceRequest.findByIdAndUpdate(req.body.requestId, requestData, {new:true})

        if (!updatedRequest) return res.status(404).json({message: error.message})

        if (!updatedRequest.requester.equals(req.user._id)) return res.status(403).json({message: 'Unfortunately, you are NOT authorized to take such action!'})

        res.status(202).json(updatedRequest)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


module.exports = {createRequest, index, showRequest, deleteRequest, updateRequest}