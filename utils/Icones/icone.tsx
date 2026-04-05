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
  FaBuilding,
  FaCalculator,
  FaUsersCog,
  FaFileInvoiceDollar,
  FaChartLine,
  FaStar,
  FaLock,
  FaRobot,
  FaHeadset,
  FaCloud,
  FaUserTie,
  FaBalanceScale,
  FaBriefcaseMedical,
  FaUniversity,
  FaBars,
  FaChevronDown,
  FaChevronUp,
  FaTimes,
  FaWhatsapp,
  FaBuilding as FaBuildingColumns,
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
  "fa-solid fa-building": <FaBuilding />,
  "fa-solid fa-calculator": <FaCalculator />,
  "fa-solid fa-users-gear": <FaUsersCog />,
  "fa-solid fa-file-invoice-dollar": <FaFileInvoiceDollar />,
  "fa-solid fa-chart-line": <FaChartLine />,
  "fa-solid fa-star": <FaStar />,
  "fa-solid fa-lock": <FaLock />,
  "fa-solid fa-robot": <FaRobot />,
  "fa-solid fa-headset": <FaHeadset />,
  "fa-solid fa-cloud": <FaCloud />,
  "fa-solid fa-user-tie": <FaUserTie />,
  "fa-solid fa-scale-balanced": <FaBalanceScale />,
  "fa-solid fa-briefcase-medical": <FaBriefcaseMedical />,
  "fa-solid fa-building-columns": <FaBuildingColumns />,
  "fa-solid fa-university": <FaUniversity />,

  // Navbar
  "fa-solid fa-bars": <FaBars />,
  "fa-solid fa-chevron-down": <FaChevronDown />,
  "fa-solid fa-chevron-up": <FaChevronUp />,
  "fa-solid fa-xmark": <FaTimes />,

  // Social
  "bi bi-whatsapp": <FaWhatsapp />,
};

export default function Icone({ nome, className }: Props) {
  if (!nome) return null;

  return <span className={className}>{iconMap[nome] ?? null}</span>;
}