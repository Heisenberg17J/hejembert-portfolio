import { useState } from "react";
import { Send, CheckCircle2, MessageSquare } from "lucide-react";
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
    projectType: ""
  });

  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    // Validación básica
    if (!formData.name || !formData.email || !formData.message || !formData.projectType) {
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
          company: formData.company || "No especificada",
          projectType: formData.projectType,
          budget: formData.budget || "No especificado",
          message: formData.message,
          reply_to: formData.email
        },
        EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus('success');
      setFormData({ name: "", email: "", company: "", budget: "", message: "", projectType: "" });
      
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Nombre */}
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">
            Nombre Completo *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
            placeholder="Juan Pérez"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
            placeholder="juan@empresa.com"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Empresa */}
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">
            Empresa / Startup
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
            placeholder="Mi Startup Tech"
          />
        </div>

        {/* Tipo de Proyecto */}
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">
            Tipo de Proyecto *
          </label>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
          >
            <option value="" className="bg-gray-900">Selecciona una opción</option>
            <option value="mvp" className="bg-gray-900">MVP / Producto Nuevo</option>
            <option value="webapp" className="bg-gray-900">Aplicación Web</option>
            <option value="ecommerce" className="bg-gray-900">E-commerce</option>
            <option value="landing" className="bg-gray-900">Landing Page</option>
            <option value="consulting" className="bg-gray-900">Consultoría</option>
            <option value="other" className="bg-gray-900">Otro</option>
          </select>
        </div>
      </div>

      {/* Presupuesto */}
      <div>
        <label className="block text-gray-300 text-sm font-medium mb-2">
          Presupuesto Estimado
        </label>
        <select
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
        >
          <option value="" className="bg-gray-900">Selecciona un rango</option>
          <option value="<200" className="bg-gray-900">Menos de $200 USD</option>
          <option value="200-500" className="bg-gray-900">$200- $500 USD</option>
          <option value="500-1K" className="bg-gray-900">$500- $1,000 USD</option>
          <option value="1K+" className="bg-gray-900">Más de $1,000 USD</option>
          <option value="flexible" className="bg-gray-900">Flexible / Por definir</option>
        </select>
      </div>

      {/* Mensaje */}
      <div>
        <label className="block text-gray-300 text-sm font-medium mb-2">
          Cuéntame sobre tu proyecto *
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
          placeholder="Describe tu idea, objetivos, timeline y cualquier detalle relevante..."
        />
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        disabled={isSubmitting}
        className={`w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
          isSubmitting 
            ? 'opacity-50 cursor-not-allowed' 
            : 'hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105'
        }`}
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            <span>Enviando...</span>
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            <span>Enviar Mensaje</span>
          </>
        )}
      </button>

      {/* Success/Error Messages */}
      {submitStatus === 'success' && (
        <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 flex items-center space-x-3">
          <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
          <p className="text-green-400 text-sm">
            ¡Mensaje enviado! Te responderé en menos de 24 horas.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 flex items-center space-x-3">
          <MessageSquare className="w-5 h-5 text-red-400 shrink-0" />
          <p className="text-red-400 text-sm">
            Por favor completa todos los campos requeridos (*).
          </p>
        </div>
      )}
    </div>
  );
}