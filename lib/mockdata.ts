import brochure from "@/public/icons/brochure icon.png";
import palatteBro from "@/public/icons/Palette-bro.svg";
import penTool from "@/public/icons/Pen tool-amico.svg";
import model from "@/public/icons/3d modeling-bro.svg";
import animateAmico from "@/public/icons/Animation-amico.svg";
import palettePana from "@/public/icons/Palette-pana.svg";
import brandCommunication from "@/public/icons/brand communication-bro.svg";
import demoImage from "@/public/demoImage.jpg"

export let mockCategories = [
  {
    _id: "alsdkjfasdfasdffl;asjd1f",
    title: "Logo Design",
    icon: palatteBro,
    author: {
      _id: "alsdkjfaslkjdfl;asjdf1",
      name: "sefeed Doe",
      email: "johndoe@gamil.com",
      phone: "01847362735",
      role: "admin",
    },
  },
  {
    _id: "agfhervfrdl;asjd2f",
    title: "Graphic Design",
    icon: penTool,
    author: {
      _id: "alsdkjfaslkjdfl;asjdf2",
      name: "yhhbff Doe",
      email: "johndoe@gamil.com",
      phone: "01847362735",
      role: "admin",
    },
  },
  {
    _id: "alsdkdfsdfdfgf3asjdf3",
    title: "Color grading",
    icon: palettePana,
    author: {
      _id: "alsdkjfaslkjdfl;asjdf",
      name: "drte Doe",
      email: "johndoe@gamil.com",
      phone: "01847362735",
      role: "admin",
    },
  },
  {
    _id: "alsdkjsdftewfsd4f;asjd4f",
    title: "Animation",
    icon: animateAmico,
    author: {
      _id: "alsdkjfaslkjdfl;a5sjdf",
      name: "ggd Doe",
      email: "johndoe@gamil.com",
      phone: "01847362735",
      role: "admin",
    },
  },
  {
    _id: "alsddfgsdffl;as5jdf",
    title: "Model Desing",
    icon: model,
    author: {
      _id: "alsdkjfaslkjdfl;asjdf",
      name: "John Doe",
      email: "johndoe@gamil.com",
      phone: "01847362735",
      role: "admin",
    },
  },
  {
    _id: "alsdkjfaslkjdfl;6asjdf",
    title: "Branding Design",
    icon: brandCommunication,
    author: {
      _id: "alsdkjfaslkjdfl;asjdf",
      name: "John Doe",
      email: "johndoe@gamil.com",
      phone: "01847362735",
      role: "admin",
    },
  },
  {
    _id: "alsdkjfaslkjdfl;6asjdf",
    title: "Brochure Design",
    icon: brochure,
    author: {
      _id: "alsdkjfaslkjdfl;asjdf",
      name: "John Doe",
      email: "johndoe@gamil.com",
      phone: "01847362735",
      role: "admin",
    },
  },
];

let icons = [
  {
    _id: "alsdkjfasdfasdffl;asjd1f",
    url: demoImage,
    public_id: "alsdkjfasdfasdffl;asjd1f",
  },
  {
    _id: "alsdkjfasdfasdffl;asjd1f",
    url: demoImage,
    public_id: "alsdkjfasdfasdffl;asjd1f",
  },
  {
    _id: "alsdkjfasdfasdffl;asjd1f",
    url: demoImage,
    public_id: "alsdkjfasdfasdffl;asjd1f",
  },
  {
    _id: "alsdkjfasdfasdffl;asjd1f",
    url: demoImage,
    public_id: "alsdkjfasdfasdffl;asjd1f",
  },
];
let authors = [
  {
    _id: "alsdkjfasdfasdffl;asjd1f",
    title: "palatteBro Doe",
    email: "author@gmail.com",
    phone: "01847362735",
    role: "admin",
  },
  {
    _id: "alsdkjfasdfasdffl;asjd1f",
    title: "Rable Doe",
    email: "author@gmail.com",
    phone: "01847362735",
    role: "user",
  },
  {
    _id: "alsdkjfasdfasdffl;asjd1f",
    title: "Duplew Doe",
    email: "author@gmail.com",
    phone: "01847362735",
    role: "user",
  },
  {
    _id: "alsdkjfasdfasdffl;asjd1f",
    title: "Jegler Doe",
    email: "author@gmail.com",
    phone: "01847362735",
    role: "user",
  },
];

const packages = [
  {
    _id: "alsdkjfasdfasdffl;asjd1f",
    type: "Basic",
    price_bdt: 100,
    price_usd: 10,
    status: "active",
    description: "We design the best logo for your company",
    duration: "1 week",
    revision: 2,
    features: [
      "2D logo",
      "3D logo",
      "Vector logo",
      "Source file",
      "High resolution",
      "Transparent background",
      "Social media kit",
    ],
  },
  {
    _id: "alsdkjfasdfasdffl;asjd1f",
    type: "Standard",
    price_bdt: 200,
    price_usd: 20,
    status: "active",
    description: "We design the best logo for your company",
    duration: "2 week",
    revision: 3,
    features: [
      "2D logo",
      "3D logo",
      "Vector logo",
      "Source file",
      "High resolution",
      "Transparent background",
      "Social media kit",
      "Business card",
      "Letterhead",
    ],
  },
  {
    _id: "alsdkjfasdfasdffl;asjd1f",
    type: "Premium",
    price_bdt: 300,
    price_usd: 30,
    status: "active",
    description: "We design the best logo for your company",
    duration: "3 week",
    revision: 4,
    features: [
      "2D logo",
      "3D logo",
      "Vector logo",
      "Source file",
      "High resolution",
      "Transparent background",
      "Social media kit",
      "Business card",
      "Letterhead",
      "Envelope",
      "Brand guide",
    ],
  },
];

export let mockServices = [
  {
    _id: "alsdkjfasdfasdffl;asjd1f",
    title: "Logo Design",
    status: "active",
    description:
      "We design the best logo for your company, We design the best logo for your company. We design the best logo for your company. We design the best logo for your company.",
    short_description: "We design the best logo for your company, and we will make sure you are satisfied with our work.",
    category: mockCategories[0],
    icon: icons[0],
    author: authors[0],
    packages: [packages[0], packages[1], packages[2]],
  },
  {
    _id: "alsdkjfasdfasdffl;asjd1f",
    title: "Graphic Design",
    status: "active",
    description:
      "We design the best logo for your company, We design the best logo for your company. We design the best logo for your company. We design the best logo for your company.",
    short_description: "We design the best logo for your company",
    category: mockCategories[1],
    icon: icons[1],
    authors: authors[1],
    packages: [packages[0], packages[1], packages[2]],
  },
  {
    _id: "alsdkjfasdfasdffl;asjd1f",
    title: "Color grading",
    status: "active",
    description:
      "We design the best logo for your company, We design the best logo for your company. We design the best logo for your company. We design the best logo for your company.",
    short_description: "We design the best logo for your company",
    category: mockCategories[2],
    icon: icons[2],
    authors: authors[2],
    packages: [packages[0], packages[1], packages[2]],
  },
];


export type Service = typeof mockServices[0];
