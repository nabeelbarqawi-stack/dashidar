'use client'
import { useEffect } from 'react'

export default function ClientEffects() {
  useEffect(() => {
    const nav = document.getElementById('nav')
    const hero = document.getElementById('hero')

    function updateNav() {
      const scrolled = window.scrollY > 60
      const pastHero = window.scrollY > hero.offsetHeight - 80
      nav.classList.toggle('scrolled', scrolled)
      nav.classList.toggle('over-dark', !pastHero)
    }
    window.addEventListener('scroll', updateNav, { passive: true })
    updateNav()

    const faders = document.querySelectorAll('.fade-up')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 80)
          observer.unobserve(e.target)
        }
      })
    }, { threshold: 0.12 })
    faders.forEach(el => observer.observe(el))

    return () => window.removeEventListener('scroll', updateNav)
  }, [])

  return null
}
