import {
  IAmenity,
  IExpandGroup,
  IImageCard,
  IImportant,
  ILanguageOption,
  IVideoImage,
  IVideoLink,
} from '@/types';

export const languageOptions: ILanguageOption[] = [
  { name: 'English', code: 'en' },
  { name: 'Hindi', code: 'hi' },
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

export const disabledDates = [3, 10, 17, 24, 31];

export const shopPlayDineItems: IVideoLink[] = [
  { src: '/shop/shop-1.webp' },
  { src: '/shop/shop-2.webp' },
  { src: '/shop/shop-3.webp' },
];

export const bookingGroups: IExpandGroup[] = [
  {
    name: 'Group',
    color: '#008080AA',
    text: "Gather your friends, family, or colleagues and immerse yourselves in a shared experience of nature! Whether it's a corporate retreat, a family reunion, or a gathering with friends, our botanical garden offers group tours and customized activities to make your visit unforgettable. Enjoy guided tours, workshops, and team-building activities designed to bring people together while learning about the wonders of the plant world.",
    pdfLink: '/PDF/Group.pdf',
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
    pdfLink: '/PDF/Students.pdf',
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
    pdfLink: '/PDF/Senior-Citizens.pdf',
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
    pdfLink: '/PDF/Kids.pdf',
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
    pdfLink: '/PDF/Influencers.pdf',
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
    pdfLink: '/PDF/Nature-Enthusiasts.pdf',
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
  { name: 'Career', src: '/support/support-1.webp', link: '/about#team' },
  { name: 'Guidance', src: '/support/support-2.webp', link: '/about#team' },
  { name: 'Services', src: '/support/support-3.webp' },
  { name: 'Sponsorships & Donation', src: '/support/support-4.webp' },
  { name: 'Membership', src: '/support/support-5.webp' },
  { name: 'Updates', src: '/support/support-6.webp', link: '/#table' },
  { name: 'Special events', src: '/support/support-7.webp', link: '/#table' },
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
    src: '/activities/activity-1.webp',
    video: 'https://www.youtube.com/embed/A0S_TgvHuXM',
  },
  {
    name: 'Life time experiences',
    src: '/activities/activity-2.webp',
    video: 'https://www.youtube.com/embed/HS5ktxvKEKM',
  },
  {
    name: 'Relaxing & meditative Activities',
    src: '/activities/activity-3.webp',
    video: 'https://www.youtube.com/embed/X2-3ElZ5jgQ',
  },
  {
    name: 'Community forum',
    src: '/activities/activity-4.webp',
    video: 'https://www.youtube.com/embed/-zAoqZGn-dU',
  },
  {
    name: 'Nature Outing',
    src: '/activities/activity-5.webp',
    video: 'https://www.youtube.com/embed/cDLDitMuxTU',
  },
];

export const learnCards: IImageCard[] = [
  { name: 'Resource hub/library', src: '/learn/learn-1.webp' },
  { name: 'Learning programmes', src: '/learn/learn-2.webp' },
  { name: 'Internship & Fellowship', src: '/learn/learn-3.webp' },
];

export const galleryImages: string[] = [
  '/learn/learn-1.webp',
  '/learn/learn-2.webp',
  '/learn/learn-3.webp',
  '/shop/shop-1.webp',
  '/shop/shop-2.webp',
  '/shop/shop-3.webp',
  '/expand/group/group.png',
  '/expand/group/group-1.png',
  '/expand/group/group-2.png',
  '/expand/group/group-3.png',
  '/expand/group/group-4.png',
  '/expand/group/group-5.png',
  '/expand/group/group-6.png',
  '/expand/students/students.png',
  '/expand/students/students-1.png',
  '/expand/students/students-4.png',
  '/expand/students/students-5.png',
  '/expand/senior/senior.png',
  '/expand/senior/senior-1.png',
  '/expand/senior/senior-2.png',
  '/expand/senior/senior-4.png',
  '/expand/senior/senior-5.png',
  '/expand/kids/kids.png',
  '/expand/kids/kids-1.png',
  '/expand/kids/kids-2.png',
  '/expand/kids/kids-3.png',
  '/expand/kids/kids-4.png',
  '/expand/kids/kids-5.png',
  '/expand/kids/kids-6.png',
  '/expand/influencers/influencers-1.png',
  '/expand/influencers/influencers-2.png',
  '/expand/influencers/influencers-4.png',
  '/expand/influencers/influencers-5.png',
  '/expand/nature/nature.png',
  '/expand/nature/nature-1.png',
  '/expand/nature/nature-2.png',
  '/expand/nature/nature-3.png',
  '/expand/nature/nature-5.png',
  '/expand/nature/nature-6.png',
  '/glimpses/glimpses-1.webp',
  '/glimpses/glimpses-2.webp',
  '/glimpses/glimpses-3.webp',
  '/glimpses/glimpses-4.webp',
  '/glimpses/glimpses-5.webp',
  '/glimpses/glimpses-6.webp',
  '/glimpses/glimpses-7.webp',
  '/glimpses/glimpses-8.webp',
  '/glimpses/glimpses-9.webp',
  '/about/about-1.webp',
  '/about/about-2.webp',
  '/about/about-4.webp',
  '/wide-carousel/wide-carousel-1.webp',
  '/wide-carousel/wide-carousel-2.webp',
  '/wide-carousel/wide-carousel-3.webp',
  '/wide-carousel/wide-carousel-4.webp',
  '/wide-carousel/wide-carousel-5.webp',
  '/wide-carousel/wide-carousel-6.webp',
  '/wide-carousel/wide-carousel-7.webp',
];
