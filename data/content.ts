export type Speaker = {
  name: string;
  role: string;
  image: string;
};

export type ProgrammeEntry = {
  time: string;
  title: string;
  description?: string;
  initials?: string;
  tone?: string;
};

export type ProgrammeDay = {
  label: string;
  date: string;
  entries: ProgrammeEntry[];
};

export type Ticket = {
  title: string;
  description: string;
  price: string;
  earlyBird: string;
  action: string;
  note: string;
  featured?: boolean;
  includes: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
  tone: string;
};

export type GalleryItem = {
  image: string;
  placeholder?: string;
  alt: string;
  size: string;
};

export const keynoteSpeakers: Speaker[] = [
  { name: "Lukša Čičovački", role: "Head of Unit for Maritime Digital Solutions, EMSA", image: "/images/speakers/luksa-cicovacki.png" },
  { name: "Dong-Wook Song", role: "World Maritime University", image: "/images/speakers/dong-wook-song.png" },
  { name: "Tatjana Krilić", role: "International Maritime Organization (IMO)", image: "/images/speakers/tatjana-krilic.png" },
];

export const commercialTechnicalPresentations: Speaker[] = [
  { name: "Josip Rukavina", role: "Vectrino", image: "/images/speakers/josip-rukavina.png" },
  { name: "Nenad Radović", role: "MEP", image: "/images/speakers/nenad-radovic.png" },
];

export const programme: ProgrammeDay[] = [
  {
    label: "Day 01",
    date: "Wednesday, 19 May 2027",
    entries: [
      { time: "08:00 – 09:00", title: "Registration & Check-In" },
      { time: "09:00 – 09:45", title: "Opening Ceremony", description: "Welcome addresses from the Dean of the Faculty of Maritime Studies and the IMSC organising committee.", initials: "AK", tone: "a" },
      { time: "09:45 – 10:30", title: "Keynote / Decarbonising the Fleet", description: "Pathways to IMO 2050 targets: alternative fuels, energy efficiency and what the next decade really demands.", initials: "ST", tone: "f" },
      { time: "10:30 – 11:00", title: "Coffee Break" },
      { time: "11:00 – 12:30", title: "Session A / Navigation & Safety at Sea", description: "Paper presentations on e-navigation, collision avoidance and human factors on the bridge.", initials: "JR", tone: "c" },
    ],
  },
  {
    label: "Day 02",
    date: "Thursday, 20 May 2027",
    entries: [
      { time: "09:00 – 10:00", title: "Keynote / Autonomous Shipping", description: "From remote-controlled to fully autonomous vessels — regulation, technology and trust.", initials: "MB", tone: "b" },
      { time: "10:15 – 12:00", title: "Session B / Marine Engineering", description: "Propulsion systems, condition monitoring and digital twins for ship machinery.", initials: "AK", tone: "a" },
      { time: "12:00 – 13:30", title: "Lunch & Networking" },
      { time: "13:30 – 15:00", title: "Session C / Ports & Logistics", description: "Smart ports, intermodal transport and the Adriatic as a logistics corridor.", initials: "IP", tone: "e" },
    ],
  },
  {
    label: "Day 03",
    date: "Friday, 21 May 2027",
    entries: [
      { time: "09:00 – 10:30", title: "Session D / Maritime Law & Education", description: "Regulatory change, STCW training and the future of maritime education and training.", initials: "LM", tone: "d" },
      { time: "11:00 – 12:00", title: "Closing Remarks & Best Paper Award", description: "Summary of conclusions, best paper and young researcher awards, and the announcement of IMSC 2028.", initials: "AK", tone: "a" },
      { time: "13:00 – 18:00", title: "Technical Visit / Port of Split" },
    ],
  },
];

export const tickets: Ticket[] = [
  {
    title: "Participant",
    description: "Full participation for authors and attendees.",
    price: "€350",
    earlyBird: "Early bird: €300 until 1 March",
    action: "Register as participant",
    note: "Early bird closes 1 March 2027",
    includes: ["Access to all sessions & keynotes", "Book of Proceedings", "Coffee breaks & lunches"],
  },
  {
    title: "⚓ Author + Gala",
    description: "Everything for presenting authors, plus the gala dinner.",
    price: "€450",
    earlyBird: "Early bird: €400 until 1 March",
    action: "Register as author",
    note: "Includes one paper presentation",
    featured: true,
    includes: ["All Participant benefits", "Gala dinner on 20 May", "Technical visit to Port of Split"],
  },
  {
    title: "Student",
    description: "Reduced fee for PhD and master's students.",
    price: "€150",
    earlyBird: "Early bird: €120 until 1 March",
    action: "Register as student",
    note: "Limited to 60 places",
    includes: ["Access to all sessions & keynotes", "Young researcher session", "Valid student ID required"],
  },
];

export const faq: FaqItem[] = [
  { question: "How do I register for IMSC 2027?", answer: "Create an account on the conference portal, choose your registration type and pay online. You'll get a confirmation email with your invoice." },
  { question: "When is the abstract submission deadline?", answer: "Abstracts are due by 15 January 2027. Notification of acceptance follows by 15 February, with full papers due on 1 April 2027." },
  { question: "What is included in the registration fee?", answer: "All sessions, the Book of Proceedings, coffee breaks and lunches. The Author + Gala package also includes the gala dinner and technical visit." },
  { question: "Will I receive a certificate of attendance?", answer: "Yes — certificates are issued digitally and become available in your profile after the conference." },
  { question: "Where exactly is the conference held?", answer: "At the Faculty of Maritime Studies, Ruđera Boškovića 37, Split, Croatia — a short ride from the city centre and ferry port." },
];

export const testimonials: Testimonial[] = [
  { quote: "“One of the most focused maritime conferences in the region. The sessions were sharp and the discussions continued long after.”", name: "Tomas Holm", role: "Researcher, Chalmers", initials: "TH", tone: "b" },
  { quote: "“A perfect mix of academia and industry. I left Split with three new research partners and a paper idea.”", name: "Elena Vidal", role: "Naval Architect, Barcelona", initials: "EV", tone: "c" },
  { quote: "“Well organised, warm hosts and a programme that respects your time. Already planning to submit next year.”", name: "Nikolai Orlov", role: "PhD Candidate, Gdynia", initials: "NO", tone: "e" },
  { quote: "“The young researcher session gave me feedback I couldn’t get anywhere else. Highly recommended.”", name: "Mia Petrić", role: "Assistant, PFST", initials: "MP", tone: "d" },
];

export const sponsors = [
  { name: "Academy of Sciences and Arts", image: "/images/organizers/academy of sciences and arts.png" },
  { name: "BSM", image: "/images/organizers/bsm.png" },
  { name: "City of Split", image: "/images/organizers/city of split.png" },
  { name: "CRS", image: "/images/organizers/crs.png" },
  { name: "Faculty of Maritime Studies", image: "/images/organizers/foms-slo-logo.png" },
  { name: "Hrvatske Ceste", image: "/images/organizers/hrvatske ceste.png" },
  { name: "IVA Shipping", image: "/images/organizers/iva shipping.png" },
  { name: "Luka Ploče", image: "/images/organizers/luka ploce.png" },
  { name: "Luka Split", image: "/images/organizers/luka split.png" },
  { name: "MEP", image: "/images/organizers/mep.png" },
  { name: "Odašiljači veze", image: "/images/organizers/odašiljači veze.png" },
  { name: "Plovput", image: "/images/organizers/plovput.jpg" },
  { name: "Split-Dalmatia County", image: "/images/organizers/split dalmatia county.jpg" },
  { name: "Split Port Authority", image: "/images/organizers/split port authority.png" },
];

export const gallery: GalleryItem[] = [
  { image: "/img/ceremony.jpg", alt: "Conference ceremony in Split", size: "one" },
  { image: "/img/lounge.jpg", alt: "Conference participants in the lounge", size: "two" },
  { image: "/img/posters.jpg", alt: "Researchers discussing conference posters", size: "three" },
  { image: "/img/simulator.jpg", alt: "Maritime simulator visit", size: "four" },
  { image: "/img/split.jpg", alt: "View of Split, Croatia", size: "five" },
];

export const features = [
  { title: "40+ Invited Speakers", text: "Leading voices from academia, classification societies and the shipping industry.", icon: "person" },
  { title: "Plenary Keynotes", text: "Opening and closing keynotes on decarbonisation and autonomous shipping.", icon: "award" },
  { title: "12 Thematic Sessions", text: "Navigation, marine engineering, maritime law, logistics and education tracks.", icon: "screen" },
  { title: "Peer-Reviewed Proceedings", text: "Accepted papers are published in the indexed IMSC Book of Proceedings.", icon: "lines" },
  { title: "30+ Countries Represented", text: "An international community of maritime universities and institutes.", icon: "globe" },
  { title: "Networking & Excursion", text: "Welcome reception, gala dinner and a technical visit to the Port of Split.", icon: "people" },
];

export const tickerItems = [
  "Live in Split, Croatia",
  "Early registration now open",
  "Abstract submission until 15 Jan 2027",
  "12th edition",
];
