import santoriniImg from "@/assets/santorini.jpg";
import mykonosImg from "@/assets/mykonos.jpg";
import creteImg from "@/assets/crete.jpg";
import rhodesImg from "@/assets/rhodes.jpg";
import corfuImg from "@/assets/corfu.jpg";
import parosImg from "@/assets/paros.jpg";
import naxosImg from "@/assets/naxos.jpg";

export interface Island {
  id: string;
  name: string;
  image: string;
  shortDescription: string;
  description: string;
  beaches: string[];
  thingsToDo: string[];
  hotels: string[];
  activities: string[];
}

export const islands: Island[] = [
  {
    id: "santorini",
    name: "Santorini",
    image: santoriniImg,
    shortDescription: "Iconic sunsets, white-washed villages, and volcanic beaches.",
    description: "Santorini is the crown jewel of the Cyclades. Famous for its dramatic caldera views, blue-domed churches, and some of the most spectacular sunsets in the world. Explore the charming villages of Oia and Fira, taste exceptional local wines, and relax on unique red and black sand beaches.",
    beaches: ["Red Beach", "Kamari Beach", "Perissa Beach", "Vlychada Beach"],
    thingsToDo: ["Watch the sunset in Oia", "Visit Ancient Akrotiri", "Wine tasting tour", "Caldera boat cruise"],
    hotels: ["Canaves Oia Suites", "Grace Hotel Santorini", "Andronis Luxury Suites", "Mystique Hotel"],
    activities: ["Catamaran sailing", "Scuba diving", "Hiking from Fira to Oia", "Cooking classes"],
  },
  {
    id: "mykonos",
    name: "Mykonos",
    image: mykonosImg,
    shortDescription: "Vibrant nightlife, stunning beaches, and Cycladic charm.",
    description: "Mykonos is the cosmopolitan heart of the Greek islands. Known for its legendary nightlife, pristine beaches, and the iconic windmills of Chora. Wander through narrow marble streets, dine at world-class restaurants, and dance until dawn at beach clubs.",
    beaches: ["Paradise Beach", "Super Paradise Beach", "Elia Beach", "Psarou Beach"],
    thingsToDo: ["Explore Little Venice", "Visit Delos Island", "Windmills of Mykonos", "Paraportiani Church"],
    hotels: ["Cavo Tagoo", "Belvedere Hotel", "Mykonos Grand Hotel", "Santa Marina Resort"],
    activities: ["Beach club hopping", "Water sports", "Day trip to Delos", "Shopping in Chora"],
  },
  {
    id: "crete",
    name: "Crete",
    image: creteImg,
    shortDescription: "Greece's largest island with ancient ruins and stunning gorges.",
    description: "Crete is a world unto itself — the largest Greek island offers everything from ancient Minoan palaces to Europe's longest gorge. Discover the vibrant cities of Heraklion and Chania, taste authentic Cretan cuisine, and explore beaches that rival the Caribbean.",
    beaches: ["Balos Lagoon", "Elafonisi Beach", "Vai Beach", "Preveli Beach"],
    thingsToDo: ["Palace of Knossos", "Samaria Gorge hike", "Old Town of Chania", "Heraklion Archaeological Museum"],
    hotels: ["Blue Palace Resort", "Domes Noruz", "Elounda Beach Hotel", "Abaton Island Resort"],
    activities: ["Gorge hiking", "Olive oil tasting", "Snorkeling", "Archaeological tours"],
  },
  {
    id: "rhodes",
    name: "Rhodes",
    image: rhodesImg,
    shortDescription: "Medieval charm meets beautiful coastline and ancient history.",
    description: "Rhodes blends medieval grandeur with sun-drenched beaches. The UNESCO-listed Old Town is one of the best-preserved medieval cities in Europe. Beyond the walls, discover ancient ruins, lush valleys, and crystal-clear waters along the eastern coast.",
    beaches: ["Tsambika Beach", "Anthony Quinn Bay", "Lindos Beach", "Faliraki Beach"],
    thingsToDo: ["Medieval Old Town", "Acropolis of Lindos", "Valley of the Butterflies", "Palace of the Grand Master"],
    hotels: ["Lindos Blu Hotel", "Rodos Park Suites", "Elysium Resort", "Atrium Palace"],
    activities: ["Medieval town walking tour", "Windsurfing", "Glass-bottom boat tour", "Village hopping"],
  },
  {
    id: "corfu",
    name: "Corfu",
    image: corfuImg,
    shortDescription: "Lush greenery, Venetian architecture, and emerald waters.",
    description: "Corfu is the greenest of the Greek islands, draped in olive groves and cypress trees. Its Venetian, French, and British influences create a unique cultural tapestry visible in Corfu Town's elegant architecture, vibrant piazzas, and refined cuisine.",
    beaches: ["Canal d'Amour", "Paleokastritsa Beach", "Glyfada Beach", "Sidari Beach"],
    thingsToDo: ["Corfu Old Town", "Achilleion Palace", "Mon Repos Estate", "Liston Promenade"],
    hotels: ["Corfu Imperial", "MarBella Corfu", "Domes Miramare", "Grecotel Eva Palace"],
    activities: ["Boat tour to Blue Caves", "Olive oil tasting", "Hiking the Corfu Trail", "Kayaking"],
  },
  {
    id: "paros",
    name: "Paros",
    image: parosImg,
    shortDescription: "Traditional Cycladic beauty with world-class windsurfing.",
    description: "Paros offers the perfect blend of authentic island life and modern amenities. Its charming villages of Naoussa and Parikia feature whitewashed houses, blue-shuttered windows, and bougainvillea-draped alleys. Known for exceptional windsurfing and a thriving culinary scene.",
    beaches: ["Kolymbithres Beach", "Golden Beach", "Santa Maria Beach", "Marcello Beach"],
    thingsToDo: ["Naoussa fishing village", "Panagia Ekatontapiliani", "Paros Park", "Lefkes village walk"],
    hotels: ["Parilio Hotel", "Cosme Paros", "Yria Island Boutique", "Mr & Mrs White Paros"],
    activities: ["Windsurfing", "Island hopping to Antiparos", "Wine tasting", "Cycling tours"],
  },
  {
    id: "naxos",
    name: "Naxos",
    image: naxosImg,
    shortDescription: "The largest Cycladic island with ancient temples and long sandy beaches.",
    description: "Naxos is the largest and most fertile of the Cyclades, offering towering mountains, lush valleys, ancient temples, and some of the longest sandy beaches in Greece. The iconic Portara gateway stands as a timeless sentinel at the harbor entrance.",
    beaches: ["Agios Prokopios", "Plaka Beach", "Agia Anna Beach", "Mikri Vigla"],
    thingsToDo: ["Portara (Temple of Apollo)", "Naxos Old Town (Kastro)", "Temple of Demeter", "Halki village"],
    hotels: ["Naxian Collection", "18 Grapes Hotel", "Nissaki Beach Hotel", "Galaxy Hotel"],
    activities: ["Kitesurfing", "Mountain hiking to Mt. Zeus", "Cheese and wine tasting", "Village exploration"],
  },
];
