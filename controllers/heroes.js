const Hero = require('../models/hero')
const ServiceRequest = require('../models/serviceRequest')


const paybackBackground =
  'https://legendary-digital-network-assets.s3.amazonaws.com/wp-content/uploads/2022/07/11141407/Payback-1.jpg'


const heroData = [

  // =====================================================
  // CURRENT THE SEVEN
  // =====================================================

  {
    name: 'Homelander',

    generation: ['current'],

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
      'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHFydGZiaWppdGo5dmRjcGpwZWZkNTgxbW8xZWtuc3BpZW10aXo4ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/eIUpSyzwGp0YhAMTKr/giphy.gif'
  },


  {
    name: 'Queen Maeve',

    generation: ['current'],

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
      'https://media.giphy.com/media/6skWNFodQNufLvNedR/giphy.gif',

    detailMedia:
      'https://media.giphy.com/media/6skWNFodQNufLvNedR/giphy.gif'
  },


  {
    name: 'A-Train',

    generation: ['current'],

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
      'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzh4ZGl0aWZkYmxzeTBoMWp0amZneXNtcnk2N3JrNHZobzhzZjFzbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/OurEZ9nyeJfH5Vc3Gt/giphy.gif'
  },


  {
    name: 'The Deep',

    generation: ['current'],

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
      'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTYxM2xubHNnOXpzYjc5dDF0YTF6d2ZkaXZsZWx5ZWhkeXZlZzJueiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KGZV1LCLScDT8rz11H/giphy.gif'
  },


  {
    name: 'Black Noir',

    // IMPORTANT:
    // Black Noir appears in BOTH groups.
    generation: ['current', 'legacy'],

    biography:
      'A silent and highly trained member of The Seven specializing in stealth and combat.',

    detailedBio:
      'Black Noir is one of Vought’s most secretive and highly trained superheroes. His long career within Vought has placed him alongside multiple generations of the company’s premier superhero teams. Noir specializes in stealth, infiltration, close-quarters combat and completing dangerous missions without attracting unnecessary attention. He possesses enhanced strength and durability alongside extensive combat training, allowing him to remain effective even in highly dangerous environments. His quiet and controlled approach makes him particularly useful for surveillance, security operations and dangerous retrieval missions.',

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
      'https://media.giphy.com/media/HpOzYMoVxeyFZ094sc/giphy.gif'
  },


  {
    name: 'Starlight',

    generation: ['current'],

    biography:
      'A member of The Seven capable of absorbing electricity and producing powerful light-based attacks.',

    detailedBio:
      'Starlight is a powerful member of The Seven whose abilities revolve around absorbing electrical energy and converting it into intense light and energy attacks. She can release powerful bursts of energy, produce extremely bright flashes, and use her abilities alongside her enhanced physical strength and durability. Her combination of offensive and defensive abilities makes her a flexible option for a wide range of situations. Vought commonly uses Starlight for public safety, civilian protection, crowd control, defensive support, and incidents where large groups of people may need to be protected.',

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
      'https://media.giphy.com/media/lGBYh6gumpyVm0af1i/giphy.gif'
  },


  {
    name: 'Translucent',

    generation: ['current'],

    biography:
      'A member of The Seven whose carbon-based skin allows him to become nearly invisible.',

    detailedBio:
      'Translucent is a specialized member of The Seven whose carbon-based skin allows him to bend light around his body and become almost completely invisible. His unusual skin also gives him extremely high durability, allowing him to withstand physical damage while remaining difficult to detect. These abilities make him particularly effective in situations where observation and secrecy are more important than direct confrontation. Vought can use Translucent for surveillance, security monitoring, discreet investigations, information gathering, and missions where approaching an area without being noticed provides an important advantage.',

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
      'https://media1.tenor.com/m/8mkAkl-cxBQAAAAd/the-boys-hughie-campbell.gif',

    detailMedia:
      'https://media1.tenor.com/m/8mkAkl-cxBQAAAAd/the-boys-hughie-campbell.gif'
  },


  // =====================================================
  // PAYBACK / LEGACY GENERATION
  // =====================================================

  {
    name: 'Soldier Boy',

    generation: ['legacy'],

    biography:
      'The legendary former leader of Payback and one of Vought’s most powerful early superheroes.',

    detailedBio:
      'Soldier Boy was the face of an earlier generation of Vought superheroes and served as the leader of Payback. Known for his enormous strength, durability and extensive combat experience, he became one of the company’s most recognizable heroes long before the modern Seven existed. His military image made him a central figure in Vought’s public history, while his physical abilities made him suitable for extremely dangerous combat operations and missions involving powerful threats.',

    powers: [
      'Super Strength',
      'Enhanced Durability',
      'Enhanced Stamina',
      'Combat Training',
      'Energy Discharge'
    ],

    strength:
      'Extremely high physical strength and durability with decades of combat experience.',

    specialty:
      'High-risk combat, military operations and extremely dangerous threats.',

    latestSave:
      'Successfully completed a classified high-risk Vought operation.',

    biggestSave:
      'Led Payback during some of Vought’s most dangerous historical operations.',

    greatestFeat:
      'Became one of the most powerful and recognizable superheroes of his generation.',

    image: '',

    theme: 'soldier-boy',

    backgroundVideo: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZm9yamMybHd5YW15NW5hdzl3N3F2aWk5NHVwNGo2a3JxZGxtbXRjeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/subE77y85Wun2bOHgD/giphy.gif',

    detailMedia: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXNnNTFjbXp0bThjNWR6eGJsc2FvcnI3bWY3bGlzZDJma3BxeDg0byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/q9ldmTuld2Vbifpp4W/giphy.gif'
  },


  {
    name: 'Crimson Countess',

    generation: ['legacy'],

    biography:
      'A powerful former Payback member specializing in destructive energy attacks.',

    detailedBio:
      'Crimson Countess was a prominent member of Payback during Vought’s earlier era. Her ability to generate powerful energy attacks made her valuable during missions requiring long-range offensive support. Alongside the other members of Payback, she became one of the recognizable faces of Vought’s previous generation of superheroes and participated in major public appearances, operations and company productions.',

    powers: [
      'Energy Generation',
      'Energy Blasts',
      'Enhanced Durability'
    ],

    strength:
      'Powerful ranged energy attacks combined with enhanced physical durability.',

    specialty:
      'Long-range attacks, combat support and dangerous threat response.',

    latestSave:
      'Provided energy-based support during a major Payback operation.',

    biggestSave:
      'Assisted Payback during one of the team’s largest historical missions.',

    greatestFeat:
      'Developed powerful energy attacks capable of causing major destruction.',

    image: '',

    theme: 'crimson-countess',

    backgroundVideo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdW757cFRDWsLXxlmPnKgX71vmWHItwn4YS6Hm_HO0wQ&s=10',

    detailMedia: 'https://64.media.tumblr.com/94003ba1277445c5630dfc8f79de3222/6d348dd854802105-1f/s540x810/031e89fdc8f9a7b32f9c266bf037254b42bac568.gif'
  },


  {
    name: 'Gunpowder',

    generation: ['legacy'],

    biography:
      'Payback’s weapons specialist known for exceptional accuracy and combat skill.',

    detailedBio:
      'Gunpowder served as Payback’s firearms and ranged-combat specialist. His exceptional accuracy and weapons training made him particularly useful in situations where precision and controlled ranged support were required. During Payback’s active years, he participated in Vought operations alongside Soldier Boy and the rest of the team and developed a reputation around his ability to use firearms with extraordinary effectiveness.',

    powers: [
      'Enhanced Accuracy',
      'Weapons Expertise',
      'Enhanced Reflexes',
      'Combat Training'
    ],

    strength:
      'Exceptional ranged combat ability and extremely precise weapon control.',

    specialty:
      'Weapons support, ranged combat and precision operations.',

    latestSave:
      'Completed a precision security operation for Vought.',

    biggestSave:
      'Provided ranged support during a major Payback deployment.',

    greatestFeat:
      'Achieved extraordinary accuracy under dangerous combat conditions.',

    image: '',

    theme: 'gunpowder',

    backgroundVideo: 'https://m.media-amazon.com/images/M/MV5BY2VhOGZhOTQtNTAwNC00Y2M1LTk4M2YtNDBhOTRmNDBlZDdjXkEyXkFqcGc@._V1_.jpg',

    detailMedia: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCF3mnZKj1UerWSstkvCkOUZPR59A3RzFl_Oz1GBXqUA&s=10'
  },


  {
    name: 'Mindstorm',

    generation: ['legacy'],

    biography:
      'A psychic member of Payback capable of attacking and manipulating the minds of others.',

    detailedBio:
      'Mindstorm was one of Payback’s most unusual and dangerous members. Rather than relying entirely on physical strength, his abilities allowed him to affect the minds of other people. This made him especially effective during situations where direct physical confrontation was not the best option. His psychic abilities gave Payback access to a form of threat response that few other Vought heroes could provide.',

    powers: [
      'Telepathy',
      'Mental Manipulation',
      'Psychic Attacks',
      'Enhanced Durability'
    ],

    strength:
      'Extremely dangerous psychic abilities capable of disabling opponents without physical contact.',

    specialty:
      'Psychic operations, interrogation support and non-physical threat neutralization.',

    latestSave:
      'Used psychic abilities to stop a dangerous target without direct confrontation.',

    biggestSave:
      'Disabled multiple threats during a major Payback operation.',

    greatestFeat:
      'Demonstrated the ability to overwhelm opponents through psychic attacks.',

    image: '',

    theme: 'mindstorm',

    backgroundVideo: 'https://static0.srcdn.com/wordpress/wp-content/uploads/2022/06/the-boys-mindstorm.jpg?q=50&fit=crop&w=825&dpr=1.5',

    detailMedia: 'https://static0.srcdn.com/wordpress/wp-content/uploads/2022/06/the-boys-mindstorm.jpg?q=50&fit=crop&w=825&dpr=1.5'
  },


  {
    name: 'Swatto',

    generation: ['legacy'],

    biography:
      'An airborne member of Payback capable of flight and rapid aerial movement.',

    detailedBio:
      'Swatto was Payback’s primary aerial specialist. His ability to fly gave the team valuable reconnaissance and mobility support during missions. He could survey areas from above, travel quickly across difficult terrain and assist the rest of Payback from positions inaccessible to ordinary people. His unusual appearance and flight capabilities made him one of the more distinctive members of Vought’s earlier superhero generation.',

    powers: [
      'Flight',
      'Aerial Mobility',
      'Enhanced Durability'
    ],

    strength:
      'Highly mobile in the air with enhanced physical resilience.',

    specialty:
      'Aerial reconnaissance, rapid movement and airborne support.',

    latestSave:
      'Completed aerial reconnaissance for a Vought operation.',

    biggestSave:
      'Provided airborne support during a large Payback deployment.',

    greatestFeat:
      'Operated effectively in combat while maintaining full aerial mobility.',

    image: '',

    theme: 'swatto',

    backgroundVideo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSVDiemF641ExwT5R-UeV1ZaJnRZ5R4c_UP5vS3yNJOpVa9e_sjl0l5DA&s=10',

    detailMedia: 'https://hips.hearstapps.com/hmg-prod/images/screen-shot-2022-06-02-at-3-53-09-pm-1654200595.png'
  },


  {
    name: 'The TNT Twins',

    generation: ['legacy'],

    biography:
      'A pair of former Payback members whose powers become especially dangerous when working together.',

    detailedBio:
      'The TNT Twins were a pair of superheroes who served together as members of Payback. Their abilities were designed around cooperation, making them most effective when operating as a team. Their coordinated attacks gave Payback additional destructive power during large-scale missions and made them a recognizable part of Vought’s earlier superhero lineup.',

    powers: [
      'Energy Projection',
      'Coordinated Attacks',
      'Enhanced Durability',
      'Team-Based Power'
    ],

    strength:
      'Their effectiveness increases significantly when both twins are able to work together.',

    specialty:
      'Coordinated attacks, destructive support and team-based operations.',

    latestSave:
      'Successfully completed a coordinated Vought response operation.',

    biggestSave:
      'Supported Payback during a major high-risk deployment.',

    greatestFeat:
      'Combined their abilities to produce powerful coordinated attacks.',

    image: '',

    theme: 'tnt-twins',

    backgroundVideo: 'https://static0.srcdn.com/wordpress/wp-content/uploads/2022/06/the-boys-tnt-twins.jpg?q=50&fit=crop&w=825&dpr=1.5',

    detailMedia: 'https://static0.srcdn.com/wordpress/wp-content/uploads/2022/06/the-boys-tnt-twins.jpg?q=50&fit=crop&w=825&dpr=1.5'
  }

]


// =====================================================
// INITIALIZE HEROES
// =====================================================
//
// OLD VERSION:
// only added heroes when the entire collection was empty.
//
// NEW VERSION:
// checks each hero individually.
//
// This means your existing Seven stay untouched,
// but Soldier Boy, Crimson Countess etc. get added
// automatically if they do not already exist.
//

const initializeHeroes = async () => {

  try {

    for (const hero of heroData) {

      const existingHero = await Hero.findOne({
        name: hero.name
      })


      if (!existingHero) {

        await Hero.create(hero)

        console.log(`${hero.name} added to DB`)

      }

    }

  } catch (error) {

    console.log(error)

  }

}


// =====================================================
// GET ALL HEROES
// =====================================================
//
// IMPORTANT:
// MongoDB provides _id, reviews etc.
//
// heroData provides:
// generation
// biography
// powers
// theme
// backgroundVideo
// detailMedia
// etc.
//

const index = async (req, res) => {

  try {

    const heroes = await Hero.find()


    const heroDetails = heroes.map((hero) => {

      const staticHero = heroData.find((item) => {
        return item.name === hero.name
      })


      return {
        ...hero.toObject(),
        ...(staticHero || {}),
        _id: hero._id,
        reviews: hero.reviews
      }

    })


    res.status(200).json(heroDetails)

  } catch (error) {

    res.status(500).json({
      error: error.message
    })

  }

}


// =====================================================
// GET SINGLE HERO
// =====================================================

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
      ...(staticHero || {}),
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


// =====================================================
// CREATE REVIEW
// =====================================================

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


    res.status(201).json(
      hero.reviews[hero.reviews.length - 1]
    )

  } catch (error) {

    res.status(500).json({
      error: error.message
    })

  }

}


// =====================================================
// UPDATE REVIEW
// =====================================================

const updateReview = async (req, res) => {

  try {

    const hero = await Hero.findById(req.params.heroId)


    if (!hero) {

      return res.status(404).json({
        message: 'Hero not found'
      })

    }


    const review = hero.reviews.id(
      req.params.reviewId
    )


    if (!review) {

      return res.status(404).json({
        message: 'Review not found'
      })

    }


    if (!review.author.equals(req.user._id)) {

      return res.status(403).json({
        message: 'Unfortunately, you are NOT authorized to take such action!'
      })

    }


    review.content = req.body.content

    review.rating = req.body.rating


    await hero.save()


    res.status(200).json(review)

  } catch (error) {

    res.status(500).json({
      error: error.message
    })

  }

}


// =====================================================
// DELETE REVIEW
// =====================================================

const deleteReview = async (req, res) => {

  try {

    const hero = await Hero.findById(req.params.heroId)


    if (!hero) {

      return res.status(404).json({
        message: 'Hero not found'
      })

    }


    const review = hero.reviews.id(
      req.params.reviewId
    )


    if (!review) {

      return res.status(404).json({
        message: 'Review not found'
      })

    }


    if (!review.author.equals(req.user._id)) {

      return res.status(403).json({
        message: 'You are NOT authorized to do this!!!'
      })

    }


    hero.reviews.pull(review)


    await hero.save()


    res.status(200).json({
      message: 'deleted successfully'
    })

  } catch (error) {

    res.status(500).json({
      error: error.message
    })

  }

}


module.exports = {
  initializeHeroes,
  index,
  show,
  createReview,
  updateReview,
  deleteReview
}