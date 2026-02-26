import HeroSection from "@/components/HeroSection";
import WhatIsRapp from "@/components/WhatIsRapp";
import WhyApia from "@/components/WhyApia";
import ProcessSteps from "@/components/ProcessSteps";
import SocialProof from "@/components/SocialProof";
import FaqSection from "@/components/FaqSection";
import FinalCta from "@/components/FinalCta";
import ContactForm from "@/components/ContactForm";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Footer from "@/components/Footer";
import DeadlinePopup from "@/components/DeadlinePopup";
import FloatingDeadlineBanner from "@/components/FloatingDeadlineBanner";

const Index = () => {
  return (
    <main>
      <FloatingDeadlineBanner />
      <DeadlinePopup />
      <HeroSection />
      <WhatIsRapp />
      <WhyApia />
      <ProcessSteps />
      <SocialProof />
      <FaqSection />
      <FinalCta />
      <ContactForm />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Index;
