import laces from "./assets/laces.png";
import appliques from "./assets/appliques.png";
import fabrics from "./assets/fabrics.png";
import collars from "./assets/collars.png";
import necklines from "./assets/necklines.png";
import pockets from "./assets/pockets.png";
import avatar1 from "./assets/Ellipse 1.png";
import avatar2 from "./assets/Ellipse 4.png";
import avatar3 from "./assets/Ellipse 6.png";

export const contracts = [
  { label: "Full-Time", value: "fulltime" },
  { label: "Part-Time", value: "parttime" },
  { label: "Contract", value: "contract" },
  { label: "Internship", value: "internship" },
];

export const adminSettings = ["Profile", "Account", "Dashboard", "Logout"];

export const findLabelByValue = (value) => {
  const contract = contracts.find((contract) => contract.value === value);
  return contract ? contract.label : null;
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
  { label: "LACES", imgSrc: laces },
  { label: "APPLIQUES", imgSrc: appliques },
  { label: "FABRICS", imgSrc: fabrics },
  { label: "Collars", imgSrc: collars },
  { label: "Necklines", imgSrc: necklines },
  { label: "Pockets", imgSrc: pockets },
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
