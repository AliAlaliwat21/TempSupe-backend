const ServiceRequest = require('../models/serviceRequest')


const createRequest = async (req, res) => {
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

        await createdRequest.populate('requester')
        await createdRequest.populate('hero')

        res.status(201).json(createdRequest)

    } catch (error) {

        res.status(500).json({
            message: error.message
        })

    }
}


const index = async (req, res) => {
    try {

        const requests = await ServiceRequest.find()
            .populate('hero')
            .populate('requester')

        res.status(200).json(requests)

    } catch (error) {

        res.status(500).json({
            message: error.message
        })

    }
}


const userRequests = async (req, res) => {
    try {

        const requests = await ServiceRequest.find({
            requester: req.user._id
        })
            .populate('hero')
            .populate('requester')

        res.status(200).json(requests)

    } catch (error) {

        res.status(500).json({
            message: error.message
        })

    }
}


const showRequest = async (req, res) => {
    try {

        const singleRequest = await ServiceRequest
            .findById(req.params.requestId)
            .populate('hero')
            .populate('requester')

        if (!singleRequest) {
            return res.status(404).json({
                message: 'Request not found!'
            })
        }

        res.status(200).json(singleRequest)

    } catch (error) {

        res.status(500).json({
            message: error.message
        })

    }
}


const deleteRequest = async (req, res) => {
    try {

        const request = await ServiceRequest.findById(
            req.params.requestId
        )

        if (!request) {
            return res.status(404).json({
                message: 'Request not found!'
            })
        }

        if (!request.requester.equals(req.user._id)) {
            return res.status(403).json({
                message: 'Unfortunately, you are NOT authorized to take such action!'
            })
        }

        await ServiceRequest.findByIdAndDelete(
            req.params.requestId
        )

        res.status(200).json({
            message: 'deleted successfully'
        })

    } catch (error) {

        res.status(500).json({
            message: error.message
        })

    }
}


const updateRequest = async (req, res) => {
    try {

        const request = await ServiceRequest.findById(
            req.params.requestId
        )

        if (!request) {
            return res.status(404).json({
                message: 'Request not found!'
            })
        }

        if (!request.requester.equals(req.user._id)) {
            return res.status(403).json({
                message: 'Unfortunately, you are NOT authorized to take such action!'
            })
        }

        const requestData = {
            hero: req.body.hero,
            requestType: req.body.requestType,
            description: req.body.description,
            location: req.body.location,
            requestedDate: req.body.requestedDate,
            status: req.body.status
        }

        const updatedRequest = await ServiceRequest
            .findByIdAndUpdate(
                req.params.requestId,
                requestData,
                { new: true }
            )
            .populate('hero')
            .populate('requester')

        res.status(200).json(updatedRequest)

    } catch (error) {

        res.status(500).json({
            message: error.message
        })

    }
}


module.exports = {
    createRequest,
    index,
    userRequests,
    showRequest,
    deleteRequest,
    updateRequest
}//hello