'use client'
import { useEffect } from 'react'

export default function ClientEffects() {
  useEffect(() => {
    const nav = document.getElementById('nav')
    const hero = document.getElementById('hero')
    const stickyBar = document.getElementById('sticky-bar')
    const orderSection = document.getElementById('order')

    function updateNav() {
      const scrolled = window.scrollY > 60
      const pastHero = window.scrollY > hero.offsetHeight - 80
      nav.classList.toggle('scrolled', scrolled)
      nav.classList.toggle('over-dark', !pastHero)
    }

    function updateStickyBar() {
      if (!stickyBar || !orderSection) return
      const heroBottom = hero.getBoundingClientRect().bottom
      const orderTop = orderSection.getBoundingClientRect().top
      const orderBottom = orderSection.getBoundingClientRect().bottom
      const inOrder = orderTop < window.innerHeight && orderBottom > 0
      stickyBar.classList.toggle('visible', heroBottom < 0 && !inOrder)
    }

    function onScroll() {
      updateNav()
      updateStickyBar()
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    updateNav()
    updateStickyBar()

    const faders = document.querySelectorAll('.fade-up')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 80)
          observer.unobserve(e.target)
        }
      })
    }, { threshold: 0.1 })
    faders.forEach(el => observer.observe(el))

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return null
}
