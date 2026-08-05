import RoutePage from '../components/RoutePage';

export default function BhadrachalamPage() {
  return (
    <RoutePage 
      title="Vizag to Bhadrachalam Cabs | Best Taxi Service Visakhapatnam"
      description="Book affordable Vizag to Bhadrachalam cabs. Professional drivers for safe travel to the temple town. 24/7 service. Call now for best outstation taxi rates!"
      keywords="Vizag to Bhadrachalam Cabs, Taxi from Vizag to Bhadrachalam, Visakhapatnam to Bhadrachalam Taxi, Bhadrachalam Temple Tour, Vizag Airport Cabs"
      heroTitle="Vizag to Bhadrachalam Cabs: Spiritual Journey"
      heroSubtitle="Experience a comfortable and divine journey to the temple town of Bhadrachalam with Vizag Airport Cabs. Reliable and safe taxi services."
      distance="430 Kilometers"
      travelTime="8 - 9 Hours"
      startingFare="₹8,500/- Onwards"
      contentTitle="Your Trusted Partner for Vizag to Bhadrachalam Cabs"
      contentParagraphs={[
        "Bhadrachalam, home to the famous Sri Sita Ramachandra Swamy Temple, is a significant spiritual destination. The journey from Visakhapatnam to Bhadrachalam covers approximately 430 kilometers, taking you through the scenic landscapes of Andhra Pradesh and Telangana. Booking <strong>Vizag to Bhadrachalam cabs</strong> ensures a stress-free pilgrimage, allowing you to focus on your spiritual journey while we handle the road.",
        "At Vizag Airport Cabs, we provide a range of well-maintained vehicles to suit your needs, whether you're traveling solo or with family. Our experienced drivers are familiar with the route, ensuring a safe and timely arrival. We offer transparent pricing and 24/7 support to make your trip as smooth as possible."
      ]}
      whyChooseItems={[
        "Professional & Courteous Drivers",
        "Transparent & Competitive Pricing",
        "Clean & Well-Maintained Fleet",
        "24/7 Customer Support",
        "Flexible Pickup & Drop Points",
        "Safe & Secure Travel"
      ]}
      mustVisitPlaces={[
        { name: "Sri Sita Ramachandra Swamy Temple", description: "The main attraction, a beautiful temple dedicated to Lord Rama, situated on the banks of the Godavari River." },
        { name: "Parnasala", description: "A historical site believed to be the place where Lord Rama lived during his exile." },
        { name: "Godavari River", description: "Take a holy dip in the sacred river or enjoy a peaceful boat ride." }
      ]}
      fareTable={[
        { type: "Indica / Swift (Hatchback)", capacity: "4+1 Seats", price: "₹8,500/-" },
        { type: "Swift Dzire / Etios (Sedan)", capacity: "4+1 Seats", price: "₹9,500/-" },
        { type: "Innova / Ertiga (SUV)", capacity: "6+1 Seats", price: "₹12,500/-" },
        { type: "Tempo Traveller", capacity: "12+1 Seats", price: "₹18,500/-" }
      ]}
      faqs={[
        { q: "What is the distance from Vizag to Bhadrachalam?", a: "The distance is approximately 430 kilometers, and it usually takes 8 to 9 hours by cab." },
        { q: "Is it possible to visit Bhadrachalam in one day from Vizag?", a: "While possible, it's quite exhausting. We recommend a 2-day trip to comfortably visit the temple and nearby sites." },
        { q: "Are there any tolls on the way to Bhadrachalam?", a: "Yes, there are several toll plazas on the route. Toll charges are usually extra and paid as per actuals." }
      ]}
      travelTips={[
        "Start early in the morning to reach Bhadrachalam by evening.",
        "Check temple timings before planning your visit.",
        "Carry sufficient water and snacks for the long journey."
      ]}
     routeKey='vizag-to-bhadrachalam'
      heroImageAlt="Vizag to Bhadrachalam cab service route image Bhadrachalam Sri Rama Temple"
    />
  );
}
