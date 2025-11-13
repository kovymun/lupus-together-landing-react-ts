## Lupus Together Community Website: React, TypeScript Frontend + Python Django Backend

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript) ![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white) ![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white) ![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3) ![React Scroll](https://img.shields.io/badge/React--Scroll-61DAFB?style=for-the-badge) ![React Icons](https://img.shields.io/badge/React--Icons-000000?style=for-the-badge) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) ![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white) ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white) ![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white) ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white) ![Axe DevTools](https://img.shields.io/badge/Axe%20DevTools-663399?style=for-the-badge&logo=axe&logoColor=white) ![Google Lighthouse](https://img.shields.io/badge/Google%20Lighthouse-F44B21?style=for-the-badge&logo=lighthouse&logoColor=white) ![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)

### Table of Contents

- [Description and Purpose](#description-and-purpose)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation Guide](#installation-guide)
- [Usage Guide](#usage-guide)
- [Screenshots](#screenshots)
- [Security](#security)
- [Testing](#testing)
- [Acknowledgment](#acknowledgment)
- [Notes](#notes)
- [Disclaimer](#disclaimer)
- [Future Plans](#future-plans)
- [Credits](#credits)
- [Contact](#contact)

---

### Description and Purpose

Lupus Together is a front-end landing page built with care, empathy, and intention. Inspired by a loved one's journey with Lupus, this project serves as a heartfelt digital space for awareness, connection, and support.

Built using React, TypeScript, and Vanilla CSS for the frontend, and Django with Django REST Framework for the backend, it follows landing page best practices while providing a secure, reliable, and scalable API. The backend handles data storage, input validation, and safe communication with the frontend, ensuring user submissions are processed correctly and securely.

This personal project combines thoughtful UI/UX with meaningful storytelling to gently educate, uplift, and welcome future members into a compassionate community.

---

### Features

1. Smooth, intuitive navigation using **React Scroll** for section-based browsing.
2. **Fully responsive design** for mobile, tablet, and desktop.
3. Content-first layout designed to raise awareness and build community.
4. Modern CSS techniques, including **Flexbox**, **Grid**, and `clamp()` for fluid typography.
5. **Light and dark mode themes** that automatically adapt to the user’s system preference, improving accessibility and comfort.
6. **Accessibility First Design:** Fully aligned with **WCAG 2.1 AA** standards for inclusive, user friendly, and SEO optimized experiences.
7. **Form and input validation** with React Hook Form on the frontend and DRF serializers on the backend, ensuring all user-submitted data meets required criteria before reaching the database.
8. **Secure POST requests** with a **shared secret token handshake** between the _frontend_ and _backend_, ensuring only trusted clients can submit data and preventing unauthorized or automated (bot) submissions.

---

### Tech Stack

1. **Front-end Framework:** React (structured using functional components)
2. **Backend Framework:** Django | Django REST Framework (DRF)
3. **Programming Language:** TypeScript (frontend) | Python (backend)
4. **Database:** PostgreSQL | SQLite (testing)
5. **Styling:** Vanilla CSS
6. **Animations:** CSS Transitions
7. **Build Tool:** Frontend: Vite (for scaffolding and fast development)

---

#### Additional Libraries and Tools:

1. **Google Fonts:** For typography that enhances readability and style.
2. **React Hook Form:** Simplifies form handling, validation, and error management in the React frontend.
3. **React Scroll:** Enables smooth in-page scroll behavior for a fluid user experience.
4. **React Icons:** Lightweight icon integration that elevates visual design.
5. **Fetch API:** Handles secure API requests, including the frontend-backend secret token handshake.
6. **Testing Utilities:** Backend: `pytest`, `pytest-django`, `coverage` for testing and coverage analysis.
7. **Google Lighthouse:** For automated web accessibility, performance, SEO, and best practices auditing.
8. **Axe DevTools:** In-depth accessibility testing and validation for compliance with WCAG standards.

---

### Installation Guide

Follow these steps to set up the project on your local machine:

#### Pre-requisites:

- **Node.js** (v18 or later), which includes npm by default. [Node.js](https://nodejs.org/en)

#### Steps:

1. **Create a directory for the project:** Open your terminal and run mkdir `<your-directory-name>` | cd `<your-directory-name>`.
2. **Open the folder in VS Code:** run `code .`
3. **Clone the repository into the folder:** git clone https://github.com/kovymun/lupus-together-landing-react-ts.git
4. **Navigate into the project folder:** cd lupus-together-landing-react-ts
5. **Install all dependencies:** npm install or npm i
6. **Start the development server:** npm run dev
7. The app should now be running locally at localhost:5173
8. Open the landing page in the browser of your choice.

### Usage Guide

This website/landing page is structured into several key sections designed to guide visitors and create a meaningful experience:

- Hero Section
- About Lupus Together
- Understanding Lupus
- Testimonial Section
- Meet the Team
- Join the Community Form
- Footer with contact and legal info

#### How to Use

1. **Start the Application:** Follow the steps in the [Installation Guide](#installation-guide) to set up and run the project on your local machine.
2. **Explore the Hero Section:** Once the app loads, you’ll be welcomed with a hero banner representing Lupus Together.
3. **Navigate Smoothly:** Scroll or click through the navigation bar to explore each section. Smooth scrolling is enabled for a seamless experience.
4. **Learn About Lupus Together:** Get to know the purpose behind the platform, what it offers, how it started, and how it supports individuals and families.
5. **Understand Lupus:** The _Understanding Lupus_ section presents facts in a warm, accessible tone, empowering users with knowledge.
6. **Feel the Human Stories:** The testimonial section features powerful community voices to help users feel seen and connected.
7. **Meet the Team:** Discover the faces behind the platform, the people dedicated to fostering support.
8. **Join the Community:** Fill out the form to express interest in becoming part of the Lupus Together support circle.

---

### Screenshots

<img width="790" height="349" alt="Lupus Together Hero section" src="https://github.com/user-attachments/assets/05e3200e-2292-46a8-8406-d82d31184281" />
<br/>
<img width="405" height="362" alt="Lupus Together About section" src="https://github.com/user-attachments/assets/cb6f361f-b895-4383-81bd-814cad9ff855" />
<br/>
<img width="405" height="405" alt="Lupus Together Understanding Lupus section" src="https://github.com/user-attachments/assets/896c5ea3-a8c7-40a5-adc6-e4ef93a12e13" />
<br/>
<img width="404" height="322" alt="Lupus Together Testimonial section" src="https://github.com/user-attachments/assets/ea950122-8ca7-4bf0-87d1-8dfac3efcfae" />
<br/>
<img width="405" height="321" alt="Image" src="https://github.com/user-attachments/assets/49389ba8-c0b6-4ba0-8063-888f8387f89b" />
<br/>
<img width="405" height="373" alt="Image" src="https://github.com/user-attachments/assets/8c1d78f0-b7eb-4508-b6e3-cb1b2a102cc2" />

---

### Security

#### Backend Security Measures

| Security Feature                         | Description                                                                                   | Why                                                       |
| ---------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| **Frontend–Backend Shared Secret Token** | The frontend includes a secret key stored in `.env`. The backend verifies it on each request. | Ensures only trusted frontend clients can access the API. |
| **Serializer Validation**                | All data passes through DRF serializers before saving.                                        | Prevents malformed or malicious data.                     |
| **CSRF & CORS Middleware**               | Default Django middleware enabled.                                                            | Restricts cross-origin and CSRF attacks.                  |
| **Environment Variables**                | Secrets and credentials stored in `.env`.                                                     | Protects sensitive information from exposure.             |

---

### Testing

#### Front-end testing

All core features and UI components have been thoroughly tested for reliability, accessibility, and responsiveness.

#### Accessibility Audit

- **Purpose:** To enhance inclusivity and usability for all users, ensuring the application is accessible to those using assistive technologies and compliant with **WCAG 2.1 AA** standards.
- **Summary:** Conducted a complete accessibility audit using **Axe DevTools** and **Google Lighthouse**. Key improvements included proper ARIA usage, improved keyboard navigation, better color contrast, and semantic HTML structure across all interactive components.
- **Tools Used:** **Google Lighthouse** (Web Accessibility Audit) and **Axe DevTools** (In-depth Element Level Testing).
- **Results:** The accessibility score improved from **83% to 100%**, ensuring compliance with modern accessibility standards and a more inclusive user experience.

#### E2E and QA Testing(Cypress):

1. **Navbar Scroll functionality:** We implemented an end-to-end test using Cypress to verify the Navbar's scroll behavior:

- Ensures each navigation link scrolls the user to the correct section.
- Handles mobile view by opening the hamburger menu automatically.
- Tested across multiple viewports: _desktop and tablet_.
- Validates smooth scroll and section visibility for a reliable user experience.

2. **Hero CTA Interaction:**

- TEST: Hero CTA scroll behavior
- Purpose: Ensure that clicking the Hero "Join Our Community!" CTA scrolls smoothly to the Join section.

3. **Join Form Validation & Submission:**

- Checks inline validation messages for all required fields (first name, last name, email, phone, consent checkbox).
- Validates error handling for invalid inputs.
- Tests successful form submission with valid data and confirms form reset afterward.
- Ensures that duplicate emails trigger the correct error toast and prevent multiple entries.
- Confirms that the _frontend-backend shared secret token handshake_ works as expected during submission.

#### Back-end testing (Django + Pytest)

#### Integration tests:

This section tracks backend tests as they are added. Each test includes a short reason and a status to keep things easy to follow.

| Test Type                         | Description                                                                                                                                                                            | Result |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| Model test                        | Confirms that the CommunityMember model can be created, behaves as expected, and that user details are saved to the database correctly.                                                | PASSED |
| Serializer validation tests       | Ensures that the CommunityMemberSerializer correctly validates input data, enforcing required fields and constraints. Includes checks for missing fields like first_name or last_name. | PASSED |
| Views test                        | Confirms that the `/community/` endpoint correctly handles GET and POST requests with both valid and invalid data.                                                                     | PASSED |
| POST request duplicate email test | Verifies that submitting a POST request with an email that already exists in the database returns a validation error and prevents duplicate entries.                                   | PASSED |

#### Security Tests:

| Test Name                                          | Description                                                                                                                   | Why It’s Useful                                                                                                                                                                                                                | Result |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------ |
| **Frontend–Backend Shared Secret Token Handshake** | Verified that requests with the correct shared secret token succeed, and invalid or missing tokens return `401 Unauthorized`. | Protects the backend from unauthorized requests or bots, ensures only your frontend or trusted clients can submit data to sensitive endpoints, and adds a lightweight layer of security even without full user authentication. | PASSED |

---

### Acknowledgment

Inspired by a family member who battles Lupus daily. This project is a tribute to their strength, and to those navigating this journey around the world.

---

### Notes

This project reflects a passion for building applications that are not only technically sound but also emotionally intelligent. The focus is on creating a welcoming space for users through accessible design, inclusive language, and meaningful visuals.

---

### Disclaimer

All names, services, testimonials, locations, and brand references, including _Lupus Together_, are fictional and created for the sole purpose of demonstrating software development, UI/UX design, and implementation best practices. Any resemblance to real individuals or organizations is purely coincidental. _Note: This is a front-end-only fictional project intended to showcase UI/UX thinking, design sensitivity, and modern web development techniques._

Images used are royalty-free and sourced from **[Unsplash](https://unsplash.com/)** and **[Lummi AI](https://www.lummi.ai/)** , optimized for performance (WebP format). Social links included are placeholders to demonstrate UI layout and design.

---

### Future Plans

- **Migrate to Astro.js**: for improved app performance and enhanced SEO/GEO capabilities.
- **Scroll-triggered Animations**: for a smoother, more interactive visual experience.

---

### Credits

- **Sole Developer & Designer:** Koveshan Munsami
- **Inspiration:** A family member who lives with Lupus daily. This is for them, and for all who need a gentle place to land.

---

### Contact

- Connect with me on [LinkedIn](https://www.linkedin.com/in/koveshan-munsami/)
