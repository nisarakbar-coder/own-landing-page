"use client";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <Section className="py-16">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-foreground mb-8">
                Privacy Policy
              </h1>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground mb-6">
                  This is a placeholder privacy policy page. In a production environment, 
                  this would contain comprehensive privacy information including data 
                  collection, usage, storage, and user rights.
                </p>
                
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Information We Collect
                </h2>
                <p className="text-muted-foreground mb-6">
                  We collect information you provide directly to us, such as when you 
                  create an account, use our services, or contact us for support.
                </p>
                
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  How We Use Your Information
                </h2>
                <p className="text-muted-foreground mb-6">
                  We use the information we collect to provide, maintain, and improve 
                  our services, process transactions, and communicate with you.
                </p>
                
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Data Security
                </h2>
                <p className="text-muted-foreground mb-6">
                  We implement appropriate security measures to protect your personal 
                  information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Contact Us
                </h2>
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy, please contact us 
                  at <a href="mailto:privacy@ownlab.com" className="text-primary hover:underline">privacy@ownlab.com</a>.
                </p>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      
      <Footer />
    </div>
  );
}
