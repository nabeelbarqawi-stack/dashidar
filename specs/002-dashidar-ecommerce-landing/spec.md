# Feature Specification: Dashidar E-Commerce Landing Page

**Feature Branch**: `002-dashidar-ecommerce-landing`  
**Created**: 2026-04-19  
**Status**: Draft  
**Input**: User description: "Dashidar e-commerce landing page — a single-product direct-to-consumer site selling a handcrafted solid wood coffee table ($750) made to order in Brooklyn, NY. The site must showcase the product through a gallery and video, capture orders via an embedded Stripe checkout, allow visitors to contact the maker, and provide a fast, accessible, mobile-optimized experience that maximizes conversion from visit to purchase."

---

## User Scenarios & Testing *(mandatory)*

### User Story 1 — First-Time Visitor Discovers and Orders the Table (Priority: P1)

A prospective buyer lands on the page for the first time — from a social link, search result, or referral. They scroll through the page, view the gallery and video, read the reviews, and decide to purchase. They complete the embedded checkout without leaving the page.

**Why this priority**: This is the primary conversion path. Every other element on the page exists to support this journey. Without it, the site has no commercial purpose.

**Independent Test**: A user can visit the live page, scroll to the Order section, complete the Stripe checkout form, and receive a payment confirmation — demonstrating a full end-to-end purchase without any navigation away from the page.

**Acceptance Scenarios**:

1. **Given** a visitor lands on the page, **When** they scroll past the hero section, **Then** they see the gallery, product details, trust signals, and a clearly priced call to action ($750) at every scroll depth.
2. **Given** a visitor reaches the Order section, **When** the embedded checkout is visible, **Then** they can enter payment details and submit without being redirected to an external checkout page.
3. **Given** a visitor submits a valid payment, **When** Stripe confirms the charge, **Then** the visitor is shown a success confirmation and understands next steps (Dana will reach out within 2–3 business days).
4. **Given** a visitor submits an invalid card, **When** the payment is declined, **Then** an inline error message appears and the visitor can correct their details and retry without losing their selections.

---

### User Story 2 — Mobile Visitor Browses the Gallery and Places an Order (Priority: P2)

A visitor on a smartphone scrolls through the product gallery, watches the assembly video, and completes a purchase using Apple Pay or a card — all on a small screen.

**Why this priority**: A significant share of referral traffic arrives on mobile. The checkout and gallery must be fully functional and visually compelling on small screens.

**Independent Test**: Using a mobile device (or mobile browser emulation), a user can complete a full purchase — gallery is navigable, video plays, checkout fields are usable with a touch keyboard, and Apple Pay is offered as an option.

**Acceptance Scenarios**:

1. **Given** a visitor is on a mobile device, **When** they view the gallery, **Then** all images are appropriately sized, load quickly, and show no layout overflow.
2. **Given** a visitor is on iOS with Apple Pay enabled, **When** they reach the checkout, **Then** Apple Pay is presented as a payment option alongside card entry.
3. **Given** a visitor completes the checkout on mobile, **When** the payment processes, **Then** the success state is displayed correctly within the mobile viewport.

---

### User Story 3 — Visitor Contacts the Maker with a Custom Request (Priority: P3)

A prospective buyer has a question about custom dimensions, wood species, or wholesale pricing. They find the contact section, fill in the form, and submit their inquiry.

**Why this priority**: Custom orders and wholesale inquiries represent a meaningful secondary revenue path. The contact form captures leads that a direct purchase does not.

**Independent Test**: A user can navigate to the Contact section, complete all fields, submit the form, and receive an on-page confirmation that their message was sent — without requiring email client access or page reload.

**Acceptance Scenarios**:

1. **Given** a visitor reaches the Contact section, **When** they submit the form with a valid name, email, and message, **Then** an inline success message confirms the inquiry was received.
2. **Given** a visitor submits the form with a missing or malformed email, **When** they press submit, **Then** a validation message identifies the field error before submission is attempted.
3. **Given** a visitor submits the form, **When** the message is delivered, **Then** the maker (Dana) receives the full inquiry including name, email, and message body.

---

### User Story 4 — Returning Visitor Quickly Jumps to the Order Section (Priority: P4)

A visitor who has already browsed the page returns to complete their purchase. They use the sticky bar or top navigation to jump directly to the Order section without re-scrolling.

**Why this priority**: Reducing friction for returning visitors improves overall conversion rate.

**Independent Test**: A user who scrolls past the hero sees the sticky bar appear, clicks "Order Now," and is immediately taken to the checkout — without a full page reload.

**Acceptance Scenarios**:

1. **Given** a visitor has scrolled past the hero section, **When** the sticky bar appears, **Then** it shows the product name, price, and an "Order Now" link.
2. **Given** a visitor is viewing the Order section, **When** that section is in view, **Then** the sticky bar is hidden to avoid redundancy.
3. **Given** a visitor clicks any navigation link or CTA, **When** the scroll-to-section animation completes, **Then** the target section is fully visible and not obscured by fixed UI elements.

---

### Edge Cases

- What happens if Stripe fails to load or returns an error fetching the PaymentIntent? → An inline error message prompts the visitor to refresh. The checkout field is not shown.
- What happens if the contact form submission fails due to a network error? → An error message is shown; the visitor's typed message is preserved so they can retry.
- What happens if a visitor has JavaScript disabled? → Core page content (text, images) should remain accessible; the checkout and contact form require JavaScript and can show a fallback message.
- What happens on very large screens (≥1920px wide)? → Content is constrained to a maximum readable width and remains centered.
- What happens if the gallery images fail to load? → Alt text is always present; the layout does not collapse.

---

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The page MUST display a hero section with a high-quality image, product headline, and two calls-to-action (Order Now and See the Work) visible above the fold on desktop and mobile.
- **FR-002**: The page MUST include a gallery of at least five product images with descriptive alt text for each.
- **FR-003**: The page MUST include an embedded video demonstrating the table assembly process, with a poster image displayed before playback begins.
- **FR-004**: The page MUST display the product price ($750) prominently in at least two locations (hero, order section) and in the sticky bar when visible.
- **FR-005**: The page MUST embed a Stripe payment form that allows visitors to complete a purchase without leaving the page.
- **FR-006**: The Stripe checkout MUST lazy-load and only initialize when the visitor is near the Order section, to avoid impacting initial page load time.
- **FR-007**: The page MUST include a contact form that captures name, email address, and a free-text message, and delivers the submission to the maker.
- **FR-008**: The page MUST display at least three customer reviews with name, location, and review text.
- **FR-009**: A sticky bar MUST appear when the visitor scrolls past the hero and MUST hide when the Order section is in the viewport.
- **FR-010**: The page MUST include a skip-navigation link for keyboard users.
- **FR-011**: All interactive elements (buttons, links, form fields) MUST be keyboard-accessible and have visible focus styles.
- **FR-012**: All images MUST include meaningful alt text; decorative images MUST be marked with empty alt attributes.
- **FR-013**: The page MUST render correctly and be fully functional on screen widths from 320px to 1920px.
- **FR-014**: The page MUST pass WCAG 2.1 Level AA color contrast requirements for all body text and interactive elements.
- **FR-015**: After a successful payment, the visitor MUST be shown a confirmation and informed that Dana will follow up within 2–3 business days.

### Key Entities

- **Product**: The Dashidar Table — a single SKU, fixed price of $750, three wood species (white oak, walnut, maple), custom dimensions available on request, 6–8 week lead time.
- **Order**: A completed Stripe payment capturing the buyer's contact details and payment. Triggers a follow-up from Dana.
- **Inquiry**: A contact form submission capturing name, email, and message. Delivered to the maker for manual response.
- **Visitor**: An anonymous user browsing the page — may become a buyer (Order) or lead (Inquiry).

---

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: The page achieves a Lighthouse Performance score of 90 or above on both mobile and desktop.
- **SC-002**: The page achieves a Lighthouse Accessibility score of 100 on desktop.
- **SC-003**: The largest contentful paint (LCP) element is visible within 3 seconds on a standard mobile connection.
- **SC-004**: Visitors can complete the checkout form and submit payment in under 3 minutes from first viewing the Order section.
- **SC-005**: The contact form submission succeeds and delivers the inquiry to the maker within 60 seconds of the visitor clicking submit.
- **SC-006**: The page renders without layout errors on iOS Safari, Android Chrome, desktop Chrome, desktop Firefox, and desktop Safari.
- **SC-007**: Zero WCAG 2.1 AA contrast failures appear in an automated accessibility audit.
- **SC-008**: The sticky bar appears within 100ms of the hero scrolling out of view and disappears within 100ms of the Order section entering the viewport.

---

## Assumptions

- The product is a single SKU at a fixed price of $750 — no variants, quantity selection, or cart functionality are required.
- Payment is processed by Stripe; the Stripe account and product/price configuration already exist or will be set up separately.
- The contact form delivers submissions via a server-side handler (e.g., Resend, SendGrid) configured separately from this spec — form delivery infrastructure is out of scope.
- Custom dimensions and wood selection are confirmed by the maker (Dana) after payment, not during checkout.
- The page is a single-page site with no routing — all content is on one scrollable page.
- SEO metadata (title, description, Open Graph) is included but a full SEO strategy is out of scope.
- Analytics are captured passively (e.g., Vercel Analytics) and no event-level conversion tracking configuration is in scope.
- The page is deployed on Vercel with a custom domain.
- International shipping, currency conversion, and tax calculation are out of scope for v1.
