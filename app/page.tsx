import { Button } from '@/components/shared/ui/button';
import Header from '@/components/shared/Header';
import { LandingPrimaryImageCtaSection } from '@/components/landing/cta/LandingPrimaryCta';
import { LandingProductHuntAward } from '@/components/landing/social-proof/LandingProductHuntAward';
import { LandingSocialProof } from '@/components/landing/social-proof/LandingSocialProof';
import { LandingDiscount } from '@/components/landing/discount/LandingDiscount';

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center fancy-overlay">
      <Header className="mb-0 lg:mb-0" />

      <LandingPrimaryImageCtaSection
        title="Ich packe mit an!"
        description="Der Alltag hat Sie fest im Griff und der Garten wächst Ihnen über den Kopf? Lassen Sie mich das machen! Denn meine Mission ist es, dass sich Ihr Tag im Garten wie ein Tag Urlaub anfühlt!"
        imageSrc="/static/images/product-sample.webp"
        withBackground
        withBackgroundGlow
        leadingComponent={<LandingProductHuntAward />}
      >
        <Button size="xl" asChild>
          <a href="https://cal.com/baggerbachi/gartenpflege">
            Jetzt Termin vereinbaren
          </a>
        </Button>

        <LandingDiscount
          discountValueText="30% off"
          discountDescriptionText="for the first 10 customers (2 left)"
        />

        <LandingSocialProof
          className="w-full mt-12"
          showRating
          numberOfUsers={99}
          suffixText="happy users"
          avatarItems={[
            {
              imageSrc: 'https://picsum.photos/id/64/100/100',
              name: 'John Doe',
            },
            {
              imageSrc: 'https://picsum.photos/id/65/100/100',
              name: 'Jane Doe',
            },
            {
              imageSrc: 'https://picsum.photos/id/669/100/100',
              name: 'Alice Doe',
            },
          ]}
        />
      </LandingPrimaryImageCtaSection>
    </div>
  );
}
