import ClientEffects from '../components/ClientEffects'
import CheckoutEmbed from '../components/CheckoutEmbed'
import ContactForm from '../components/ContactForm'

export default function Home() {
  return (
    <>
      <ClientEffects />

      {/* SKIP NAV */}
      <a href="#main-content" className="skip-nav">Skip to main content</a>

      {/* STICKY BAR */}
      <div id="sticky-bar" role="region" aria-label="Quick purchase">
        <div className="sticky-bar-left">
          <span className="sticky-bar-name">The Dashidar Table</span>
          <span className="sticky-bar-price" aria-label="Price: $750">$750</span>
        </div>
        <a href="#order" className="sticky-bar-btn">Order Now</a>
      </div>

      {/* NAV */}
      <nav id="nav" className="over-dark" aria-label="Main navigation">
        <div className="nav-left">
          <a href="#" className="nav-logo" aria-label="Dashidar — home">Dashidar</a>
        </div>
        <ul className="nav-links" role="list">
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="nav-right">
          <a href="#order" className="nav-order">Order — $750</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" aria-label="Hero">
        <img
          src="/images/table-hero.jpg"
          alt="Dashidar solid wood coffee table with glass top, handcrafted in Brooklyn NY"
          fetchpriority="high"
        />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-text">
          <p className="hero-eyebrow">Custom Wood Table · Brooklyn, NY</p>
          <h1>Where <em>craft</em><br />meets structure.</h1>
          <div className="hero-ctas">
            <a href="#order" className="hero-btn-primary">Order Now — $750</a>
            <a href="#gallery" className="hero-btn-secondary">See the work</a>
          </div>
        </div>
        <div className="hero-scroll" aria-hidden="true">Scroll</div>
      </section>

      {/* TRUST BAR */}
      <div id="trust-bar" id="main-content" aria-label="Product highlights" role="region">
        <div className="trust-bar-inner">
          <div className="trust-item">
            <span className="trust-icon" aria-hidden="true">✦</span>
            <span>Solid wood — no MDF, no veneers</span>
          </div>
          <div className="trust-sep" aria-hidden="true" />
          <div className="trust-item">
            <span className="trust-icon" aria-hidden="true">✦</span>
            <span>Handmade in Brooklyn, NY</span>
          </div>
          <div className="trust-sep" aria-hidden="true" />
          <div className="trust-item">
            <span className="trust-icon" aria-hidden="true">✦</span>
            <span>Tool-free assembly</span>
          </div>
          <div className="trust-sep" aria-hidden="true" />
          <div className="trust-item">
            <span className="trust-icon" aria-hidden="true">✦</span>
            <span>Made to order — 6–8 weeks</span>
          </div>
        </div>
      </div>

      {/* INTRO */}
      <section id="intro" aria-labelledby="intro-heading">
        <div className="fade-up">
          <span className="label">The Piece</span>
          <h2 id="intro-heading">Solid wood.<br /><em>Modular</em> by design.</h2>
        </div>
        <div className="intro-text fade-up">
          <p>
            The Dashidar table begins as a sketch and ends as an heirloom. Each piece is made to order in Brooklyn — hand-finished from solid wood with an interlocking base that assembles and disassembles without a single screw or tool.
          </p>
          <p>
            Available in white oak, walnut, and maple. Custom dimensions on request. Lead time is 6–8 weeks.
          </p>
          <a href="#order" className="intro-cta">Order yours — $750 →</a>
        </div>
      </section>

      {/* SPECS */}
      <div id="specs" role="region" aria-label="Product specifications">
        <div className="specs-inner">
          <div className="spec-item fade-up">
            <div className="spec-value" aria-label="30 inches">30″</div>
            <div className="spec-label">Length</div>
          </div>
          <div className="spec-item fade-up">
            <div className="spec-value" aria-label="18 inches">18″</div>
            <div className="spec-label">Width</div>
          </div>
          <div className="spec-item fade-up">
            <div className="spec-value" aria-label="14 inches">14″</div>
            <div className="spec-label">Height</div>
          </div>
          <div className="spec-item fade-up">
            <div className="spec-value" aria-label="6 to 8">6–8</div>
            <div className="spec-label">Weeks lead time</div>
          </div>
        </div>
      </div>

      {/* GALLERY */}
      <section id="gallery" aria-labelledby="gallery-heading">
        <div className="gallery-header fade-up">
          <span className="label">Gallery</span>
          <h2 id="gallery-heading">The table, in detail.</h2>
        </div>
        <div className="gallery-grid" role="list">
          <div className="gallery-item g1 fade-up" role="listitem">
            <img src="/images/table-hero.jpg" alt="Dashidar table with glass top in a living room setting" loading="lazy" />
          </div>
          <div className="gallery-item g2 fade-up" role="listitem">
            <img src="/images/joint-dark.jpg" alt="Close-up of the interlocking walnut wood joint" loading="lazy" />
          </div>
          <div className="gallery-item g3 fade-up" role="listitem">
            <img src="/images/joint-light.jpg" alt="White oak joint close-up showing precision craftsmanship" loading="lazy" />
          </div>
          <div className="gallery-item g4 fade-up" role="listitem">
            <img src="/images/base-top.jpg" alt="Top-down view of the interlocking wood base structure" loading="lazy" />
          </div>
          <div className="gallery-item g5 fade-up" role="listitem">
            <img src="/images/bases-stacked.jpg" alt="Multiple table bases stacked and assembled" loading="lazy" />
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <div className="pull-quote pull-quote--dark fade-up" role="region" aria-label="Customer testimonial">
        <blockquote>
          "Five minutes to assemble — it looks like sculpture. The modular design meant it fit through my narrow Brooklyn doorway with no problem."
        </blockquote>
        <cite>— James L., Brooklyn NY</cite>
      </div>

      {/* DRAWING / DETAILS */}
      <section id="drawing" aria-labelledby="drawing-heading">
        <div className="drawing-inner">
          <div className="fade-up">
            <img src="/images/drawing.jpg" alt="Technical exploded-view drawing showing the table assembly and component layout" loading="lazy" />
          </div>
          <div className="drawing-text fade-up">
            <span className="label">Details</span>
            <h2 id="drawing-heading">Engineered<br />to last.</h2>
            <ul className="feature-list">
              <li>Solid wood construction throughout — no MDF, no veneers</li>
              <li>Modular interlocking base — assembles tool-free in minutes</li>
              <li>Glass top available in custom dimensions</li>
              <li>Available in white oak, walnut, and maple</li>
              <li>Custom dimensions and finishes on request</li>
              <li>Made to order in Brooklyn, New York — 6 to 8 weeks</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" aria-labelledby="process-heading">
        <div className="process-media fade-up">
          <video
            controls
            playsInline
            poster="/images/base-top.jpg"
            aria-label="Video showing the table assembly process — four wooden beams interlocking without tools"
          >
            <source src="/images/assembly.mov" type="video/mp4" />
            Your browser does not support video playback.
          </video>
        </div>
        <div className="process-text fade-up">
          <span className="label">Process</span>
          <h2 id="process-heading">Made in<br />Brooklyn.</h2>
          <p>
            Each table starts at the CNC mill in our Brooklyn workshop, where solid wood stock is cut to within a fraction of a millimeter. From there, every component is hand-sanded and finished before final assembly.
          </p>
          <p>
            The interlocking joint requires no hardware — the four beams hold each other through precisely calibrated tension. Take it apart in minutes. Put it together the same way.
          </p>
        </div>
      </section>

      {/* ORDER */}
      <section id="order" aria-labelledby="order-heading">
        <div className="order-inner">
          <div className="order-details fade-up">
            <span className="label">Reserve Yours</span>
            <h2 id="order-heading">Made <em>for you,</em><br />by hand.</h2>
            <div className="order-price" aria-label="Price: $750">$750</div>
            <p className="order-tagline">
              Solid wood. Handcrafted in Brooklyn. Yours in 6–8 weeks.
              Dana confirms your details within 2–3 business days.
            </p>
            <ul className="order-features" aria-label="What's included">
              <li>White oak, walnut, or maple — your choice</li>
              <li>Tool-free interlocking base</li>
              <li>Glass top available on request</li>
              <li>Custom dimensions available</li>
              <li>Each table is one of a kind</li>
            </ul>
            <div className="order-testimonial" role="blockquote" aria-label="Customer review">
              <div className="order-testimonial-stars" aria-label="5 stars">★★★★★</div>
              <p className="order-testimonial-text">
                "Worth every penny. We ordered the walnut finish and it exceeded every expectation. This is heirloom-quality furniture."
              </p>
              <span className="order-testimonial-cite">— Priya K., Manhattan NY</span>
            </div>
          </div>

          <div className="order-checkout fade-up">
            <div className="checkout-box">
              <CheckoutEmbed />
              <div className="trust-badges" aria-label="Payment security">
                <span>🔒 Secure payment</span>
                <span aria-hidden="true">·</span>
                <span>Stripe encrypted</span>
                <span aria-hidden="true">·</span>
                <span>Apple Pay accepted</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" aria-labelledby="reviews-heading">
        <div className="reviews-inner">
          <div className="reviews-header fade-up">
            <span className="label">Reviews</span>
            <h2 id="reviews-heading">What people are saying.</h2>
          </div>
          <div className="reviews-grid">
            <article className="review-card fade-up">
              <div className="review-stars" aria-label="5 out of 5 stars">★★★★★</div>
              <p className="review-text">"This table completely transformed our living room. The craftsmanship is unlike anything you'll find in a store — you can feel the thought that went into every joint. It arrived beautifully packaged and took under five minutes to assemble."</p>
              <footer className="review-author">
                <span className="review-name">Sarah M.</span>
                <span className="review-location">New York, NY</span>
              </footer>
            </article>
            <article className="review-card fade-up">
              <div className="review-stars" aria-label="5 out of 5 stars">★★★★★</div>
              <p className="review-text">"I've been looking for a coffee table that was both a conversation piece and actually functional. Dana's table is exactly that. The white oak is stunning and the modular design means it fit through my narrow Brooklyn doorway no problem."</p>
              <footer className="review-author">
                <span className="review-name">James L.</span>
                <span className="review-location">Brooklyn, NY</span>
              </footer>
            </article>
            <article className="review-card fade-up">
              <div className="review-stars" aria-label="5 out of 5 stars">★★★★★</div>
              <p className="review-text">"Worth every penny. We ordered the walnut finish and it exceeded every expectation. Dana communicated throughout the whole process and delivered exactly on time. This is heirloom-quality furniture."</p>
              <footer className="review-author">
                <span className="review-name">Priya K.</span>
                <span className="review-location">Manhattan, NY</span>
              </footer>
            </article>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" aria-labelledby="about-heading">
        <div className="about-inner">
          <div className="fade-up">
            <span className="label">The Maker</span>
            <h2 id="about-heading">Designed by<br /><em>Dana.</em></h2>
            <span className="about-location">Brooklyn, New York</span>
          </div>
          <div className="about-body fade-up">
            <p>
              Dana is a Brooklyn-based designer whose work lives at the intersection of architecture, furniture, and material craft. Every Dashidar piece is conceived, drawn, and built by hand — starting from first principles.
            </p>
            <p>
              The table grew out of a fascination with structural logic: how things hold together not because they are fastened, but because they are balanced. It is a piece you can live with for a lifetime.
            </p>
            <a
              href="https://danashihabeddin.myportfolio.com/home"
              target="_blank"
              rel="noopener noreferrer"
              className="about-link"
              aria-label="View Dana's full portfolio (opens in new tab)"
            >
              View full portfolio →
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" aria-labelledby="contact-heading">
        <div className="contact-inner fade-up">
          <span className="label">Contact</span>
          <h2 id="contact-heading">Questions?</h2>
          <p>Custom dimensions, wood selection, or wholesale inquiries — Dana reads every message personally.</p>
          <ContactForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer role="contentinfo">
        <span className="footer-logo" aria-label="Dashidar">Dashidar</span>
        <span>Handcrafted in Brooklyn, New York</span>
        <nav aria-label="Footer navigation">
          <div className="footer-links">
            <a href="#gallery">Gallery</a>
            <a href="#about">About</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </footer>
    </>
  )
}
