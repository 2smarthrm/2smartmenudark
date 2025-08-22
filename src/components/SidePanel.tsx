// SidePanel.tsx (zoom 2x + drag vertical + clicar fora fecha)

import React, { useState, useRef, useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { ContentItem, FeatureGroup } from '../types';
import { useTheme } from '../contexts/ThemeContext';

interface SidePanelProps {
  item: ContentItem | null;
  isOpen: boolean;
  onClose: () => void;
}

const isGrouped = (features: ContentItem['features']): features is FeatureGroup[] =>
  Array.isArray(features) && features.length > 0 && typeof (features as any)[0] === 'object' && 'items' in (features as any)[0];

export const SidePanel: React.FC<SidePanelProps> = ({ item, isOpen, onClose }) => {
  const { isDark } = useTheme();
  const [isImageZoomed, setIsImageZoomed] = useState(false);
  const [zoom, setZoom] = useState(1);

  // drag vertical (para o modal)
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [dragStartY, setDragStartY] = useState<number | null>(null);
  const [startScrollTop, setStartScrollTop] = useState(0);

  useEffect(() => {
    if (isImageZoomed) {
      setZoom(1);
      if (scrollerRef.current) scrollerRef.current.scrollTop = 0;
    }
  }, [isImageZoomed]);

  if (!item) return null;

  return (
    <>
      {/* Backdrop da página (fecha painel) */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Side Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full lg:w-[500px] border-l z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } ${isDark ? 'bg-black border-gray-800' : 'bg-white border-gray-200'}`}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className={`flex items-center justify-between p-8 border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
            <div>
              <h2 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {item.title}
              </h2>
              <p className="text-blue-400 font-medium">{item.subtitle} • {item.category}</p>
            </div>
            <button
              onClick={onClose}
              className={`p-2 rounded-lg transition-colors ${
                isDark 
                  ? 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700' 
                  : 'bg-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-300'
              }`}
            >
              <X size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-8 space-y-8">
            
            {/* Imagem com ícone de Zoom */}
            {item.image && (
              <div
                className="relative h-80 rounded-xl overflow-hidden cursor-zoom-in group"
                onClick={() => setIsImageZoomed(true)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 right-4 bg-black/60 text-white p-2 rounded-full">
                  <ZoomIn size={20} />
                </div>
              </div>
            )}
             {/* CTA(s) – aparece só quando definido no item */}
{/* CTA(s) – largura total, logo após a imagem */}
{item.cta && (
  <div className="mt-4 space-y-3">
    {Array.isArray(item.cta) ? (
      item.cta.map((c, i) => (
        <a
          key={i}
          href={c.href}
          target="_blank"
          rel="noopener noreferrer"
          className={
            c.variant === 'secondary'
              ? `block w-full text-center px-5 py-3 rounded-lg border font-semibold transition-colors ${
                  isDark
                    ? 'border-gray-700 text-gray-200 hover:bg-gray-800'
                    : 'border-gray-300 text-gray-800 hover:bg-gray-100'
                }`
              : `block w-full text-center px-5 py-3 rounded-lg font-semibold transition-colors text-white ${
                  isDark
                    ? 'bg-blue-600 hover:bg-blue-700'
                    : 'bg-blue-600 hover:bg-blue-700'
                }`
          }
        >
          {c.label}
        </a>
      ))
    ) : (
      <a
        href={item.cta.href}
        target="_blank"
        rel="noopener noreferrer"
        className={
          item.cta.variant === 'secondary'
            ? `block w-full text-center px-5 py-3 rounded-lg border font-semibold transition-colors ${
                isDark
                  ? 'border-gray-700 text-gray-200 hover:bg-gray-800'
                  : 'border-gray-300 text-gray-800 hover:bg-gray-100'
              }`
            : `block w-full text-center px-5 py-3 rounded-lg font-semibold transition-colors text-white ${
                isDark
                  ? 'bg-blue-600 hover:bg-blue-700'
                  : 'bg-blue-600 hover:bg-blue-700'
              }`
        }
      >
        {item.cta.label}
      </a>
    )}
  </div>
)}

            {/* Texto */}
            {item.content && (
              <p className={`text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {item.content}
              </p>
            )}

            {/* Features (simples ou agrupadas) */}
            {item.features && (item.features as any[]).length > 0 && (
              <div className="space-y-6">
                {isGrouped(item.features) ? (
                  item.features.map((group, idx) => (
                    <div key={idx}>
                      <h4 className={`text-md font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {group.title}
                      </h4>
                      <div className="space-y-2 ml-4">
                        {group.items.map((subItem, subIdx) => {
                          const sep = subItem.lastIndexOf(' - ');
                          const hasDate = sep > -1;
                          const text = hasDate ? subItem.slice(0, sep) : subItem;
                          const date = hasDate ? subItem.slice(sep + 3) : '';
                          return (
                            <div key={subIdx} className="flex items-center gap-3">
                              <div className="w-1 h-1 bg-blue-400 rounded-full" />
                              <span className={`text-sm font-medium tracking-wider ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                {text}
                                {hasDate && <span className={`ml-2 text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>• {date}</span>}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))
                ) : (
                  (item.features as string[]).map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-1 h-1 bg-blue-400 rounded-full" />
                      <span className={`text-sm font-medium tracking-wider ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {feature}
                      </span>
                    </div>
                  ))
                )}
              </div>
            )}
        
          </div>
        </div>
      </div>

      {/* Modal de Zoom */}
{isImageZoomed && (
  <div
    className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-4"
    onClick={() => setIsImageZoomed(false)} // clicar fora fecha
  >
    {/* Contentor central com margem/“respiro” */}
    <div
      className="relative w-full max-w-[60vw] max-h-[80vh] rounded-lg overflow-hidden border border-white/10 shadow-2xl"
      onClick={(e) => e.stopPropagation()} // não fechar ao clicar no conteúdo
    >
      {/* Botão fechar */}
      <button
        className="absolute top-3 right-3 z-10 px-3 py-1.5 rounded bg-white/10 text-white text-sm hover:bg-white/20"
        onClick={() => setIsImageZoomed(false)}
      >
        Fechar
      </button>

      {/* Scroller vertical com padding para não “colar” */}
      <div
        ref={scrollerRef}
        className="h-[80vh] max-h-[80vh] overflow-y-auto overflow-x-hidden cursor-grab active:cursor-grabbing bg-black/30 flex justify-center p-6 md:p-8"
        onMouseDown={(e) => {
          setDragStartY(e.clientY);
          if (scrollerRef.current) setStartScrollTop(scrollerRef.current.scrollTop);
        }}
        onMouseUp={() => setDragStartY(null)}
        onMouseLeave={() => setDragStartY(null)}
        onMouseMove={(e) => {
          if (dragStartY !== null && scrollerRef.current) {
            const dy = e.clientY - dragStartY;
            scrollerRef.current.scrollTop = startScrollTop - dy;
          }
        }}
        onDoubleClick={() => setZoom((z) => (z === 1 ? 4 : 1))}
      >
        <div className="w-fit max-w-full">
          <img
            src={item.image}
            alt={item.title}
            className="block max-w-full h-auto select-none"
            style={{
              maxHeight: '100vh',          // <- dá “metade”/respiro vertical
              transform: `scale(${zoom})`,
              transformOrigin: 'top center',
            }}
            draggable={false}
          />
        </div>
      </div>
    </div>
    
  </div>
)}
    </>
  );
};