interface Nav {
  id: number;
  name: string;
  path: string;
  icon?: string;
}

export const nav: Nav[] = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/" },
  { id: 3, name: "Projects", path: "/" },
  { id: 4, name: "Contact", path: "/" },
];
