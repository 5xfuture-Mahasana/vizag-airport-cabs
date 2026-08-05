import TourPage from '../components/TourPage';

export default function VizagSightseeingTour() {
  return (
    <TourPage 
      title="Vizag Sightseeing Tour Packages | Best City Cab Service"
      description="Book the best Vizag sightseeing tour package with Vizag Airport Cabs. Explore RK Beach, Kailasagiri, Submarine Museum, and more with our premium cab service."
      keywords="Vizag sightseeing tour, Vizag city tour, Vizag tour packages, Vizag cab service, Vizag tourist places"
      heroTitle="Vizag City Sightseeing Tour"
      heroSubtitle="Explore the 'City of Destiny' with our premium local sightseeing packages. From serene beaches to historic museums, experience Vizag like never before."
      duration="Full Day (8-10 Hours)"
      pickup="Anywhere in Visakhapatnam (Hotel/Airport/Railway Station)"
      cabOptions={['Sedan', 'SUV', 'Tempo Traveller']}
      introduction="Visakhapatnam, popularly known as Vizag, is a coastal gem nestled between the Eastern Ghats and the Bay of Bengal. Our Vizag sightseeing tour is meticulously designed to showcase the city's vibrant culture, pristine beaches, and historical landmarks. Whether you are a solo traveler, a couple on a romantic getaway, or a family seeking fun, our professional cab service ensures a comfortable and memorable journey through the heart of Andhra Pradesh's largest city."
      highlights={[
        "Panoramic views from Kailasagiri Hill Park",
        "Historic INS Kursura Submarine Museum visit",
        "Relaxing walk along the iconic RK Beach",
        "Spiritual experience at Simhachalam Temple",
        "Pristine beauty of Yarada Beach",
        "Fun-filled activities at Rushikonda Beach"
      ]}
      placesCovered={[
        {
          name: "RK Beach (Ramakrishna Mission Beach)",
          description: "The heart of Vizag's coastline, RK Beach is perfect for evening strolls. It's a hub of activity with street food, local vendors, and the famous Victory at Sea Memorial nearby."
        },
        {
          name: "Kailasagiri Hill Park",
          description: "Offering a 360-degree view of the city and the sea, this hilltop park features massive statues of Lord Shiva and Parvati, a toy train, and beautifully landscaped gardens."
        },
        {
          name: "Tenneti Park",
          description: "One of the oldest parks in the city, located on the cliffs overlooking the Bay of Bengal. It offers breathtaking views of the coastline and the famous stranded cargo ship."
        },
        {
          name: "INS Kursura Submarine Museum",
          description: "A unique museum housed in a real decommissioned submarine. It provides a rare glimpse into the life of submariners and India's naval history."
        },
        {
          name: "Rushikonda Beach",
          description: "Known as the 'Jewel of the East Coast', this Blue Flag certified beach is famous for its golden sands and water sports like surfing and jet skiing."
        },
        {
          name: "Simhachalam Temple",
          description: "A 11th-century architectural marvel dedicated to Lord Narasimha. The temple is famous for its intricate carvings and the unique 'Sandalwood' ritual."
        },
        {
          name: "Yarada Beach",
          description: "A secluded paradise surrounded by hills on three sides. It's one of the cleanest and most peaceful beaches in the region, perfect for nature lovers."
        }
      ]}
      travelExperience="The journey through Vizag is a blend of urban charm and natural splendor. As you drive along the Beach Road, the cool sea breeze and the sound of crashing waves create a soothing atmosphere. The winding roads up to Kailasagiri offer a bit of adventure, while the drive to Yarada through the Dolphin's Nose hill provides some of the most scenic views in the city. Our professional drivers act as local guides, sharing interesting stories and ensuring you don't miss any hidden gems."
      whyChooseItems={[
        "Well-maintained, air-conditioned vehicles",
        "Experienced drivers with deep local knowledge",
        "Flexible itineraries tailored to your interests",
        "No hidden costs - transparent pricing",
        "Punctual pickup and drop-off service"
      ]}
      faqs={[
        {
          q: "How much does Vizag sightseeing cost?",
          a: "The cost depends on the vehicle type (Sedan/SUV) and duration. Our packages start from ₹2,500 for a full-day city tour."
        },
        {
          q: "Can I book a cab for sightseeing in Vizag?",
          a: "Yes, you can easily book a cab through our website or by calling +91 89855 83355 for a hassle-free experience."
        },
        {
          q: "What is the best time for Vizag sightseeing?",
          a: "The best time is from October to March when the weather is pleasant. Early mornings and late evenings are ideal for beach visits."
        },
        {
          q: "Are entry fees included in the package?",
          a: "No, entry fees for museums, parks, and temples are not included in the cab rental price and must be paid by the customer."
        },
        {
          q: "Can we customize the places to visit?",
          a: "Absolutely! Our tours are fully customizable. You can discuss your preferred spots with our driver or support team."
        }
      ]}
      imageSeed="vizag-city"
    />
  );
}
