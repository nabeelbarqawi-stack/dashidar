import ClientEffects from '../components/ClientEffects'
import CheckoutEmbed from '../components/CheckoutEmbed'
import ContactForm from '../components/ContactForm'

export default function Home() {
  return (
    <>
      <ClientEffects />

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
        <img src="/images/table-hero.jpg" alt="Dashidar table — solid wood base with glass top" />
        <div className="hero-overlay" />
        <div className="hero-text">
          <h1>Where <em>craft</em><br />meets structure.</h1>
          <p>Custom wood tables — Brooklyn, New York</p>
          <div className="hero-ctas">
            <a href="#order" className="hero-btn-primary">Order Now — $750</a>
            <a href="#gallery" className="hero-btn-secondary">See the work</a>
          </div>
        </div>
        <div className="hero-scroll">Scroll</div>
      </section>

      {/* INTRO */}
      <section id="intro">
        <div className="fade-up">
          <span className="label">The Piece</span>
          <h2>Solid wood.<br /><em>Modular</em> by design.</h2>
        </div>
        <div className="intro-text fade-up">
          <p>
            The Dashidar table begins as a sketch and ends as an heirloom. Each piece is made to order in Brooklyn, New York — hand-finished from solid wood with an interlocking base that assembles and disassembles without a single screw or tool.
          </p>
          <p>
            The form is inspired by the logic of joinery itself: four beams crossing at the center, locking each other in place through friction and balance. It is structural sculpture.
          </p>
          <p>Every table is unique. Lead time is 6–8 weeks.</p>
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
            <div className="spec-label">Weeks to order</div>
          </div>
        </div>
      </div>

      {/* PULL QUOTE 1 */}
      <div className="pull-quote fade-up">
        <blockquote>
          "This table completely transformed our living room. The craftsmanship is unlike anything you'll find in a store."
        </blockquote>
        <cite>— Sarah M., New York</cite>
      </div>

      {/* GALLERY */}
      <section id="gallery">
        <div className="gallery-header fade-up">
          <span className="label">Gallery</span>
          <h2>The table, in detail.</h2>
        </div>
        <div className="gallery-grid">
          <div className="gallery-item g1 fade-up">
            <img src="/images/table-hero.jpg" alt="Dashidar table with glass top in living room" />
          </div>
          <div className="gallery-item g2 fade-up">
            <img src="/images/joint-dark.jpg" alt="Interlocking walnut wood joint detail" />
          </div>
          <div className="gallery-item g3 fade-up">
            <img src="/images/joint-light.jpg" alt="White oak joint close-up detail" />
          </div>
          <div className="gallery-item g4 fade-up">
            <img src="/images/base-top.jpg" alt="Top view of the interlocking wood base" />
          </div>
          <div className="gallery-item g5 fade-up">
            <img src="/images/bases-stacked.jpg" alt="Multiple table bases assembled" />
          </div>
        </div>
      </section>

      {/* PULL QUOTE 2 */}
      <div className="pull-quote pull-quote--dark fade-up">
        <blockquote>
          "The modular design means it fit through my narrow Brooklyn doorway no problem. Five minutes to assemble, looks like sculpture."
        </blockquote>
        <cite>— James L., Brooklyn</cite>
      </div>

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

      {/* DRAWING */}
      <section id="drawing">
        <div className="drawing-inner">
          <div className="fade-up">
            <img src="/images/drawing.jpg" alt="Technical exploded drawing of the table assembly" />
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

      {/* ORDER */}
      <section id="order">
        <div className="order-inner">
          <span className="label">Order</span>
          <h2>Made <em>for you,</em><br />by hand.</h2>
          <p className="order-intro">
            Each table is made to order in Brooklyn, New York — solid wood, handcrafted,
            ready in 6–8 weeks. Dana will reach out within 2–3 days to confirm your details.
          </p>
          <CheckoutEmbed />
          <p className="form-note">Brooklyn, NY &nbsp;·&nbsp; 6–8 weeks &nbsp;·&nbsp; Apple Pay &amp; all major cards</p>
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
          <h2>Get in touch.</h2>
          <p>Questions about the table, custom dimensions, or a wholesale inquiry? Dana reads every message.</p>
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
