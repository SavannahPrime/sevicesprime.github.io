
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import TestimonialCard from '@/components/TestimonialCard';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import ProcessSection from '@/components/ProcessSection';
import AILab from '@/components/AILab';
import StatsSection from '@/components/StatsSection';
import ServiceCard from '@/components/ServiceCard';
import { Cpu, Code, Database, BarChart4, PenTool, MessageSquare as MessageIcon } from 'lucide-react';
import ImageWithFallback from '@/components/ui/image-with-fallback';

const serviceImages = {
  chatbot: "https://images.unsplash.com/photo-1677442135968-6d89bf90052d?auto=format&fit=crop&w=600&q=80",
  analytics: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=600&q=80",
  ml: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80",
  nlp: "https://images.unsplash.com/photo-1677442133472-276f26324f04?auto=format&fit=crop&w=600&q=80",
  data: "https://images.unsplash.com/photo-1655720033654-a4239dd42d10?auto=format&fit=crop&w=600&q=80",
  design: "https://images.unsplash.com/photo-1669570094762-828f3dfaf675?auto=format&fit=crop&w=600&q=80",
};

const Index = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* Services Section */}
      <section className="section bg-background relative">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=2000&q=80"
            alt="Tech background"
            className="w-full h-full object-cover opacity-5"
          />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Enterprise AI Solutions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Advanced <span className="gradient-text">AI Services</span> for Business Growth
            </h2>
            <p className="text-lg text-muted-foreground mb-0 max-w-3xl mx-auto">
              We deliver intelligent solutions tailored for the East African market,
              helping organizations leverage AI for competitive advantage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              title="Intelligent Chatbots"
              description="Our Nairobi-developed chatbots understand Swahili and local contexts, delivering 24/7 customer service with seamless WhatsApp and M-Pesa integration."
              icon={<MessageIcon className="h-6 w-6" />}
              link="/services"
              features={[
                "Swahili language support",
                "M-Pesa integration",
                "WhatsApp compatibility"
              ]}
              image={serviceImages.chatbot}
              imageAlt="AI chatbot interface with Swahili language capabilities"
            />
            
            <ServiceCard
              title="Predictive Analytics"
              description="Transform your business decisions with AI analytics customized for East African markets, forecasting trends specific to Kenya's economic environment."
              icon={<BarChart4 className="h-6 w-6" />}
              link="/services"
              features={[
                "Kenyan market insights",
                "Local trend forecasting",
                "East African data analysis"
              ]}
              image={serviceImages.analytics}
              imageAlt="Data visualization showing Kenyan market analytics"
            />
            
            <ServiceCard
              title="ML Model Development"
              description="Custom machine learning solutions developed in Nairobi that integrate seamlessly with your existing systems and provide actionable insights for Kenyan businesses."
              icon={<Code className="h-6 w-6" />}
              link="/services"
              features={[
                "Locally trained models",
                "Kenyan data optimization",
                "Industry-specific solutions"
              ]}
              image={serviceImages.ml}
              imageAlt="Machine learning code visualization with Kenyan data"
            />
            
            <ServiceCard
              title="Natural Language Processing"
              description="Our NLP solutions understand Swahili, Sheng, and other Kenyan languages, enabling sentiment analysis and automated translation services for local markets."
              icon={<Cpu className="h-6 w-6" />}
              link="/services"
              features={[
                "Swahili & Sheng support",
                "Kenyan sentiment analysis",
                "Local content generation"
              ]}
              image={serviceImages.nlp}
              imageAlt="Language processing visualization with Swahili text"
            />
            
            <ServiceCard
              title="Data Analytics Platform"
              description="Transform your raw data into valuable business intelligence with advanced analytics solutions designed specifically for the Kenyan market context."
              icon={<Database className="h-6 w-6" />}
              link="/services"
              features={[
                "Kenya-specific datasets",
                "Local market benchmarks",
                "East African insights"
              ]}
              image={serviceImages.data}
              imageAlt="Data analytics dashboard with Kenyan market metrics"
            />
            
            <ServiceCard
              title="AI Interface Design"
              description="User-centered design services for AI applications that ensure intuitive experiences tailored for Kenyan users and local business workflows."
              icon={<PenTool className="h-6 w-6" />}
              link="/services"
              features={[
                "Kenyan user research",
                "Local UX patterns",
                "Culturally relevant design"
              ]}
              image={serviceImages.design}
              imageAlt="AI interface design for Kenyan applications"
            />
          </div>
        </div>
      </section>
      
      {/* AI Technology Lab */}
      <AILab />
      
      {/* Process Section */}
      <ProcessSection />
      
      {/* Testimonials Section */}
      <section className="section bg-background relative">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2000&q=80"
            alt="Tech pattern background"
            className="w-full h-full object-cover opacity-5"
          />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Client Success Stories
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground mb-0 max-w-3xl mx-auto">
              See how we've helped leading businesses across Kenya transform with our AI solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard
              quote="SavannahPrime's AI chatbot with Swahili support completely transformed our customer service operations, reducing response times by 70% and increasing satisfaction among our Kenyan customers."
              name="David Kamau"
              company="TechSolutions Nairobi"
              rating={5}
            />
            
            <TestimonialCard
              quote="The automated data analytics platform they built has given us insights into the Kenyan retail market we never thought possible. Our decision-making is faster and more accurate now."
              name="Sarah Wanjiku"
              company="RetailMaster Kenya"
              rating={5}
              image="/lovable-uploads/Alex.jpg"
            />
            
            <TestimonialCard
              quote="Working with SavannahPrime's Nairobi team was seamless. Their AI integration with M-Pesa and our existing systems was smooth, and the results have exceeded our expectations."
              name="Michael Odhiambo"
              company="Media Insights East Africa"
              rating={4}
            />
          </div>
          
          <div className="mt-10 text-center">
            <Link 
              to="/reviews" 
              className="inline-flex items-center text-primary hover:underline"
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              See more success stories from across Kenya
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden border-y border-primary/10">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=2000&q=80"
            alt="Tech pattern background"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI and automation solutions can help your business unlock new opportunities in the East African market.
            </p>
            <Link
              to="/contact"
              className="button-hover-effect bg-primary text-white px-8 py-3 rounded-md font-medium text-lg hover:shadow-lg hover:shadow-primary/20 transition-all inline-block"
            >
              Schedule a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Index;
