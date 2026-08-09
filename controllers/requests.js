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

        const createdRequest = await ServiceRequest.create(requestData)

        res.status(201).json(createdRequest)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const index = async (req, res)=>{
    try {
        const allRequests = ServiceRequest.find({}).populate('hero').sort({createdAt: 'desc'})

        if (!allRequests) return res.status(404).json({message: error.message})

    } catch (error) {
        res.status(500).json({message: error.message})
    }
    
}

const showRequest = async (req,res)=>{
    try{
        const singleRequest =  await ServiceRequest.findById(req.params.requestId).populate('hero')
        
        if(!singleRequest) return res.status(404).json({message: error.message})
        res.status(200).json(singleRequest)
    } catch(error){
res.status(500).json({message: error.message})
    }
}

const deleteRequest = async(req,res)=>{
    try{
        const deletedRequest = await ServiceRequest.findByIdAndDelete(req.params.requestId) 

        if(!deletedRequest.requester.equals(res.user._id)) return res.status(403).json({message:'You are not authorized to access this'})

            res.status(200).json({message: "deleted successfully"})
    }catch(error){
res.status(500).json({message: error.message})
    }
}
export {createRequest, index, showRequest, deleteRequest}