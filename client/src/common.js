import laces from "./assets/laces.png";
import appliques from "./assets/appliques.png";
import fabrics from "./assets/fabrics.png";
import collars from "./assets/collars.png";
import necklines from "./assets/necklines.png";
import pockets from "./assets/pockets.png";
import avatar1 from "./assets/Ellipse 1.png";
import avatar2 from "./assets/Ellipse 4.png";
import avatar3 from "./assets/Ellipse 6.png";
import lace1 from "./assets/lace-1.jpg";
import lace2 from "./assets/lace-2.jpg";
import lace3 from "./assets/lace-3.jpg";
import lace4 from "./assets/lace-4.jpg";
import lace5 from "./assets/lace-5.jpg";
import lace6 from "./assets/lace-6.jpg";
import lace7 from "./assets/lace-6.jpg";
import lace8 from "./assets/lace-6.jpg";

export const categories = [
  { label: "LACES", value: "laces" },
  { label: "APPLIQUES", value: "appliques" },
  { label: "FABRICS", value: "fabrics" },
  { label: "COLLARS", value: "collars" },
  { label: "NECKLINES", value: "necklines" },
  { label: "POCKETS", value: "pockets" },
];

export const productType = [
  { label: "COTTON", value: "cotton" },
  { label: "NYLON", value: "nylon" },
  { label: "SILK", value: "silk" },
  { label: "WOOL", value: "wool" },
  { label: "LINEN", value: "linen" },
  { label: "VELVET", value: "velvet" },
];

export const adminSettings = ["Profile", "Account", "Dashboard", "Logout"];

export const findLabelByValue = (value) => {
  const category = categories.find((category) => category.value === value);
  return category ? category.label : null;
};

export const hasEmptyField = (obj) => {
  return Object.values(obj).some(
    (value) => typeof value === "string" && value.trim() === ""
  );
};

export const validateEmail = (passedEmail) => {
  let emailRegex = /^[A-Za-z0-9_.-]{3,}@(gmail\.com)$/;
  return emailRegex.test(passedEmail);
};

export const isValidPhoneNumber = (phoneNumber) => {
  // Regex to check if the cleaned number is a 10-digit number starting with 7-9
  const phoneRegex = /^[7-9]\d{9}$/;

  return phoneRegex.test(phoneNumber);
};

export const validatePassword = (password) => {
  return {
    minLength: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    digit: /\d/.test(password),
    specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };
};

export const discoverText =
  "Maiee Enterprise proudly asserts itself as your esteemed partner for all your sartorial accessory needs. Our commitment extends beyond mere provision, as we pledge to establish a formidable business foundation that enhances operational efficiency, ensures regulatory compliance, and champions customer satisfaction. In this response, we take great pleasure in showcasing our organizational prowess, encompassing adept capabilities, a skilled workforce, streamlined processes, cutting-edge technology, and an unwavering desire to emerge as your strategic partner of choice. {{break}} {{break}} Founded with purpose, our organization has been intricately designed to offer a comprehensive range of products, each distinguished by superior qualitative features meticulously curated to cater to the discerning needs of our esteemed clientele. Allow us the privilege to not only meet but exceed your expectations as we embark on this journey as your preferred strategic ally.";

export const discoverStats = [
  { label: "Design", value: "06" },
  { label: "Patterns", value: "238" },
  { label: "Satisfied Clients", value: "1395" },
];

export const experticesData = [
  {
    name: "Category",
    items: [
      {
        name: "LACES",
        imgSrc: laces,
        subcategories: ["Cotton", "Nylon", "Silk", "Wool", "Linen", "Velvet"],
      },
      {
        name: "APPLIQUES",
        imgSrc: appliques,
        subcategories: ["Cotton", "Nylon", "Silk", "Wool", "Linen", "Velvet"],
      },
      {
        name: "FABRICS",
        imgSrc: fabrics,
        subcategories: ["Cotton", "Nylon", "Silk", "Wool", "Linen", "Velvet"],
      },
      {
        name: "Collars",
        imgSrc: collars,
        subcategories: ["Cotton", "Nylon", "Silk", "Wool", "Linen", "Velvet"],
      },
      {
        name: "Necklines",
        imgSrc: necklines,
        subcategories: ["Cotton", "Nylon", "Silk", "Wool", "Linen", "Velvet"],
      },
      {
        name: "Pockets",
        imgSrc: pockets,
        subcategories: ["Cotton", "Nylon", "Silk", "Wool", "Linen", "Velvet"],
      },
    ],
  },
];

export const testimonials = [
  {
    name: "Ishan kadam",
    role: "Executive Engineer",
    image: avatar1, // Replace with actual image URL
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  },
  {
    name: "Tanvi Gangar",
    role: "Executive Engineer",
    image: avatar2, // Replace with actual image URL
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  },
  {
    name: "Aadarsh Kshirsagar",
    role: "Executive Engineer",
    image: avatar3, // Replace with actual image URL
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  },
];

export const allProducts = [
  {
    name: "3701",
    image: lace1,
    productId: 3701,
    category: "laces",
    type: "cotton",
    soldOut: true,
  },
  {
    name: "3702",
    image: lace2,
    productId: 3702,
    category: "laces",
    type: "nylon",
    readyToShip: true,
  },
  {
    name: "3703",
    image: lace3,
    productId: 3703,
    category: "laces",
    type: "silk",
  },
  {
    name: "3704",
    image: lace4,
    productId: 3704,
    category: "laces",
    type: "wool",
  },
  {
    name: "3705",
    image: lace5,
    productId: 3705,
    category: "laces",
    type: "linen",
  },
  {
    name: "3706",
    image: lace6,
    productId: 3706,
    category: "laces",
    type: "velvet",
  },
  {
    name: "3707",
    image: lace7,
    productId: 3707,
    category: "laces",
    type: "fabric",
  },
  {
    name: "3708",
    image: lace8,
    productId: 3708,
    category: "laces",
    type: "fabric",
  },
  {
    name: "3709",
    image: lace1,
    productId: 3709,
    category: "laces",
    type: "cotton",
  },
  {
    name: "3710",
    image: lace2,
    productId: 3710,
    category: "laces",
    type: "nylon",
  },
  {
    name: "3711",
    image: lace3,
    productId: 3711,
    category: "laces",
    type: "silk",
  },
  {
    name: "3712",
    image: lace4,
    productId: 3712,
    category: "laces",
    type: "wool",
  },
  {
    name: "3713",
    image: lace5,
    productId: 3713,
    category: "laces",
    type: "linen",
  },
  {
    name: "3714",
    image: lace6,
    productId: 3714,
    category: "laces",
    type: "velvet",
  },
  {
    name: "3715",
    image: lace1,
    productId: 3715,
    category: "laces",
    type: "cotton",
  },
  {
    name: "3716",
    image: lace2,
    productId: 3716,
    category: "laces",
    type: "nylon",
  },
  {
    name: "3717",
    image: lace3,
    productId: 3717,
    category: "laces",
    type: "silk",
  },
  {
    name: "3718",
    image: lace4,
    productId: 3718,
    category: "laces",
    type: "wool",
  },
  {
    name: "3719",
    image: lace5,
    productId: 3719,
    category: "laces",
    type: "linen",
  },
  {
    name: "3720",
    image: lace6,
    productId: 3720,
    category: "laces",
    type: "velvet",
  },
];
