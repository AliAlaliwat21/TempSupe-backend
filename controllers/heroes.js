const Hero = require('../models/hero')
const ServiceRequest = require('../models/serviceRequest')


const heroData = [
  {
    name: 'Homelander',

    biography:
      'The leader of The Seven and Vought’s most powerful superhero.',

    detailedBio:
      'Homelander is the leader of The Seven and the most powerful superhero under Vought International. He possesses an overwhelming combination of abilities including flight, superhuman strength, extreme durability, enhanced hearing, enhanced vision, and powerful heat vision. His speed and mobility allow him to respond to incidents across large distances in a very short amount of time. Because of the scale of his abilities, Vought generally reserves Homelander for major threats, large-scale disasters, extremely dangerous situations, and incidents where other heroes may not be strong enough to handle the situation alone. His presence is often treated as Vought’s highest level of response.',

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

    theme: 'homelander',

    backgroundVideo:
  'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXhyZzRuZDhhZ24xN2JqaGprcGNxZTJzeXNqOHF1YmFnMTY2NmE0bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/M4hVSYsq6KULTTe7dr/giphy.gif',

   detailMedia:
  'https://media.giphy.com/media/IZ0IshI0uKhQgXuCVx/giphy.gif',
  },

  {
    name: 'Queen Maeve',

    biography:
      'A veteran member of The Seven known for her strength, durability and combat experience.',

    detailedBio:
      'Queen Maeve is one of the most experienced members of The Seven and is known for her exceptional physical strength, durability, speed, and combat ability. She is capable of surviving extreme impacts, overpowering dangerous opponents, and protecting civilians in situations where ordinary rescue teams would struggle to operate safely. Her years of experience make her particularly effective in high-pressure environments where quick decisions and physical intervention are necessary. Vought commonly assigns Maeve to structural emergencies, protection missions, dangerous rescues, and incidents requiring someone capable of directly confronting physical threats while keeping civilians safe.',

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

    theme: 'queen-maeve',

    backgroundVideo:
  'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGp1ZTZmeDh5dXRhNHo0NDQyZGd1bjAyeWNhNGgyM2xwYmFueGt4byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SsORH77uPTO1xDp74f/giphy.gif',

detailMedia:
  'https://media.giphy.com/media/6skWNFodQNufLvNedR/giphy.gif',
  },

  {
    name: 'A-Train',

    biography:
      'The speedster of The Seven and one of the fastest people in the world.',

    detailedBio:
      'A-Train is The Seven’s primary speed-based superhero and is capable of moving at extraordinary speeds far beyond normal human limits. His enhanced reflexes and agility allow him to react almost instantly while travelling at high speed, making him extremely useful for missions where response time is the most important factor. A-Train can cover large distances within seconds, quickly reach remote locations, transport important items, and assist in searches where speed provides a major advantage. Vought commonly assigns him to urgent deliveries, transportation support, rapid-response missions, missing-person searches, and other time-sensitive situations that do not necessarily require the overwhelming strength of another member of The Seven.',

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

    theme: 'a-train',

    backgroundVideo:
  'https://media.giphy.com/media/KLpIxuNBytsGDEcXHH/giphy.gif',

detailMedia:
  'https://media.giphy.com/media/KLpIxuNBytsGDEcXHH/giphy.gif',
  },

  {
    name: 'The Deep',

    biography:
      'The aquatic specialist of The Seven with the ability to survive underwater and communicate with marine life.',

    detailedBio:
      'The Deep is Vought’s specialist for aquatic and marine-related missions. His abilities allow him to breathe underwater indefinitely, swim at enhanced speeds, survive extreme underwater conditions, and communicate directly with marine life. These abilities give him access to environments that most other members of The Seven cannot easily operate in. He is especially effective in underwater search and recovery missions, stranded vessel situations, missing-person searches at sea, ocean inspections, and incidents involving marine animals. When a service request involves deep water, offshore locations, or underwater access, The Deep is usually considered one of Vought’s most suitable choices for the mission.',

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

    theme: 'the-deep',

    backgroundVideo:
  'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTB1NGZkNGI4c2VwdTRxZmp0enF6N3F0a2xwbXo4eDM4bTl2bDBuYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WUwdqYmGaLhP1TVhrL/giphy.gif',

detailMedia:
  'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTYxM2xubHNnOXpzYjc5dDF0YTF6d2ZkaXZsZWx5ZWhkeXZlZzJueiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KGZV1LCLScDT8rz11H/giphy.gif',
  },

  {
    name: 'Black Noir',

    biography:
      'A silent and highly trained member of The Seven specializing in stealth and combat.',

    detailedBio:
      'Black Noir is one of The Seven’s most secretive and highly trained members. Unlike heroes who rely primarily on large-scale displays of power, Noir specializes in stealth, infiltration, close-quarters combat, and completing dangerous missions without attracting unnecessary attention. He possesses enhanced strength and durability alongside extensive combat training, allowing him to remain effective even in highly dangerous environments. His quiet and controlled approach makes him particularly useful for surveillance, security operations, dangerous retrieval missions, and situations where discretion is important. Vought often assigns Black Noir to missions that require someone capable of handling serious threats while maintaining a low profile.',

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

    theme: 'black-noir',

    backgroundVideo:
  'https://media.giphy.com/media/HpOzYMoVxeyFZ094sc/giphy.gif',

detailMedia:
  'https://media.giphy.com/media/HpOzYMoVxeyFZ094sc/giphy.gif',
    

  },

  {
    name: 'Starlight',

    biography:
      'A member of The Seven capable of absorbing electricity and producing powerful light-based attacks.',

    detailedBio:
      'Starlight is a powerful member of The Seven whose abilities revolve around absorbing electrical energy and converting it into intense light and energy attacks. She can release powerful bursts of energy, produce extremely bright flashes, and use her abilities alongside her enhanced physical strength and durability. Her combination of offensive and defensive abilities makes her a flexible option for a wide range of situations. Vought commonly uses Starlight for public safety, civilian protection, crowd control, defensive support, and incidents where large groups of people may need to be protected. Her abilities also make her especially useful in environments with access to electrical power that she can use to strengthen her attacks.',

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

    theme: 'starlight',

    backgroundVideo:
  'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWo3eTBmdWZod2Z4NWE3cm96ZXVlNmF0MXo3eW5kOXo5aHMycXk0aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SsORH77uPTO1xDp74f/giphy.gif',

detailMedia:
  'https://media.giphy.com/media/lGBYh6gumpyVm0af1i/giphy.gif',
  },

  {
    name: 'Translucent',

    biography:
      'A member of The Seven whose carbon-based skin allows him to become nearly invisible.',

    detailedBio:
      'Translucent is a specialized member of The Seven whose carbon-based skin allows him to bend light around his body and become almost completely invisible. His unusual skin also gives him extremely high durability, allowing him to withstand physical damage while remaining difficult to detect. These abilities make him particularly effective in situations where observation and secrecy are more important than direct confrontation. Vought can use Translucent for surveillance, security monitoring, discreet investigations, information gathering, and missions where approaching an area without being noticed provides an important advantage. His combination of invisibility and durability makes him one of The Seven’s strongest options for covert support and intelligence-related operations.',

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

    theme: 'translucent',

    backgroundVideo:
  'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGI4enZwOTcwYWN4ajdlOG9ud3FjbTlkZTFvZHpxNzIxNHJzdnZrYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JRrsVhXZYx6g4MVbJx/giphy.gif',

detailMedia:
  'https://media1.tenor.com/m/8mkAkl-cxBQAAAAd/the-boys-hughie-campbell.gif',
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

const show = async (req, res) => {
    try {

        const hero = await Hero.findById(req.params.heroId)

        if (!hero) {
            return res.status(404).json({
                error: 'Hero not found'
            })
        }


        const staticHero = heroData.find((item) => {
            return item.name === hero.name
        })


        const heroDetails = {
            ...hero.toObject(),
            ...staticHero,
            _id: hero._id,
            reviews: hero.reviews
        }


        res.status(200).json(heroDetails)

    } catch (error) {

        res.status(500).json({
            error: error.message
        })

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

