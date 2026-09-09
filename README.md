# J&O Technical Services Limited — Corporate Website

A modern, high-performance corporate web platform for **J&O Technical Services Limited** (RC: 9665822), an indigenous Nigerian oilfield engineering, pipeline fabrication, structural construction, and asset integrity contractor headquartered in Port Harcourt, Rivers State, Nigeria.

Built with **React 19**, **TypeScript**, **Vite**, **Tailwind CSS**, and **React Router v7**, faithfully implementing the Google Stitch design specifications and asset pipeline.

---

## 🏛️ Corporate Identity & Profile

- **Company Name**: J&O TECHNICAL SERVICES LIMITED
- **Registration**: RC: 9665822
- **Motto / Slogan**: *"Delivering Technical Excellence, Safely and On Time"*
- **Head Office**: 3 Wopara Street, Off Eneka Road, Port Harcourt, Rivers State, Nigeria
- **Direct Phone Hotline**: `08062887287`
- **Tender / RFQ Email**: `jotechnicalsourceslimited@gmail.com`
- **Regulatory Accreditations**: NCDMB (NOGICD Compliant) • NUPRC / DPR Certified • ISO 9001:2015 Aligned

---

## 🚀 Key Website Features & Pages

| Route | Page | Key Highlights |
| :--- | :--- | :--- |
| `/` | **Home** | Editorial offshore hero, 450,000+ safe man-hours metrics, corporate overview, 5 key service pillars, strategic sectors, and RFQ callout |
| `/about` | **About Corporate** | Institutional history (RC: 9665822), Vision & Mission, S.Q.I.C.E core values framework, 5 corporate objectives, Port Harcourt base |
| `/services` | **Services & Capabilities** | Interactive capability tabs covering Welding & High-Pressure Fabrication (ASME IX, API 1104), Mechanical Installation, Civil Construction, Procurement Logistics, and Technical Manpower Outsourcing |
| `/hse` | **HSE & Quality** | Zero-Harm safety culture, Job Safety Analysis (JSA), Stop Work Authority (SWA), ISO 9001:2015 QA/QC framework, and Niger Delta community relations |
| `/contact` | **Contact & Tender Desk** | Interactive RFQ and tender submission form, head office coordinates, working hours, and tender FAQ accordion |
| `*` | **404 Error Page** | Elegant fallback route with return navigation |

---

## 🧰 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Language**: [TypeScript 5+](https://www.typescriptlang.org/)
- **Bundler**: [Vite 6](https://vitejs.dev/) with `@tailwindcss/vite`
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom corporate theme tokens
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/) & [Google Material Symbols](https://fonts.google.com/icons)
- **Typography**: Google Fonts (*Space Grotesk* for display/headlines & *Inter* for body text)

---

## 🛠️ Getting Started

### 1. Installation

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open `http://localhost:5173/` in your browser.

### 3. Production Build

```bash
npm run build
```

Generates optimized, production-ready assets in `dist/`.

### 4. Run Linter

```bash
npm run lint
```

---

## 📁 Directory Structure

```text
offiong-website/
├── public/
│   └── assets/
│       └── images/               # Corporate imagery & vector logo
│           ├── company_logo.png
│           ├── hero_offshore.png
│           ├── pipe_welders.png
│           ├── hse_safety.png
│           ├── boardroom_governance.png
│           ├── terminal_aerial.png
│           ├── supply_yard.png
│           ├── materials_testing.png
│           ├── procurement_logistics.png
│           └── facility_installation.png
├── src/
│   ├── components/
│   │   ├── Navbar.tsx            # Sticky corporate header & status bar
│   │   ├── Footer.tsx            # Full corporate footer & contact data
│   │   └── Layout.tsx            # Application wrapper with <Outlet />
│   ├── pages/
│   │   ├── HomePage.tsx          # Homepage with metrics & 5 pillars
│   │   ├── AboutPage.tsx         # Corporate history, SQICE values & governance
│   │   ├── ServicesPage.tsx      # Filterable technical service capabilities
│   │   ├── HSEPage.tsx           # Safety policies & ISO quality assurance
│   │   ├── ContactPage.tsx       # RFQ form & Tender mobilization desk
│   │   └── NotFoundPage.tsx      # 404 handler
│   ├── router/
│   │   └── index.tsx             # React Router configuration
│   ├── App.tsx                   # Root router provider
│   ├── index.css                 # Tailwind CSS v4 setup & theme variables
│   └── main.tsx                  # React DOM entry point
├── index.html                    # HTML shell with Google Fonts
├── package.json                  # Dependencies & npm scripts
├── tsconfig.app.json             # App TypeScript config
└── vite.config.ts                # Vite config with React & Tailwind plugins
```

---

## 📄 License

&copy; J&O Technical Services Limited. RC: 9665822. All rights reserved.
