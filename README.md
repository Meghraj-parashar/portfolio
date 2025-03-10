# Portfolio Website

A modern, responsive personal portfolio website built with **React** and **Vite**. This project showcases my skills and projects with smooth animations powered by **GSAP** and interactive features like a typing effect and scroll-triggered animations.

![Portfolio Screenshot](./src/assets/man.png) <!-- Replace with an actual screenshot if available -->

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Overview

This portfolio website is designed to introduce who I am, my skills, and the services I offer as a developer. It includes the following sections:

- **Home:** A landing page featuring an animated introduction with a dynamic typing effect.
- **About:** Personal details, skills, and education information presented with engaging scroll-triggered animations.
- **Projects (optional):** A section (currently commented out) intended for showcasing work.
- **Contact:** A contact form integrated with [Formspree](https://formspree.io) to easily get in touch.

Animations are implemented using **GSAP** (GreenSock Animation Platform) along with the **ScrollTrigger** plugin to add a modern, interactive feel to the user experience.

---

## Features

- **Responsive Navigation:**  
  A mobile-friendly hamburger menu with smooth transitions using react-scroll and GSAP animations.

- **Animated Introduction:**  
  Home section with a typing effect (via [react-typing-effect](https://www.npmjs.com/package/react-typing-effect)) and animated text lines.

- **About Section with Scroll Animations:**  
  Personal info, skills, and education details reveal themselves with subtle animations as you scroll down.

- **Project Cards:**  
  Reusable card components to display skills (MERN Stack, Java, DSA) with hover effects.

- **Interactive Contact Form:**  
  A contact form that submits data via Formspree, ensuring hassle-free communication.

---

## Tech Stack

- **Frontend Framework:** React (via Vite)
- **Build Tool:** Vite
- **Animation Library:** GSAP with ScrollTrigger
- **CSS:** Custom CSS modules for component-level styling
- **Additional Libraries:**  
  - [react-scroll](https://www.npmjs.com/package/react-scroll) for smooth scrolling  
  - [react-typing-effect](https://www.npmjs.com/package/react-typing-effect) for animated text

---

## Project Structure