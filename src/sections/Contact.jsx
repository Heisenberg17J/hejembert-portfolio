import { MessageSquare } from "lucide-react";
import ContactForm from "../components/layout/contact/ContactForm";
import ContactInfo from "../components/layout/contact/ContactInfo";

export default function Contact() {
  return (
    <section id="contacto" className="relative bg-[#020617] py-20 lg:py-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <MessageSquare className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Contacto</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Contactame
          </h2>
          
          <p className="text-gray-400 text-lg lg:text-xl max-w-3xl mx-auto">
            Transformemos tu idea en realidad. Completa el formulario y te responderé pronto.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          
          {/* Left: Contact Info (2 columns) */}
          <div className="lg:col-span-2">
            <ContactInfo />
          </div>

          {/* Right: Contact Form (3 columns) */}
          <div className="lg:col-span-3">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-10">
              <ContactForm />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}