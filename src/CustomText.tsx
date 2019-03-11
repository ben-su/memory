import React from "react";

interface Props {
  text: string;
}

export const CustomText: React.FC<Props> = ({ text }: Props) => {
  return <span>{text}</span>;
};
