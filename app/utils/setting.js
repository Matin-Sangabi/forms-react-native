import { colors } from "../constants/color.enum";

export const data = [
  { id: "1", title: "Bank", icon: "account-balance", color: colors.orange },
  { id: "2", title: "Mobile", icon: "ad-units", color: colors.indigo },
  { id: "3", title: "Shop", icon: "add-shopping-cart", color: colors.yellow },
  {
    id: "4",
    title: "industrial machine",
    icon: "agriculture",
    color: colors.lime,
  },
  { id: "5", title: "music", icon: "album", color: colors.cyan },
  { id: "6", title: "Apartment", icon: "apartment", color: colors.violet },
  {
    id: "7",
    title: "architecture",
    icon: "architecture",
    color: colors.pink,
  },
  { id: "8", title: "casiono", icon: "casino", color: colors.main },
];

export const feedData = [
  {
    image: require("../assets/couch.jpg"),
    title: "Couch is best practice",
    price: 1200,
    id: "1",
    author: {
      title: "Matin",
      course: "5 content",
      src: null,
    },
  },
  {
    image: require("../assets/jacket.jpg"),
    title: "red Jacket ",
    price: 120,
    id: 2,
    author: {
      title: "Matin",
      course: "5 content",
      src: require("../assets/mosh.jpg"),
    },
  },
];

export const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.main,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];
