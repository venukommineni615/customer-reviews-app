const review = require('../models/reviews')

exports.getReviews = async function(req, res, next) {

    try {
        
        const reviews = await review.findAll({where: {company:req.params.name}})
        res.status(200).json(reviews)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

exports.addReview = async function(req, res, next) {

try{
    const newReview = await review.create({
        pros:req.body.pros,
        cons:req.body.cons,
        company:req.body.company,
        rating:req.body.rating
    })
    res.status(201).json(newReview)
}catch (error) {
    res.status(500).json({error: error.message})
}
}
