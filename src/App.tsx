/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode, useState } from "react";
import { Instagram, Youtube, MessageCircle, Globe, BookOpen, GraduationCap, Share2, ExternalLink } from "lucide-react";
import { motion } from "motion/react";

interface LinkItem {
  id: string;
  title: string;
  url: string;
  icon: ReactNode;
  price?: string;
  color?: string;
  isExternal?: boolean;
  highlight?: boolean;
  badge?: string;
}

export default function App() {
  const [shareText, setShareText] = useState("Compartilhe este perfil");

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Daniel Atena Concursos',
          url: url
        });
      } catch (err) {
        console.error("Erro ao compartilhar", err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        setShareText("Link copiado!");
        setTimeout(() => setShareText("Compartilhe este perfil"), 3000);
      } catch (err) {
        console.error("Falha ao copiar", err);
      }
    }
  };
  const links: LinkItem[] = [
    {
      id: "0",
      title: "Além das horas líquidas: A Estratégia da maior aprovada do Brasil",
      url: "https://go.hotmart.com/W105195711R",
      icon: <BookOpen className="w-6 h-6" />,
      price: "R$ 15,00",
      color: "bg-gradient-to-r from-[#111827] to-[#1F2937] hover:from-[#1F2937] hover:to-[#374151]",
      badge: "✨ NOVIDADE",
    },
    {
      id: "1",
      title: "NBC TSP Estrutura Conceitual Esquematizada",
      url: "https://go.hotmart.com/A105160071T",
      icon: <BookOpen className="w-6 h-6" />,
      price: "R$ 29,99 na Hotmart",
      color: "bg-gradient-to-r from-[#111827] to-[#1F2937] hover:from-[#1F2937] hover:to-[#374151]",
    },
    {
      id: "2",
      title: "Combo Claude SKILL para Concurso Público",
      url: "https://go.hotmart.com/N105131210I?dp=1",
      icon: <GraduationCap className="w-6 h-6" />,
      price: "R$ 29,99 na Hotmart",
      color: "bg-gradient-to-r from-[#111827] to-[#1F2937] hover:from-[#1F2937] hover:to-[#374151]",
      highlight: true,
    },
    {
      id: "3",
      title: "TikTok",
      url: "https://www.tiktok.com/@danielatenaconcursos",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
        </svg>
      ),
    },
    {
      id: "4",
      title: "Youtube",
      url: "https://www.youtube.com/@danielatenaconcursos",
      icon: <Youtube className="w-6 h-6" />,
    },
    {
      id: "5",
      title: "Instagram",
      url: "https://www.instagram.com/danielatenaconcursos/",
      icon: <Instagram className="w-6 h-6" />,
    },
    {
      id: "6",
      title: "atena-concurso.vercel.app",
      url: "https://atena-concurso.vercel.app",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      id: "7",
      title: "Fale Comigo no WhatsApp",
      url: "https://wa.me/5571997351808",
      icon: <MessageCircle className="w-6 h-6" />,
      color: "bg-[#25D366] hover:bg-[#128C7E]",
    },
  ];

  const socialIcons = [
    { icon: <Instagram className="w-6 h-6" />, url: "https://www.instagram.com/danielatenaconcursos/" },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
        </svg>
      ),
      url: "https://www.tiktok.com/@danielatenaconcursos",
    },
    { icon: <Youtube className="w-6 h-6" />, url: "https://www.youtube.com/@danielatenaconcursos" },
  ];

  return (
    <div className="min-h-screen bg-[#FFF8F2] flex flex-col items-center py-8 sm:py-12 px-4 sm:px-6 font-sans text-[#4A2C10]">
      {/* Profile Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center mb-6 sm:mb-8"
      >
        <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-[#E85D04] p-1 mb-3 sm:mb-4 overflow-hidden bg-white flex items-center justify-center shadow-lg">
          <img
            src="https://i.postimg.cc/tgzg6QRs/Gemini_Generated_Image_dximz7dximz7dxim.png"
            alt="Logo Daniel Atena"
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight mb-3 sm:mb-4 text-[#E85D04] text-center">danielatenaconcursos</h1>

        {/* Social Icons Row */}
        <div className="flex gap-5 sm:gap-6 mb-6 sm:mb-8">
          {socialIcons.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#E85D04" }}
              whileTap={{ scale: 0.9 }}
              className="text-[#4A2C10] transition-colors"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Links Section */}
      <div className="w-full max-w-md space-y-3 sm:space-y-4">
        {links.map((link, index) => (
          <motion.div
            key={link.id}
            onClick={() => window.open(link.url, '_blank', 'noopener,noreferrer')}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.03, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
            whileTap={{ scale: 0.97 }}
            className={`flex items-center w-full p-4 sm:p-5 rounded-2xl shadow-md transition-all duration-200 cursor-pointer ${
              link.color || "bg-[#E85D04] hover:bg-[#CC5204]"
            } text-white relative overflow-hidden group ${
              link.highlight ? "ring-2 ring-[#E85D04] ring-offset-2 ring-offset-[#FFF8F2]" : ""
            }`}
          >
            {(link.badge || link.highlight) && (
              <div className="absolute top-0 right-0 bg-[#E85D04] text-white text-[9px] sm:text-[10px] font-bold px-2 sm:px-3 py-1 rounded-bl-xl z-10 shadow-sm">
                {link.badge || "🔥 MAIS VENDIDO"}
              </div>
            )}
            <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl mr-3 sm:mr-4 ${link.highlight ? 'bg-[#E85D04]/20 text-[#E85D04]' : 'bg-white/20'}`}>
              {link.icon}
            </div>
            <div className="flex flex-col flex-grow text-left pr-6 sm:pr-8">
              <span className="font-bold text-[13px] sm:text-base leading-tight">
                {link.title}
              </span>
              {link.price && (
                <span className="text-[11px] sm:text-xs font-medium w-fit px-2 py-0.5 rounded-full mt-1.5 bg-[#E85D04] text-white">
                  {link.price}
                </span>
              )}
            </div>
            <ExternalLink className="absolute right-3 sm:right-4 w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-16 text-xs text-[#4A2C10]/60 flex flex-col items-center gap-4">
        <div 
          onClick={handleShare}
          className="flex items-center gap-2 cursor-pointer hover:text-[#E85D04] transition-colors"
        >
          <Share2 className="w-4 h-4" />
          <span className="font-medium">{shareText}</span>
        </div>
        <p className="font-light">© 2026 Daniel Atena Concursos</p>
      </footer>
    </div>
  );
}
