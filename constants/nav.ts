interface Nav {
  id: number;
  name: string;
  path: string;
  icon?: string;
}

export const nav: Nav[] = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Projects", path: "/projects" },
  { id: 4, name: "Contact", path: "/contact" },
];
