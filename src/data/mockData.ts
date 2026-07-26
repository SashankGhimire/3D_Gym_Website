import {
  MembershipPlan,
  Facility,
  Trainer,
  Program,
  Transformation,
  Testimonial,
  FaqItem,
  GalleryItem
} from '../types';

import heroBgImage from '../assets/images/gym_hero_bg_1784967404057.jpg';
import facilityMainImage from '../assets/images/gym_facility_main_1784967419026.jpg';

export const HERO_BG_IMAGE = heroBgImage;
export const FACILITY_MAIN_IMAGE = facilityMainImage;

export const BRAND_INFO = {
  name: "GYM STATION",
  tagline: "More Than A Gym. Build Your Best Self.",
  story: "Gym Station is a premium fitness destination built for people who demand excellence. We combine world-class equipment, expert coaching, science-backed training, and an inspiring environment to empower members to become stronger, healthier, and unstoppable.",
  mission: "To revolutionize human performance by providing an uncompromising luxury athletic ecosystem engineered for transformation.",
  vision: "To establish the world standard in luxury fitness, recovery technology, and elite personal coaching.",
  coreValues: [
    { title: "Excellence Uncompromised", desc: "Every barbell, biomechanical angle, and towel service is curated for elite standard." },
    { title: "Science-Backed Training", desc: "Data-driven hypertrophy, metabolic conditioning, and recovery protocols." },
    { title: "Relentless Community", desc: "An exclusive network of driven individuals pushing each other toward greatness." },
    { title: "Holistic Longevity", desc: "Combining intense physical stimulus with state-of-the-art cold plunge, steam & recovery." }
  ],
  stats: [
    { label: "Square Feet", value: "25,000+", suffix: "SQFT" },
    { label: "Elite Coaches", value: "18+", suffix: "PROS" },
    { label: "Transformations", value: "3,800+", suffix: "LIVES" },
    { label: "Uptime & Access", value: "24/7", suffix: "ACCESS" }
  ],
  awards: [
    "Best Luxury Fitness Club 2025 - Global Design Awards",
    "Top Architectural Gym Interior - Architectural Digest",
    "Certified Human Performance Facility - National Strength Association"
  ],
  timeline: [
    { year: "2020", title: "The Blueprint", desc: "Conceived by world-class athletic coaches and architects to redefine luxury training." },
    { year: "2022", title: "Flagship Launch", desc: "Opened our 25,000 sq ft sanctuary with Technogym Artis & Eleiko platforms." },
    { year: "2024", title: "Recovery Suite Addition", desc: "Integrated infrared saunas, eucalyptus steam rooms, and cryotherapy bays." },
    { year: "2026", title: "AI Human Performance Lab", desc: "Pioneered 3D body composition scanning and real-time biometric tracking." }
  ]
};

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: "cardio-pass",
    name: "CARDIO MEMBERSHIP",
    priceMonthly: 3499,
    priceAnnualMonthly: 2799,
    currency: "INR",
    currencySymbol: "₹",
    tagline: "Essential cardiovascular training & locker sanctuary",
    popular: false,
    color: "#FFFFFF",
    ctaText: "Start Cardio Pass",
    features: [
      "Unlimited Access to Cardio Zone",
      "Technogym Artis Treadmills & Cross Trainers",
      "Woodway Curve Self-Powered Treadmills",
      "Interactive Virtual Cycle Studio",
      "Private VIP Locker & RFID Access",
      "Luxury Rainfall Shower & Changing Suites",
      "Complimentary High-Speed WiFi & Parking Pass",
      "Quarterly InBody 770 Body Assessment"
    ],
    notIncluded: [
      "Free Weights & Heavy Lifting Zone",
      "Olympic Weightlifting Platforms",
      "Steam & Cryo Recovery Suite",
      "Personal Trainer Monthly Consults"
    ]
  },
  {
    id: "full-gym",
    name: "FULL GYM MEMBERSHIP",
    priceMonthly: 5999,
    priceAnnualMonthly: 4799,
    currency: "INR",
    currencySymbol: "₹",
    tagline: "Complete access to all lifting, cardio, functional & recovery zones",
    popular: true,
    color: "#A3FF12",
    ctaText: "Claim Full Membership",
    features: [
      "Everything in Cardio Membership",
      "Full Access to Heavy Free Weights Area (up to 70kg DBs)",
      "Hammer Strength & Prime Fitness Pin/Plate Machines",
      "Olympic Weightlifting Platforms with Eleiko Bumpers",
      "Functional Turf Zone & Sled Tracks",
      "Dedicated Personal Trainer On-Floor Guidance",
      "Monthly InBody 770 Biometric Scan & Assessment",
      "Eucalyptus Steam Room & Infrared Sauna Access",
      "10% Discount at Protein Bar & Nutrition Store"
    ]
  },
  {
    id: "black-label-vip",
    name: "BLACK LABEL VIP",
    priceMonthly: 11999,
    priceAnnualMonthly: 9599,
    currency: "INR",
    currencySymbol: "₹",
    tagline: "The ultimate concierge fitness experience with dedicated coaching",
    popular: false,
    color: "#00FF88",
    ctaText: "Request VIP Access",
    features: [
      "Everything in Full Gym Membership",
      "4 Monthly 1-on-1 Personal Training Sessions Included",
      "Custom Macro & Nutrition Meal Blueprint",
      "Unlimited Cold Plunge & Recovery Zone Access",
      "Permanent Reserved VIP Locker with Nameplate",
      "Complimentary Towel & Fresh Shake per Workout",
      "24/7 Keycard Access & Private VIP Entrance",
      "Guest Pass Allowance (2 Guests per month)"
    ]
  }
];

export const FACILITIES: Facility[] = [
  {
    id: "modern-equipment",
    title: "Technogym & Hammer Strength Fleet",
    category: "strength",
    description: "State-of-the-art bio-mechanical pin-loaded and plate-loaded machines engineered for target muscular isolation and natural motion curves.",
    features: ["Biomechanical resistance curves", "Digital repetition & velocity counters", "Custom matte black powder coating"],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200",
    spec: "50+ Dedicated Isolation Stations"
  },
  {
    id: "olympic-lifting",
    title: "Eleiko Olympic Weightlifting Platform",
    category: "strength",
    description: "IWF-certified solid oak platforms with vibration-dampening acoustic rubber and competition Eleiko bars and calibrated discs.",
    features: ["Eleiko XF & Competition bars", "Sound-dampening drop zones", "Chalk bowls & magnesia stands"],
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=1200",
    spec: "6 Dedicated Olympic Racks"
  },
  {
    id: "functional-zone",
    title: "30-Meter Indoor Sprint Turf & Rig",
    category: "strength",
    description: "Prowler sled tracks, Rogue Monster rigs, assault bikes, plyo boxes, wall balls, and kettlebells up to 48kg for elite conditioning.",
    features: ["High-density shock-absorbent turf", "Dynamic suspension training rigs", "Battle ropes & heavy medicine balls"],
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=1200",
    spec: "30m Sprint & Prowler Turf"
  },
  {
    id: "cardio-sanctuary",
    title: "Curated Cardio Sanctuary",
    category: "cardio",
    description: "Over 40 high-performance cardio units featuring Woodway Curve self-powered treadmills, StairMaster 8-Series, and Concept2 rowers.",
    features: ["22-inch HD touchscreens with global trails", "Integrated Apple Watch & heart rate sync", "Individual climate-control air jets"],
    image: "https://images.unsplash.com/photo-1576678927484-cc909957088c?auto=format&fit=crop&q=80&w=1200",
    spec: "40+ Interactive Cardio Units"
  },
  {
    id: "locker-steam",
    title: "Luxury Granite Lockers & Steam Suite",
    category: "amenities",
    description: "Italian black granite changing suites equipped with eucalyptus-infused steam rooms, rainfall showers, and Dyson Supersonic amenities.",
    features: ["RFID keyless lockers with phone chargers", "Fresh organic cotton towel service", "Dyson grooming & skincare bar"],
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&q=80&w=1200",
    spec: "Eucalyptus Steam & Infrared"
  },
  {
    id: "protein-bar",
    title: "Fuel Bar & Cold Plunge Recovery",
    category: "wellness",
    description: "Artisanal protein shakes, cold brew coffee, electrolyte elixirs, and cold plunge baths chilled to 4°C for accelerated muscle recovery.",
    features: ["Grass-fed whey & vegan isolate options", "Theragun massage gun station", "Contrast therapy cold plunge"],
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=1200",
    spec: "4°C Cold Plunge & Shake Bar"
  }
];

export const TRAINERS: Trainer[] = [
  {
    id: "alex-vance",
    name: "Alex Vance",
    role: "Head Strength & Biomechanics Coach",
    specialization: "Hypertrophy & Powerlifting",
    experience: "11+ Years",
    achievements: [
      "Former National Powerlifting Champion",
      "M.Sc. Kinesiology & Exercise Physiology",
      "Coached 150+ Competitive Athletes"
    ],
    bio: "Specializes in biomechanical optimization, posture correction, and progressive overload strategies designed to build elite density without joint pain.",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80&w=800",
    socials: {
      instagram: "https://instagram.com",
      youtube: "https://youtube.com",
      linkedin: "https://linkedin.com"
    },
    clientCount: 420,
    rating: 4.98
  },
  {
    id: "marcus-thorne",
    name: "Marcus Thorne",
    role: "Head of Functional Performance",
    specialization: "CrossFit & Athletic Conditioning",
    experience: "9 Years",
    achievements: [
      "CrossFit Games Regional Competitor",
      "CSCS Certified Strength Specialist",
      "Ex-Military Tactical Fitness Lead"
    ],
    bio: "High-intensity functional movement expert focusing on stamina, explosive speed, agility, and mental resilience under heavy physical load.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
    socials: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com"
    },
    clientCount: 380,
    rating: 4.95
  },
  {
    id: "sora-chen",
    name: "Sora Chen",
    role: "Director of Body Composition & Metabolism",
    specialization: "Rapid Fat Loss & contest Prep",
    experience: "8 Years",
    achievements: [
      "IFBB Pro Figure Competitor",
      "Precision Nutrition Level 2 Master",
      "1,200+ Client Transformations"
    ],
    bio: "Integrates precision macro science with targeted strength training to sculpt aesthetic physiques while maintaining metabolic vigor.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    socials: {
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com"
    },
    clientCount: 510,
    rating: 4.99
  },
  {
    id: "david-kovacs",
    name: "David Kovacs",
    role: "Recovery & Mobility Specialist",
    specialization: "Movement Prep & Rehabilitation",
    experience: "12 Years",
    achievements: [
      "Doctor of Physical Therapy (DPT)",
      "FRC Mobility Specialist",
      "Consultant for Olympic Track Athletes"
    ],
    bio: "Focuses on joint articulation, soft tissue release, and prehab protocols to eliminate movement restrictions and prevent athletic injury.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    socials: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com"
    },
    clientCount: 310,
    rating: 4.97
  }
];

export const PROGRAMS: Program[] = [
  {
    id: "apex-strength",
    title: "APEX STRENGTH & HYPERTROPHY",
    category: "Strength",
    level: "Intermediate",
    durationWeeks: 12,
    intensity: "High",
    description: "A periodized 12-week blueprint designed to maximize compound lift power (Squat, Bench, Deadlift, Overhead Press) while inducing high-volume muscular hypertrophy.",
    highlights: ["Wave periodization scheme", "Mechanical tension & RPE tracking", "Structural balance accessory blocks"],
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=1000",
    caloriesPerSession: "650 - 850 kcal",
    coach: "Alex Vance"
  },
  {
    id: "shred-metabolic",
    title: "SHRED: METABOLIC SHIFT",
    category: "Weight Loss",
    level: "All Levels",
    durationWeeks: 8,
    intensity: "Extreme",
    description: "Combine high-density resistance circuits with anaerobic sprint intervals to trigger maximum excess post-exercise oxygen consumption (EPOC).",
    highlights: ["EPOC calorie burning effect", "Heart-rate zone monitored work", "Preserved lean muscular mass"],
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=1000",
    caloriesPerSession: "700 - 950 kcal",
    coach: "Sora Chen"
  },
  {
    id: "titan-bodybuilding",
    title: "TITAN: AESTHETIC BODYBUILDING",
    category: "Bodybuilding",
    level: "Advanced",
    durationWeeks: 16,
    intensity: "High",
    description: "Push-Pull-Legs split focusing on time-under-tension, peak muscle contractions, mind-muscle connection, and symmetrical muscle proportion.",
    highlights: ["Push / Pull / Legs 6-day split", "Intensifiers (Drop sets, Rest-Pause)", "Bodypart specialization micro-cycles"],
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=1000",
    caloriesPerSession: "500 - 700 kcal",
    coach: "Alex Vance"
  },
  {
    id: "tactical-crossfit",
    title: "TACTICAL CROSSFIT ENGINE",
    category: "CrossFit",
    level: "Intermediate",
    durationWeeks: 10,
    intensity: "Extreme",
    description: "Olympic barbell movements paired with gymnastics skill work, rowing, and heavy metabolic conditioning to forge unstoppable athletic capacity.",
    highlights: ["Snatch & Clean & Jerk technique", "Ring & bar gymnastics skill progressions", "Daily competitive benchmark WODs"],
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=1000",
    caloriesPerSession: "800 - 1100 kcal",
    coach: "Marcus Thorne"
  },
  {
    id: "zone2-endurance",
    title: "ZONE-2 ENDURANCE ENGINE",
    category: "Cardio",
    level: "Beginner",
    durationWeeks: 8,
    intensity: "Medium",
    description: "Mitochondrial biogenesis training designed to expand cardiovascular stroke volume, lower resting heart rate, and enhance aerobic efficiency.",
    highlights: ["Continuous zone 2 cardiovascular work", "V02 max threshold testing", "Low impact joint friendly progression"],
    image: "https://res.cloudinary.com/ggus-dev/image/private/s--i0x-m5Z2--/c_auto,g_auto,w_3598,h_2400/v1/25fcf1e9/blog-machine-workout-routine-for-beginners.webp?_a=BAAAV6DQ",
    caloriesPerSession: "400 - 600 kcal",
    coach: "David Kovacs"
  }
];

export const TRANSFORMATIONS: Transformation[] = [
  {
    id: "rohan-m",
    memberName: "Rohan Malhotra",
    age: 32,
    programUsed: "Apex Strength & Shred",
    durationMonths: 6,
    weightLossKg: 18,
    muscleGainKg: 6,
    bodyFatChange: "26% -> 11%",
    quote: "Gym Station completely changed my mindset. The combination of precision biomechanical equipment and Alex's coaching turned my life around.",
    beforeImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800",
    afterImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "priya-s",
    memberName: "Priya Sharma",
    age: 28,
    programUsed: "Shred: Metabolic Shift",
    durationMonths: 4,
    weightLossKg: 12,
    muscleGainKg: 3,
    bodyFatChange: "29% -> 16%",
    quote: "The environment here is electrifying. You walk in, see world-class equipment and passionate people, and you simply cannot give up.",
    beforeImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
    afterImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "vikram-r",
    memberName: "Vikram Roy",
    age: 38,
    programUsed: "Titan Aesthetic Bodybuilding",
    durationMonths: 8,
    weightLossKg: 8,
    muscleGainKg: 9,
    bodyFatChange: "22% -> 10%",
    quote: "At 38, I am stronger and leaner than I was in my early twenties. The recovery zone and cold plunge alone are worth every rupee.",
    beforeImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    afterImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testi-1",
    name: "Aman Singhania",
    role: "Tech Entrepreneur & Athlete",
    memberSince: "2023",
    rating: 5,
    comment: "Gym Station is hands down the finest training facility in the country. The Eleiko platforms, Technogym equipment, and high-energy atmosphere make every workout feel like a championship session.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    achievement: "Added 45kg to total compound lifts"
  },
  {
    id: "testi-2",
    name: "Natasha Kapoor",
    role: "Fashion Designer",
    memberSince: "2024",
    rating: 5,
    comment: "The luxury amenities are unreal. From the Dyson grooming stations in the black granite changing rooms to the eucalyptus steam and organic protein bar, everything is pure perfection.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    achievement: "12% Bodyfat Reduction"
  },
  {
    id: "testi-3",
    name: "Karan Mehta",
    role: "Managing Director",
    memberSince: "2022",
    rating: 5,
    comment: "I have trained at Equinox in New York and Third Space in London. Gym Station easily matches or surpasses them in equipment quality and coaching expertise.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    achievement: "Black Label VIP Member"
  }
];

export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    category: "Membership",
    question: "What is included in the complimentary day pass / trial?",
    answer: "Our complimentary trial includes full access to our cardio, strength, and functional turf zones, an InBody 770 body composition scan, and access to our luxury locker and steam suites."
  },
  {
    id: "faq-2",
    category: "Membership",
    question: "Can I freeze or pause my membership if I travel?",
    answer: "Yes, Full Gym and Black Label VIP members can pause their membership for up to 60 days per year free of charge via our concierge mobile app or front desk."
  },
  {
    id: "faq-3",
    category: "Personal Training",
    question: "How do I get matched with a personal coach?",
    answer: "Upon joining, you undergo a 45-minute biomechanical movement assessment and goal setting consult. We then match you with a specialist tailored to your specific goals (hypertrophy, rehab, fat loss, or strength)."
  },
  {
    id: "faq-4",
    category: "Facility",
    question: "What are Gym Station's operating hours?",
    answer: "The main facility is open Monday to Saturday from 5:00 AM to 11:00 PM, and Sunday from 6:00 AM to 9:00 PM. Black Label VIP members enjoy 24/7 keycard access."
  },
  {
    id: "faq-5",
    category: "Facility",
    question: "Is guest parking available on site?",
    answer: "Yes, we offer complimentary 3-hour valet parking and covered garage parking for all active Gym Station members."
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Heavy Free Weights Sanctuary",
    category: "Facility",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200",
    caption: "Dumbbells up to 70kg, custom power racks, and deadlift platforms."
  },
  {
    id: "gal-2",
    title: "Olympic Deadlift Session",
    category: "Action",
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=1200",
    caption: "Athlete performing conventional deadlifts on Eleiko shock-absorption oak platform."
  },
  {
    id: "gal-3",
    title: "Cold Plunge & Cryo Chamber",
    category: "Recovery",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=1200",
    caption: "Hydro-contrast cold therapy chilled precisely to 4 degrees Celsius."
  },
  {
    id: "gal-4",
    title: "Sprint Turf & Sled Tracks",
    category: "Facility",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=1200",
    caption: "30-meter high-density turf for prowler pushes, lunges, and sprint intervals."
  },
  {
    id: "gal-5",
    title: "Functional Boxing & Heavy Bag Area",
    category: "Action",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&q=80&w=1200",
    caption: "Leather Fairtex heavy bags for conditioning and combat striking."
  },
  {
    id: "gal-6",
    title: "Annual Gym Station Lift Off Event",
    category: "Events",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=1200",
    caption: "Community strength showcase bringing together hundreds of members."
  }
];
