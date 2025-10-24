import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const quickLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        {/* Main Footer */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center">
              <img
                className="h-10 w-auto mr-3 bg-transparent"
                src="/images/logos/logo.png"
                alt="Ekgüntaş"
                style={{ background: 'transparent' }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Ekşioğlu Grup bünyesinde 88 yıllık deneyimimizle kaliteli inşaat
              hizmetleri sunuyoruz. Güvenilir çözümler ve müşteri memnuniyeti
              önceliğimizdir.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>📍 Bağdat Caddesi No: 128B, Kadıköy/İstanbul, Türkiye</p>
              <p>📞 +90 850 346 46 52</p>
              <p>✉️ info@eksioglugrup.tr</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              {t('footer.quick_links')}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Hizmetlerimiz
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Konut Projeleri</li>
              <li>Ticari Yapılar</li>
              <li>Endüstriyel Tesisler</li>
              <li>Renovasyon</li>
              <li>Proje Yönetimi</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 py-6">
          <div className="text-center">
            <p className="text-gray-400 text-sm">{t('footer.copyright')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
