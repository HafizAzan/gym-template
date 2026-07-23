"use client";

import { gym } from "@/data/gym";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { LoadingScreen } from "@/components/layout/loading-screen";
import {
  BackToTop,
  CookieConsent,
  FloatingContact,
  ScrollProgress,
  StickyMobileCta,
} from "@/components/layout/floating-widgets";
import { NewsletterPopup } from "@/components/layout/newsletter-popup";
import { ThemeSwitcher } from "@/components/layout/theme-switcher";
import { HeroSection } from "@/sections/hero";
import { WhyChooseUs } from "@/sections/why-choose-us";
import { MembershipPlans } from "@/sections/membership-plans";
import { Trainers } from "@/sections/trainers";
import { Gallery } from "@/sections/gallery";
import { Testimonials } from "@/sections/testimonials";
import { BmiCalculator } from "@/sections/bmi-calculator";
import { Programs } from "@/sections/programs";
import { Facilities } from "@/sections/facilities";
import { ClassSchedule } from "@/sections/class-schedule";
import { TrainersCta } from "@/sections/trainers-cta";
import { PricingCta } from "@/sections/pricing-cta";
import { GoogleReviews } from "@/sections/google-reviews";
import { Faq } from "@/sections/faq";
import { Contact } from "@/sections/contact";
import { Blogs, NutritionTips } from "@/sections/blogs-nutrition";

export function HomePage() {
  return (
    <>
      <LoadingScreen gym={gym} />
      <ScrollProgress />
      <Navbar gym={gym} />
      <main id="main-content">
        <HeroSection gym={gym} />
        <WhyChooseUs gym={gym} />
        <MembershipPlans gym={gym} />
        <Trainers gym={gym} />
        <Gallery gym={gym} />
        <Testimonials gym={gym} />
        <BmiCalculator gym={gym} />
        <Programs gym={gym} />
        <Facilities gym={gym} />
        <ClassSchedule gym={gym} />
        <TrainersCta gym={gym} />
        <PricingCta gym={gym} />
        <GoogleReviews gym={gym} />
        <NutritionTips gym={gym} />
        <Blogs gym={gym} />
        <Faq gym={gym} />
        <Contact gym={gym} />
      </main>
      <Footer gym={gym} />
      <FloatingContact gym={gym} />
      <StickyMobileCta gym={gym} />
      <BackToTop />
      <ThemeSwitcher />
      <CookieConsent gym={gym} />
      <NewsletterPopup gym={gym} />
    </>
  );
}
