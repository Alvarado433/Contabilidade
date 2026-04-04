'use client';

import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaArrowUp,
  FaHome,
  FaUsers,
  FaBriefcase,
  FaShieldAlt,
  FaUserFriends,
} from "react-icons/fa";

type Props = {
  nome?: string;
  className?: string;
};

const iconMap: Record<string, React.ReactNode> = {
  "fa-solid fa-house": <FaHome />,
  "fa-solid fa-users": <FaUsers />,
  "fa-solid fa-briefcase": <FaBriefcase />,
  "fa-solid fa-shield-halved": <FaShieldAlt />,
  "fa-solid fa-user-group": <FaUserFriends />,
  "fa-solid fa-envelope": <FaEnvelope />,
  "fa-solid fa-phone": <FaPhone />,
  "fa-solid fa-location-dot": <FaMapMarkerAlt />,
  "fa-brands fa-facebook-f": <FaFacebookF />,
  "fa-brands fa-instagram": <FaInstagram />,
  "fa-brands fa-linkedin-in": <FaLinkedinIn />,
  "fa-solid fa-arrow-up": <FaArrowUp />,
};

export default function Icone({ nome, className }: Props) {
  if (!nome) return null;

  return (
    <span className={className}>
      {iconMap[nome] ?? null}
    </span>
  );
}