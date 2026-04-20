import ClientEffects from '../components/ClientEffects'
import CheckoutEmbed from '../components/CheckoutEmbed'
import ContactForm from '../components/ContactForm'

export default function Home() {
  return (
    <>
      <ClientEffects />

      {/* STICKY BAR */}
      <div id="sticky-bar">
        <div className="sticky-bar-left">
          <span className="sticky-bar-name">The Dashidar Table</span>
          <span className="sticky-bar-price">$750</span>
        </div>
        <a href="#order" className="sticky-bar-btn">Order Now</a>
      </div>

      {/* NAV */}
      <nav id="nav" className="over-dark">
        <a href="#" className="nav-logo">Dashidar</a>
        <ul className="nav-links">
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#order" className="nav-order">Order — $750</a>
      </nav>

      {/* HERO */}
      <section id="hero">
        <img
          src="/images/table-hero.jpg"
          alt="Dashidar table — custom solid wood coffee table, Brooklyn NY"
          fetchpriority="high"
        />
        <div className="hero-overlay" />
        <div className="hero-text">
          <p className="hero-eyebrow">Custom Wood Table · Brooklyn, NY</p>
          <h1>Where <em>craft</em><br />meets structure.</h1>
          <div className="hero-ctas">
            <a href="#order" className="hero-btn-primary">Order Now — $750</a>
            <a href="#gallery" className="hero-btn-secondary">See the work</a>
          </div>
        </div>
        <div className="hero-scroll">Scroll</div>
      </section>

      {/* TRUST BAR */}
      <div id="trust-bar">
        <div className="trust-bar-inner">
          <div className="trust-item">
            <span className="trust-icon">✦</span>
            <span>Solid wood — no MDF, no veneers</span>
          </div>
          <div className="trust-sep" />
          <div className="trust-item">
            <span className="trust-icon">✦</span>
            <span>Handmade in Brooklyn, NY</span>
          </div>
          <div className="trust-sep" />
          <div className="trust-item">
            <span className="trust-icon">✦</span>
            <span>Tool-free assembly</span>
          </div>
          <div className="trust-sep" />
          <div className="trust-item">
            <span className="trust-icon">✦</span>
            <span>Made to order — 6–8 weeks</span>
          </div>
        </div>
      </div>

      {/* INTRO */}
      <section id="intro">
        <div className="fade-up">
          <span className="label">The Piece</span>
          <h2>Solid wood.<br /><em>Modular</em> by design.</h2>
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
      <div id="specs">
        <div className="specs-inner">
          <div className="spec-item fade-up">
            <div className="spec-value">30″</div>
            <div className="spec-label">Length</div>
          </div>
          <div className="spec-item fade-up">
            <div className="spec-value">18″</div>
            <div className="spec-label">Width</div>
          </div>
          <div className="spec-item fade-up">
            <div className="spec-value">14″</div>
            <div className="spec-label">Height</div>
          </div>
          <div className="spec-item fade-up">
            <div className="spec-value">6–8</div>
            <div className="spec-label">Weeks lead time</div>
          </div>
        </div>
      </div>

      {/* GALLERY */}
      <section id="gallery">
        <div className="gallery-header fade-up">
          <span className="label">Gallery</span>
          <h2>The table, in detail.</h2>
        </div>
        <div className="gallery-grid">
          <div className="gallery-item g1 fade-up">
            <img src="/images/table-hero.jpg" alt="Dashidar table with glass top" loading="lazy" />
          </div>
          <div className="gallery-item g2 fade-up">
            <img src="/images/joint-dark.jpg" alt="Interlocking walnut wood joint detail" loading="lazy" />
          </div>
          <div className="gallery-item g3 fade-up">
            <img src="/images/joint-light.jpg" alt="White oak joint close-up" loading="lazy" />
          </div>
          <div className="gallery-item g4 fade-up">
            <img src="/images/base-top.jpg" alt="Top view of the interlocking base" loading="lazy" />
          </div>
          <div className="gallery-item g5 fade-up">
            <img src="/images/bases-stacked.jpg" alt="Multiple table bases assembled" loading="lazy" />
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <div className="pull-quote pull-quote--dark fade-up">
        <blockquote>
          "Five minutes to assemble — it looks like sculpture. The modular design meant it fit through my narrow Brooklyn doorway with no problem."
        </blockquote>
        <cite>— James L., Brooklyn NY</cite>
      </div>

      {/* DRAWING / DETAILS */}
      <section id="drawing">
        <div className="drawing-inner">
          <div className="fade-up">
            <img src="/images/drawing.jpg" alt="Technical exploded drawing of the table assembly" loading="lazy" />
          </div>
          <div className="drawing-text fade-up">
            <span className="label">Details</span>
            <h2>Engineered<br />to last.</h2>
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
      <section id="process">
        <div className="process-media fade-up">
          <video controls playsInline poster="/images/base-top.jpg">
            <source src="/images/assembly.mov" type="video/mp4" />
          </video>
        </div>
        <div className="process-text fade-up">
          <span className="label">Process</span>
          <h2>Made in<br />Brooklyn.</h2>
          <p>
            Each table starts at the CNC mill in our Brooklyn workshop, where solid wood stock is cut to within a fraction of a millimeter. From there, every component is hand-sanded and finished before final assembly.
          </p>
          <p>
            The interlocking joint requires no hardware — the four beams hold each other through precisely calibrated tension. Take it apart in minutes. Put it together the same way.
          </p>
        </div>
      </section>

      {/* ORDER */}
      <section id="order">
        <div className="order-inner">
          <div className="order-details fade-up">
            <span className="label">Reserve Yours</span>
            <h2>Made <em>for you,</em><br />by hand.</h2>
            <div className="order-price">$750</div>
            <p className="order-tagline">
              Solid wood. Handcrafted in Brooklyn. Yours in 6–8 weeks.
              Dana confirms your details within 2–3 business days.
            </p>
            <ul className="order-features">
              <li>White oak, walnut, or maple — your choice</li>
              <li>Tool-free interlocking base</li>
              <li>Glass top available on request</li>
              <li>Custom dimensions available</li>
              <li>Each table is one of a kind</li>
            </ul>
            <div className="order-testimonial">
              <div className="order-testimonial-stars">★★★★★</div>
              <p className="order-testimonial-text">
                "Worth every penny. We ordered the walnut finish and it exceeded every expectation. This is heirloom-quality furniture."
              </p>
              <span className="order-testimonial-cite">— Priya K., Manhattan NY</span>
            </div>
          </div>

          <div className="order-checkout fade-up">
            <div className="checkout-box">
              <CheckoutEmbed />
              <div className="trust-badges">
                <span>🔒 Secure payment</span>
                <span>·</span>
                <span>Stripe encrypted</span>
                <span>·</span>
                <span>Apple Pay accepted</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews">
        <div className="reviews-inner">
          <div className="reviews-header fade-up">
            <span className="label">Reviews</span>
            <h2>What people are saying.</h2>
          </div>
          <div className="reviews-grid">
            <div className="review-card fade-up">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">"This table completely transformed our living room. The craftsmanship is unlike anything you'll find in a store — you can feel the thought that went into every joint. It arrived beautifully packaged and took under five minutes to assemble."</p>
              <div className="review-author">
                <span className="review-name">Sarah M.</span>
                <span className="review-location">New York, NY</span>
              </div>
            </div>
            <div className="review-card fade-up">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">"I've been looking for a coffee table that was both a conversation piece and actually functional. Dana's table is exactly that. The white oak is stunning and the modular design means it fit through my narrow Brooklyn doorway no problem."</p>
              <div className="review-author">
                <span className="review-name">James L.</span>
                <span className="review-location">Brooklyn, NY</span>
              </div>
            </div>
            <div className="review-card fade-up">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">"Worth every penny. We ordered the walnut finish and it exceeded every expectation. Dana communicated throughout the whole process and delivered exactly on time. This is heirloom-quality furniture."</p>
              <div className="review-author">
                <span className="review-name">Priya K.</span>
                <span className="review-location">Manhattan, NY</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="about-inner">
          <div className="fade-up">
            <span className="label">The Maker</span>
            <h2>Designed by<br /><em>Dana.</em></h2>
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
            >
              View full portfolio →
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="contact-inner fade-up">
          <span className="label">Contact</span>
          <h2>Questions?</h2>
          <p>Custom dimensions, wood selection, or wholesale inquiries — Dana reads every message personally.</p>
          <ContactForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <span className="footer-logo">Dashidar</span>
        <span>Handcrafted in Brooklyn, New York</span>
        <div className="footer-links">
          <a href="#gallery">Gallery</a>
          <a href="#about">About</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </>
  )
}
