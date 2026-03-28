import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Expertise } from "@/components/sections/expertise";
import { Social } from "@/components/sections/social";
import { Location } from "@/components/sections/location";
import { Faq } from "@/components/sections/faq";
import { ContactCta } from "@/components/sections/contact-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Expertise />
      <Social />
      <Location />
      <Faq />
      <ContactCta />
    </>
  );
}
