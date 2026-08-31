import { Header } from "./Header";
import { ArrowUpRight } from "./ArrowUpRight";

const features = [
  {
    eyebrow: "Familiar by design",
    title: "Your instincts already know where to go.",
    body: "Amalide keeps the shortcuts, tools, layers, and editing conventions professional raster designers expect. Spend your time making—not relearning.",
    tone: "light",
    label: "Product view placeholder",
  },
  {
    eyebrow: "One command engine",
    title: "Paint it. Script it. Agent it.",
    body: "The mouse, keyboard, plugins, scripts, CLI, and agents all speak the same operation language. Every change remains undoable and every workflow stays consistent.",
    tone: "accent",
    label: "Command engine diagram placeholder",
  },
  {
    eyebrow: "Layer-first canvas",
    title: "Pixels with room to change your mind.",
    body: "Build with layers, masks, and adjustments the way you already do—non-destructive, stacked, and ready to revise without flattening your work.",
    tone: "dark",
    label: "Layer stack placeholder",
  },
];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function Placeholder({ label, variant = "window" }: { label: string; variant?: "window" | "canvas" }) {
  return (
    <div className={`placeholder placeholder--${variant}`} role="img" aria-label={label}>
      <div className="placeholder__bar"><span /><span /><span /></div>
      <div className="placeholder__workspace">
        <div className="placeholder__tools" />
        <div className="placeholder__stage">
          <div className="placeholder__artboard" />
          <div className="placeholder__artboard placeholder__artboard--small" />
        </div>
        <div className="placeholder__panel" />
      </div>
      <span className="placeholder__label">{label}</span>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header basePath={basePath} />

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <p className="kicker"><span /> Free · open source · cross-platform</p>
          <h1 id="hero-title">Design freely.<br /><em>Keep the power.</em></h1>
          <div className="hero__bottom">
            <p>A professional raster editor built for familiar workflows—and a future where every action is equally available to people, scripts, plugins, and agents.</p>
            <a className="circle-link" href="#why" aria-label="Explore Amalide"><span aria-hidden="true">↓</span></a>
          </div>
        </section>

        <section className="hero-media section-shell" aria-label="Amalide product preview">
          <Placeholder label="Amalide interface preview placeholder" />
        </section>

        <section className="manifesto section-shell" id="why">
          <p className="section-number">01 / Why Amalide</p>
          <div>
            <h2>The raster editor that launched yesterday with <em>20 years of tutorials.</em></h2>
            <p>Amalide is being built so experienced Photoshop users can sit down and begin—without giving up openness, automation, or ownership of their work.</p>
          </div>
        </section>

        <section className="feature-stack" id="features" aria-label="Amalide features">
          {features.map((feature, index) => (
            <article className={`feature feature--${feature.tone}`} key={feature.title}>
              <div className="feature__copy">
                <p className="section-number">0{index + 2} / {feature.eyebrow}</p>
                <h2>{feature.title}</h2>
                <p>{feature.body}</p>
              </div>
              <Placeholder label={feature.label} variant={index === 2 ? "canvas" : "window"} />
            </article>
          ))}
        </section>

        <section className="principles section-shell">
          <p className="section-number">05 / Built in public</p>
          <h2>Open to All.<br /><em>Yours to shape.</em></h2>
          <div className="principles__grid">
            <p>No subscription</p><p>No mandatory account</p><p>No proprietary cloud</p>
            <p>Open document format</p><p>macOS, Windows &amp; Linux</p><p>MIT or Apache 2.0</p>
          </div>
        </section>

        <section className="status section-shell" id="status">
          <div>
            <p className="section-number">Current status</p>
            <h2>Coming soon.</h2>
          </div>
          <div className="status__copy">
            <p>Amalide is in early development. The site is live so you can follow along as the raster editor takes shape.</p>
            <p>Follow the repository to watch—and help—it grow.</p>
            <a className="text-link" href="https://github.com/tonykastaneda/Amalide" target="_blank" rel="noreferrer">Explore on GitHub <span aria-hidden="true">→</span></a>
          </div>
        </section>

        <section className="cta">
          <div className="cta__art" aria-hidden="true">
            <img src={`${basePath}/brand/apollo.svg`} alt="" className="cta__mark" />
          </div>
          <p>The Open source raster design,<br />suite without the compromise.</p>
          <span className="cta-button">Coming soon</span>
        </section>
      </main>

      <footer>
        <a className="footer-brand" href="#top" aria-label="Amalide"><img src={`${basePath}/brand/amalide-a.svg`} alt="" /></a>
        <div className="footer-links">
          <div><p>Project</p><a href="#why">Why Amalide</a><a href="#features">Features</a><a href="#status">Status</a></div>
          <div><p>Community</p><a href="https://github.com/tonykastaneda/Amalide" target="_blank" rel="noreferrer">GitHub <ArrowUpRight /></a><a href="https://github.com/tonykastaneda/Amalide/issues" target="_blank" rel="noreferrer">Issues <ArrowUpRight /></a></div>
        </div>
        <p className="footer-note">
          Built in public. Made for designers. Made with <span className="footer-heart" aria-label="love">♥</span> in Bell, California.
        </p>
      </footer>
    </>
  );
}
