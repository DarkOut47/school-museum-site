:root {
  --bg: #080b10;
  --bg-soft: #101821;
  --panel: rgba(17, 22, 31, 0.82);
  --panel-strong: #151d28;
  --card: #121b25;
  --card-alt: #101722;
  --line: rgba(255, 255, 255, 0.09);
  --text: #edf3ff;
  --muted: #a9b5c7;
  --gold: #d7b06c;
  --gold-soft: #f7dca8;
  --blue: #6ca7ff;
  --shadow: rgba(0, 0, 0, 0.36);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  color: var(--text);
  background:
    radial-gradient(circle at top left, rgba(108, 167, 255, 0.11), transparent 24%),
    radial-gradient(circle at top right, rgba(215, 176, 108, 0.12), transparent 27%),
    linear-gradient(180deg, var(--bg) 0%, #0d1218 100%);
  line-height: 1.6;
  overflow-x: hidden;
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
}

p,
h1,
h2,
h3 {
  margin-top: 0;
}

.container {
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
}

.bg-glow {
  position: fixed;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.22;
  pointer-events: none;
  z-index: 0;
}

.glow-1 {
  top: 60px;
  left: -80px;
  background: rgba(107, 121, 255, 0.55);
  animation: floatGlow 14s ease-in-out infinite alternate;
}

.glow-2 {
  top: 180px;
  right: -60px;
  background: rgba(215, 176, 108, 0.55);
  animation: floatGlow 18s ease-in-out infinite alternate-reverse;
}

.glow-3 {
  bottom: 60px;
  left: 25%;
  background: rgba(122, 203, 255, 0.45);
  animation: floatGlow 16s ease-in-out infinite alternate;
}

.site-header,
main,
.site-footer {
  position: relative;
  z-index: 1;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(14px);
  background: rgba(9, 12, 18, 0.64);
  border-bottom: 1px solid var(--line);
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 74px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.brand-mark {
  display: inline-grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--gold-soft), var(--gold));
  color: #0d1014;
  font-weight: 800;
  box-shadow: 0 10px 20px rgba(215, 176, 108, 0.35);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 22px;
  flex-wrap: wrap;
}

.nav-links a {
  color: var(--muted);
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.25s ease;
}

.nav-links a:hover {
  color: var(--text);
}

.hero {
  padding: 72px 0 60px;
}

.hero-inner {
  display: grid;
  grid-template-columns: 1.2fr 0.9fr;
  gap: 34px;
  align-items: center;
}

.eyebrow {
  display: inline-block;
  color: var(--gold-soft);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-size: 0.7rem;
  font-weight: 700;
  margin-bottom: 18px;
}

.hero-copy h1,
.section-intro h2,
.section-heading h2 {
  font-family: "Cormorant Garamond", serif;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.hero-copy h1 {
  margin-bottom: 18px;
  font-size: clamp(3.5rem, 6vw, 6.1rem);
  line-height: 0.86;
  max-width: 620px;
}

.hero-copy h1 span {
  color: var(--gold-soft);
}

.lead {
  color: var(--muted);
  font-size: 1.08rem;
  max-width: 550px;
}

.hero-actions {
  margin-top: 28px;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 15px 24px;
  text-decoration: none;
  font-weight: 700;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn-primary {
  background: linear-gradient(135deg, var(--gold-soft), var(--gold));
  color: #140f0b;
  box-shadow: 0 16px 32px rgba(215, 176, 108, 0.25);
}

.btn-secondary {
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.02);
  color: var(--text);
}

.hero-meta {
  margin-top: 38px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.hero-meta div {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 18px 16px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.02);
  border-radius: 18px;
}

.hero-meta strong {
  font-size: 1.35rem;
  color: var(--gold-soft);
}

.hero-meta span {
  color: var(--muted);
  font-size: 0.82rem;
}

.hero-visual {
  display: flex;
  justify-content: center;
}

.visual-card {
  position: relative;
  width: min(100%, 450px);
  padding: 20px;
  border-radius: 30px;
  background: linear-gradient(180deg, rgba(17, 24, 31, 0.9), rgba(12, 17, 24, 0.86));
  border: 1px solid var(--line);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.35);
  animation: floatCard 7s ease-in-out infinite;
}

.glass {
  backdrop-filter: blur(12px);
}

.visual-header {
  display: flex;
  gap: 8px;
  margin-bottom: 18px;
}

.dot {
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.35);
}

.dot-gold {
  background: var(--gold);
}

.museum-scene {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 16px;
  min-height: 320px;
}

.scene-panel {
  background: linear-gradient(180deg, rgba(22, 29, 36, 0.9), rgba(15, 21, 26, 0.9));
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 20px;
}

.panel-main {
  position: relative;
  overflow: hidden;
  background:
    linear-gradient(135deg, rgba(215, 176, 108, 0.16), rgba(8, 12, 18, 0.3)),
    rgba(17, 22, 31, 0.9);
}

.panel-main::before {
  content: "";
  position: absolute;
  inset: auto auto 30px 16px;
  width: 80%;
  height: 70%;
  border-radius: 22px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02));
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.panel-label {
  position: relative;
  z-index: 1;
  color: var(--gold-soft);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.7rem;
}

.panel-main h3 {
  position: relative;
  z-index: 1;
  margin: 18px 0 8px;
  font-size: 2rem;
  line-height: 1.1;
}

.panel-main p {
  position: relative;
  z-index: 1;
  color: var(--muted);
  margin-bottom: 18px;
}

.mini-bar {
  position: relative;
  z-index: 1;
  display: flex;
  gap: 8px;
}

.mini-bar span {
  display: block;
  height: 9px;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--gold), rgba(255, 255, 255, 0.32));
}

.mini-bar span:nth-child(1) { width: 38%; }
.mini-bar span:nth-child(2) { width: 26%; }
.mini-bar span:nth-child(3) { width: 18%; }

.panel-side {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
}

.stat-block {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 18px 14px;
}

.stat-block.alt {
  background: rgba(215, 176, 108, 0.08);
}

.stat-kicker {
  display: block;
  color: var(--muted);
  font-size: 0.73rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 8px;
}

.stat-block strong {
  font-size: 1.15rem;
}

.section {
  padding: 92px 0;
}

.section-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 42px;
  align-items: start;
}

.section-intro h2,
.section-heading h2 {
  font-size: clamp(2.5rem, 4vw, 3.8rem);
  line-height: 1;
  margin-bottom: 0;
}

.text-block {
  display: grid;
  gap: 18px;
  color: var(--muted);
  font-size: 1.04rem;
}

.section-dark {
  background: rgba(12, 16, 22, 0.85);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.section-heading {
  margin-bottom: 32px;
}

.cards {
  display: grid;
  gap: 22px;
}

.three-up {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.card {
  background: linear-gradient(180deg, rgba(17, 24, 32, 0.95), rgba(12, 17, 24, 0.9));
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 28px 22px;
  box-shadow: 0 20px 35px rgba(0, 0, 0, 0.22);
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.card:hover {
  transform: translateY(-6px);
  border-color: rgba(215, 176, 108, 0.4);
}

.card-icon {
  color: var(--gold-soft);
  font-weight: 700;
  letter-spacing: 0.12em;
  margin-bottom: 18px;
}

.card h3 {
  margin-bottom: 12px;
  font-size: 1.65rem;
}

.card p {
  margin-bottom: 0;
  color: var(--muted);
}

.timeline {
  position: relative;
  display: grid;
  gap: 24px;
  margin-top: 30px;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 87px;
  top: 18px;
  bottom: 18px;
  width: 2px;
  background: linear-gradient(180deg, rgba(215, 176, 108, 0.8), rgba(255, 255, 255, 0.1));
}

.timeline-item {
  position: relative;
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 26px;
  align-items: start;
  padding-left: 24px;
}

.timeline-item::before {
  content: "";
  position: absolute;
  left: 78px;
  top: 12px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--gold-soft), var(--gold));
  box-shadow: 0 0 0 7px rgba(215, 176, 108, 0.16);
}

.year {
  display: inline-block;
  color: var(--gold-soft);
  font-weight: 800;
  padding-top: 3px;
}

.timeline-item h3 {
  margin-bottom: 8px;
}

.timeline-item p {
  margin-bottom: 0;
  color: var(--muted);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.photo {
  min-height: 250px;
  border-radius: 24px;
  border: 1px solid var(--line);
  background-size: cover;
  background-position: center;
  box-shadow: 0 20px 36px rgba(0, 0, 0, 0.2);
  transition: transform 0.35s ease, filter 0.35s ease;
}

.photo:hover {
  transform: translateY(-6px) scale(1.02);
  filter: saturate(1.1);
}

.photo-one {
  background:
    linear-gradient(140deg, rgba(215, 176, 108, 0.14), rgba(8, 11, 16, 0.65)),
    url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80') center/cover;
}

.photo-two {
  background:
    linear-gradient(140deg, rgba(108, 167, 255, 0.12), rgba(8, 11, 16, 0.65)),
    url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80') center/cover;
}

.photo-three {
  background:
    linear-gradient(140deg, rgba(215, 176, 108, 0.12), rgba(8, 11, 16, 0.65)),
    url('https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=80') center/cover;
}

.photo-four {
  background:
    linear-gradient(140deg, rgba(255, 255, 255, 0.08), rgba(8, 11, 16, 0.7)),
    url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80') center/cover;
}

.quote-section {
  padding-top: 28px;
  padding-bottom: 100px;
}

.quote-box {
  background: linear-gradient(135deg, rgba(215, 176, 108, 0.08), rgba(255, 255, 255, 0.03));
  border: 1px solid var(--line);
  border-radius: 28px;
  padding: 38px 28px;
  text-align: center;
}

.quote-box p {
  margin: 0;
  color: var(--gold-soft);
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(2.2rem, 4vw, 3.3rem);
  line-height: 1.05;
}

.site-footer {
  padding: 28px 0 56px;
  background: rgba(7, 10, 15, 0.9);
  border-top: 1px solid var(--line);
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
}

.footer-brand {
  text-transform: none;
}

.footer-info {
  color: var(--muted);
  text-align: right;
}

.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: transform 0.7s ease, opacity 0.7s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

@keyframes floatGlow {
  0% {
    transform: translate(0, 0) scale(1);
  }
  100% {
    transform: translate(28px, 12px) scale(1.08);
  }
}

@keyframes floatCard {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@media (max-width: 900px) {
  .hero-inner,
  .section-grid,
  .three-up,
  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .timeline-item {
    grid-template-columns: 1fr;
    padding-left: 12px;
  }

  .timeline::before {
    left: 10px;
  }

  .timeline-item::before {
    left: 1px;
  }

  .footer-inner {
    flex-direction: column;
    text-align: center;
  }

  .footer-info {
    text-align: center;
  }
}

@media (max-width: 700px) {
  .nav {
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    padding: 12px 0 16px;
  }

  .nav-links {
    justify-content: center;
  }

  .hero-meta {
    grid-template-columns: 1fr;
  }

  .hero {
    padding-top: 56px;
  }

  .section {
    padding: 72px 0;
  }
}
