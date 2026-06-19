import adrianaImg from "@/assets/speakers/Adriana.png";
import abhijitImg from "@/assets/speakers/Capt._Abhijit_Bhutey.png";
import ecemImg from "@/assets/speakers/Ecem_Badruk.png";
import eleonoreImg from "@/assets/speakers/Eleonore.png";
import indraImg from "@/assets/speakers/Indra.png";
import ivanoImg from "@/assets/speakers/Ivano.png";
import jimImg from "@/assets/speakers/Jim_Keravala.png";
import julienImg from "@/assets/speakers/Julien_Michels.png";
import markusImg from "@/assets/speakers/Markus_ESDI.png";
import annaImg from "@/assets/speakers/Prof._Anna_Moore.png";
import nasserImg from "@/assets/speakers/Nasser.png";
import timImg from "@/assets/speakers/Tim_Searle.png";
import ulrichImg from "@/assets/speakers/Ulrick_Spaker.png";
import walterImg from "@/assets/speakers/Walter.png";
import lorenzoImg from "@/assets/speakers/Lorenzo_Benedetti.png";
import siddharthImg from "@/assets/speakers/Siddharth_Jena.png";
import jenniferImg from "@/assets/speakers/Jennifer_Wadsworth.png";
import fazilImg from "@/assets/speakers/Fazil_Emre_Uslu.png";
import simonImg from "@/assets/speakers/Simon_Wuest.png";
import tolgaImg from "@/assets/speakers/Tolga_Ors.png";
import berndImg from "@/assets/speakers/Bernd_Rattenbacher.png";
import cindyImg from "@/assets/speakers/Cindy_Follonier.png";
import magdalenaImg from "@/assets/speakers/Magdalena_Herova.png";
import merveImg from "@/assets/speakers/Merve_Erdem_Burger.png";
import yvonneImg from "@/assets/speakers/Yvonne_Bemelmans.png";
import debrajImg from "@/assets/speakers/Debraj_Dasgupta.png";
import georgeWImg from "@/assets/speakers/George_Weinmann.png";
import maxBGImg from "@/assets/speakers/Max_Busse_Grawitz.png";
import marcImg from "@/assets/speakers/Marc_Biker.png";
import jeffImg from "@/assets/speakers/Jeff_Hendrikse.png";
import yannisImg from "@/assets/speakers/Yannis_Ailianos.png";

export type SpeakerTrack =
  | "Orbital Infrastructure"
  | "Advanced Manufacturing"
  | "Life Sciences"
  | "Strategy & Policy";

export interface Speaker {
  slug: string;
  name: string;
  title: string;
  organization: string;
  country: string;
  image: string;
  tracks: SpeakerTrack[];
  bio: string;
  session: string;
  linkedin?: string;
}

export const speakers: Speaker[] = [
  {
    slug: "adriana-gudino",
    name: "Dr. Adriana Gudiño",
    title: "Founder & Scientific Director",
    organization: "MER Root Lab",
    country: "Mexico",
    image: adrianaImg,
    tracks: ["Life Sciences"],
    bio: "Dr. Adriana Gudiño is a physician-scientist and founder of MER Root Lab, a biotechnology research platform developing advanced nutraceutical formulations for clinical use in longevity, regenerative medicine and cancer support. Her work bridges human biology and the orbital environment, translating space-derived insights into terrestrial healthcare applications.",
    session: "Life Sciences in Orbit, Biomedical Frontiers",
    linkedin: "https://www.linkedin.com/in/dr-adriana-gudi%C3%B1o",
  },
  {
    slug: "abhijit-bhutey",
    name: "Capt. Abhijit Bhutey",
    title: "Co-Founder & CEO",
    organization: "Inbound Aerospace",
    country: "India",
    image: abhijitImg,
    tracks: ["Orbital Infrastructure", "Strategy & Policy"],
    bio: "Capt. Abhijit Bhutey is Co-Founder and CEO of Inbound Aerospace, a venture dedicated to bringing the value of space back to Earth through orbital infrastructure and downstream applications. A seasoned operator with a global outlook, he bridges deep tech with executable commercial models.",
    session: "From Space, For Earth, Orbital Value Chains",
    linkedin: "https://www.linkedin.com/in/abhijit2002",
  },
  {
    slug: "ecem-badruk",
    name: "Ecem Badruk",
    title: "Founder & Executive Director",
    organization: "Women in Space Biotech",
    country: "Austria",
    image: ecemImg,
    tracks: ["Life Sciences"],
    bio: "Ecem Badruk is Founder and Executive Director of Women in Space Biotech, advancing inclusive leadership at the frontier of space life sciences, biological research and long-duration human spaceflight readiness.",
    session: "Human Performance & Biology in Orbit",
    linkedin: "https://www.linkedin.com/",
  },
  {
    slug: "eleonore-poli",
    name: "Dr. Eleonore Cassandra Poli",
    title: "Senior Scientist",
    organization: "CSEM",
    country: "Switzerland",
    image: eleonoreImg,
    tracks: ["Advanced Manufacturing", "Life Sciences"],
    bio: "Dr. Eleonore Cassandra Poli is a senior scientist at CSEM working at the intersection of advanced manufacturing, microgravity research and analog astronaut programs. She brings a rare blend of hands-on research and operational readiness.",
    session: "Advanced Manufacturing in Microgravity",
    linkedin: "https://www.linkedin.com/in/eleonore-cassandra-poli-5aa919b6",
  },
  {
    slug: "indra-narayan-chaudhary",
    name: "Dr. Indra Narayan Chaudhary",
    title: "Founder & CEO",
    organization: "Spacephilic",
    country: "India",
    image: indraImg,
    tracks: ["Strategy & Policy", "Orbital Infrastructure"],
    bio: "Dr. Indra Narayan Chaudhary is Founder and CEO of Spacephilic, advancing emerging-nation participation in the orbital economy through outreach, education and policy engagement.",
    session: "Emerging Space Nations & Global Access",
    linkedin: "https://www.linkedin.com/in/indra-narayan-chaudhary-893906171",
  },
  {
    slug: "ivano-verzola",
    name: "Ivano Verzola",
    title: "Space Business Unit Manager",
    organization: "Iazzero Tecnologie",
    country: "Italy",
    image: ivanoImg,
    tracks: ["Orbital Infrastructure", "Advanced Manufacturing"],
    bio: "Ivano Verzola is Space Business Unit Manager at Iazzero Tecnologie, leading orbital systems, autonomy and mission operations programs. He brings a European industrial perspective on the new orbital era.",
    session: "Industrialising the Orbital Economy",
    linkedin: "https://www.linkedin.com/",
  },
  {
    slug: "jim-keravala",
    name: "Jim Keravala",
    title: "Co-Founder & CEO",
    organization: "OffWorld",
    country: "United States",
    image: jimImg,
    tracks: ["Advanced Manufacturing", "Orbital Infrastructure"],
    bio: "Jim Keravala is the co-founder and CEO of OffWorld, building swarms of industrial robots to work on Earth, the Moon, asteroids and Mars. A globally recognized space industry leader, he is one of the pioneers of the new space economy.",
    session: "Robotic Industrialisation Beyond Earth",
    linkedin: "https://www.linkedin.com/in/keravala",
  },
  {
    slug: "julien-michels",
    name: "Dr. Julien Michels",
    title: "Head of Research Infrastructure",
    organization: "VSH, The Underground Future Lab",
    country: "Switzerland",
    image: julienImg,
    tracks: ["Strategy & Policy"],
    bio: "Dr. Julien Michels is Head of Research Infrastructure at VSH, The Underground Future Lab, leading large-scale experimental platforms that support deep-tech research, technology transfer and industrial partnerships relevant to the orbital industrial era.",
    session: "Research Infrastructure for the Orbital Era",
    linkedin: "https://www.linkedin.com/in/julienmichels",
  },
  {
    slug: "markus-schoelmerich",
    name: "Dr. Markus Schoelmerich",
    title: "Program Manager",
    organization: "European Space Deep-Tech Innovation Center (PSI, ESA)",
    country: "Switzerland",
    image: markusImg,
    tracks: ["Orbital Infrastructure", "Advanced Manufacturing"],
    bio: "Dr. Markus Schoelmerich is Program Manager at the European Space Deep-Tech Innovation Center, a joint initiative between PSI and ESA, accelerating space-grade deep-tech from research to flight.",
    session: "From Lab to Orbit, Deep-Tech Acceleration",
    linkedin: "https://www.linkedin.com/in/markus-schoelmerich",
  },
  {
    slug: "anna-moore",
    name: "Professor Anna Moore",
    title: "Director, Institute for Space",
    organization: "Australian National University",
    country: "Australia",
    image: annaImg,
    tracks: ["Strategy & Policy", "Orbital Infrastructure"],
    bio: "Professor Anna Moore is the Director of the Institute for Space at the Australian National University, leading national-scale space research, instrumentation and capability development.",
    session: "National Strategies for the Orbital Era",
    linkedin: "https://www.linkedin.com/in/professor-anna-moore",
  },
  {
    slug: "nasser-hefiana",
    name: "Dr. Nasser Hefiana",
    title: "Co-Founder & CEO",
    organization: "Swiss Solar Space Company",
    country: "Switzerland",
    image: nasserImg,
    tracks: ["Orbital Infrastructure", "Strategy & Policy"],
    bio: "Dr. Nasser Hefiana is Co-Founder and CEO of Swiss Solar Space Company, developing energy and infrastructure concepts for the orbital economy with a strong focus on strategic commercialization and international collaboration.",
    session: "Energy Systems for the Orbital Economy",
    linkedin: "https://www.linkedin.com/in/nasserhefiana",
  },
  {
    slug: "tim-searle",
    name: "Tim Searle",
    title: "Director, Business Development and Partnerships",
    organization: "Innovian Space",
    country: "United States",
    image: timImg,
    tracks: ["Orbital Infrastructure", "Advanced Manufacturing"],
    bio: "Tim Searle is Director of Business Development and Partnerships at Innovian Space, leading commercial growth and strategic alliances across emerging orbital systems and infrastructure opportunities.",
    session: "Commercial Pathways for Orbital Infrastructure",
    linkedin: "https://www.linkedin.com/in/tim-searle-6497a0b8",
  },
  {
    slug: "ulrich-kubler",
    name: "Ulrich Kübler",
    title: "Sales Director, Space Exploration",
    organization: "Starlab",
    country: "Switzerland",
    image: ulrichImg,
    tracks: ["Orbital Infrastructure"],
    bio: "Ulrich Kübler leads space exploration sales activities at Starlab, supporting the next generation of commercial low Earth orbit infrastructure and industrial partnerships.",
    session: "Commercial Stations and the Next LEO Economy",
    linkedin: "https://www.linkedin.com/",
  },
  {
    slug: "walter-crismareanu",
    name: "Walter Crismareanu",
    title: "Founder & CEO",
    organization: "Tipalo",
    country: "Switzerland",
    image: walterImg,
    tracks: ["Advanced Manufacturing", "Life Sciences"],
    bio: "Walter Crismareanu is the founder of Tipalo, bringing applied AI and digital brain systems into high-value innovation environments with relevance for future orbital and biomedical applications.",
    session: "AI Systems for Advanced Space Applications",
    linkedin: "https://www.linkedin.com/in/walter-c-018740208",
  },
  {
    slug: "lorenzo-benedetti",
    name: "Dr. Lorenzo Benedetti",
    title: "Head of Science and Technology",
    organization: "EuroTube Foundation",
    country: "Switzerland",
    image: lorenzoImg,
    tracks: ["Advanced Manufacturing", "Orbital Infrastructure"],
    bio: "Dr. Lorenzo Benedetti is Head of Science and Technology at EuroTube Foundation, driving high-speed transport and advanced infrastructure innovation, bridging deep-tech research with industrial application relevant to future orbital and terrestrial systems.",
    session: "Advanced Infrastructure and High-Velocity Systems",
    linkedin: "https://www.linkedin.com/in/lorenzobenedetti",
  },
  {
    slug: "siddharth-jena",
    name: "Dr. Siddharth Jena",
    title: "Founder & CEO",
    organization: "Akashalabdhi Pvt. Ltd.",
    country: "India",
    image: siddharthImg,
    tracks: ["Orbital Infrastructure", "Strategy & Policy"],
    bio: "Dr. Siddharth Jena is Founder and CEO of Akashalabdhi Pvt. Ltd., advancing India's contribution to the global orbital economy through engineering, research and international collaboration.",
    session: "Emerging Nations in the Orbital Economy",
    linkedin: "https://www.linkedin.com/in/siddharth-jena07",
  },
  {
    slug: "jennifer-wadsworth",
    name: "Dr. Jennifer Wadsworth",
    title: "Program Manager",
    organization: "European Space Deep-Tech Innovation Centre (ESDI)",
    country: "Switzerland",
    image: jenniferImg,
    tracks: ["Life Sciences", "Strategy & Policy"],
    bio: "Dr. Jennifer Wadsworth is Program Manager at the European Space Deep-Tech Innovation Centre (ESDI), accelerating European space deep-tech innovation with a focus on astrobiology, life sciences and the translation of orbital research into industrial impact.",
    session: "European Space Deep-Tech and Life Sciences",
    linkedin: "https://www.linkedin.com/in/jennifer-wadsworth-phd-0b584b108",
  },
  {
    slug: "fazil-emre-uslu",
    name: "Dr. Fazil Emre Uslu",
    title: "Systems Engineer",
    organization: "Beyond Gravity",
    country: "Switzerland",
    image: fazilImg,
    tracks: ["Orbital Infrastructure", "Advanced Manufacturing"],
    bio: "Dr. Fazil Emre Uslu is a Systems Engineer at Beyond Gravity, working on advanced space systems and structures that support the next generation of orbital infrastructure and satellite platforms.",
    session: "Engineering the Next Generation of Orbital Systems",
    linkedin: "https://www.linkedin.com/in/faz%C4%B1l-emre-uslu-116482113",
  },
  {
    slug: "simon-wuest",
    name: "Simon Wüest",
    title: "Senior Researcher, Institute of Medical Engineering",
    organization: "Lucerne School of Engineering and Architecture (HSLU)",
    country: "Switzerland",
    image: simonImg,
    tracks: ["Life Sciences"],
    bio: "Simon Wüest is a senior researcher at the Institute of Medical Engineering at the Lucerne School of Engineering and Architecture (Hochschule Luzern), working on human spaceflight, biological research and the translation of orbital experimentation into industrial value.",
    session: "Human Spaceflight and Applied Life Sciences",
    linkedin: "https://www.linkedin.com/in/simon-w%C3%BCest-a488a4159",
  },
  {
    slug: "tolga-ors",
    name: "Dr. Tolga Ors",
    title: "Managing Director",
    organization: "New Space Consulting",
    country: "United Kingdom",
    image: tolgaImg,
    tracks: ["Strategy & Policy", "Orbital Infrastructure"],
    bio: "Dr. Tolga Ors is Managing Director at New Space Consulting, advising executives, investors and institutions on strategy, innovation and growth across the orbital industrial era.",
    session: "Strategy, Innovation and the Orbital Industrial Era",
    linkedin: "https://www.linkedin.com/in/tolgaors",
  },
  {
    slug: "bernd-rattenbacher",
    name: "Dr. Bernd Rattenbacher",
    title: "Operations Manager, Biotesc",
    organization: "Biotesc, HSLU",
    country: "Switzerland",
    image: berndImg,
    tracks: ["Life Sciences", "Orbital Infrastructure"],
    bio: "Dr. Bernd Rattenbacher leads operations at Biotesc, the Hochschule Luzern user support center coordinating life sciences experiments aboard the ISS. He brings decades of expertise in orbital biological research and mission operations.",
    session: "ISS Life Sciences Operations and User Support",
    linkedin: "https://www.linkedin.com/in/bernd-rattenbacher-579b6013b",
  },
  {
    slug: "cindy-follonier",
    name: "Dr. Cindy Follonier",
    title: "Life Sciences Researcher",
    organization: "SSIP",
    country: "Switzerland",
    image: cindyImg,
    tracks: ["Life Sciences"],
    bio: "Dr. Cindy Follonier contributes to Switzerland's space life sciences ecosystem, advancing biomedical research and applied experimentation relevant to long-duration human spaceflight and terrestrial healthcare translation.",
    session: "Biomedical Research for Human Spaceflight",
    linkedin: "https://www.linkedin.com/in/cindyfollonier",
  },
  {
    slug: "magdalena-herova",
    name: "Dr. Magdalena Herova",
    title: "Life Sciences Engineer, Biotesc",
    organization: "Biotesc, HSLU",
    country: "Switzerland",
    image: magdalenaImg,
    tracks: ["Life Sciences", "Advanced Manufacturing"],
    bio: "Dr. Magdalena Herova works at Biotesc, the HSLU user support center for ISS life sciences experiments, contributing to the design, integration and operation of biological payloads in orbit.",
    session: "Engineering Life Sciences Payloads for Orbit",
    linkedin: "https://www.linkedin.com/in/magdalenaherova",
  },
  {
    slug: "merve-erdem-burger",
    name: "Dr. Merve Erdem Burger",
    title: "Space Law Expert",
    organization: "Swiss Space Law Forum",
    country: "Switzerland",
    image: merveImg,
    tracks: ["Strategy & Policy"],
    bio: "Dr. Merve Erdem Burger is a space law expert with the Swiss Space Law Forum, working on the legal, regulatory and policy frameworks shaping the next orbital economy and international space governance.",
    session: "Space Law and the Orbital Economy",
    linkedin: "https://www.linkedin.com/in/merve-erdem-burger-40800b100",
  },
  {
    slug: "debraj-dasgupta",
    name: "Debraj Dasgupta",
    title: "Managing Director",
    organization: "Inventicia GmbH",
    country: "Switzerland",
    image: debrajImg,
    tracks: ["Life Sciences", "Strategy & Policy"],
    bio: "Debraj Dasgupta is Managing Director of Inventicia GmbH, a Basel-based strategy consulting firm operating at the intersection of life sciences, healthcare and emerging technologies. A global healthcare leader and startup board advisor, he supports investment firms, biopharma companies and innovation ecosystems with Switzerland-based partnering opportunities.",
    session: "Healthcare and Life Sciences in the Orbital Economy",
    linkedin: "https://www.linkedin.com/in/debrajdasgupta",
  },
  {
    slug: "george-weinmann",
    name: "George G. Weinmann",
    title: "Founder & CEO",
    organization: "Astroworks Ventures & Habspace",
    country: "United States",
    image: georgeWImg,
    tracks: ["Orbital Infrastructure", "Strategy & Policy"],
    bio: "George G. Weinmann is Founder of Astroworks Ventures, developing new space and aviation businesses. He previously held senior business leadership roles at Blue Origin across Strategy, Marketing and Sales, the Space Systems Development unit and the Orbital Reef commercial station program.",
    session: "Commercial Stations and the Next Orbital Economy",
    linkedin: "https://www.linkedin.com/in/georgeweinmann",
  },
  {
    slug: "max-busse-grawitz",
    name: "Max Erick Busse-Grawitz",
    title: "Technology Transfer Manager",
    organization: "maxon",
    country: "Switzerland",
    image: maxBGImg,
    tracks: ["Advanced Manufacturing", "Orbital Infrastructure"],
    bio: "Max Erick Busse-Grawitz is Technology Transfer Manager at maxon, the Swiss precision drive systems manufacturer powering mission-critical applications across aerospace, medical technology and industrial automation, including motion systems aboard NASA Mars rovers.",
    session: "Precision Drive Systems for Orbital and Planetary Missions",
    linkedin: "https://www.linkedin.com/in/maxerick",
  },
  {
    slug: "marc-biker",
    name: "Marc Biker",
    title: "Managing Director",
    organization: "Swiss Mechatronics",
    country: "Switzerland",
    image: marcImg,
    tracks: ["Advanced Manufacturing", "Orbital Infrastructure"],
    bio: "Marc Biker represents Swiss Mechatronics, the national industry association uniting Swiss companies and research institutions advancing mechatronic systems, precision engineering and integrated manufacturing technologies across aerospace, medtech and industrial automation.",
    session: "Swiss Mechatronics for Orbital Infrastructure",
    linkedin: "https://www.linkedin.com/in/marcbiker",
  },
  {
    slug: "jeff-hendrikse",
    name: "Jeff Hendrikse",
    title: "Co-Founder & CTO",
    organization: "ATMOS",
    country: "Germany",
    image: jeffImg,
    tracks: ["Orbital Infrastructure", "Advanced Manufacturing"],
    bio: "Jeff Hendrikse represents ATMOS, advancing return capsule technologies and in-space transportation systems that enable reliable recovery of payloads from orbit, a critical capability for the emerging orbital manufacturing and life sciences economy.",
    session: "Return Capsules and the Orbital Logistics Chain",
    linkedin: "https://www.linkedin.com/in/jeffhendrikse",
  },
  {
    slug: "yannis-ailianos",
    name: "Yannis Ailianos",
    title: "CEO",
    organization: "Swiss Fibertec",
    country: "Switzerland",
    image: yannisImg,
    tracks: ["Advanced Manufacturing", "Orbital Infrastructure"],
    bio: "Yannis Ailianos represents Swiss Fibertec, a Swiss specialist in advanced fiber technologies and precision composite solutions enabling next generation aerospace, orbital infrastructure and high performance industrial applications.",
    session: "Advanced Fiber Technologies for Orbital Infrastructure",
    linkedin: "https://www.linkedin.com/in/yannisailianos",
  },
  {
    slug: "yvonne-bemelmans",
    name: "Yvonne Bemelmans",
    title: "Master of Ceremonies, GOIS 2026",
    organization: "SSIP",
    country: "Switzerland",
    image: yvonneImg,
    tracks: ["Strategy & Policy", "Orbital Infrastructure"],
    bio: "Yvonne Bemelmans serves as Master of Ceremonies for the Global Orbital Infrastructure Summit 2026, guiding the executive program across two days. She brings senior leadership experience across the European orbital ecosystem, supporting strategic initiatives between deep-tech, industry and institutional partners.",
    session: "Master of Ceremonies, GOIS 2026 Program",
    linkedin: "https://www.linkedin.com/in/yvonnebemelmans",
  },
];

export const TRACKS: SpeakerTrack[] = [
  "Orbital Infrastructure",
  "Advanced Manufacturing",
  "Life Sciences",
  "Strategy & Policy",
];

export const getSpeaker = (slug: string) =>
  speakers.find((s) => s.slug === slug);
