import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <Section className="py-16">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-foreground mb-8">
                Terms of Service
              </h1>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground mb-6">
                  This is a placeholder terms of service page. In a production environment, 
                  this would contain comprehensive legal terms and conditions for using 
                  our services.
                </p>
                
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Acceptance of Terms
                </h2>
                <p className="text-muted-foreground mb-6">
                  By accessing and using our services, you accept and agree to be bound 
                  by the terms and provision of this agreement.
                </p>
                
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Use License
                </h2>
                <p className="text-muted-foreground mb-6">
                  Permission is granted to temporarily use our services for personal, 
                  non-commercial transitory viewing only.
                </p>
                
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Disclaimer
                </h2>
                <p className="text-muted-foreground mb-6">
                  The materials on our website are provided on an &apos;as is&apos; basis. 
                  OWN LAB makes no warranties, expressed or implied, and hereby 
                  disclaims and negates all other warranties.
                </p>
                
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Limitations
                </h2>
                <p className="text-muted-foreground mb-6">
                  In no event shall OWN LAB or its suppliers be liable for any damages 
                  arising out of the use or inability to use the materials on our website.
                </p>
                
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Contact Information
                </h2>
                <p className="text-muted-foreground">
                  If you have any questions about these Terms of Service, please contact us 
                  at <a href="mailto:legal@ownlab.com" className="text-primary hover:underline">legal@ownlab.com</a>.
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
