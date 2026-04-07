"use client";

import { iconesMap } from "@/Dados/Interfaces/icones";
import React from "react";


type Props = {
  nome?: string;
  className?: string;
};

export default function Icone({ nome, className }: Props) {
  if (!nome) return null;

  const IconComponent = iconesMap[nome];

  if (!IconComponent) {
    console.warn("Ícone não encontrado:", nome);
    return null;
  }

  return <IconComponent className={className} />;
}