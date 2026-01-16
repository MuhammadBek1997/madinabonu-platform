import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const ColorPalette = () => {
  const [copiedColor, setCopiedColor] = useState('');

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(text);
    setTimeout(() => setCopiedColor(''), 2000);
  };

  const colors = {
    primary: [
      { name: 'Binafsha 900', hex: '#5a1d57', rgb: 'rgb(90, 29, 87)', usage: 'Asosiy rangning to\'q versiyasi' },
      { name: 'Binafsha 700', hex: '#8a2f87', rgb: 'rgb(138, 47, 135)', usage: 'Asosiy brend rangi' },
      { name: 'Binafsha 500', hex: '#a84aa5', rgb: 'rgb(168, 74, 165)', usage: 'Hover holatlari' },
      { name: 'Binafsha 300', hex: '#c97ac6', rgb: 'rgb(201, 122, 198)', usage: 'Yengil aksentlar' },
      { name: 'Binafsha 100', hex: '#e8d1e7', rgb: 'rgb(232, 209, 231)', usage: 'Fon va bordlar' },
    ],
    secondary: [
      { name: 'Moviy 700', hex: '#1e40af', rgb: 'rgb(30, 64, 175)', usage: 'Ikkilamchi rang' },
      { name: 'Moviy 500', hex: '#3b82f6', rgb: 'rgb(59, 130, 246)', usage: 'Havolalar va tugmalar' },
      { name: 'Moviy 300', hex: '#93c5fd', rgb: 'rgb(147, 197, 253)', usage: 'Yengil aksentlar' },
    ],
    accent: [
      { name: 'Yashil', hex: '#10b981', rgb: 'rgb(16, 185, 129)', usage: 'Muvaffaqiyat xabarlari' },
      { name: 'Sariq', hex: '#f59e0b', rgb: 'rgb(245, 158, 11)', usage: 'Ogohlantirish' },
      { name: 'Qizil', hex: '#ef4444', rgb: 'rgb(239, 68, 68)', usage: 'Xato xabarlari' },
    ],
    neutral: [
      { name: 'Qora 900', hex: '#1f2937', rgb: 'rgb(31, 41, 55)', usage: 'Asosiy matn' },
      { name: 'Kulrang 700', hex: '#374151', rgb: 'rgb(55, 65, 81)', usage: 'Ikkilamchi matn' },
      { name: 'Kulrang 500', hex: '#6b7280', rgb: 'rgb(107, 114, 128)', usage: 'Placeholder matn' },
      { name: 'Kulrang 300', hex: '#d1d5db', rgb: 'rgb(209, 213, 219)', usage: 'Bordlar' },
      { name: 'Kulrang 100', hex: '#f3f4f6', rgb: 'rgb(243, 244, 246)', usage: 'Fon' },
      { name: 'Oq', hex: '#ffffff', rgb: 'rgb(255, 255, 255)', usage: 'Asosiy fon' },
    ],
  };

  const gradients = [
    {
      name: 'Asosiy Gradient',
      css: 'linear-gradient(15deg, rgba(138, 47, 135, 0.65) 0%, rgba(255, 255, 255, 1) 100%)',
      preview: 'linear-gradient(15deg, rgba(138, 47, 135, 0.65) 0%, rgba(255, 255, 255, 1) 100%)',
    },
    {
      name: 'Binafsha-Moviy',
      css: 'linear-gradient(135deg, #8a2f87 0%, #3b82f6 100%)',
      preview: 'linear-gradient(135deg, #8a2f87 0%, #3b82f6 100%)',
    },
    {
      name: 'Yengil Gradient',
      css: 'linear-gradient(180deg, #e8d1e7 0%, #ffffff 100%)',
      preview: 'linear-gradient(180deg, #e8d1e7 0%, #ffffff 100%)',
    },
    {
      name: 'To\'q Gradient',
      css: 'linear-gradient(45deg, #5a1d57 0%, #8a2f87 100%)',
      preview: 'linear-gradient(45deg, #5a1d57 0%, #8a2f87 100%)',
    },
  ];



  

  const ColorCard = ({ color }) => (
    <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div 
        className="h-24 w-full" 
        style={{ backgroundColor: color.hex }}
      />
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2">{color.name}</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <code className="text-sm text-gray-600">{color.hex}</code>
            <button
              onClick={() => copyToClipboard(color.hex)}
              className="p-1 hover:bg-gray-100 rounded"
            >
              {copiedColor === color.hex ? (
                <Check className="w-4 h-4 text-green-600" />
              ) : (
                <Copy className="w-4 h-4 text-gray-400" />
              )}
            </button>
          </div>
          <div className="flex items-center justify-between">
            <code className="text-xs text-gray-500">{color.rgb}</code>
            <button
              onClick={() => copyToClipboard(color.rgb)}
              className="p-1 hover:bg-gray-100 rounded"
            >
              {copiedColor === color.rgb ? (
                <Check className="w-4 h-4 text-green-600" />
              ) : (
                <Copy className="w-4 h-4 text-gray-400" />
              )}
            </button>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-2">{color.usage}</p>
      </div>
    </div>
  );

  const GradientCard = ({ gradient }) => (
    <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div 
        className="h-32 w-full" 
        style={{ background: gradient.preview }}
      />
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2">{gradient.name}</h3>
        <div className="flex items-start justify-between gap-2">
          <code className="text-xs text-gray-600 flex-1 break-all">{gradient.css}</code>
          <button
            onClick={() => copyToClipboard(gradient.css)}
            className="p-1 hover:bg-gray-100 rounded flex-shrink-0"
          >
            {copiedColor === gradient.css ? (
              <Check className="w-4 h-4 text-green-600" />
            ) : (
              <Copy className="w-4 h-4 text-gray-400" />
            )}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">O'quv Markazi Rang Palitasi</h1>
          <p className="text-gray-600">Web sayt, platforma va mobil dastur uchun uyg'unlashtirilgan ranglar to'plami</p>
        </div>

        {/* Primary Colors */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Asosiy Ranglar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {colors.primary.map((color, idx) => (
              <ColorCard key={idx} color={color} />
            ))}
          </div>
        </section>

        {/* Secondary Colors */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ikkilamchi Ranglar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {colors.secondary.map((color, idx) => (
              <ColorCard key={idx} color={color} />
            ))}
          </div>
        </section>

        {/* Accent Colors */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Aksent Ranglar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {colors.accent.map((color, idx) => (
              <ColorCard key={idx} color={color} />
            ))}
          </div>
        </section>






        {/* Neutral Colors */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Neytral Ranglar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {colors.neutral.map((color, idx) => (
              <ColorCard key={idx} color={color} />
            ))}
          </div>
        </section>

        {/* Gradients */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Gradientlar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {gradients.map((gradient, idx) => (
              <GradientCard key={idx} gradient={gradient} />
            ))}
          </div>
        </section>

        {/* Usage Guidelines */}
        <section className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Foydalanish Ko'rsatmalari</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Asosiy Ranglar:</h3>
              <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                <li>Binafsha 700 - Logo, tugmalar, asosiy elementlar</li>
                <li>Binafsha 500 - Hover effektlari</li>
                <li>Binafsha 300 va 100 - Fon va dekorativ elementlar</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Ikkilamchi Ranglar:</h3>
              <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                <li>Moviy - Havolalar, ikkilamchi tugmalar</li>
                <li>Yashil - Muvaffaqiyat xabarlari, ijobiy harakatlar</li>
                <li>Sariq - Ogohlantirishlar</li>
                <li>Qizil - Xatolar, bekor qilish harakatlari</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ColorPalette;



// yangi ranglar uyg'unligi

import React, { useState } from 'react';
import { Copy, Check, Sun, Moon } from 'lucide-react';

const ColorPalette = () => {
  const [copiedColor, setCopiedColor] = useState('');
  const [mode, setMode] = useState('light');

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(text);
    setTimeout(() => setCopiedColor(''), 2000);
  };

  const colors = {
    light: {
      primary: [
        { name: 'Binafsha 900', hex: '#6B2C6A', rgb: 'rgb(107, 44, 106)', usage: 'Asosiy rangning to\'q versiyasi' },
        { name: 'Binafsha 700', hex: '#9B4D99', rgb: 'rgb(155, 77, 153)', usage: 'Asosiy brend rangi (logodagi rang)' },
        { name: 'Binafsha 500', hex: '#B366B1', rgb: 'rgb(179, 102, 177)', usage: 'Hover holatlari' },
        { name: 'Binafsha 300', hex: '#D399D2', rgb: 'rgb(211, 153, 210)', usage: 'Yengil aksentlar' },
        { name: 'Binafsha 100', hex: '#F0E5EF', rgb: 'rgb(240, 229, 239)', usage: 'Fon va bordlar' },
      ],
      secondary: [
        { name: 'Moviy-Kulrang 700', hex: '#4A5568', rgb: 'rgb(74, 85, 104)', usage: 'Ikkilamchi rang' },
        { name: 'Moviy-Kulrang 500', hex: '#718096', rgb: 'rgb(113, 128, 150)', usage: 'Ikkilamchi elementlar' },
        { name: 'Moviy-Kulrang 300', hex: '#CBD5E0', rgb: 'rgb(203, 213, 224)', usage: 'Yengil aksentlar' },
      ],
      accent: [
        { name: 'Yashil', hex: '#10b981', rgb: 'rgb(16, 185, 129)', usage: 'Muvaffaqiyat xabarlari' },
        { name: 'Sariq', hex: '#f59e0b', rgb: 'rgb(245, 158, 11)', usage: 'Ogohlantirish' },
        { name: 'Qizil', hex: '#ef4444', rgb: 'rgb(239, 68, 68)', usage: 'Xato xabarlari' },
      ],
      neutral: [
        { name: 'Qora 900', hex: '#1a202c', rgb: 'rgb(26, 32, 44)', usage: 'Asosiy matn' },
        { name: 'Kulrang 700', hex: '#2d3748', rgb: 'rgb(45, 55, 72)', usage: 'Ikkilamchi matn' },
        { name: 'Kulrang 500', hex: '#718096', rgb: 'rgb(113, 128, 150)', usage: 'Placeholder matn' },
        { name: 'Kulrang 300', hex: '#e2e8f0', rgb: 'rgb(226, 232, 240)', usage: 'Bordlar' },
        { name: 'Kulrang 100', hex: '#f7fafc', rgb: 'rgb(247, 250, 252)', usage: 'Fon' },
        { name: 'Oq', hex: '#ffffff', rgb: 'rgb(255, 255, 255)', usage: 'Asosiy fon' },
      ],
    },
    dark: {
      primary: [
        { name: 'Moviy 900', hex: '#1e3a5f', rgb: 'rgb(30, 58, 95)', usage: 'To\'q moviy' },
        { name: 'Moviy 700', hex: '#2563eb', rgb: 'rgb(37, 99, 235)', usage: 'Asosiy brend rangi (logodagi rang)' },
        { name: 'Moviy 500', hex: '#3b82f6', rgb: 'rgb(59, 130, 246)', usage: 'Hover holatlari' },
        { name: 'Moviy 300', hex: '#60a5fa', rgb: 'rgb(96, 165, 250)', usage: 'Yengil aksentlar' },
        { name: 'Moviy 100', hex: '#dbeafe', rgb: 'rgb(219, 234, 254)', usage: 'Fon va bordlar (dark rejimda)' },
      ],
      secondary: [
        { name: 'Och Moviy 700', hex: '#0891b2', rgb: 'rgb(8, 145, 178)', usage: 'Ikkilamchi rang' },
        { name: 'Och Moviy 500', hex: '#06b6d4', rgb: 'rgb(6, 182, 212)', usage: 'Ikkilamchi elementlar' },
        { name: 'Och Moviy 300', hex: '#67e8f9', rgb: 'rgb(103, 232, 249)', usage: 'Yengil aksentlar' },
      ],
      accent: [
        { name: 'Yashil', hex: '#10b981', rgb: 'rgb(16, 185, 129)', usage: 'Muvaffaqiyat xabarlari' },
        { name: 'Sariq', hex: '#fbbf24', rgb: 'rgb(251, 191, 36)', usage: 'Ogohlantirish' },
        { name: 'Qizil', hex: '#f87171', rgb: 'rgb(248, 113, 113)', usage: 'Xato xabarlari' },
      ],
      neutral: [
        { name: 'Oq', hex: '#f9fafb', rgb: 'rgb(249, 250, 251)', usage: 'Asosiy matn' },
        { name: 'Kulrang 100', hex: '#e5e7eb', rgb: 'rgb(229, 231, 235)', usage: 'Ikkilamchi matn' },
        { name: 'Kulrang 400', hex: '#9ca3af', rgb: 'rgb(156, 163, 175)', usage: 'Placeholder matn' },
        { name: 'Kulrang 700', hex: '#374151', rgb: 'rgb(55, 65, 81)', usage: 'Bordlar' },
        { name: 'Kulrang 800', hex: '#1f2937', rgb: 'rgb(31, 41, 55)', usage: 'Ikkilamchi fon' },
        { name: 'Qora 900', hex: '#111827', rgb: 'rgb(17, 24, 39)', usage: 'Asosiy fon' },
      ],
    }
  };



  

  const gradients = {
    light: [
      {
        name: 'Binafsha Gradient',
        css: 'linear-gradient(135deg, #9B4D99 0%, #D399D2 100%)',
        preview: 'linear-gradient(135deg, #9B4D99 0%, #D399D2 100%)',
      },
      {
        name: 'Yengil Binafsha',
        css: 'linear-gradient(180deg, #F0E5EF 0%, #ffffff 100%)',
        preview: 'linear-gradient(180deg, #F0E5EF 0%, #ffffff 100%)',
      },
      {
        name: 'Binafsha-Kulrang',
        css: 'linear-gradient(45deg, #9B4D99 0%, #718096 100%)',
        preview: 'linear-gradient(45deg, #9B4D99 0%, #718096 100%)',
      },
    ],
    dark: [
      {
        name: 'Moviy Gradient',
        css: 'linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)',
        preview: 'linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)',
      },
      {
        name: 'To\'q Moviy',
        css: 'linear-gradient(180deg, #1e3a5f 0%, #111827 100%)',
        preview: 'linear-gradient(180deg, #1e3a5f 0%, #111827 100%)',
      },
      {
        name: 'Moviy-Och Moviy',
        css: 'linear-gradient(45deg, #2563eb 0%, #06b6d4 100%)',
        preview: 'linear-gradient(45deg, #2563eb 0%, #06b6d4 100%)',
      },
    ]
  };

  const currentColors = colors[mode];
  const currentGradients = gradients[mode];

  const ColorCard = ({ color }) => (
    <div className={`border rounded-lg overflow-hidden hover:shadow-lg transition-shadow ${mode === 'dark' ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'}`}>
      <div 
        className="h-24 w-full" 
        style={{ backgroundColor: color.hex }}
      />
      <div className="p-4">
        <h3 className={`font-semibold mb-2 ${mode === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>{color.name}</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <code className={`text-sm ${mode === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{color.hex}</code>
            <button
              onClick={() => copyToClipboard(color.hex)}
              className={`p-1 rounded ${mode === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
            >
              {copiedColor === color.hex ? (
                <Check className="w-4 h-4 text-green-600" />
              ) : (
                <Copy className={`w-4 h-4 ${mode === 'dark' ? 'text-gray-400' : 'text-gray-400'}`} />
              )}
            </button>
          </div>
          <div className="flex items-center justify-between">
            <code className={`text-xs ${mode === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>{color.rgb}</code>
            <button
              onClick={() => copyToClipboard(color.rgb)}
              className={`p-1 rounded ${mode === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
            >
              {copiedColor === color.rgb ? (
                <Check className="w-4 h-4 text-green-600" />
              ) : (
                <Copy className={`w-4 h-4 ${mode === 'dark' ? 'text-gray-400' : 'text-gray-400'}`} />
              )}
            </button>
          </div>
        </div>
        <p className={`text-xs mt-2 ${mode === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>{color.usage}</p>
      </div>
    </div>
  );


  

  const GradientCard = ({ gradient }) => (
    <div className={`border rounded-lg overflow-hidden hover:shadow-lg transition-shadow ${mode === 'dark' ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'}`}>
      <div 
        className="h-32 w-full" 
        style={{ background: gradient.preview }}
      />
      <div className="p-4">
        <h3 className={`font-semibold mb-2 ${mode === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>{gradient.name}</h3>
        <div className="flex items-start justify-between gap-2">
          <code className={`text-xs flex-1 break-all ${mode === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{gradient.css}</code>
          <button
            onClick={() => copyToClipboard(gradient.css)}
            className={`p-1 rounded flex-shrink-0 ${mode === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
          >
            {copiedColor === gradient.css ? (
              <Check className="w-4 h-4 text-green-600" />
            ) : (
              <Copy className={`w-4 h-4 ${mode === 'dark' ? 'text-gray-400' : 'text-gray-400'}`} />
              )}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen p-6 ${mode === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-start justify-between">
          <div>
            <h1 className={`text-4xl font-bold mb-2 ${mode === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>MADINABONU O'quv Markazi</h1>
            <p className={mode === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Light va Dark rejimlar uchun ranglar to'plami</p>
          </div>
          <button
            onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              mode === 'dark' 
                ? 'bg-gray-800 text-gray-100 hover:bg-gray-700' 
                : 'bg-white text-gray-900 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            {mode === 'light' ? (
              <>
                <Moon className="w-5 h-5" />
                Dark
              </>
            ) : (
              <>
                <Sun className="w-5 h-5" />
                Light
              </>
            )}
          </button>
        </div>

        {/* Logo Preview */}
        <section className="mb-12">
          <h2 className={`text-2xl font-bold mb-4 ${mode === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>Logo Ranglar</h2>
          <div className={`p-8 rounded-lg ${mode === 'dark' ? 'bg-gray-800' : 'bg-white'} border ${mode === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className={`w-32 h-32 rounded-lg flex items-center justify-center mb-2 ${mode === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
                  <div className="text-6xl font-bold" style={{ color: mode === 'light' ? '#9B4D99' : '#2563eb' }}>M</div>
                </div>
                <p className={`text-sm ${mode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Logo rangi: {mode === 'light' ? '#9B4D99' : '#2563eb'}</p>
              </div>
              <div className={mode === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                <p className="font-semibold mb-2">Logo Dizayni:</p>
                <ul className="text-sm space-y-1">
                  <li>• Light rejim: Binafsha (#9B4D99)</li>
                  <li>• Dark rejim: Moviy (#2563eb)</li>
                  <li>• Minimalist va zamonaviy dizayn</li>
                  <li>• Ikkala rejimda ham yuqori kontrast</li>
                </ul>
              </div>
            </div>
          </div>
        </section>






        {/* Primary Colors */}
        <section className="mb-12">
          <h2 className={`text-2xl font-bold mb-4 ${mode === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>Asosiy Ranglar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {currentColors.primary.map((color, idx) => (
              <ColorCard key={idx} color={color} />
            ))}
          </div>
        </section>

        {/* Secondary Colors */}
        <section className="mb-12">
          <h2 className={`text-2xl font-bold mb-4 ${mode === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>Ikkilamchi Ranglar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentColors.secondary.map((color, idx) => (
              <ColorCard key={idx} color={color} />
            ))}
          </div>
        </section>

        {/* Accent Colors */}
        <section className="mb-12">
          <h2 className={`text-2xl font-bold mb-4 ${mode === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>Aksent Ranglar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentColors.accent.map((color, idx) => (
              <ColorCard key={idx} color={color} />
            ))}
          </div>
        </section>

        {/* Neutral Colors */}
        <section className="mb-12">
          <h2 className={`text-2xl font-bold mb-4 ${mode === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>Neytral Ranglar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {currentColors.neutral.map((color, idx) => (
              <ColorCard key={idx} color={color} />
            ))}
          </div>
        </section>

        {/* Gradients */}
        <section className="mb-12">
          <h2 className={`text-2xl font-bold mb-4 ${mode === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>Gradientlar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentGradients.map((gradient, idx) => (
              <GradientCard key={idx} gradient={gradient} />
            ))}
          </div>
        </section>

        {/* Usage Guidelines */}
        <section className={`rounded-lg p-6 shadow-sm ${mode === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
          <h2 className={`text-2xl font-bold mb-4 ${mode === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>Foydalanish Ko'rsatmalari</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className={`font-semibold mb-2 ${mode === 'dark' ? 'text-gray-200' : 'text-gray-900'}`}>Light Rejim:</h3>
              <ul className={`text-sm space-y-1 list-disc list-inside ${mode === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>Binafsha 700 (#9B4D99) - Logo, tugmalar</li>
                <li>Binafsha 500 - Hover effektlari</li>
                <li>Binafsha 100 - Yengil fonlar</li>
                <li>Oq fon (#ffffff) - Asosiy fon</li>
              </ul>
            </div>
            <div>
              <h3 className={`font-semibold mb-2 ${mode === 'dark' ? 'text-gray-200' : 'text-gray-900'}`}>Dark Rejim:</h3>
              <ul className={`text-sm space-y-1 list-disc list-inside ${mode === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>Moviy 700 (#2563eb) - Logo, tugmalar</li>
                <li>Moviy 500 - Hover effektlari</li>
                <li>Kulrang 800 - Ikkilamchi fon</li>
                <li>Qora 900 (#111827) - Asosiy fon</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ColorPalette;
