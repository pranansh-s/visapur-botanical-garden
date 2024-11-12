import {
  IAmenity,
  ICarouselItem,
  IExpandGroup,
  IImageCard,
  IImportant,
  ILanguageOption,
  ILocation,
  INamedLink,
  IVideoLink,
  IWideCarouselItem,
} from '@/types';

export const navbarLinks: INamedLink[] = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/shop' },
  { name: 'About', href: '/about' },
  { name: 'Plan Your Visit', href: '/plan-your-visit' },
  { name: 'Things to Offer', href: '/things-to-offer' },
  { name: 'Support', href: '/support' },
  { name: 'Experience', href: '/experience' },
];

export const languageOptions: ILanguageOption[] = [
  { name: 'English', code: 'en' },
  { name: 'Hindi', code: 'hi' },
];

export const socialLinks: INamedLink[] = [
  { name: 'instagram', href: 'https://google.com' },
  { name: 'facebook', href: 'https://google.com' },
  { name: 'linkedin', href: 'https://google.com' },
  { name: 'whatsapp', href: 'https://google.com' },
  { name: 'youtube', href: 'https://google.com' },
  { name: 'twitter', href: 'https://google.com' },
];

export const zoneItems: ICarouselItem[] = [
  { src: '/about/about-1.png', title: 'The Recreation Zone' },
  { src: '/about/about-1.png', title: 'The Zone 1' },
  { src: '/about/about-1.png', title: 'The Recreation 2' },
  { src: '/about/about-1.png', title: 'The Recreation 3' },
];

export const glimpsesItems: ICarouselItem[] = [
  { src: '/glimpses/glimpses-1.png' },
  { src: '/glimpses/glimpses-2.png' },
  { src: '/glimpses/glimpses-3.png' },
];

export const amenities: IAmenity[] = [
  { name: 'Cafe', icon: '/amenities/food.svg' },
  { name: 'Washroom', icon: '/amenities/washroom.svg' },
  { name: 'Parking', icon: '/amenities/parking.svg' },
  { name: 'Buggy Stand', icon: '/amenities/buggy.svg' },
  { name: 'Restaurant', icon: '/amenities/restaurant.svg' },
  { name: 'Water Coolers', icon: '/amenities/water.svg' },
  { name: 'Feeding Room', icon: '/amenities/feeding.svg' },
  { name: 'Souvenir Shop', icon: '/amenities/gift.svg' },
  { name: 'Rest Shelters', icon: '/amenities/rest.svg' },
  { name: 'Guides', icon: '/amenities/guide.svg' },
  { name: 'Ticket Counter', icon: '/amenities/ticket.svg' },
  { name: 'Play Area', icon: '/amenities/play.svg' },
  { name: 'Water Fountains', icon: '/amenities/fountain.svg' },
];

export const disabledDates = [5, 10, 15, 21];

export const shopPlayDineItems: IVideoLink[] = [
  { src: '/shop/shop-1.mp4' },
  { src: '/shop/shop-2.mp4' },
  { src: '/shop/shop-3.mp4' },
];

export const instagramPosts: ICarouselItem[] = [
  { src: 'DB81k_0S9AV' },
  { src: 'DB81k_0S9AV' },
  { src: 'DB81k_0S9AV' },
  { src: 'DB81k_0S9AV' },
  { src: 'DB81k_0S9AV' },
  { src: 'DB81k_0S9AV' },
  { src: 'DB81k_0S9AV' },
];

export const bookingGroups: IExpandGroup[] = [
  {
    name: 'Group',
    color: '#008080AA',
    text: "Gather your friends, family, or colleagues and immerse yourselves in a shared experience of nature! Whether it's a corporate retreat, a family reunion, or a gathering with friends, our botanical garden offers group tours and customized activities to make your visit unforgettable. Enjoy guided tours, workshops, and team-building activities designed to bring people together while learning about the wonders of the plant world.",
    images: [],
  },
  {
    name: 'Students',
    color: '#FF5E00AA',
    text: 'Our botanical garden is the perfect outdoor classroom for curious minds! Students can explore a living laboratory filled with vibrant ecosystems, rare species, and sustainable gardening practices. Our educational programs, guided by experts, align with school curriculum and provide a hands-on, interactive learning experience. From botany to environmental science, students will leave inspired and informed.',
    images: [],
  },
  {
    name: 'Senior Citizens',
    color: '#C6C1FFAA',
    text: "Embrace nature's tranquility at your own pace. Our garden offers peaceful walking paths, shaded benches, and serene settings perfect for reflection and relaxation. Seniors can take a walk into our medicinal and sit, relax inside our open butterfly gardens tours or simply enjoy the beauty of the gardens. It's a place to unwind, reconnect with nature, and find solace in the rhythms of the natural world.",
    images: [],
  },
  {
    name: 'Kids',
    color: '#FFC000AA',
    text: "Watch your little ones' imaginations come to life! The garden is a world of discovery, with plenty of fun and interactive experiences tailored just for kids. From scavenger hunts to hands-on workshops, our children's zone is designed to spark curiosity and a love for nature. Adventure awaits at every turn—perfect for young explorers eager to learn about plants and ecosystems.",
    images: [],
  },
  {
    name: 'Influencers',
    color: '#DEA193AA',
    text: "Looking for the perfect backdrop for your content? Our botanical garden offers breathtaking scenery, vibrant flowers, and picturesque landscapes that will take your social media feed to the next level. Whether you're shooting lifestyle content, promoting sustainability, or simply capturing beautiful moments, there's no shortage of inspiration here. Tag us in your photos for a chance to be featured!",
    images: [],
  },
  {
    name: 'Nature Enthusiasts',
    color: '#005E03AA',
    text: "Dive deeper into your love for nature. Our botanical garden is a haven for plant lovers, offering a rich variety of rare species, themed gardens, and seasonal blooms. Join specialized tours, attend horticulture workshops, or simply wander through our diverse landscapes. Whether you're an avid gardener or just enjoy being in the presence of greenery, there's something here to feed your passion for the natural world.",
    images: [],
  },
];

export const support: IImageCard[] = [
  { name: 'Career', src: '/support/support-1.png' },
  { name: 'Guidance', src: '/support/support-2.png' },
  { name: 'Services', src: '/support/support-3.png' },
  { name: 'Sponsorships & Donation', src: '/support/support-4.png' },
  { name: 'Membership', src: '/support/support-5.png' },
  { name: 'Updates', src: '/support/support-6.png' },
  { name: 'Special events', src: '/support/support-7.png' },
];

export const quickLinks: INamedLink[] = [
  { name: 'Home', href: '/' },
  { name: 'BLOG', href: '/' },
  { name: 'About us', href: '/' },
  { name: 'Awards', href: '/' },
  { name: 'Attraction points', href: '/' },
  { name: 'Terms & conditions', href: '/' },
  { name: 'Events', href: '/' },
  { name: 'FAQs', href: '/' },
  { name: 'Edutainment Tour', href: '/' },
  { name: 'Privacy Policy', href: '/' },
  { name: 'Shop', href: '/' },
  { name: 'Sitemap', href: '/' },
  { name: 'Galleries', href: '/' },
  { name: 'Contact', href: '/' },
];

export const careerLinks: INamedLink[] = [
  { name: 'Work with us', href: '/' },
  { name: 'Collaborations', href: '/' },
  { name: 'Tenders', href: '/' },
];

export const importants: IImportant[] = [
  { icon: '/icons/closed.svg', text: 'Closed on', body: 'Tuesday' },
  { icon: '/icons/alarm.svg', text: 'Timings', body: '10:00 AM - 6:00 PM' },
  {
    icon: '/icons/fast-food.svg',
    text: 'Restaurant',
    body: '10:00 AM - 11:00 PM',
  },
  { icon: '/icons/place.svg', text: "Let's meet", body: 'Direction' },
];

export const activities: IImageCard[] = [
  { name: 'Environmental Awareness', src: '/activities/activity-1.png' },
  { name: 'Life time experiences', src: '/activities/activity-2.png' },
  {
    name: 'Relaxing & meditative Activities',
    src: '/activities/activity-3.png',
  },
  { name: 'Community forum', src: '/activities/activity-4.png' },
  { name: 'Nature Outing', src: '/activities/activity-5.png' },
];

export const learnCards: IImageCard[] = [
  { name: 'Resource hub/library', src: '/learn/learn-1.png' },
  { name: 'Learning programmes', src: '/learn/learn-2.png' },
  { name: 'Internship & Fellowship', src: '/learn/learn-3.png' },
];

export const wideCarouselItems: IWideCarouselItem[] = [
  {
    imageSrc: '/wide-carousel-1.png',
    title: 'Rare and Exotic Plants',
    direction: '',
    description:
      'Discover our extensive collection of rare and exotic plants from around the world.',
  },
  {
    imageSrc: '/wide-carousel-1.png',
    title: 'Botanical Wonders',
    direction: '',
    description:
      'Explore the beauty and diversity of plants from different habitats and climates.',
  },
];
