import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date)
}


export const posts = [
  {
    _createdAt: new Date('2023-05-15'),
    _id: 1,
    views: 55,
    author: { _id: 1, name: 'Ahmad', image: 'https://via.placeholder.com/50' },
    title: 'My Startup',
    description: 'My startup is a platform that connects entrepreneurs with investors.',
    image: 'https://www.brookings.edu/wp-content/uploads/2017/11/metro_20171121_tech-empowers-tech-polarizes-mark-muro.jpg',
    category: 'Tech',
  },
  {
    _createdAt: new Date('2023-06-20'),
    _id: 2,
    views: 128,
    author: { _id: 2, name: 'Sarah', image: 'https://via.placeholder.com/50' },
    title: 'Sustainable Living',
    description: 'How to reduce your carbon footprint with simple daily habits.',
    image: 'https://imageio.forbes.com/specials-images/imageserve/61d52d4e3a76ed81ac034ea8/The-10-Tech-Trends-That-Will-Transform-Our-World/960x0.jpg?format=jpg&width=1440',
    category: 'Lifestyle',
  }
];