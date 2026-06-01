import React from 'react'
import MainLayout from '../templates/MainLayout'
import { HeroSection, WhatIDo, PortfolioGrid, ResumeTabs, Testimonials, Clients, Pricing, BlogList, LoremSection, ContactForm } from '../organisms'

export const PortfolioPage: React.FC = () => {
  return (
    <MainLayout>
      <HeroSection />
      <WhatIDo />
      <PortfolioGrid />
      <ResumeTabs />
      <Testimonials />
      <Clients />
      <Pricing />
      <LoremSection />
      <BlogList />
      <ContactForm />
    </MainLayout>
  )
}

export default PortfolioPage
