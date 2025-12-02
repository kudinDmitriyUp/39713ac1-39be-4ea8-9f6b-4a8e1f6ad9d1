"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import TagAbout from '@/components/sections/about/TagAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="small"
      background="dotGrid"
      cardStyle="glass-elevated"
      primaryButtonStyle="flat"
      secondaryButtonStyle="minimal"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Baking with Barbs"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Menu", id: "products" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Order Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="BAKING WITH BARBS"
          description="Handcrafted baked goods made with love. Fresh cookies, cupcakes, brownies, and more. Order your favorites today!"
          buttons={[
            {
              text: "See Our Menu",
              href: "products"
            },
            {
              text: "Order Now",
              href: "contact"
            }
          ]}
          slides={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1764707707561-e8dgge98.jpg",
              imageAlt: "Fresh chocolate chip cookies"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1764707708285-sq04ha5s.jpg",
              imageAlt: "Beautiful cupcakes with frosting"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1764707709105-7ldpzoo9.jpg",
              imageAlt: "Homemade brownies"
            }
          ]}
          autoplayDelay={4000}
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Our Story"
          description="At Baking with Barbs, we believe that every bite should taste like it was made with care and passion. Started with a love for baking and a desire to share homemade goodness with our community, we craft each item fresh daily using quality ingredients. No artificial flavors, no shortcuts—just real baking done right."
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Our Menu"
          description="Explore our delicious selection of handcrafted baked goods"
          tag="Popular Items"
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          carouselMode="buttons"
          products={[
            {
              id: "1",
              brand: "Baking with Barbs",
              name: "Chocolate Chip Cookies",
              price: "$12/dozen",
              rating: 5,
              reviewCount: "48",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1764707709637-njs5xg6a.jpg",
              imageAlt: "Chocolate chip cookies"
            },
            {
              id: "2",
              brand: "Baking with Barbs",
              name: "Vanilla Cupcakes",
              price: "$18/6 pack",
              rating: 5,
              reviewCount: "52",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1764707710352-dzmlra0l.jpg",
              imageAlt: "Vanilla cupcakes with frosting"
            },
            {
              id: "3",
              brand: "Baking with Barbs",
              name: "Chocolate Brownies",
              price: "$15/box",
              rating: 5,
              reviewCount: "61",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1764707711052-c8iydi3x.jpg",
              imageAlt: "Chocolate brownies"
            },
            {
              id: "4",
              brand: "Baking with Barbs",
              name: "Strawberry Cheesecake",
              price: "$24/whole",
              rating: 5,
              reviewCount: "38",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1764707712312-yfq2gxiz.jpg",
              imageAlt: "Strawberry cheesecake slice"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real feedback from people who love our baked goods"
          tag="Customer Reviews"
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          carouselMode="buttons"
          testimonials={[
            {
              id: "1",
              name: "Sarah Martinez",
              role: "Mom",
              company: "Local Customer",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1764707713266-2r0xgk5g.jpg",
              imageAlt: "Sarah Martinez"
            },
            {
              id: "2",
              name: "James Chen",
              role: "Event Planner",
              company: "Chen Events",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1764707714011-8przruy1.jpg",
              imageAlt: "James Chen"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              role: "Baker",
              company: "Food Blogger",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1764707714832-xsnmppow.jpg",
              imageAlt: "Emma Rodriguez"
            },
            {
              id: "4",
              name: "Michael Thompson",
              role: "Teacher",
              company: "Local School",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1764707715558-ziwisqwz.jpg",
              imageAlt: "Michael Thompson"
            },
            {
              id: "5",
              name: "Lisa Wong",
              role: "Office Manager",
              company: "Downtown Office",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1764707716271-8iqdu9nh.jpg",
              imageAlt: "Lisa Wong"
            },
            {
              id: "6",
              name: "David Johnson",
              role: "Father",
              company: "Local Customer",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1764707716959-w9dueaua.jpg",
              imageAlt: "David Johnson"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Ready to Order?"
          description="Fill out the form below and DM us on Instagram or contact us directly to place your order. We typically fulfill orders within 2-3 business days."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your Email",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: true
            },
            {
              name: "items",
              type: "text",
              placeholder: "What would you like to order?",
              required: true
            }
          ]}
          textarea={{
            name: "specialRequests",
            placeholder: "Any special requests or dietary needs?",
            rows: 4,
            required: false
          }}
          buttonText="Send Order Request"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Navigation",
              items: [
                {
                  label: "Home",
                  href: "hero"
                },
                {
                  label: "Menu",
                  href: "products"
                },
                {
                  label: "Reviews",
                  href: "testimonials"
                }
              ]
            },
            {
              title: "Connect",
              items: [
                {
                  label: "Instagram",
                  href: "https://instagram.com"
                },
                {
                  label: "Email",
                  href: "mailto:order@bakingwithbarbs.com"
                }
              ]
            },
            {
              title: "Info",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Contact",
                  href: "contact"
                }
              ]
            }
          ]}
          copyrightText="© 2025 Baking with Barbs. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}