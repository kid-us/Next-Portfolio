export interface Facts {
  id: number;
  title: string;
  note: string;
  value: number;
}
const facts: Facts[] = [
  {
    id: 1,
    title: "Happy Clients -",
    note: "Delivering exceptional digital experiences that leave clients satisfied and inspired.",
    value: 12,
  },
  {
    id: 2,
    title: "Complete Projects -",
    note: "Successfully bringing ideas to life with clean, efficient, and scalable solutions.",
    value: 21,
  },
  {
    id: 3,
    title: "Work Hours -",
    note: "Dedication and passion drive every hour spent crafting high-quality web experiences.",
    value: 3000,
  },
  {
    id: 4,
    title: "Team Works –",
    note: " Collaboration fuels innovation, creating seamless and impactful solutions together.",
    value: 10,
  },
];

export default facts;
