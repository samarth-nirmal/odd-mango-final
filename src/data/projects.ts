import { Project, StudioInfo } from '../types';

// Hero Videos from src/assets/Hero Videos
import ashianaAmodhVideo from '../assets/Hero Videos/Ashiana Amodh.mp4';
import atmosphereRetailAdVideo from '../assets/Hero Videos/Atmosphere Retail Ad.mp4';
import avc03Video from '../assets/Hero Videos/Avc For Website 03.mp4';
import avc04Video from '../assets/Hero Videos/Avc For Website 04.mp4';
import avc05Video from '../assets/Hero Videos/Avc For Website 05.mp4';
import avicoreVideo from '../assets/Hero Videos/Avicore.mp4';
import cineSanskritiTourVideo from '../assets/Hero Videos/Cine Sanskriti Tour.mp4';
import loopVideo from '../assets/Hero Videos/Loop.mp4';
import oceanMuseVideo from '../assets/Hero Videos/Ocean Muse  (1).mp4';
import restrauntTourReelVideo from '../assets/Hero Videos/Restraunt Tour Reel.mp4';

// Hero Covers from src/assets/Hero Covers
import ashianaAmodhCover from '../assets/Hero Covers/ashiana_amodh_cover.jpg';
import atmosphereRetailAdCover from '../assets/Hero Covers/atmosphere_retail_ad_cover.jpg';
import avc03Cover from '../assets/Hero Covers/avc_03_cover.jpg';
import avc04Cover from '../assets/Hero Covers/avc_04_cover.jpg';
import avc05Cover from '../assets/Hero Covers/avc_05_cover.jpg';
import avicoreCover from '../assets/Hero Covers/avicore_cover.jpg';
import cineSanskritiTourCover from '../assets/Hero Covers/cine_sanskriti_cover.jpg';
import loopCover from '../assets/Hero Covers/loop_cover.jpg';
import oceanMuseCover from '../assets/Hero Covers/ocean_muse_cover.jpg';
import restrauntTourReelCover from '../assets/Hero Covers/restraunt_tour_cover.jpg';

export const STUDIO_INFO: StudioInfo = {
  title: 'ODD MANGO',
  tagline: 'documenting emotion, movement and meaning.',
  bio: 'A boutique production studio with unyielding passion for storytelling. Photography and film documenting emotion, movement and meaning — for brands and culture.',
  since: '2016',
  location: 'Pune, Maharashtra',
  email: 'oddmangomedia@gmail.com',
  phone: '+91 93706 02824',
  instagram: '@oddmango',
  services: [
    'Commercial Photography',
    'Film Production & Direction',
    'Fashion & Editorial',
    'Brand Campaigns',
    'Events & Cultural Moments',
    'Art Direction & Color Grading'
  ],
  trustedClients: [
    { name: 'Aston Martin', slug: 'aston-martin', category: 'Automotive' },
    { name: 'Vans', slug: 'vans', category: 'Skate & Street' },
    { name: 'Under Armour', slug: 'under-armour', category: 'Performance' },
    { name: 'Nike', slug: 'nike', category: 'Sportswear' },
    { name: 'Adidas', slug: 'adidas', category: 'Sportswear' },
    { name: 'Puma', slug: 'puma', category: 'Sportswear' },
    { name: 'Netflix', slug: 'netflix', category: 'Entertainment' },
    { name: 'Red Bull', slug: 'redbull', category: 'Beverage & Culture' },
    { name: 'Crocs', slug: 'crocs', category: 'Footwear' },
    { name: 'New Balance', slug: 'new-balance', category: 'Footwear' },
    { name: 'Glenfiddich', slug: 'glenfiddich', category: 'Luxury Spirits' },
    { name: 'Johnnie Walker', slug: 'johnnie-walker', category: 'Luxury Spirits' },
    { name: 'Maybelline', slug: 'maybelline', category: 'Beauty' },
    { name: 'Fujifilm', slug: 'fujifilm', category: 'Imaging' }
  ]
};

export interface TeamMember {
  name: string;
  role: string;
  email: string;
  phone?: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Omkar Janvekar',
    role: 'Founder & Creative Director',
    email: 'oddmangomedia@gmail.com',
    phone: '+91 93706 02824'
  }
];

export const PROJECTS: Project[] = [
  // 1. Loop
  {
    id: '1',
    slug: 'loop',
    name: 'Loop',
    client: 'Odd Mango Motion',
    type: 'motion',
    tag: 'campaign',
    count: 18,
    duration: 17,
    image: loopCover,
    video: loopVideo,
    gallery: [loopCover],
    alt: 'Loop cinematic video sequence exploring movement and light dynamics',
    description: 'A rhythmic visual study exploring movement, urban cadence, and light dynamics.',
    meta: {
      camera: 'ARRI Alexa Mini LF',
      lens: 'Cooke Anamorphic /i 40mm',
      aperture: 'T2.3',
      shutter: '1/48s',
      iso: '800',
      year: '2024',
      location: 'Production Studio'
    }
  },
  // 2. Cine Sanskriti Tour
  {
    id: '2',
    slug: 'cine-sanskriti-tour',
    name: 'Cine Sanskriti Tour',
    client: 'Cine Sanskriti',
    type: 'motion',
    tag: 'events',
    count: 14,
    duration: 15,
    image: cineSanskritiTourCover,
    video: cineSanskritiTourVideo,
    gallery: [cineSanskritiTourCover],
    alt: 'Cine Sanskriti Tour cinematic showcase capturing cultural essence and visual depth',
    description: 'Cinematic journey through cultural landscapes, rich textures and vibrant live movement.',
    meta: {
      camera: 'Sony FX6',
      lens: 'Sony GM 24-70mm f/2.8',
      aperture: 'f/2.8',
      shutter: '1/50s',
      iso: '1600',
      year: '2024',
      location: 'Cultural Tour'
    }
  },
  // 3. Ocean Muse
  {
    id: '3',
    slug: 'ocean-muse',
    name: 'Ocean Muse',
    client: 'Ocean Muse',
    type: 'motion',
    tag: 'editorial',
    count: 16,
    duration: 30,
    image: oceanMuseCover,
    video: oceanMuseVideo,
    gallery: [oceanMuseCover],
    alt: 'Ocean Muse ethereal motion study and serene aquatic color grading',
    description: 'Deep resonant flow, ocean currents and poetic visual stillness.',
    meta: {
      camera: 'RED Komodo 6K',
      lens: 'Canon Cine-Servo 17-120mm',
      aperture: 'T2.95',
      shutter: '1/48s',
      iso: '800',
      year: '2024',
      location: 'Coastal Reserve'
    }
  },
  // 4. Ashiana Amodh
  {
    id: '4',
    slug: 'ashiana-amodh',
    name: 'Ashiana Amodh',
    client: 'Ashiana Amodh',
    type: 'motion',
    tag: 'commercial',
    count: 12,
    duration: 17,
    image: ashianaAmodhCover,
    video: ashianaAmodhVideo,
    gallery: [ashianaAmodhCover],
    alt: 'Ashiana Amodh luxury architectural and design motion film',
    description: 'Architectural serenity and luxurious spatial design captured through high-definition motion.',
    meta: {
      camera: 'RED V-Raptor 8K VV',
      lens: 'Leitz Hugo 50mm T1.5',
      aperture: 'T2.0',
      shutter: '1/48s',
      iso: '800',
      year: '2024',
      location: 'Ashiana Amodh Estate'
    }
  },
  // 5. Atmosphere Retail Ad
  {
    id: '5',
    slug: 'atmosphere-retail-ad',
    name: 'Atmosphere Retail Ad',
    client: 'Atmosphere',
    type: 'motion',
    tag: 'commercial',
    count: 15,
    duration: 102,
    image: atmosphereRetailAdCover,
    video: atmosphereRetailAdVideo,
    gallery: [atmosphereRetailAdCover],
    alt: 'Atmosphere Retail Ad commercial campaign capturing architectural ambiance and lifestyle',
    description: 'Expansive commercial direction highlighting luxury retail architecture, daylight interaction, and curated consumer experience.',
    meta: {
      camera: 'ARRI Alexa Mini LF',
      lens: 'Cooke S4/i 32mm',
      aperture: 'T2.0',
      shutter: '1/48s',
      iso: '800',
      year: '2024',
      location: 'Retail Flagship'
    }
  },
  // 6. Restaurant Tour Reel
  {
    id: '6',
    slug: 'restraunt-tour-reel',
    name: 'Restaurant Tour Reel',
    client: 'Hospitality & Dining',
    type: 'motion',
    tag: 'commercial',
    count: 11,
    duration: 18,
    image: restrauntTourReelCover,
    video: restrauntTourReelVideo,
    gallery: [restrauntTourReelCover],
    alt: 'Fast-cut culinary motion sizzle reel and restaurant ambience tour',
    description: 'Dynamic pacing, culinary artistry, and vibrant restaurant hospitality captured on film.',
    meta: {
      camera: 'Phantom Flex4K',
      lens: 'Laowa 24mm T14 2X PeriProbe',
      aperture: 'T14',
      shutter: '1/2000s (1000fps)',
      iso: '1600',
      year: '2024',
      location: 'Culinary District'
    }
  },
  // 7. Avicore
  {
    id: '7',
    slug: 'avicore',
    name: 'Avicore',
    client: 'Avicore Dynamics',
    type: 'motion',
    tag: 'commercial',
    count: 9,
    duration: 11,
    image: avicoreCover,
    video: avicoreVideo,
    gallery: [avicoreCover],
    alt: 'Avicore motion showcase exploring tactile craft and modern visual energy',
    description: 'High-octane visual identity piece exploring precision performance, kinetic momentum, and modern digital craft.',
    meta: {
      camera: 'RED Komodo 6K',
      lens: 'Canon Cine-Servo 17-120mm',
      aperture: 'T2.8',
      shutter: '1/50s',
      iso: '800',
      year: '2024',
      location: 'Innovation Hub'
    }
  },
  // 8. AVC Campaign 03
  {
    id: '8',
    slug: 'avc-03',
    name: 'AVC Campaign 03',
    client: 'AVC Studios',
    type: 'motion',
    tag: 'campaign',
    count: 12,
    duration: 32,
    image: avc03Cover,
    video: avc03Video,
    gallery: [avc03Cover],
    alt: 'AVC creative direction and cinematic brand campaign',
    description: 'An immersive cinematic brand narrative showcasing modern tailoring, evocative lighting, and focused pacing.',
    meta: {
      camera: 'Sony FX6',
      lens: 'Sony GM 24-70mm f/2.8',
      aperture: 'f/2.8',
      shutter: '1/48s',
      iso: '1250',
      year: '2024',
      location: 'Metropolitan Soundstage'
    }
  },
  // 9. AVC Movement 04
  {
    id: '9',
    slug: 'avc-04',
    name: 'AVC Movement 04',
    client: 'AVC Studios',
    type: 'motion',
    tag: 'editorial',
    count: 8,
    duration: 10,
    image: avc04Cover,
    video: avc04Video,
    gallery: [avc04Cover],
    alt: 'AVC Movement dynamic editorial short exploring form and rhythm',
    description: 'Fluid choreography meets high-contrast cinematography in a focused exploration of human silhouette and form.',
    meta: {
      camera: 'Leica SL2-S',
      lens: 'APO-Summicron-SL 50mm',
      aperture: 'f/2.0',
      shutter: '1/50s',
      iso: '640',
      year: '2024',
      location: 'Concrete Warehouse'
    }
  },
  // 10. AVC Series 05
  {
    id: '10',
    slug: 'avc-05',
    name: 'AVC Series 05',
    client: 'AVC Studios',
    type: 'motion',
    tag: 'campaign',
    count: 10,
    duration: 10,
    image: avc05Cover,
    video: avc05Video,
    gallery: [avc05Cover],
    alt: 'AVC Series concluding high-impact cinematic visual vignette',
    description: 'Expressive framing, bold saturation, and contemporary visual syntax highlighting avant-garde urban motion.',
    meta: {
      camera: 'ARRI Amira',
      lens: 'Zeiss Super Speed 25mm T1.3',
      aperture: 'T1.8',
      shutter: '1/48s',
      iso: '800',
      year: '2024',
      location: 'Downtown Rooftop'
    }
  }
];
