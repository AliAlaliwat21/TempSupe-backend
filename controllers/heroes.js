const Hero = require('../models/hero')
const ServiceRequest = require('../models/serviceRequest')

const heroData = [
  {
    name: 'Homelander',

    biography:
      'The leader of The Seven and Vought’s most powerful superhero.',

    powers: [
      'Flight',
      'Super Strength',
      'Heat Vision',
      'Super Hearing',
      'Enhanced Durability'
    ],

    strength:
      'Extremely high strength and durability. Considered the strongest member of The Seven.',

    specialty:
      'Major threats and extremely dangerous situations.',

    latestSave:
      'Successfully responded to a major high-risk incident.',

    biggestSave:
      'Protected a large group of civilians during a major disaster.',

    greatestFeat:
      'Demonstrated overwhelming strength, flight and heat vision capabilities.',

    image: '',

    theme: 'homelander'
  },

  {
    name: 'Queen Maeve',

    biography:
      'A veteran member of The Seven known for her strength, durability and combat experience.',

    powers: [
      'Super Strength',
      'Enhanced Durability',
      'Enhanced Speed',
      'Combat Skill'
    ],

    strength:
      'Very high physical strength and durability.',

    specialty:
      'Physical rescue, protection and high-impact situations.',

    latestSave:
      'Assisted civilians during a dangerous structural incident.',

    biggestSave:
      'Protected multiple civilians from a major physical threat.',

    greatestFeat:
      'Survived and fought through extremely powerful attacks.',

    image: '',

    theme: 'queen-maeve'
  },

  {
    name: 'A-Train',

    biography:
      'The speedster of The Seven and one of the fastest people in the world.',

    powers: [
      'Super Speed',
      'Enhanced Reflexes',
      'Enhanced Agility'
    ],

    strength:
      'Enhanced physical strength combined with extreme speed.',

    specialty:
      'Fast transportation, urgent deliveries and time-sensitive support.',

    latestSave:
      'Completed a time-sensitive support mission within minutes.',

    biggestSave:
      'Used his speed to rapidly respond to multiple locations.',

    greatestFeat:
      'Reached extraordinary speeds far beyond normal human capability.',

    image: '',

    theme: 'a-train'
  },

  {
    name: 'The Deep',

    biography:
      'The aquatic specialist of The Seven with the ability to survive underwater and communicate with marine life.',

    powers: [
      'Underwater Breathing',
      'Aquatic Communication',
      'Enhanced Swimming',
      'Enhanced Strength'
    ],

    strength:
      'Enhanced strength with exceptional underwater capabilities.',

    specialty:
      'Ocean rescue, underwater recovery and water-related support.',

    latestSave:
      'Assisted with an offshore recovery operation.',

    biggestSave:
      'Completed a large-scale underwater search and recovery mission.',

    greatestFeat:
      'Can operate underwater indefinitely and communicate with marine animals.',

    image: '',

    theme: 'the-deep'
  },

  {
    name: 'Black Noir',

    biography:
      'A silent and highly trained member of The Seven specializing in stealth and combat.',

    powers: [
      'Enhanced Strength',
      'Enhanced Durability',
      'Stealth',
      'Combat Skill'
    ],

    strength:
      'High strength, durability and elite close-quarters combat ability.',

    specialty:
      'Stealth operations, security and dangerous retrieval missions.',

    latestSave:
      'Successfully completed a dangerous retrieval operation.',

    biggestSave:
      'Neutralized a major threat without exposing civilians to danger.',

    greatestFeat:
      'Completed highly dangerous missions while surviving extreme injuries.',

    image: '',

    theme: 'black-noir'
  },

  {
    name: 'Starlight',

    biography:
      'A member of The Seven capable of absorbing electricity and producing powerful light-based attacks.',

    powers: [
      'Light Manipulation',
      'Energy Blasts',
      'Enhanced Strength',
      'Enhanced Durability'
    ],

    strength:
      'Enhanced physical strength with powerful energy-based abilities.',

    specialty:
      'Public safety, crowd protection and defensive support.',

    latestSave:
      'Protected civilians during a public safety incident.',

    biggestSave:
      'Used her abilities to defend a large group of civilians.',

    greatestFeat:
      'Can release powerful energy blasts using absorbed electricity.',

    image: '',

    theme: 'starlight'
  },

  {
    name: 'Translucent',

    biography:
      'A member of The Seven whose carbon-based skin allows him to become nearly invisible.',

    powers: [
      'Invisibility',
      'Enhanced Durability',
      'Enhanced Strength'
    ],

    strength:
      'Enhanced strength with extremely durable skin.',

    specialty:
      'Surveillance, discreet operations and security support.',

    latestSave:
      'Completed a surveillance mission without being detected.',

    biggestSave:
      'Used his invisibility to gather information during a dangerous operation.',

    greatestFeat:
      'Can become nearly invisible while maintaining highly durable skin.',

    image: '',

    theme: 'translucent'
  }
]

const initializeHeroes = async()=>{
    try{
        const existingHeroes = await Hero.find()

        if(existingHeroes.length === 0){
            await Hero.insertMany(heroData)
            console.log('Heroes added to DB')
        }
    } catch(error){
        console.log(error)
    }
}

const index = async (req, res) => { 
  try { 
      const heroes = await Hero.find() 
      res.status(200).json(heroes) 
    } catch (error) { 
      res.status(500).json({ error: error.message }) 
    } }

const show = async(req,res)=>{
        try{
            const hero = await Hero.findById(req.params.heroId)

            if(!hero){
                return res.status(404).json({err: 'hero not found'})
            }
            res.status(200).json(hero)
        } catch(error){
            res.status(500).json({error: error.message})
        }
        
  }


const createReview = async (req, res) => {
  try {
    const hero = await Hero.findById(req.params.heroId)

    if (!hero) {
      return res.status(404).json({
        error: 'Hero not found'
      })
    }

    const review = {
      author: req.user._id,
      rating: req.body.rating,
      content: req.body.content
    }

    hero.reviews.push(review)

    await hero.save()

    res.status(201).json(hero.reviews[hero.reviews.length - 1])
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const updateReview = async (req, res)=>{
  try {
      const hero = await Hero.findById(req.params.heroId)
      const review = hero.reviews.id(req.params.reviewId)

      if (!review.author.equals(req.user._id)) return res.status(403).json({message: 'Unfortunately, you are NOT authorized to take such action!'})

      review.content = req.body.content
      review.rating = req.body.rating
      await hero.save()

      res.status(200).json({message: 'Review updated!'})
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const deleteReview = async(req, res)=>{
    try{
        const hero = await Hero.findById(req.params.heroId)
        const review = hero.reviews.id(req.params.reviewId)

    if (!hero) return res.status(404).json({ message: 'Hero not found' })
    
    if (!review) return res.status(404).json({ message: 'Review not found' })
    
    if (!review.author.equals(req.user._id)) return res.status(403).json({message: 'You are NOT authorized to do this!!!'})

        hero.reviews.pull(review)

            await hero.save()
            res.status(200).json({message: 'deleted successfully'})
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}
    

    

    module.exports = {initializeHeroes, index, show, createReview, updateReview, deleteReview}

