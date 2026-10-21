// All portfolio content lives here. Edit this file to update the site.
import {
  SiBootstrap, SiCss, SiExpress, SiFirebase, SiGit, SiGithub, SiHtml5, SiJavascript,
  SiMongodb, SiMysql, SiNextdotjs, SiNodedotjs, SiPhp, SiReact, SiTailwindcss, SiTypescript,
} from 'react-icons/si'
import { TbApi } from 'react-icons/tb'
import { FaDiscord, FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'

// Resolves a file in public/images regardless of where the site is hosted.
export const img = (path) => `${import.meta.env.BASE_URL}images/${path}`

export const profile = {
  name: 'Jairus Carl F. Esteban',
  firstName: 'Jairus Carl F.',
  lastName: 'Esteban',
  role: 'Full Stack Developer',
  tagline: 'Building digital experiences with code, creativity, and a healthy fear of semicolons',
  intro:
    "IT student at Pamantasan ng Lungsod ng Valenzuela. I build responsive web apps, think in systems, and believe knowing why something works matters as much as knowing how. My code is clean. My sleep schedule? We don't talk about that.",
  photo: img('profile/professional.jpg'),
  email: 'jairuscarlesteban@gmail.com',
  phone: '+63 918 607 6497',
  location: 'Valenzuela, Philippines',
  school: 'BSIT, Pamantasan ng Lungsod ng Valenzuela',
}

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/certificates', label: 'Certificates' },
  { to: '/contact', label: 'Contact' },
]

export const about = [
  "I'm an Information Technology student at Pamantasan ng Lungsod ng Valenzuela. My tech story started in senior high school, where I specialized in ICT, completed a work immersion program for real industry experience, and earned my TESDA NC II. Basically, I've been fixing things (and occasionally breaking them on purpose) for a while now.",
  "I also have a soft spot for leadership roles. I served as an officer in the Citizens Advancement Training (CAT) in senior high school, then joined the Naval Reserve Officers' Training Corps (NROTC) in college. It taught me leadership, teamwork, and how to look fully awake at 5 AM, which is honestly my most underrated skill.",
  "When I'm not coding, I'm at the gym. It keeps me disciplined, consistent, and mentally tough. Turns out progressive overload works on code too: add a little more every day. So yes, I can carry your backend and your groceries.",
  "I'm always leveling up, both technically and personally, on my way to becoming a well-rounded IT professional. The kind your team is glad to have around, and not just because I fix the Wi-Fi.",
]

export const skills = [
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: SiCss, color: '#1572B6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'currentColor' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
  { name: 'Express.js', icon: SiExpress, color: 'currentColor' },
  { name: 'PHP', icon: SiPhp, color: '#777BB4' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'GitHub', icon: SiGithub, color: 'currentColor' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  { name: 'REST APIs', icon: TbApi, color: '#f7253d' },
]

export const projects = [
  {
    title: 'Tambayan sa Roblox',
    description: 'A social hangout game on Roblox where friends gather and chill in a recreated local neighborhood. Tambay culture, now with better graphics.',
    image: img('projects/robloxGame.png'),
    tags: ['Roblox Studio', 'Game Dev'],
    url: 'https://www.roblox.com/games/6329572310/Tambayan-sa-roblox',
  },
  {
    title: 'Roblox Merch',
    description: 'A custom merchandise store on Roblox offering clothing and accessories for the community. Drip, but make it digital.',
    image: img('projects/robloxCatalog.png'),
    tags: ['Roblox', 'Design', 'Store'],
    url: 'https://www.roblox.com/catalog?taxonomy=tZsUsd2BqGViQrJ9Vs3Wah&CreatorName=ROBLOXIAN+HUSTLERS&CreatorType=Group&salesTypeFilter=1',
  },
  {
    title: 'NetSkills',
    description: 'A tutorial website for learning networking skills, so "have you tried turning it off and on again?" stops being your only move.',
    image: img('projects/netskill.png'),
    tags: ['Web', 'Education', 'Networking'],
    url: 'https://github.com/jairuscarl/netskill',
    linkLabel: 'View on GitHub',
  },
  {
    title: 'Kabakal Fitness Equipment',
    description: 'An online store for gym gear like machines, gloves, and dumbbells, plus an admin side for orders, inventory, and payments. Adding to cart is easier than leg day, guaranteed.',
    image: img('projects/kabakal.jpg'),
    tags: ['PHP', 'MySQL', 'E-commerce'],
    url: 'https://github.com/jairuscarl/kabakal',
    linkLabel: 'View on GitHub',
  },
]

// Filter tabs on the Certificates page; `category` on each certificate must match an id here.
export const certificateFilters = [
  { id: 'all', label: 'All' },
  { id: 'it', label: 'IT Related' },
  { id: 'non-it', label: 'Non-IT' },
]

export const certificates = [
  { category: 'it', title: 'TESDA NC II', issuer: 'TESDA', description: 'National Certificate in Information and Communications Technology.', image: img('certificates/NC2.jpg') },
  { category: 'it', title: 'Work Immersion: Web Development', issuer: 'Evotech', description: 'Completion of senior high school work immersion in web development.', image: img('certificates/Evotech-cert.jpg') },
  { category: 'it', title: 'Intro to Data Analysis with Python', issuer: 'CodeSignal', description: 'Data algorithms, cleaning, analysis and visualization in Python.', image: img('certificates/pythoncert.jpg') },
  { category: 'it', title: 'Intro to SQL', issuer: 'CodeSignal', description: 'Data querying and retrieval with SQL.', image: img('certificates/codesignal-cert.jpg') },
  { category: 'it', title: 'SQL Basics', issuer: 'Simplilearn', description: 'SQL fundamentals and database querying.', image: img('certificates/simplilearn-cert.jpeg') },
  { category: 'non-it', title: 'NROTC', issuer: 'PLV NROTC Unit', description: "Naval Reserve Officers' Training Corps certification.", image: img('certificates/NROTC-cert.jpg') },
  { category: 'non-it', title: 'Citizens Advancement Training', issuer: 'CAT', description: 'Leadership and citizenship training certification.', image: img('certificates/CAT-cert.jpg') },
]

export const gallery = [
  { image: img('profile/leader.jpg'), caption: 'Leading the formation at PLV NROTC' },
  { image: img('profile/moccgrad.jpg'), caption: 'Marine Officer Candidate Course closing ceremony' },
  { image: img('profile/pinningceremony.jpg'), caption: 'Pinning ceremony' },
  { image: img('profile/royalguardrotc.jpg'), caption: 'Royal Guard, ROTC' },
  { image: img('profile/3batchrotc.jpg'), caption: 'ROTC batchmates' },
  { image: img('profile/moccpic.jpg'), caption: 'Marine Officer Candidate Course' },
  { image: img('profile/ghiliesuit.jpg'), caption: 'Field training' },
  { image: img('profile/cat.jpg'), caption: 'CAT officer back in senior high' },
  { image: img('profile/certified.jpg'), caption: 'NC II certified' },
  { image: img('profile/groupcertified.jpg'), caption: 'NC II batch' },
  { image: img('profile/workoutpic.jpg'), caption: 'Training at the gym' },
]

export const highlights = [
  { value: 'NC II', label: 'TESDA certified' },
  { value: certificates.length, label: 'Certificates' },
  { value: projects.length, label: 'Projects' },
]

export const socials = [
  { label: 'GitHub', icon: FaGithub, url: 'https://github.com/jairuscarl' },
  { label: 'LinkedIn', icon: FaLinkedinIn, url: 'https://linkedin.com/in/jairuscarl' },
  { label: 'YouTube', icon: FaYoutube, url: 'https://youtube.com/@zuqwise' },
  { label: 'Discord', icon: FaDiscord, url: 'https://discord.com/channels/@me/701970997892350033' },
  { label: 'Facebook', icon: FaFacebookF, url: 'https://www.facebook.com/jrscarl' },
  { label: 'Instagram', icon: FaInstagram, url: 'https://www.instagram.com/jrscrl/' },
]
