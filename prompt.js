// Arrays of sample prompts for each generator
const BodyPartPrompts = [
    "Shoulder",
    "Head",
    "knee",
    "Chest",
    "Hips"
    // Add more prompts as needed
];

const ShapePrompts = [
    "Circles",
    "Rectangles",
    "Triangles",
    "Alphabets",
    "Numbers"
    // Add more prompts as needed
];

const LevelsPrompts = [
    "Ground",
    "Standing",
    "Bent Knees",
    "High On Toes"
    // Add more prompts as needed
];

function generatePrompt(containerId, prompts) {
    // Get a random prompt from the array
    const randomIndex = Math.floor(Math.random() * prompts.length);
    const randomPrompt = prompts[randomIndex];

    // Display the random prompt in the HTML
    const promptContainer = document.getElementById(containerId);

    // Clear previous content
    promptContainer.innerHTML = '';

    // Update with the new prompt
    const promptElement = document.createElement('div');
    promptElement.innerHTML = '<p><strong>Your Random Prompt:</strong></p>' + '<p>' + randomPrompt + '</p>';
    promptContainer.appendChild(promptElement);
}

// Arrays of sample prompts for each generator
const CharacterPrompts = [
    "Superhero",
    "Cowboy",
    "Musician",
    "Teenage Kid",
    "Old man",
    "Karate Kid",
    "King",
    "Drunkard",
    "Detective",
    "Space Explorer",
    "Vampire",
    "Witch",
    "Pirate",
    "Scientist",
    "Princess",
    "Robot",
    "Time Traveler",
    "Alien",
    "Ninja",
    "Mermaid",
    "Bounty Hunter",
    "Ghost",
    "Wizard",
    "Elf",
    "Zombie",
    "Samurai",
    "Pilot",
    "Chef",
    "Cyborg",
    "Artificial Intelligence",
    "Historical Figure",
    "Genie",
    "Caveman",
    "Fairy",
    "Warrior",
    "Jester",
    "Werewolf",
    "Sorcerer",
    "Space Pirate",
    "Monster Hunter",
    "Inventor",
    "Exiled Prince/Princess",
    "Criminal Mastermind",
    "Talking Animal",
    "Bard",
    "Jungle Explorer",
    "Undercover Agent",
    "Firefighter",
    "Circus Performer"
        // Add more prompts as needed
    ];

    const EmotionPrompts = [
    "Happy",
    "Sad",
    "Angry",
    "Surprised",
    "Loved",
    "Disgusted",
    "Calm",
    "Excited",
    "Hopeful",
    "Fearful",
    "Confused",
    "Amused",
    "Satisfied",
    "Lonely",
    "Proud",
    "Bored",
    "Relaxed",
    "Content",
    "Anxious",
    "Curious",
        // Add more prompts as needed
    ];

    const LocationPrompts = [
    "Library",
    "Park",
    "Mountains",
    "Shopping Mall",
    "Hospital",
    "Cinema",
    "Restaurant",
    "Amusement Park",
    "Airport",
    "Farm",
    "Lake",
    "Museum",
    "Street Market",
    "Gym",
    "Zoo",
    "City Square",
    "Playground",
    "Campground",
    "University Campus",
    "Bookstore",
    "Art Gallery",
    "Skyscraper",
    "Bridge",
    "Subway Station",
    "Historical Landmark",
    "Gas Station",
    "Stadium",
    "Cafeteria",
    "Music Concert",
    "Theater",
    "Beach Resort",
    "Space Station",
    "Countryside",
    "High School",
    "Shopping Center",
    "Farmers' Market",
    "Mountain Lodge",
    "City Park",
    "Coffee Plantation",
    "Harbor",
    "Pet Store",
    "Ice Cream Shop",
    "Tech Startup Office",
    "School Bus",
    "Mountain Peak",
        // Add more prompts as needed
    ];

    const ActionPrompts = [
    "Reading",
    "Running",
    "Singing",
    "Dancing",
    "Painting",
    "Hiking",
    "Swimming",
    "Biking",
    "Writing",
    "Drawing",
    "Meditating",
    "Photographing",
    "Coding",
    "Listening to Music",
    "Gardening",
    "Exploring",
    "Skiing",
    "Traveling",
    "Volunteering",
    "Skydiving",
    "Surfing",
    "Fishing",
    "Shopping",
    "Camping",
    "Cycling",
    "Skiing",
    "Rock Climbing",
    "Attending a Concert",
    "Playing Chess",
    "Doing Yoga",
    "Solving Puzzles",
    "Watching a Movie",
    "Ice Skating",
    "Karate",
    "Sailing",
    "Cooking a New Recipe",
    "Running a Marathon",
    "Playing Video Games",
    "Building a Model",
    "Scuba Diving",
    "Attending a Workshop",
    "Crafting",
    "Horseback Riding",
    "Archery",
    "Trying a New Sport",
    "Joining a Book Club",
    "Learning a Musical Instrument",
        // Add more prompts as needed
    ];
