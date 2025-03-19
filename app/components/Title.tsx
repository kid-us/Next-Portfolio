import { Atom } from "lucide-react";
import React from "react";

interface Props {
  title: string;
  alignment?: string;
}

const Title = ({ title, alignment }: Props) => {
  return (
    <p
      className={`flex items-center ${
        alignment ? alignment : "justify-center"
      } gap-x-3 text-primary `}
    >
      <Atom size={16} /> {title}
    </p>
  );
};

export default Title;
