"use client";
import { SiteTheme, SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutSplitBottom from '@/components/navigation/NavbarLayoutSplitBottom/NavbarLayoutSplitBottom';
import VoidHero from '@/components/sections/layouts/hero/VoidHero';
import BaseAbout from '@/components/sections/layouts/about/BaseAbout';
import ImageFAQ from '@/components/sections/layouts/faq/ImageFAQ';
import VerticalCardRoadmap from '@/components/sections/layouts/roadmap/VerticalCardRoadmap';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import ExpandingGridTokenomics from '@/components/sections/layouts/tokenomics/ExpandingGridTokenomics';
import FooterLogoEmphasis from '@/components/footer/FooterLogoEmphasis';

const theme: SiteTheme = {
  styleVariant: "funAndTrendy",
  colorTemplate: 1,
  textAnimation: "highlight",
};

export default function Home() {
  return (
    <SiteThemeProvider theme={theme}>
      <div id="nav" data-section="nav">
        <NavbarLayoutSplitBottom
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/tmp/design-a-simple-high-contrast-logo-for-f-1759247269212-27b211a2.jpg"
          buttonText="Learn More"
          onButtonClick={() => {}}
        />
      </div>
      <div id="hero" data-section="hero">
        <VoidHero
          title="Welcome to Frog Coin"
          description="Join our community of frog enthusiasts and start your journey now!"
          primaryButtonText="BUY NOW"
          secondaryButtonText="Learn More"
        />
      </div>
      <div id="about" data-section="about">
        <BaseAbout
          title="About Frog Coin"
          descriptions={["Frog Coin is a jungle-themed memecoin built for fun and community.", "Join us for clear steps to buy, playful visuals, and transparent tokenomics."]}
        />
      </div>
      <div id="faq" data-section="faq">
        <ImageFAQ
          image="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/tmp/a-flat-cartoon-portrait-of-an-anthropomo-1759247267372-21aa6b52.jpg"
          imageAlt="Frog FAQ"
          items={[
            { title: "What is Frog Coin?", content: "Frog Coin is a fun memecoin created for our community!" },
            { title: "How to buy?", content: "Follow our simple guide on the site to purchase frog coins!" },
          ]}
        />
      </div>
      <div id="roadmap" data-section="roadmap">
        <VerticalCardRoadmap
          title="Our Roadmap"
          items={[
            { title: "Phase 1", description: "Launch of Frog Coin and community building.", image: "" },
            { title: "Phase 2", description: "Token distribution and partnerships.", image: "" },
          ]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy2D variant="reveal" />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <ExpandingGridTokenomics
          title="Frog Coin Tokenomics"
          description="Transparent and fair token distribution."
          cardItems={[
            { id: 1, title: "Total Supply", description: "1 Billion Tokens" },
            { id: 2, title: "Market Cap", description: "$10 Million" },
          ]}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SzEkxKoNyIbQ4hnQYui6BHsfB/tmp/design-a-simple-high-contrast-logo-for-f-1759247269212-27b211a2.jpg"
          logoAlt="Frog Coin Logo"
          columns={[
            { items: [{ label: "Privacy Policy", onClick: () => {} },{ label: "Terms of Service", onClick: () => {} }]},
            { items: [{ label: "FAQ", onClick: () => {} }, { label: "Contact", onClick: () => {} }]},
            { items: [{ label: "Support", onClick: () => {} }, { label: "Community", onClick: () => {} }]},
          ]}
          logoText="Frog Coin"
        />
      </div>
    </SiteThemeProvider>
  );
}
