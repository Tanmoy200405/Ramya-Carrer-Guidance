import { 
  FaBriefcase, 
  FaLaptopCode, 
  FaHeart, 
  FaMedkit, 
  FaGraduationCap, 
  FaGavel, 
  FaBuilding, 
  FaFlask, 
  FaUtensils, 
  FaPalette, 
  FaMicroscope,
  FaSeedling,
  FaBullhorn
} from "react-icons/fa";

// Import existing images
import busImg from "../assets/course_business.png";
import techImg from "../assets/course_tech.png";
import nurImg from "../assets/course_nursing.png";
import paraImg from "../assets/course_paramedical.png";

export const coursesData = [
  {
    id: "01",
    category: "MANAGEMENT",
    title: "BBA & MBA",
    desc: "Strategic leadership and business management pathways.",
    icon: FaBriefcase,
    image: busImg
  },
  {
    id: "02",
    category: "TECHNOLOGY",
    title: "BCA & B.Tech",
    desc: "Software engineering, data science, and core tech domains.",
    icon: FaLaptopCode,
    image: techImg
  },
  {
    id: "03",
    category: "NURSING",
    title: "B.Sc & GNM",
    desc: "Compassionate healthcare careers in premier nursing colleges.",
    icon: FaHeart,
    image: nurImg
  },
  {
    id: "04",
    category: "PARAMEDICAL",
    title: "Diploma & Degree",
    desc: "Allied health sciences and diagnostic technologies.",
    icon: FaMedkit,
    image: paraImg
  },
  {
    id: "05",
    category: "LEGAL",
    title: "LLB & B.A. LLB",
    desc: "Advocacy, corporate law, and legal consultancy.",
    icon: FaGavel,
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: "06",
    category: "PHARMACY",
    title: "B.Pharm & D.Pharm",
    desc: "Pharmaceutical research, industry, and clinical practice.",
    icon: FaFlask,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: "07",
    category: "ARCHITECTURE",
    title: "B.Arch",
    desc: "Urban planning, structural design, and spatial aesthetics.",
    icon: FaBuilding,
    image: "https://images.unsplash.com/photo-1487958449913-d927990664e4?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: "08",
    category: "HOSPITALITY",
    title: "Hotel Management",
    desc: "Global hospitality, catering, and tourism management.",
    icon: FaUtensils,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: "09",
    category: "DESIGN",
    title: "B.Des & BFA",
    desc: "Fashion, graphic, industrial design and fine arts.",
    icon: FaPalette,
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: "10",
    category: "MEDICAL",
    title: "MBBS & BDS",
    desc: "Excellence in medicine and dental surgical sciences.",
    icon: FaMicroscope,
    image: "https://images.unsplash.com/photo-1576091160550-217359f49f4c?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: "11",
    category: "AGRICULTURE",
    title: "B.Sc Agriculture",
    desc: "Sustainable farming, agritech, and soil sciences.",
    icon: FaSeedling,
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: "12",
    category: "MEDIA",
    title: "Mass Communication",
    desc: "Journalism, digital media, and public relations.",
    icon: FaBullhorn,
    image: "https://images.unsplash.com/photo-1495020689067-958852a7735e?auto=format&fit=crop&q=80&w=400&h=400"
  }
];