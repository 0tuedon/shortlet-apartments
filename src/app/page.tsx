"use client"
import ApartmentFeatures from "@/components/home/ApartmentFeatures";
import ApartmentGallery from "@/components/home/ApartmentGallery";
import ContactUs from "@/components/home/ContactUs";
import FAQs from "@/components/home/FAQs";
import HeroSection from "@/components/home/HeroSection";


export default function Home() {
  return (
    <div>
        <HeroSection />
        <ApartmentFeatures />
        <ApartmentGallery />
        <FAQs />
        <ContactUs />
    </div>
  );
}
