import Image from "next/image";

import { Head } from "@/layouts/head";

const gallery = Array.from({ length: 17 }, (_, index) => ({
  src: `/event-pic-${index + 1}.jpeg`,
  alt: `Celebration Nook event photo ${index + 1}`,
  width: index < 3 ? 720 : index === 16 ? 1200 : 1600,
  height: index < 3 || index === 16 ? 1600 : 1200,
}));

const whatsappUrl = `https://wa.me/919822385572?text=${encodeURIComponent(
  "Hi I would like to Enquire about Celebration Nook to host a event",
)}`;

function BrandLogo() {
  return (
    <Image
      alt="Celebration Nook — Hosting Parties"
      className="brand-logo"
      height={1242}
      loading="eager"
      sizes="100px"
      src="/celebration-nook-logo.png"
      width={1242}
    />
  );
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
    >
      <path
        d="M3.25 8h9.5m-4-4 4 4-4 4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="19"
      viewBox="0 0 24 24"
      width="19"
    >
      <path
        d="M20.1 11.9a8.1 8.1 0 0 1-12 7.1L4 20l1.1-4a8.1 8.1 0 1 1 15-4.1Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="M9 8.3c.2-.4.4-.4.7-.4h.4c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4-.1.6l-.5.6c-.2.2-.2.4 0 .6.4.7 1 1.3 1.7 1.7.2.1.4.1.6-.1l.6-.7c.2-.2.4-.3.6-.2l1.6.8c.3.1.4.3.4.5 0 .3-.2 1.1-.7 1.5-.5.4-1 .6-1.7.5-.7-.1-1.5-.4-2.5-.9-1.4-.8-2.4-2-2.8-2.7-.4-.7-.8-1.5-.8-2.2 0-.7.3-1.2.6-1.7Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function IndexPage() {
  return (
    <main className="venue-page">
      <Head />
      <header className="site-header">
        <a aria-label="Celebration Nook home" className="brand" href="#home">
          <BrandLogo />
        </a>
        <nav aria-label="Main navigation" className="site-nav">
          <a href="#space">The space</a>
          <a href="#gallery">Gallery</a>
          <a href="#location">Find us</a>
        </nav>
        <a className="header-cta" href="#enquire">
          Plan your gathering <ArrowIcon />
        </a>
      </header>

      <section aria-labelledby="hero-title" className="hero" id="home">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="eyebrow-dot" />A little place for big moments
          </span>
          <h1 id="hero-title">
            Good things
            <br />
            happen <em>together.</em>
          </h1>
          <p className="hero-description">
            A welcoming venue in Nagoa, Verna for birthdays and get-togethers.
            Space rental only for 50–80 PAX.
          </p>
          <div className="hero-actions">
            <a className="button button--dark" href="#enquire">
              Find your date <ArrowIcon />
            </a>
            <span className="hero-capacity">Made for 50–80 PAX</span>
          </div>
          <div className="hero-note">
            <span aria-hidden="true" className="hero-note-star">
              ✳
            </span>
            A relaxed, leafy setting in the heart of Goa
          </div>
        </div>
        <div className="hero-visual hero-brand-visual">
          <Image
            fill
            priority
            alt="Celebration Nook logo — Hosting Parties"
            className="hero-image hero-brand-image"
            loading="eager"
            sizes="(max-width: 760px) 100vw, 52vw"
            src="/celebration-nook-logo.png"
          />
        </div>
        <div className="hero-bottom">
          <span>Celebrate the way you want to</span>
          <a aria-label="Scroll to the space" href="#space">
            <span>↓</span>
          </a>
        </div>
      </section>

      <section
        aria-labelledby="space-title"
        className="space-section"
        id="space"
      >
        <div className="section-intro">
          <span className="eyebrow eyebrow--center">A space to make yours</span>
          <h2 id="space-title">
            The space,
            <br />
            <em>ready for your plans.</em>
          </h2>
          <p>
            Celebrate with your favourite people in our welcoming outdoor space.
            The venue is provided on its own, so you can arrange the event
            details separately.
          </p>
        </div>
        <div className="space-details">
          <article className="detail-card">
            <span className="detail-number">01</span>
            <h3>Room for your people</h3>
            <p>
              A comfortable fit for gatherings of 50–80 PAX, whether it’s an
              intimate family day or a lively get-together.
            </p>
          </article>
          <article className="detail-card">
            <span className="detail-number">02</span>
            <h3>Green, open & easygoing</h3>
            <p>
              A garden-side setting with leafy shade and a distinctly Goan
              backdrop for unhurried afternoons and joyful evenings.
            </p>
          </article>
          <article className="detail-card">
            <span className="detail-number">03</span>
            <h3>Space rental only</h3>
            <p>
              Only the event space is provided. Decorations, catering, and
              table-and-chair setup are not included and should be arranged
              separately.
            </p>
          </article>
        </div>
      </section>

      <section
        aria-labelledby="gallery-title"
        className="gallery-section"
        id="gallery"
      >
        <div className="gallery-heading">
          <div>
            <span className="eyebrow">A glimpse of the good times</span>
            <h2 id="gallery-title">
              A place for <em>your people.</em>
            </h2>
          </div>
          <span className="gallery-count">All 17 moments at the Nook</span>
        </div>
        <div className="gallery-grid">
          {gallery.map((image, index) => (
            <figure key={image.src} className="gallery-photo">
              <Image
                alt={image.alt}
                height={image.height}
                loading={index === 0 ? "eager" : "lazy"}
                priority={index === 0}
                sizes="(max-width: 760px) calc((100vw - 53px) / 2), (max-width: 1000px) calc((90vw - 26px) / 3), (max-width: 1600px) calc((83.9vw - 39px) / 4), 326px"
                src={image.src}
                width={image.width}
              />
              <figcaption>
                Celebration Nook · {String(index + 1).padStart(2, "0")}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="location-title"
        className="location-section"
        id="location"
      >
        <div aria-hidden="true" className="location-flower">
          ✳
        </div>
        <div>
          <span className="eyebrow eyebrow--light">
            A little tucked-away, easy to find
          </span>
          <h2 id="location-title">
            Meet us in
            <br />
            <em>Nagoa, Verna.</em>
          </h2>
        </div>
        <div className="location-aside">
          <p className="location-address">Nagoa, Verna · Goa</p>
          <p className="location-description">
            Find Celebration Nook in Nagoa, Verna, Goa. Contact us to enquire
            about renting the space for your event.
          </p>
          <a
            className="button button--whatsapp"
            href={whatsappUrl}
            rel="noreferrer"
            target="_blank"
          >
            <WhatsAppIcon />
            Ask us about the space
          </a>
          <div className="location-map">
            <iframe
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=15.360078075127909,73.92544851222132&z=16&output=embed"
              title="Celebration Nook location in Nagoa, Verna"
            />
            <a
              className="button button--maps"
              href="https://www.google.com/maps/search/?api=1&query=15.360078075127909%2C73.92544851222132"
              rel="noreferrer"
              target="_blank"
            >
              Show on Maps <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="enquire-title"
        className="enquire-section"
        id="enquire"
      >
        <div aria-hidden="true" className="enquire-flower">
          ✳
        </div>
        <div className="enquire-card">
          <span className="eyebrow eyebrow--center">
            A good day starts here
          </span>
          <h2 id="enquire-title">
            Your day.
            <br />
            <em>Your space.</em>
          </h2>
          <p className="enquire-description">
            Share your date and what you’re celebrating to enquire about
            Celebration Nook.
          </p>
          <div className="enquire-inclusion-note">
            <span aria-hidden="true" className="inclusion-indicator" />
            <span>
              <strong>Space rental only</strong>
              <span>
                Decorations, catering, and table-and-chair setup are not
                included.
              </span>
            </span>
          </div>
          <a
            className="button button--whatsapp enquire-button"
            href={whatsappUrl}
            rel="noreferrer"
            target="_blank"
          >
            <WhatsAppIcon />
            Enquire on WhatsApp
            <ArrowIcon />
          </a>
          <div className="enquire-details">
            <span>50–80 PAX</span>
            <span aria-hidden="true" className="enquire-details-divider" />
            <span>Nagoa, Verna, Goa</span>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <a aria-label="Celebration Nook home" className="brand" href="#home">
          <BrandLogo />
        </a>
        <span className="footer-copyright">
          © {new Date().getFullYear()} Celebration Nook. All rights reserved.
        </span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </main>
  );
}
