import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, XCircle, Terminal } from "lucide-react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const braceOpen = '{';
  const braceClose = '}';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 3000);
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          company: "No especificada",
          projectType: "Consulta general",
          budget: "No especificado",
          message: formData.message,
          reply_to: formData.email
        },
        EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus('success');
      setFormData({ name: "", email: "", message: "" });
      
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    { icon: Mail, label: "email", value: "hejembert@gmail.com", action: "mailto:hejembert@gmail.com" },
    { icon: Phone, label: "whatsapp", value: "+57 3136749128", action: "https://wa.me/573136749128" },
    { icon: MapPin, label: "location", value: "Cali, Colombia", action: null }
  ];

  return (
    <section id="contacto" className="bg-code-bgSecondary py-16 sm:py-20 lg:py-32" data-aos="fade-up">
      <div className="scanline-overlay"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-code-bg border border-code-bgTertiary rounded px-3 sm:px-4 py-2 font-mono text-xs sm:text-sm mb-4">
            <Terminal className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-code-green" />
            <span className="code-keyword">const</span> <span className="code-function">contact</span> = <span className="code-tag">{braceOpen}</span> method: <span className="code-string">'terminal'</span> <span className="code-tag">{braceClose}</span>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-mono text-code-text mt-4">
            <span className="code-comment">// </span>Conectemos
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          <div 
            className="bg-code-bg border border-code-bgTertiary rounded-lg overflow-hidden"
          >
            <div className="bg-code-bgTertiary px-3 sm:px-4 py-2 flex items-center justify-between border-b border-code-bgTertiary">
              <div className="flex items-center gap-2">
                <span className="text-code-green font-mono text-xs sm:text-sm">➜ ~</span>
                <span className="text-code-textMuted text-xs sm:text-sm font-mono">contact-info</span>
              </div>
              <div className="flex gap-1.5 sm:gap-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-code-red"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-code-yellow"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-code-green"></div>
              </div>
            </div>
            
            <div className="p-3 sm:p-4 lg:p-6 font-mono text-xs sm:text-sm space-y-3 sm:space-y-4">
              <div className="text-code-textMuted">
                <span className="code-comment">// Available contact methods</span>
              </div>
              
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <a
                    key={index}
                    href={method.action || "#"}
                    target={method.action ? "_blank" : "_self"}
                    rel={method.action ? "noopener noreferrer" : ""}
                    className="flex items-center gap-3 sm:gap-4 p-2 sm:p-3 rounded border border-transparent hover:border-code-bgTertiary hover:bg-code-bgSecondary transition-all duration-200 group"
                  >
                    <Icon className="w-4 sm:w-5 h-4 sm:h-5 text-code-green" />
                    <div>
                      <span className="code-attr">{method.label}</span>
                      <span className="text-code-textMuted">: </span>
                      <span className="code-string">{method.value}</span>
                    </div>
                  </a>
                );
              })}

              <div className="pt-3 sm:pt-4 border-t border-code-bgTertiary">
                <div className="text-code-textMuted">
                  <span className="code-comment">// Response time: &lt; 24 hours</span>
                </div>
              </div>
            </div>
          </div>

          <div 
            className="bg-code-bg border border-code-bgTertiary rounded-lg overflow-hidden"
          >
            <div className="bg-code-bgTertiary px-3 sm:px-4 py-2 flex items-center justify-between border-b border-code-bgTertiary">
              <div className="flex items-center gap-2">
                <span className="text-code-blue font-mono text-xs sm:text-sm">➜ ~</span>
                <span className="text-code-textMuted text-xs sm:text-sm font-mono">send-message</span>
              </div>
              <div className="flex gap-1.5 sm:gap-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-code-red"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-code-yellow"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-code-green"></div>
              </div>
            </div>
            
            <div className="p-3 sm:p-4 lg:p-6 space-y-3 sm:space-y-4">
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block text-code-textMuted text-xs sm:text-sm font-mono mb-1.5 sm:mb-2">
                    <span className="code-attr">name</span><span className="text-code-textMuted">: </span><span className="code-keyword">string</span><span className="text-code-textMuted">,</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-code-bgSecondary border border-code-bgTertiary rounded px-3 sm:px-4 py-2 sm:py-2.5 text-code-text font-mono text-xs sm:text-sm focus:outline-none focus:border-code-blue transition-colors"
                    placeholder="'Tu nombre'"
                  />
                </div>

                <div>
                  <label className="block text-code-textMuted text-xs sm:text-sm font-mono mb-1.5 sm:mb-2">
                    <span className="code-attr">email</span><span className="text-code-textMuted">: </span><span className="code-keyword">string</span><span className="text-code-textMuted">,</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-code-bgSecondary border border-code-bgTertiary rounded px-3 sm:px-4 py-2 sm:py-2.5 text-code-text font-mono text-xs sm:text-sm focus:outline-none focus:border-code-blue transition-colors"
                    placeholder="'tu@email.com'"
                  />
                </div>

                <div>
                  <label className="block text-code-textMuted text-xs sm:text-sm font-mono mb-1.5 sm:mb-2">
                    <span className="code-attr">message</span><span className="text-code-textMuted">: </span><span className="code-keyword">string</span><span className="text-code-textMuted">,</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full bg-code-bgSecondary border border-code-bgTertiary rounded px-3 sm:px-4 py-2 sm:py-2.5 text-code-text font-mono text-xs sm:text-sm focus:outline-none focus:border-code-blue transition-colors resize-none"
                    placeholder="'Tu mensaje...'"
                  />
                </div>
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center gap-2 bg-code-blue/20 text-code-blue border border-code-blue/50 rounded px-3 sm:px-4 py-2.5 sm:py-3 font-mono text-xs sm:text-sm transition-all duration-300 hover:bg-code-blue/30 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'sending...' : 'npm run send-message'}</span>
              </button>

              {submitStatus === 'success' && (
                <div className="flex items-center gap-2 text-code-green font-mono text-xs sm:text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>✓ Message sent successfully!</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center gap-2 text-code-red font-mono text-xs sm:text-sm">
                  <XCircle className="w-4 h-4" />
                  <span>✗ Error: Fill all required fields</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
