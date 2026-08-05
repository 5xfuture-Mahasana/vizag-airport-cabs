import RoutePage from '../components/RoutePage';

export default function JagdalpurPage() {
  return (
    <RoutePage 
      title="Vizag to Jagdalpur Cabs | Best Taxi Service Visakhapatnam"
      description="Book affordable Vizag to Jagdalpur cabs. Professional drivers for safe travel to the heart of Bastar. 24/7 service. Call now for best outstation taxi rates!"
      keywords="Vizag to Jagdalpur Cabs, Taxi from Vizag to Jagdalpur, Visakhapatnam to Jagdalpur Taxi, Bastar Tour Packages, Vizag Airport Cabs"
      heroTitle="Vizag to Jagdalpur Cabs: Explore Bastar"
      heroSubtitle="Discover the tribal heartland and natural wonders of Jagdalpur with Vizag Airport Cabs. Reliable and safe taxi services from Visakhapatnam."
      distance="300 Kilometers"
      travelTime="6 - 7 Hours"
      startingFare="₹6,500/- Onwards"
      contentTitle="Reliable Vizag to Jagdalpur Cabs for Your Journey"
      contentParagraphs={[
        "Jagdalpur, the administrative headquarters of Bastar district in Chhattisgarh, is famous for its rich tribal culture and stunning natural attractions like Chitrakote Falls. The journey from Visakhapatnam to Jagdalpur is approximately 300 kilometers, offering a transition from coastal plains to the lush forests of the Eastern Ghats. Booking <strong>Vizag to Jagdalpur cabs</strong> is the most comfortable way to explore this unique region.",
        "Vizag Airport Cabs offers a variety of vehicles to cater to your travel needs. Our drivers are experienced in long-distance travel and ensure your safety throughout the journey. With transparent pricing and a commitment to quality, we are your best choice for outstation travel to Jagdalpur."
      ]}
      whyChooseItems={[
        "Experienced Long-Distance Drivers",
        "Transparent & Competitive Pricing",
        "Clean & Well-Maintained Fleet",
        "24/7 Customer Support",
        "Flexible Pickup & Drop Points",
        "Safe & Secure Travel"
      ]}
      mustVisitPlaces={[
        { name: "Chitrakote Falls", description: "Often called the 'Niagara Falls of India', it's a breathtaking horseshoe-shaped waterfall on the Indravati River." },
        { name: "Teerathgarh Falls", description: "A stunning multi-layered waterfall located in the Kanger Valley National Park." },
        { name: "Kanger Valley National Park", description: "Home to diverse flora and fauna, and the famous Kutumsar Caves." }
      ]}
      fareTable={[
        { type: "Indica / Swift (Hatchback)", capacity: "4+1 Seats", price: "₹6,500/-" },
        { type: "Swift Dzire / Etios (Sedan)", capacity: "4+1 Seats", price: "₹7,500/-" },
        { type: "Innova / Ertiga (SUV)", capacity: "6+1 Seats", price: "₹10,500/-" },
        { type: "Tempo Traveller", capacity: "12+1 Seats", price: "₹15,500/-" }
      ]}
      faqs={[
        { q: "What is the distance from Vizag to Jagdalpur?", a: "The distance is approximately 300 kilometers, and it usually takes 6 to 7 hours by cab." },
        { q: "What is the best time to visit Jagdalpur?", a: "The best time to visit is from October to March when the weather is pleasant for sightseeing." },
        { q: "Are the roads safe from Vizag to Jagdalpur?", a: "Yes, the roads are generally good, but we recommend traveling during the day for better visibility and safety." }
      ]}
      travelTips={[
        "Carry a good camera to capture the stunning waterfalls.",
        "Respect the local tribal culture and traditions.",
        "Plan your visit to Chitrakote Falls during or after the monsoon for the best views."
      ]}
      routeKey='vizag-to-jagdhalpur'
      heroImageAlt="Vizag to Jagdalpur cab service route image Chitrakote Waterfalls"
    />
  );
}
