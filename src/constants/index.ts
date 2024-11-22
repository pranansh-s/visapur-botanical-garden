import {
  IAmenity,
  ICarouselItem,
  IExpandGroup,
  IImageCard,
  IImportant,
  ILanguageOption,
  INamedLink,
  IVideoImage,
  IVideoLink,
  IWideCarouselItem,
} from '@/types';

export const navbarLinks: INamedLink[] = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: 'https://botanicool.in/' },
  { name: 'About', href: '/about' },
  { name: 'Plan Your Visit', href: '/plan-your-visit' },
  { name: 'Things to Offer', href: '/plan-your-visit#things-to-offer' },
  { name: 'Support', href: '/support' },
  { name: 'Experience', href: 'https://booking.atalbotanicalgarden.com/tour/' },
];

export const languageOptions: ILanguageOption[] = [
  { name: 'English', code: 'en' },
  { name: 'Hindi', code: 'hi' },
];

export const socialLinks: INamedLink[] = [
  { name: 'instagram', href: 'https://www.instagram.com/mahaatalgarden/	' },
  {
    name: 'facebook',
    href: 'https://www.facebook.com/profile.php?id=61562737185919',
  },
  { name: 'linkedin', href: 'https://google.com' },
  { name: 'whatsapp', href: 'https://google.com' },
  {
    name: 'youtube',
    href: 'https://www.youtube.com/@SABVbotanicalgarden-xb8hw',
  },
  { name: 'twitter', href: 'https://x.com/mahaatalgarden' },
];

export const zoneItems: ICarouselItem[] = [
  { src: '/about/about-1.jpg', title: 'Evolution Park' },
  { src: '/about/about-2.jpg', title: 'Picture Spot' },
  { src: '/about/about-3.jpg', title: 'Taxidermy Museum' },
  { src: '/about/about-4.jpg', title: 'Recreation Zone' },
];

export const glimpsesItems: ICarouselItem[] = [
  { src: '/glimpses/glimpses-1.JPG' },
  { src: '/glimpses/glimpses-2.JPG' },
  { src: '/glimpses/glimpses-3.JPG' },
  { src: '/glimpses/glimpses-4.JPG' },
  { src: '/glimpses/glimpses-5.JPG' },
  { src: '/glimpses/glimpses-6.JPG' },
  { src: '/glimpses/glimpses-7.JPG' },
  { src: '/glimpses/glimpses-8.JPG' },
  { src: '/glimpses/glimpses-9.JPG' },
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
  { src: '/shop/shop-1.png' },
  { src: '/shop/shop-2.png' },
  { src: '/shop/shop-3.png' },
];

export const instagramPosts: ICarouselItem[] = [
  { src: 'C8e02O1tPcE' },
  { src: 'DClIq_vTfKC' },
  { src: 'DCidBCFiJ4U' },
  { src: 'DCf41xaT002' },
  { src: 'DCdQJJsid8B' },
  { src: 'DCQrV5xtuL7' },
  { src: 'DCN_L3Nul_w' },
];

export const bookingGroups: IExpandGroup[] = [
  {
    name: 'Group',
    color: '#008080AA',
    text: "Gather your friends, family, or colleagues and immerse yourselves in a shared experience of nature! Whether it's a corporate retreat, a family reunion, or a gathering with friends, our botanical garden offers group tours and customized activities to make your visit unforgettable. Enjoy guided tours, workshops, and team-building activities designed to bring people together while learning about the wonders of the plant world.",
    images: [
      '/expand/group/group.png',
      '/expand/group/group-1.png',
      '/expand/group/group-2.png',
      '/expand/group/group-3.png',
      '/expand/group/group-4.png',
      '/expand/group/group-5.png',
      '/expand/group/group-6.png',
    ],
  },
  {
    name: 'Students',
    color: '#FF5E00AA',
    text: 'Our botanical garden is the perfect outdoor classroom for curious minds! Students can explore a living laboratory filled with vibrant ecosystems, rare species, and sustainable gardening practices. Our educational programs, guided by experts, align with school curriculum and provide a hands-on, interactive learning experience. From botany to environmental science, students will leave inspired and informed.',
    images: [
      '/expand/students/students.png',
      '/expand/students/students-1.png',
      '/expand/students/students-2.png',
      '/expand/students/students-3.png',
      '/expand/students/students-4.png',
      '/expand/students/students-5.png',
      '/expand/students/students-6.png',
    ],
  },
  {
    name: 'Senior Citizens',
    color: '#C6C1FFAA',
    text: "Embrace nature's tranquility at your own pace. Our garden offers peaceful walking paths, shaded benches, and serene settings perfect for reflection and relaxation. Seniors can take a walk into our medicinal and sit, relax inside our open butterfly gardens tours or simply enjoy the beauty of the gardens. It's a place to unwind, reconnect with nature, and find solace in the rhythms of the natural world.",
    images: [
      '/expand/senior/senior.png',
      '/expand/senior/senior-1.png',
      '/expand/senior/senior-2.png',
      '/expand/senior/senior-3.png',
      '/expand/senior/senior-4.png',
      '/expand/senior/senior-5.png',
      '/expand/senior/senior-6.png',
    ],
  },
  {
    name: 'Kids',
    color: '#FFC000AA',
    text: "Watch your little ones' imaginations come to life! The garden is a world of discovery, with plenty of fun and interactive experiences tailored just for kids. From scavenger hunts to hands-on workshops, our children's zone is designed to spark curiosity and a love for nature. Adventure awaits at every turn—perfect for young explorers eager to learn about plants and ecosystems.",
    images: [
      '/expand/kids/kids.png',
      '/expand/kids/kids-1.png',
      '/expand/kids/kids-2.png',
      '/expand/kids/kids-3.png',
      '/expand/kids/kids-4.png',
      '/expand/kids/kids-5.png',
      '/expand/kids/kids-6.png',
    ],
  },
  {
    name: 'Influencers',
    color: '#DEA193AA',
    text: "Looking for the perfect backdrop for your content? Our botanical garden offers breathtaking scenery, vibrant flowers, and picturesque landscapes that will take your social media feed to the next level. Whether you're shooting lifestyle content, promoting sustainability, or simply capturing beautiful moments, there's no shortage of inspiration here. Tag us in your photos for a chance to be featured!",
    images: [
      '/expand/influencers/influencers.png',
      '/expand/influencers/influencers-1.png',
      '/expand/influencers/influencers-2.png',
      '/expand/influencers/influencers-3.png',
      '/expand/influencers/influencers-4.png',
      '/expand/influencers/influencers-5.png',
      '/expand/influencers/influencers-6.png',
    ],
  },
  {
    name: 'Nature Enthusiasts',
    color: '#005E03AA',
    text: "Dive deeper into your love for nature. Our botanical garden is a haven for plant lovers, offering a rich variety of rare species, themed gardens, and seasonal blooms. Join specialized tours, attend horticulture workshops, or simply wander through our diverse landscapes. Whether you're an avid gardener or just enjoy being in the presence of greenery, there's something here to feed your passion for the natural world.",
    images: [
      '/expand/nature/nature.png',
      '/expand/nature/nature-1.png',
      '/expand/nature/nature-2.png',
      '/expand/nature/nature-3.png',
      '/expand/nature/nature-4.png',
      '/expand/nature/nature-5.png',
      '/expand/nature/nature-6.png',
    ],
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
  { name: 'Shop', href: 'https://botanicool.in/' },
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

export const activities: IVideoImage[] = [
  {
    name: 'Environmental Awareness',
    src: '/activities/activity-1.png',
    video: 'https://www.youtube.com/shorts/A0S_TgvHuXM',
  },
  {
    name: 'Life time experiences',
    src: '/activities/activity-2.png',
    video: 'https://www.youtube.com/shorts/HS5ktxvKEKM',
  },
  {
    name: 'Relaxing & meditative Activities',
    src: '/activities/activity-3.png',
    video: 'https://www.youtube.com/shorts/X2-3ElZ5jgQ',
  },
  {
    name: 'Community forum',
    src: '/activities/activity-4.png',
    video: 'https://www.youtube.com/shorts/-zAoqZGn-dU',
  },
  {
    name: 'Nature Outing',
    src: '/activities/activity-5.png',
    video: 'https://www.youtube.com/shorts/cDLDitMuxTU',
  },
];

export const learnCards: IImageCard[] = [
  { name: 'Resource hub/library', src: '/learn/learn-1.png' },
  { name: 'Learning programmes', src: '/learn/learn-2.png' },
  { name: 'Internship & Fellowship', src: '/learn/learn-3.png' },
];

export const wideCarouselItems: IWideCarouselItem[] = [
  {
    imageSrc: '/wide-carousel/wide-carousel-1.jpeg',
    title: 'Experience the Magic of Butterfly',
    direction: '',
    description: 'Spot a kaleidoscope of butterfly varieties in vibrant hues!',
  },
  {
    imageSrc: '/wide-carousel/wide-carousel-2.jpg',
    title: 'Diverse Flower Varieties',
    direction: '',
    description:
      'Explore our stunning collection of rare and exotic flowers from around the globe.',
  },
  {
    imageSrc: '/wide-carousel/wide-carousel-3.jpg',
    title: 'Discover Fruits and Veggies',
    direction: '',
    description:
      'Unlock the power of nature by learning about the healing benefits of different fruits, veggies, and seeds!',
  },
  {
    imageSrc: '/wide-carousel/wide-carousel-4.jpg',
    title: 'Discover the Desert',
    direction: '',
    description:
      'From towering giants to tiny wonders, explore the diverse world of cacti!',
  },
  {
    imageSrc: '/wide-carousel/wide-carousel-5.jpg',
    title: 'Explore Aquarium',
    direction: '',
    description:
      'Embark on an underwater adventure and explore the vibrant world of the aquarium',
  },
  {
    imageSrc: '/wide-carousel/wide-carousel-6.jpg',
    title: 'Rich History of Chandrapur',
    direction: '',
    description:
      'Unlock the rich history of Chandrapur and explore its cultural heritage and ancient landmarks',
  },
  {
    imageSrc: '/wide-carousel/wide-carousel-7.jpg',
    title: 'Discover Fruits and Veggies',
    direction: '',
    description:
      'Unlock the power of nature by learning about the healing benefits of different fruits, veggies, and seeds!',
  },
];

export const burgerLinks: INamedLink[] = [
  {
    name: 'FAQ',
    href: '/faq',
  },
  {
    name: 'Edutainment Tour',
    href: '/faq',
  },
  {
    name: 'Blog',
    href: '/faq',
  },
  {
    name: 'Awards',
    href: '/faq',
  },
];

export const otherBurgerLinks: INamedLink[] = [
  {
    href: '/terms-and-conditions',
    name: 'Terms & Conditions',
  },
  {
    href: '/privacy-policy',
    name: 'Privacy Policy',
  },
  {
    href: '/sitemap',
    name: 'Sitemap',
  },
  {
    href: '/work-with-us',
    name: 'Work with us',
  },
  {
    href: '/collaborations',
    name: 'Collaborations',
  },
  {
    href: '/tenders',
    name: 'Tenders',
  },
];

export const teamMembers: ICarouselItem[] = [
  {
    src: '/team/team-1.png',
    title: 'MAYANK FALWARIA',
    subText: '(DIGITAL MARKETER/ SOCIAL MEDIA MANAGER)',
  },
  {
    src: '/team/team-6.png',
    title: 'Bhairavi Bopardikar',
    subText: '(EDUCATION OFFICER)',
  },
  {
    src: '/team/team-3.png',
    title: 'PAVANKUMAR JONG',
    subText: '(Assistant Conservator of Forest)',
  },
  {
    src: '/team/anon.png',
    title: 'SWETHA BODDU',
    subText: '(Deputy Conservator of Forests)',
  },
  {
    src: '/team/anon.png',
    title: 'PRAKASH SUDHAKAR ZADE',
    subText: '(RANGE FOREST OFFICER)',
  },
  {
    src: '/team/anon.png',
    title: 'RAMSOCHA SURYABHAN YADAV',
    subText: '(FORESTER)',
  },
  {
    src: '/team/anon.png',
    title: 'RAKESH RAJARAM SHIVANKAR',
    subText: '(FOREST GUARD)',
  },
  {
    src: '/team/anon.png',
    title: 'MANIKA PANDURANG ANKADE',
    subText: '(FOREST GUARD)',
  },
  {
    src: '/team/team-2.png',
    title: 'DEEKSHA KALRA',
    subText: '(PRODUCT DESIGNER)',
  },
  {
    src: '/team/team-4.png',
    title: 'PRATEEK KUSHWAHA',
    subText: '(DESIGN MANAGER)',
  },
  {
    src: '/team/team-5.png',
    title: 'ASMITA VERMA',
    subText: '(UI/ UX DESIGNER)',
  },
  {
    src: '/team/anon.png',
    title: 'SUKANYA DAS',
    subText: '(PRODUCT DESIGNER)',
  },
  {
    src: '/team/anon.png',
    title: 'ADITYA LAKHMAPURE',
    subText: '(GAME DESIGNER)',
  },
];
