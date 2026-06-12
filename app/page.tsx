import Hero from "@/components/Hero";
import ServicesTicker from "@/components/ServicesTicker";
import ServicesGrid from "@/components/ServicesGrid";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import Leadership from "@/components/Leadership";
import AreasWeServe from "@/components/AreasWeServe";
import Testimonials from "@/components/Testimonials";
import AppointmentForm from "@/components/AppointmentForm";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesTicker />
      <ServicesGrid />
      <HowItWorks />
      <WhyChooseUs />
      <Leadership />
      <AreasWeServe />
      <Testimonials />
      <AppointmentForm />
      <FAQ />
      <ContactSection />
    </>
  );
}
