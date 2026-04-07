"use client";

import { iconesMap, IconName } from "@/Dados/Interfaces/icones";
import React from "react";


type Props = {
  nome?: string;
  className?: string;
};

export default function Icone({ nome, className }: Props) {
  if (!nome) return null;

  const IconComponent = iconesMap[nome as IconName];

  if (!IconComponent) return null;

  return <IconComponent className={className} />;
}