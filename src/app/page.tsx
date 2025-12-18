"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardMetrics from '@/components/sections/hero/HeroBillboardMetrics';
import MediaSplitTabsAbout from '@/components/sections/about/MediaSplitTabsAbout';
import FeatureCardFifteen from '@/components/sections/feature/FeatureCardFifteen';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Play, Bell } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="large"
      sizing="largeSizeMediumTitles"
      background="none"
      cardStyle="noise-gradient"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Zootopia"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070238891-b3ytgegy.jpg"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Story", id: "about" },
            { name: "Characters", id: "features" },
            { name: "Reviews", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardMetrics
          title="Meet Agent Hops"
          description="The fastest, funniest bunny cop in Zootopia. Join her on an epic adventure to solve the city's greatest mystery and prove everyone wrong."
          tag="Movie Now Playing"
          tagIcon={Play}
          buttons={[
            { text: "Watch Trailer", href: "#contact" },
            { text: "Learn More", href: "#about" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070246285-w1rjlolc.jpg"
          imageAlt="Agent Hops - Zootopia's brave rabbit cop"
          frameStyle="browser"
          metricsLabel="A groundbreaking film loved by audiences worldwide"
          metrics={[
            { id: "1", value: "4.8/5", label: "Audience Rating" },
            { id: "2", value: "98%", label: "Critics Score" },
            { id: "3", value: "500M+", label: "Views" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <MediaSplitTabsAbout
          title="The Story Behind Zootopia"
          description="Experience a world where animals of all kinds live together in harmony and adventure."
          tabs={[
            {
              id: "hops",
              label: "Officer Hops",
              description: "A determined and optimistic rabbit who becomes the first bunny on the police force. Despite her small size, she's determined to prove her worth as a cop in the bustling city of Zootopia."
            },
            {
              id: "story",
              label: "The Adventure",
              description: "When mammals start mysteriously vanishing, Officer Hops must team up with a cunning con artist fox to solve the case. Together, they uncover a conspiracy that threatens the peace of Zootopia."
            },
            {
              id: "themes",
              label: "Themes",
              description: "Zootopia explores friendship, perseverance, and believing in yourself. It's a powerful story about breaking stereotypes and the importance of diversity and inclusion in any community."
            },
            {
              id: "world",
              label: "The City",
              description: "Zootopia is a vibrant metropolis with distinct districts from icy tundras to scorching deserts. Each area is uniquely designed to cater to different animal species, creating a diverse and fascinating world."
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070247592-k0674sv7.jpg"
          imageAlt="Zootopia cityscape"
          imagePosition="right"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardFifteen
          title="Meet the Characters"
          description="Discover the amazing cast that brings Zootopia to life"
          tag="Characters"
          features={[
            {
              id: "1",
              title: "Officer Judy Hops",
              description: "The determined rabbit cop ready to prove everyone wrong",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070249210-boq6b3dy.jpg",
              imageAlt: "Officer Judy Hops"
            },
            {
              id: "2",
              title: "Nick Wilde",
              description: "A sly fox con artist turned unlikely partner and friend",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070250052-5m8oes6v.jpg",
              imageAlt: "Nick Wilde"
            },
            {
              id: "3",
              title: "Chief Bogo",
              description: "The stern but fair police chief overseeing Zootopia's finest",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070251154-sdtxcxjs.jpg",
              imageAlt: "Chief Bogo"
            },
            {
              id: "4",
              title: "The City",
              description: "Every district has unique characters and adventures waiting",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070252213-zf1byfaj.jpg",
              imageAlt: "Zootopia cityscape"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardFifteen
          testimonial="Zootopia is a masterpiece of animation and storytelling. Officer Hops' journey is inspiring and the adventure is absolutely captivating from start to finish!"
          rating={5}
          author="Sarah Chen, Film Critic"
          avatars={[
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070254878-8f2wk9l0.jpg",
              alt: "Sarah Chen"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070255777-v0qfdht7.jpg",
              alt: "Reviewer 2"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070256615-0k37xzhh.jpg",
              alt: "Reviewer 3"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070257556-nr70r83o.jpg",
              alt: "Reviewer 4"
            }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofTwo
          title="Loved by Millions"
          description="Zootopia has been recognized and celebrated by major platforms and critics worldwide"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070239867-m32ce6ny.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070241577-4i5hzozz.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070242588-fyrilgig.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070243441-wd6y50dq.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070244334-zqa7vorp.jpg"
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know about Zootopia"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          showCard={true}
          faqs={[
            {
              id: "1",
              title: "Where can I watch Zootopia?",
              content: "Zootopia is available on major streaming platforms including Disney+, Netflix, Prime Video, and Hulu. Check your local listings for availability and current streaming options."
            },
            {
              id: "2",
              title: "What is the age rating?",
              content: "Zootopia is rated PG, making it suitable for family viewing. It contains mild action sequences and thematic content appropriate for children and families."
            },
            {
              id: "3",
              title: "How long is the movie?",
              content: "The movie runtime is approximately 1 hour and 49 minutes, making it perfect for a complete movie night experience."
            },
            {
              id: "4",
              title: "Is there a sequel coming?",
              content: "Yes! Zootopia 2 is in development and will continue Officer Hops' adventures in the beloved city. Fans can look forward to more mysteries and character development."
            },
            {
              id: "5",
              title: "Who are the voice actors?",
              content: "The film features an incredible voice cast bringing the characters to life with remarkable talent and emotion. Each character is voiced by accomplished actors who perfectly capture their personality."
            },
            {
              id: "6",
              title: "Can I buy or rent the movie?",
              content: "Yes, Zootopia is available for purchase and rental on digital platforms including iTunes, Google Play, Vudu, and Amazon Prime Video. You can own or rent it for your personal enjoyment."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Stay Connected"
          title="Get Zootopia Updates"
          description="Subscribe to our newsletter and never miss exciting news, exclusive content, behind-the-scenes footage, and announcements about Officer Hops' next adventure."
          tagIcon={Bell}
          useInvertedBackground="noInvert"
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe Now"
          termsText="We respect your privacy and will never share your email. Unsubscribe anytime with a single click."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070238891-b3ytgegy.jpg"
          copyrightText="© 2025 Disney Animation Studios. Zootopia is a registered trademark. All rights reserved."
          columns={[
            {
              title: "Movie",
              items: [
                { label: "Watch Now", href: "https://www.disneyplus.com" },
                { label: "Trailer", href: "#hero" },
                { label: "Cast", href: "#features" },
                { label: "Reviews", href: "#testimonial" }
              ]
            },
            {
              title: "Connect",
              items: [
                { label: "Newsletter", href: "#contact" },
                { label: "Social Media", href: "https://www.facebook.com" },
                { label: "Contact Us", href: "#contact" },
                { label: "FAQ", href: "#faq" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Terms & Conditions", href: "#" },
                { label: "Privacy Policy", href: "#" },
                { label: "Cookie Settings", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}