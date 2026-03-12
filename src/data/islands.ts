import santoriniImg from "@/assets/santorini.jpg";
import mykonosImg from "@/assets/mykonos.jpg";
import creteImg from "@/assets/crete.jpg";
import rhodesImg from "@/assets/rhodes.jpg";
import corfuImg from "@/assets/corfu.jpg";
import parosImg from "@/assets/paros.jpg";
import naxosImg from "@/assets/naxos.jpg";
import zakynthosImg from "@/assets/zakynthos.jpg";
import milosImg from "@/assets/milos.jpg";
import kosImg from "@/assets/kos.jpg";

export interface Hotel {
  name: string;
  description: string;
  rating: number;
  image: string;
}

export interface Restaurant {
  name: string;
  cuisine: string;
  location: string;
  rating: number;
}

export interface WeatherDay {
  day: string;
  temp: number;
  condition: string;
  icon: string;
}

export interface Activity {
  name: string;
  type: string;
  description: string;
}

export interface Island {
  id: string;
  name: string;
  image: string;
  shortDescription: string;
  description: string;
  bestTimeToVisit: string;
  recommendedDuration: string;
  beaches: string[];
  thingsToDo: string[];
  localAttractions: string[];
  travelTips: string[];
  hotels: Hotel[];
  restaurants: Restaurant[];
  activities: Activity[];
  weather: WeatherDay[];
  travelRequirements: {
    passport: string;
    visa: string;
    consulateLink: string;
  };
}

export const islands: Island[] = [
  {
    id: "santorini",
    name: "Santorini",
    image: santoriniImg,
    shortDescription: "Iconic sunsets, white-washed villages, and volcanic beaches.",
    description: "Santorini is the crown jewel of the Cyclades. Famous for its dramatic caldera views, blue-domed churches, and some of the most spectacular sunsets in the world.",
    bestTimeToVisit: "April – October",
    recommendedDuration: "4–5 days",
    beaches: ["Red Beach", "Kamari Beach", "Perissa Beach", "Vlychada Beach"],
    thingsToDo: ["Watch the sunset in Oia", "Visit Ancient Akrotiri", "Wine tasting tour", "Caldera boat cruise"],
    localAttractions: ["Blue-domed churches of Oia", "Akrotiri Archaeological Site", "Fira to Oia Hiking Trail", "Santo Wines Winery"],
    travelTips: ["Book sunset spots early", "Wear comfortable shoes for cobblestones", "Visit in shoulder season for fewer crowds", "Try local Assyrtiko wine"],
    hotels: [
      { name: "Canaves Oia Suites", description: "Luxury suites with infinity pool and caldera views", rating: 4.9, image: "" },
      { name: "Grace Hotel Santorini", description: "Boutique hotel perched on Imerovigli cliffs", rating: 4.8, image: "" },
      { name: "Andronis Luxury Suites", description: "Award-winning luxury with private pools", rating: 4.7, image: "" },
    ],
    restaurants: [
      { name: "Ammoudi Fish Tavern", cuisine: "Seafood", location: "Oia", rating: 4.6 },
      { name: "Metaxy Mas", cuisine: "Traditional Greek", location: "Exo Gonia", rating: 4.8 },
      { name: "Selene", cuisine: "Fine Dining", location: "Fira", rating: 4.7 },
    ],
    activities: [
      { name: "Caldera Sunset Cruise", type: "Boat Tour", description: "Sail around the caldera with dinner and drinks" },
      { name: "Scuba Diving", type: "Water Sport", description: "Explore volcanic underwater formations" },
      { name: "Wine Tasting Tour", type: "Cultural", description: "Visit local wineries and taste Assyrtiko" },
    ],
    weather: [
      { day: "Mon", temp: 28, condition: "Sunny", icon: "☀️" },
      { day: "Tue", temp: 27, condition: "Sunny", icon: "☀️" },
      { day: "Wed", temp: 26, condition: "Partly Cloudy", icon: "⛅" },
      { day: "Thu", temp: 29, condition: "Sunny", icon: "☀️" },
      { day: "Fri", temp: 27, condition: "Sunny", icon: "☀️" },
    ],
    travelRequirements: {
      passport: "Valid passport required (6+ months validity)",
      visa: "Schengen visa for non-EU citizens. EU citizens: ID card sufficient.",
      consulateLink: "https://www.mfa.gr/en/visas/",
    },
  },
  {
    id: "mykonos",
    name: "Mykonos",
    image: mykonosImg,
    shortDescription: "Vibrant nightlife, stunning beaches, and Cycladic charm.",
    description: "Mykonos is the cosmopolitan heart of the Greek islands. Known for its legendary nightlife, pristine beaches, and the iconic windmills of Chora.",
    bestTimeToVisit: "May – September",
    recommendedDuration: "3–4 days",
    beaches: ["Paradise Beach", "Super Paradise Beach", "Elia Beach", "Psarou Beach"],
    thingsToDo: ["Explore Little Venice", "Visit Delos Island", "Windmills of Mykonos", "Paraportiani Church"],
    localAttractions: ["Little Venice waterfront", "Archaeological Museum", "Mykonos Windmills", "Ano Mera village"],
    travelTips: ["Nightlife starts late, after midnight", "Book beach clubs in advance", "Take the Delos ferry early morning", "Rent an ATV for easy island exploration"],
    hotels: [
      { name: "Cavo Tagoo", description: "Ultra-luxury with iconic infinity pool", rating: 4.9, image: "" },
      { name: "Belvedere Hotel", description: "Chic boutique hotel in Mykonos Town", rating: 4.7, image: "" },
      { name: "Santa Marina Resort", description: "Private beach resort with family-friendly amenities", rating: 4.8, image: "" },
    ],
    restaurants: [
      { name: "Scorpios", cuisine: "Mediterranean", location: "Paraga", rating: 4.5 },
      { name: "Kiki's Tavern", cuisine: "Greek Grill", location: "Agios Sostis", rating: 4.8 },
      { name: "Nammos", cuisine: "Mediterranean", location: "Psarou Beach", rating: 4.6 },
    ],
    activities: [
      { name: "Delos Island Day Trip", type: "Cultural", description: "Explore ancient ruins on the sacred island" },
      { name: "Beach Club Hopping", type: "Nightlife", description: "Experience world-famous beach clubs" },
      { name: "Jet Ski Adventure", type: "Water Sport", description: "High-speed tour of the coastline" },
    ],
    weather: [
      { day: "Mon", temp: 27, condition: "Sunny", icon: "☀️" },
      { day: "Tue", temp: 28, condition: "Sunny", icon: "☀️" },
      { day: "Wed", temp: 26, condition: "Windy", icon: "💨" },
      { day: "Thu", temp: 27, condition: "Sunny", icon: "☀️" },
      { day: "Fri", temp: 29, condition: "Sunny", icon: "☀️" },
    ],
    travelRequirements: {
      passport: "Valid passport required (6+ months validity)",
      visa: "Schengen visa for non-EU citizens. EU citizens: ID card sufficient.",
      consulateLink: "https://www.mfa.gr/en/visas/",
    },
  },
  {
    id: "crete",
    name: "Crete",
    image: creteImg,
    shortDescription: "Greece's largest island with ancient ruins and stunning gorges.",
    description: "Crete is a world unto itself — the largest Greek island offers everything from ancient Minoan palaces to Europe's longest gorge.",
    bestTimeToVisit: "April – October",
    recommendedDuration: "7–10 days",
    beaches: ["Balos Lagoon", "Elafonisi Beach", "Vai Beach", "Preveli Beach"],
    thingsToDo: ["Palace of Knossos", "Samaria Gorge hike", "Old Town of Chania", "Heraklion Archaeological Museum"],
    localAttractions: ["Knossos Palace", "Samaria Gorge", "Venetian Harbor of Chania", "Spinalonga Island"],
    travelTips: ["Rent a car to explore properly", "Samaria Gorge requires good fitness", "Try raki and dakos", "Visit Chania and Rethymno old towns"],
    hotels: [
      { name: "Blue Palace Resort", description: "Luxury resort on Elounda Bay with private beach", rating: 4.8, image: "" },
      { name: "Domes Noruz", description: "Adults-only boutique with sea views", rating: 4.7, image: "" },
      { name: "Abaton Island Resort", description: "Stylish retreat on Crete's northeast coast", rating: 4.6, image: "" },
    ],
    restaurants: [
      { name: "Peskesi", cuisine: "Traditional Cretan", location: "Heraklion", rating: 4.8 },
      { name: "Thalassino Ageri", cuisine: "Seafood", location: "Chania", rating: 4.7 },
      { name: "Avli", cuisine: "Cretan Fine Dining", location: "Rethymno", rating: 4.9 },
    ],
    activities: [
      { name: "Samaria Gorge Hike", type: "Adventure", description: "18km hike through Europe's longest gorge" },
      { name: "Olive Oil Tasting", type: "Cultural", description: "Visit traditional olive oil mills" },
      { name: "Snorkeling at Elafonisi", type: "Water Sport", description: "Crystal-clear pink sand beach snorkeling" },
    ],
    weather: [
      { day: "Mon", temp: 30, condition: "Sunny", icon: "☀️" },
      { day: "Tue", temp: 31, condition: "Sunny", icon: "☀️" },
      { day: "Wed", temp: 29, condition: "Partly Cloudy", icon: "⛅" },
      { day: "Thu", temp: 30, condition: "Sunny", icon: "☀️" },
      { day: "Fri", temp: 28, condition: "Sunny", icon: "☀️" },
    ],
    travelRequirements: {
      passport: "Valid passport required (6+ months validity)",
      visa: "Schengen visa for non-EU citizens. EU citizens: ID card sufficient.",
      consulateLink: "https://www.mfa.gr/en/visas/",
    },
  },
  {
    id: "rhodes",
    name: "Rhodes",
    image: rhodesImg,
    shortDescription: "Medieval charm meets beautiful coastline and ancient history.",
    description: "Rhodes blends medieval grandeur with sun-drenched beaches. The UNESCO-listed Old Town is one of the best-preserved medieval cities in Europe.",
    bestTimeToVisit: "May – October",
    recommendedDuration: "4–6 days",
    beaches: ["Tsambika Beach", "Anthony Quinn Bay", "Lindos Beach", "Faliraki Beach"],
    thingsToDo: ["Medieval Old Town", "Acropolis of Lindos", "Valley of the Butterflies", "Palace of the Grand Master"],
    localAttractions: ["Street of the Knights", "Lindos Acropolis", "Mandraki Harbor", "Prasonisi Beach"],
    travelTips: ["Old Town is best explored on foot", "Visit Lindos early to avoid heat", "Try melekouni (local sweet)", "Wind can be strong on west coast"],
    hotels: [
      { name: "Lindos Blu Hotel", description: "Adults-only with stunning Lindos Bay views", rating: 4.8, image: "" },
      { name: "Rodos Park Suites", description: "Elegant hotel near the Old Town", rating: 4.6, image: "" },
      { name: "Elysium Resort", description: "Modern beachfront resort with spa", rating: 4.7, image: "" },
    ],
    restaurants: [
      { name: "Mavrikos", cuisine: "Modern Greek", location: "Lindos", rating: 4.8 },
      { name: "Ta Kardasia", cuisine: "Traditional", location: "Old Town", rating: 4.6 },
      { name: "Kerasma", cuisine: "Fine Dining", location: "Rhodes Town", rating: 4.7 },
    ],
    activities: [
      { name: "Medieval Town Walking Tour", type: "Cultural", description: "Guided tour through UNESCO Old Town" },
      { name: "Windsurfing at Prasonisi", type: "Water Sport", description: "World-class windsurfing at the island's tip" },
      { name: "Glass-Bottom Boat Tour", type: "Boat Tour", description: "See underwater life without getting wet" },
    ],
    weather: [
      { day: "Mon", temp: 29, condition: "Sunny", icon: "☀️" },
      { day: "Tue", temp: 30, condition: "Sunny", icon: "☀️" },
      { day: "Wed", temp: 28, condition: "Partly Cloudy", icon: "⛅" },
      { day: "Thu", temp: 31, condition: "Sunny", icon: "☀️" },
      { day: "Fri", temp: 29, condition: "Sunny", icon: "☀️" },
    ],
    travelRequirements: {
      passport: "Valid passport required (6+ months validity)",
      visa: "Schengen visa for non-EU citizens. EU citizens: ID card sufficient.",
      consulateLink: "https://www.mfa.gr/en/visas/",
    },
  },
  {
    id: "corfu",
    name: "Corfu",
    image: corfuImg,
    shortDescription: "Lush greenery, Venetian architecture, and emerald waters.",
    description: "Corfu is the greenest of the Greek islands, draped in olive groves and cypress trees with Venetian, French, and British cultural influences.",
    bestTimeToVisit: "May – September",
    recommendedDuration: "4–5 days",
    beaches: ["Canal d'Amour", "Paleokastritsa Beach", "Glyfada Beach", "Sidari Beach"],
    thingsToDo: ["Corfu Old Town", "Achilleion Palace", "Mon Repos Estate", "Liston Promenade"],
    localAttractions: ["Old Fortress", "Vlacherna Monastery", "Pontikonisi Island", "Angelokastro Castle"],
    travelTips: ["Try pastitsada and sofrito", "Visit the north coast for best beaches", "Explore by boat for hidden coves", "Old Town is a UNESCO World Heritage Site"],
    hotels: [
      { name: "Corfu Imperial", description: "Grecotel luxury resort on private peninsula", rating: 4.7, image: "" },
      { name: "MarBella Corfu", description: "Beach hotel with all-inclusive options", rating: 4.6, image: "" },
      { name: "Domes Miramare", description: "Boutique luxury on Moraitika coast", rating: 4.8, image: "" },
    ],
    restaurants: [
      { name: "Etrusco", cuisine: "Fine Dining", location: "Kato Korakiana", rating: 4.9 },
      { name: "Rex", cuisine: "Traditional Corfiot", location: "Corfu Town", rating: 4.5 },
      { name: "Taverna Agni", cuisine: "Seafood", location: "Agni Bay", rating: 4.7 },
    ],
    activities: [
      { name: "Blue Caves Boat Tour", type: "Boat Tour", description: "Explore stunning sea caves along the coast" },
      { name: "Olive Oil Tasting", type: "Cultural", description: "Visit centuries-old olive groves" },
      { name: "Kayaking Adventure", type: "Water Sport", description: "Paddle along emerald coastlines" },
    ],
    weather: [
      { day: "Mon", temp: 26, condition: "Sunny", icon: "☀️" },
      { day: "Tue", temp: 27, condition: "Partly Cloudy", icon: "⛅" },
      { day: "Wed", temp: 25, condition: "Sunny", icon: "☀️" },
      { day: "Thu", temp: 28, condition: "Sunny", icon: "☀️" },
      { day: "Fri", temp: 26, condition: "Sunny", icon: "☀️" },
    ],
    travelRequirements: {
      passport: "Valid passport required (6+ months validity)",
      visa: "Schengen visa for non-EU citizens. EU citizens: ID card sufficient.",
      consulateLink: "https://www.mfa.gr/en/visas/",
    },
  },
  {
    id: "paros",
    name: "Paros",
    image: parosImg,
    shortDescription: "Traditional Cycladic beauty with world-class windsurfing.",
    description: "Paros offers the perfect blend of authentic island life and modern amenities with charming villages and exceptional windsurfing.",
    bestTimeToVisit: "May – October",
    recommendedDuration: "3–5 days",
    beaches: ["Kolymbithres Beach", "Golden Beach", "Santa Maria Beach", "Marcello Beach"],
    thingsToDo: ["Naoussa fishing village", "Panagia Ekatontapiliani", "Paros Park", "Lefkes village walk"],
    localAttractions: ["Naoussa Old Harbor", "Parikia Frankish Castle", "Butterfly Valley", "Ancient Marble Quarries"],
    travelTips: ["Golden Beach is best for windsurfing", "Naoussa has the best nightlife", "Visit Antiparos for a day trip", "Try local gouna (sun-dried fish)"],
    hotels: [
      { name: "Parilio Hotel", description: "Minimalist luxury with Cycladic design", rating: 4.8, image: "" },
      { name: "Cosme Paros", description: "Contemporary boutique near Naoussa", rating: 4.7, image: "" },
      { name: "Mr & Mrs White Paros", description: "Stylish hotel with pool and sea views", rating: 4.6, image: "" },
    ],
    restaurants: [
      { name: "Mario's", cuisine: "Italian-Greek", location: "Naoussa", rating: 4.6 },
      { name: "Siparos", cuisine: "Mediterranean", location: "Naoussa", rating: 4.7 },
      { name: "Levantis", cuisine: "Asian-Greek Fusion", location: "Parikia", rating: 4.5 },
    ],
    activities: [
      { name: "Windsurfing at Golden Beach", type: "Water Sport", description: "World-class windsurfing conditions" },
      { name: "Antiparos Day Trip", type: "Island Hopping", description: "Visit the charming neighboring island" },
      { name: "Cycling Tour", type: "Adventure", description: "Explore villages and coastline by bike" },
    ],
    weather: [
      { day: "Mon", temp: 27, condition: "Sunny", icon: "☀️" },
      { day: "Tue", temp: 26, condition: "Windy", icon: "💨" },
      { day: "Wed", temp: 28, condition: "Sunny", icon: "☀️" },
      { day: "Thu", temp: 27, condition: "Sunny", icon: "☀️" },
      { day: "Fri", temp: 26, condition: "Partly Cloudy", icon: "⛅" },
    ],
    travelRequirements: {
      passport: "Valid passport required (6+ months validity)",
      visa: "Schengen visa for non-EU citizens. EU citizens: ID card sufficient.",
      consulateLink: "https://www.mfa.gr/en/visas/",
    },
  },
  {
    id: "naxos",
    name: "Naxos",
    image: naxosImg,
    shortDescription: "The largest Cycladic island with ancient temples and long sandy beaches.",
    description: "Naxos is the largest and most fertile of the Cyclades, offering towering mountains, lush valleys, ancient temples, and some of the longest sandy beaches in Greece.",
    bestTimeToVisit: "May – October",
    recommendedDuration: "4–6 days",
    beaches: ["Agios Prokopios", "Plaka Beach", "Agia Anna Beach", "Mikri Vigla"],
    thingsToDo: ["Portara (Temple of Apollo)", "Naxos Old Town (Kastro)", "Temple of Demeter", "Halki village"],
    localAttractions: ["Portara Gateway", "Venetian Kastro", "Apiranthos Mountain Village", "Kouros Statues"],
    travelTips: ["Rent a car to explore mountain villages", "Plaka Beach is one of the best in Greece", "Try Naxos cheese and potatoes", "Mt Zeus hike offers panoramic views"],
    hotels: [
      { name: "Naxian Collection", description: "Luxury villas with traditional Cycladic charm", rating: 4.8, image: "" },
      { name: "18 Grapes Hotel", description: "Boutique hotel near Agios Prokopios beach", rating: 4.6, image: "" },
      { name: "Nissaki Beach Hotel", description: "Beachfront hotel on Agios Georgios", rating: 4.5, image: "" },
    ],
    restaurants: [
      { name: "To Elliniko", cuisine: "Traditional Greek", location: "Naxos Town", rating: 4.7 },
      { name: "Basilico", cuisine: "Italian-Greek", location: "Naxos Town", rating: 4.5 },
      { name: "Axiotissa", cuisine: "Greek Taverna", location: "Kastraki", rating: 4.8 },
    ],
    activities: [
      { name: "Kitesurfing at Mikri Vigla", type: "Water Sport", description: "Top kitesurfing spot in the Cyclades" },
      { name: "Mt Zeus Hiking", type: "Adventure", description: "Hike to the highest peak in the Cyclades" },
      { name: "Village Exploration", type: "Cultural", description: "Discover marble-paved mountain villages" },
    ],
    weather: [
      { day: "Mon", temp: 27, condition: "Sunny", icon: "☀️" },
      { day: "Tue", temp: 28, condition: "Sunny", icon: "☀️" },
      { day: "Wed", temp: 26, condition: "Windy", icon: "💨" },
      { day: "Thu", temp: 27, condition: "Sunny", icon: "☀️" },
      { day: "Fri", temp: 28, condition: "Sunny", icon: "☀️" },
    ],
    travelRequirements: {
      passport: "Valid passport required (6+ months validity)",
      visa: "Schengen visa for non-EU citizens. EU citizens: ID card sufficient.",
      consulateLink: "https://www.mfa.gr/en/visas/",
    },
  },
  {
    id: "zakynthos",
    name: "Zakynthos",
    image: zakynthosImg,
    shortDescription: "Home to the famous Shipwreck Beach and stunning blue caves.",
    description: "Zakynthos (Zante) captivates with its dramatic cliffs, the world-famous Navagio Beach, and crystal-clear waters perfect for snorkeling with sea turtles.",
    bestTimeToVisit: "May – October",
    recommendedDuration: "4–5 days",
    beaches: ["Navagio (Shipwreck) Beach", "Gerakas Beach", "Porto Limnionas", "Laganas Beach"],
    thingsToDo: ["Visit Navagio Beach by boat", "Blue Caves tour", "Turtle spotting at Laganas", "Explore Zakynthos Town"],
    localAttractions: ["Navagio Beach viewpoint", "Blue Caves", "Bochali Hill", "Keri Caves"],
    travelTips: ["Navagio is only accessible by boat", "Visit turtle nesting sites respectfully", "The west coast has the best views", "Try mandolato (local nougat)"],
    hotels: [
      { name: "Porto Zante Villas", description: "Ultra-luxury beachfront villas", rating: 4.9, image: "" },
      { name: "Olea All Suite Hotel", description: "Adults-only boutique retreat", rating: 4.8, image: "" },
      { name: "Lesante Blu", description: "Exclusive beach resort with infinity pool", rating: 4.7, image: "" },
    ],
    restaurants: [
      { name: "Lofos Restaurant", cuisine: "Greek-Mediterranean", location: "Bochali", rating: 4.7 },
      { name: "Nobelos Bio Restaurant", cuisine: "Organic Greek", location: "Agios Nikolaos", rating: 4.8 },
      { name: "Keri Lighthouse Taverna", cuisine: "Traditional", location: "Keri", rating: 4.5 },
    ],
    activities: [
      { name: "Navagio Beach Boat Tour", type: "Boat Tour", description: "Visit the iconic Shipwreck Beach" },
      { name: "Blue Caves Snorkeling", type: "Water Sport", description: "Swim in iridescent blue cave waters" },
      { name: "Turtle Watching Cruise", type: "Wildlife", description: "Spot loggerhead sea turtles in their habitat" },
    ],
    weather: [
      { day: "Mon", temp: 28, condition: "Sunny", icon: "☀️" },
      { day: "Tue", temp: 29, condition: "Sunny", icon: "☀️" },
      { day: "Wed", temp: 27, condition: "Partly Cloudy", icon: "⛅" },
      { day: "Thu", temp: 30, condition: "Sunny", icon: "☀️" },
      { day: "Fri", temp: 28, condition: "Sunny", icon: "☀️" },
    ],
    travelRequirements: {
      passport: "Valid passport required (6+ months validity)",
      visa: "Schengen visa for non-EU citizens. EU citizens: ID card sufficient.",
      consulateLink: "https://www.mfa.gr/en/visas/",
    },
  },
  {
    id: "milos",
    name: "Milos",
    image: milosImg,
    shortDescription: "Volcanic landscapes, colorful fishing villages, and 70+ beaches.",
    description: "Milos is a volcanic island famous for its lunar landscapes, over 70 unique beaches, and the colorful fishing village of Klima. Home of the Venus de Milo statue.",
    bestTimeToVisit: "May – September",
    recommendedDuration: "3–4 days",
    beaches: ["Sarakiniko Beach", "Firiplaka Beach", "Tsigrado Beach", "Kleftiko Beach"],
    thingsToDo: ["Visit Sarakiniko's moon landscape", "Explore Klima fishing village", "Boat trip to Kleftiko", "Catacombs of Milos"],
    localAttractions: ["Sarakiniko Beach", "Klima Village", "Plaka Castle", "Milos Mining Museum"],
    travelTips: ["Book boat tours to Kleftiko in advance", "Sarakiniko is best at sunrise", "Rent a car or ATV", "Many beaches require hiking to reach"],
    hotels: [
      { name: "Milos Breeze", description: "Boutique hotel with panoramic sea views", rating: 4.7, image: "" },
      { name: "Skinopi Lodge", description: "Exclusive eco-lodge with minimal design", rating: 4.8, image: "" },
      { name: "Artemis Seaside Resort", description: "Family-friendly beachside resort", rating: 4.5, image: "" },
    ],
    restaurants: [
      { name: "O Hamos", cuisine: "Traditional Greek", location: "Adamas", rating: 4.8 },
      { name: "Medusa", cuisine: "Seafood", location: "Mandrakia", rating: 4.6 },
      { name: "Enalion", cuisine: "Mediterranean", location: "Adamas", rating: 4.5 },
    ],
    activities: [
      { name: "Kleftiko Boat Trip", type: "Boat Tour", description: "Sail to sea caves and pirate coves" },
      { name: "Kayaking to Sea Caves", type: "Water Sport", description: "Paddle through volcanic rock formations" },
      { name: "Sunset at Plaka", type: "Cultural", description: "Watch sunset from the hilltop castle" },
    ],
    weather: [
      { day: "Mon", temp: 27, condition: "Sunny", icon: "☀️" },
      { day: "Tue", temp: 28, condition: "Sunny", icon: "☀️" },
      { day: "Wed", temp: 26, condition: "Windy", icon: "💨" },
      { day: "Thu", temp: 27, condition: "Sunny", icon: "☀️" },
      { day: "Fri", temp: 28, condition: "Sunny", icon: "☀️" },
    ],
    travelRequirements: {
      passport: "Valid passport required (6+ months validity)",
      visa: "Schengen visa for non-EU citizens. EU citizens: ID card sufficient.",
      consulateLink: "https://www.mfa.gr/en/visas/",
    },
  },
  {
    id: "kos",
    name: "Kos",
    image: kosImg,
    shortDescription: "Birthplace of Hippocrates with ancient ruins and turquoise bays.",
    description: "Kos combines ancient history with beautiful beaches and a laid-back atmosphere. The birthplace of Hippocrates offers archaeological wonders alongside vibrant nightlife.",
    bestTimeToVisit: "May – October",
    recommendedDuration: "3–5 days",
    beaches: ["Paradise Beach", "Therma Beach", "Tigaki Beach", "Kefalos Beach"],
    thingsToDo: ["Asklepion archaeological site", "Tree of Hippocrates", "Castle of the Knights", "Bike around the island"],
    localAttractions: ["Asklepion Ruins", "Hippocrates Plane Tree", "Neratzia Castle", "Roman Odeon"],
    travelTips: ["Kos is very bike-friendly", "Visit Therma Beach for natural hot springs", "Day trip to Nisyros volcano", "The island is great for budget travelers"],
    hotels: [
      { name: "IKOS Aria", description: "All-inclusive luxury beachfront resort", rating: 4.9, image: "" },
      { name: "Michelangelo Resort", description: "Family resort with waterpark and spa", rating: 4.6, image: "" },
      { name: "Diamond Deluxe Hotel", description: "Adults-only boutique with private beach", rating: 4.7, image: "" },
    ],
    restaurants: [
      { name: "Ampeli", cuisine: "Modern Greek", location: "Kos Town", rating: 4.7 },
      { name: "Tam Tam", cuisine: "Beach Bar & Grill", location: "Tigaki", rating: 4.5 },
      { name: "Petrino", cuisine: "Traditional Greek", location: "Kos Town", rating: 4.6 },
    ],
    activities: [
      { name: "Nisyros Volcano Day Trip", type: "Adventure", description: "Visit an active volcanic island" },
      { name: "Cycling Tour", type: "Adventure", description: "Explore the flat island by bike" },
      { name: "Hot Springs at Therma", type: "Wellness", description: "Bathe in natural volcanic hot springs" },
    ],
    weather: [
      { day: "Mon", temp: 29, condition: "Sunny", icon: "☀️" },
      { day: "Tue", temp: 30, condition: "Sunny", icon: "☀️" },
      { day: "Wed", temp: 28, condition: "Partly Cloudy", icon: "⛅" },
      { day: "Thu", temp: 31, condition: "Sunny", icon: "☀️" },
      { day: "Fri", temp: 29, condition: "Sunny", icon: "☀️" },
    ],
    travelRequirements: {
      passport: "Valid passport required (6+ months validity)",
      visa: "Schengen visa for non-EU citizens. EU citizens: ID card sufficient.",
      consulateLink: "https://www.mfa.gr/en/visas/",
    },
  },
];
