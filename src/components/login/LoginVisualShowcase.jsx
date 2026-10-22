import React, { useState, useEffect } from 'react';
import { Sparkles, Bookmark, Palette, GraduationCap } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    quote: 'The only digital space where effortless elegance, mindful self-care, and creative inspiration seamlessly converge.',
    author: 'Camille Laurent',
    role: 'Paris Fashion Contributor',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=140',
    location: 'Paris'
  },
  {
    id: 2,
    quote: 'An indispensable sanctuary for curating timeless lookbooks, thoughtful wellness routines, and daily fashion edits.',
    author: 'Elena Vance',
    role: 'Milan Creative Director',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=140',
    location: 'Milan'
  },
  {
    id: 3,
    quote: 'Visually immaculate and profoundly inspiring. The digital morning journal that sets the tone for my whole day.',
    author: 'Sophia Chen',
    role: 'New York Editorial Stylist',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=140',
    location: 'New York'
  }
];

const PERKS = [
  { icon: <Bookmark size={13} />, label: 'Private Lookbooks' },
  { icon: <Palette size={13} />, label: 'Curated Daily Edits' },
  { icon: <GraduationCap size={13} />, label: 'Atelier Masterclasses' }
];

/**
 * LoginVisualShowcase
 * Editorial showcase component displayed exclusively on the Login page.
 */
const LoginVisualShowcase = ({
  badgeText = 'The Digital Atelier • Member Sanctuary',
  titlePrefix = 'Elevate Your',
  titleHighlight = 'Everyday',
  titleSuffix = 'Aesthetic.',
  description = 'Where modern muses gather to curate quiet luxury, bespoke fashion inspiration, and intentional living.',
  backgroundImage = 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1400'
}) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate testimonials
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const current = TESTIMONIALS[activeTestimonial];

  return (
    <div
      className="login-visual-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Editorial visual showcase"
    >
      <img
        src={backgroundImage}
        alt="The Ultimate Girl Editorial Atelier"
        className="login-visual-bg"
      />
      <div className="login-visual-overlay" />
      <div className="login-visual-glow" />

      <div className="login-visual-content">
        <div className="login-visual-badge">
          <span className="login-visual-badge-dot" />
          <Sparkles size={13} />
          <span>{badgeText}</span>
        </div>

        <h2 className="login-visual-title">
          {titlePrefix} <br />
          <em>{titleHighlight}</em> {titleSuffix}
        </h2>

        <p className="login-visual-desc">{description}</p>

        {/* Exclusive Member Perks Strip */}
        <div className="login-visual-perks" role="list">
          {PERKS.map((perk) => (
            <span key={perk.label} className="login-perk-pill" role="listitem">
              {perk.icon}
              <span>{perk.label}</span>
            </span>
          ))}
        </div>

        {/* Interactive Testimonial Card */}
        <div className="login-testimonial-card">
          <div className="login-testimonial-top">
            <div className="login-quote-stars" aria-label="5 out of 5 stars">
              ★★★★★
            </div>
            <div className="login-testimonial-dots" role="tablist" aria-label="Testimonial switcher">
              {TESTIMONIALS.map((t, index) => (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={activeTestimonial === index}
                  aria-label={`Testimonial from ${t.author}`}
                  className={`login-testimonial-dot ${activeTestimonial === index ? 'active' : ''}`}
                  onClick={() => setActiveTestimonial(index)}
                />
              ))}
            </div>
          </div>

          <p className="login-testimonial-quote">&ldquo;{current.quote}&rdquo;</p>

          <div className="login-testimonial-author">
            <div className="login-author-meta">
              <img
                src={current.avatar}
                alt={current.author}
                className="login-author-avatar"
              />
              <div className="login-author-info">
                <span className="login-author-name">{current.author}</span>
                <span className="login-author-role">
                  {current.role} • {current.location}
                </span>
              </div>
            </div>
            <span className="login-muses-count-pill">50k+ Muses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginVisualShowcase;
