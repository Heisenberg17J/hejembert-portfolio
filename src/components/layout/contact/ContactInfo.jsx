import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";

export default function ContactInfo() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "hejembert@gmail.com",
      link: "mailto:hejembert@gmail.com",
      description: "Respondo en menos de 24h"
    },
    {
      icon: Phone,
      title: "WhatsApp",
      value: "+57 3136749128",
      link: "https://wa.me/573136749128",
      description: "Disponible Lun-Vie"
    },
  ];


  return (
    <div className="space-y-8">
      {/* Intro */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-4">
          ¿Listo para empezar tu proyecto?
        </h3>
        <p className="text-gray-400 leading-relaxed">
          Ya sea que tengas una idea clara o solo estés explorando posibilidades, 
          me encantaría escucharte. Envíame un mensaje y 
          hablemos sobre cómo puedo ayudarte.
        </p>
      </div>

      {/* Contact Methods */}
      <div className="space-y-4">
        {contactMethods.map((method, index) => {
          const Icon = method.icon;
          return (
            <a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start space-x-4 bg-white/5 border border-white/10 rounded-xl p-4 hover:border-blue-500/30 hover:bg-white/10 transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-blue-500 to-cyan-400 p-3 rounded-lg shrink-0 group-hover:scale-110 transition-transform">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="text-white font-semibold mb-1">{method.title}</h4>
                <p className="text-blue-400 text-sm mb-1">{method.value}</p>
                <p className="text-gray-500 text-xs">{method.description}</p>
              </div>
            </a>
          );
        })}
      </div>

      {/* Location */}
      <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6">
        <div className="flex items-start space-x-3 mb-3">
          <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-1" />
          <div>
            <h4 className="text-white font-semibold mb-1">Ubicación</h4>
            <p className="text-gray-400 text-sm">
              Cali, Colombia
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Trabajo con clientes en todo el mundo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}