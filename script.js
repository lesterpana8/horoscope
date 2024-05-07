const randomNumber = num => {
    // Returns a random number between 0 and the given number. 
    return Math.floor(Math.random() * num);
}

// zodiac sign object
const zodiacSign = {
    Aries: 'Your zodiac sign is Aries', 
    Taurus: 'Your zodiac sign is Taurus', 
    Gemini: 'Your zodiac sign is Gemini', 
    Cancer: 'Your zodiac sign is Cancer', 
    Leo: 'Your zodiac sign is Leo', 
    Virgo: 'Your zodiac sign is Virgo', 
    Libra: 'Your zodiac sign is Libra', 
    Scorpio: 'Your zodiac sign is Scorpio',
    Sagittarius: 'Your zodiac sign is Sagittarius',
    Capricorn: 'Your zodiac sign is Capricorn',
    Aquarius: 'Your zodiac sign is Aquarius',
    Pisces: 'Your zodiac sign is Pisces'
};

// horoscope object
const horoscopes = {
    // fortune output array
    fortuneOutput: [
        "Career Advancement - An opportunity for career growth is approaching. Be ready to step up and take on new responsibilities.",
        "Romantic Renewal - Your relationship is about to enter a phase of renewed passion. Rekindle the spark with a thoughtful gesture or surprise outing.",
        "Financial Stability - Financial challenges are settling down. Use this time to create a budget and start saving for the future.",
        "Health Improvement - Pay attention to your health. Small changes in diet and exercise can lead to significant benefits.",
        "Travel Opportunities - A chance to travel is on the horizon. Whether it's a weekend getaway or an international adventure, embrace the experience.",
        "Family Bonds - Strengthen your family connections by spending quality time with loved ones. A family gathering could bring you joy and comfort.",
        "Creative Inspiration - Your creativity is at an all-time high. Use this energy to start a new project or revisit an old hobby.",
        "Community Involvement - Engage with your community through volunteering or participating in local events. It's a great way to build new connections.",
        "Learning and Growth - Consider taking a course or attending a workshop. Learning something new can be enriching and fulfilling.",
        "Emotional Healing - Allow yourself time to heal from past emotional wounds. It's okay to let go of what no longer serves you.",
        "Friendship Connections - Reconnect with old friends or make new ones. Friendships bring support and happiness into your life.",
        "Home Improvement - Make changes to your living space to create a more comfortable and inviting environment.",
        "Career Collaboration - Collaborate with colleagues on a new project. Teamwork could lead to unexpected success.",
        "Romantic Exploration - If you're single, a new romantic interest might be just around the corner. Be open to meeting new people.",
        "Financial Windfall - An unexpected financial gain could be coming your way. Use it wisely to secure your future.",
        "Health and Well-being - Focus on holistic health practices like meditation or yoga. They can help you find balance and inner peace.",
        "Travel with Purpose - Plan a trip that involves learning or cultural exploration. It will be a rewarding experience.",
        "Personal Fulfillment - Engage in activities that bring you joy and fulfillment. It's important to nurture your passions.",
        "Family Reconnection - Reconnect with distant relatives or resolve family conflicts. Family ties are invaluable.",
        "Self-Reflection - Take time for self-reflection and introspection. It can lead to personal growth and a deeper understanding of yourself."
    ],
    // Color Array
    color: [
        'Crimson', 'Sapphire Blue', 'Goldenrod', 'Coral Pink', 'Olive Drab', 'Lavender', 'Slate Gray', 'Midnight Blue', 'Vermilion', 'Sea Green', 'Periwinkle', 'Saffron Yellow', 'Burnt Orange', 'Turquoise', 'Magenta', 'Indigo', 'Teal', 'Blush Pink', 'Chocolate', 'Emerald Green'
    ],
    // Lucky Charm array
    luckyCharm: [
        "Four-Leaf Clover - Considered a classic symbol of good luck, each leaf represents faith, hope, love, and luck.",
        "Horseshoe - Often hung above doorways for good luck and protection, with the open end facing up to catch good fortune.",
        "Rabbit's Foot - Traditionally associated with good luck, especially in Western cultures.",
        "Ladybug - A symbol of good luck, particularly in love and relationships.",
        "Lucky Bamboo - In Feng Shui, it's believed to bring good fortune and harmony.",
        "Dreamcatcher - A Native American charm that is said to protect from bad dreams and bring positive energy.",
        "Elephant with Upward Trunk - In many cultures, elephants with their trunks raised are considered a sign of good luck and strength.",
        "Acorn - Known as a symbol of strength and potential, it’s also believed to bring good fortune.",
        "Nazarlık (Evil Eye) - A blue eye-shaped charm believed to ward off the evil eye and protect from harm.",
        "Maneki-neko (Beckoning Cat) - A popular Japanese charm thought to bring good luck and prosperity.",
        "Jade Charm - In many Asian cultures, jade is considered a symbol of purity, wisdom, and good fortune.",
        "Anchor - Often associated with stability and hope, anchors are considered lucky in nautical traditions.",
        "Coins - Especially old coins or coins from specific countries, believed to bring wealth and good fortune.",
        "St. Christopher Medal - A Christian charm believed to protect travelers.",
        "Wishing Well Token - Coins or tokens thrown into wishing wells, believed to make wishes come true.",
        "Key - Represents the opening of doors and new opportunities, often considered a symbol of good luck.",
        "Phoenix - A mythical bird symbolizing rebirth and renewal, often seen as a lucky charm.",
        "Crystals - Certain crystals, like amethyst or quartz, are thought to bring luck and positive energy.",
        "Turtle - Considered a symbol of longevity and good fortune in many cultures.",
        "Scarabs - In ancient Egyptian culture, scarabs were believed to bring good luck and protect against evil."
    ]
};

// store horoscope data
let dailyHoroscope = [];

// get the zodiac sign function
const getZodiacSign = (month, date) => {
    if(month === 'January' && date >= 21 || month === 'February' && date <= 19){
        dailyHoroscope.push(zodiacSign.Aquarius);
    } else if(month === 'February' && date >= 20 || month === 'March' && date <= 20){
        dailyHoroscope.push(zodiacSign.Pisces);
    } else if(month === 'March' && date >= 21 || month === 'April' && date <= 20){
        dailyHoroscope.push(zodiacSign.Aries);
    } else if(month === 'April' && date >= 21 || month === 'May' && date <= 21){
        dailyHoroscope.push(zodiacSign.Taurus);
    } else if(month === 'May' && date >= 22 || month === 'June' && date <= 21){
        dailyHoroscope.push(zodiacSign.Gemini);
    } else if(month === 'June' && date >= 22 || month === 'July' && date <= 23){
        dailyHoroscope.push(zodiacSign.Cancer);
    } else if(month === 'July' && date >= 24 || month === 'August' && date <= 23){
        dailyHoroscope.push(zodiacSign.Leo);
    } else if(month === 'August' && date >= 24 || month === 'September' && date <= 23){
        dailyHoroscope.push(zodiacSign.Virgo);
    } else if(month === 'September' && date >= 24 || month === 'October' && date <= 23){
        dailyHoroscope.push(zodiacSign.Libra);
    } else if(month === 'October' && date >= 24 || month === 'November' && date <= 22){
        dailyHoroscope.push(zodiacSign.Scorpio);
    } else if(month === 'November' && date >= 23 || month === 'December' && date <= 21){
        dailyHoroscope.push(zodiacSign.Sagittarius);
    } else if(month === 'December' && date >= 22 || month === 'January' && date <= 20) {
        dailyHoroscope.push(zodiacSign.Capricorn);
    }
}

// Enter your BirthMonth and Day
getZodiacSign('July', 5);

// Iterate object random
for(let horoscope in horoscopes){
    let rand = randomNumber(horoscopes[horoscope].length);

    switch(horoscope){
        case 'fortuneOutput':
            dailyHoroscope.push(`Your horoscope for Today is: ${horoscopes[horoscope][rand]}`);
            break;
        case 'color':
            dailyHoroscope.push(`Your Lucky Color for Today is: ${horoscopes[horoscope][rand]}`);
            break;
        case 'luckyCharm':
            dailyHoroscope.push(`Your Lucky Charm for Today is: ${horoscopes[horoscope][rand]}`);
            break;
        default:
            dailyHoroscope.push('There is not enough info');
    }
}

// Join all the values in arrays
let todaysHoroscope = dailyHoroscope.join('\n');

// Log output
console.log(todaysHoroscope);