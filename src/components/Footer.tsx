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

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: 'linkedin' },
    { name: 'Instagram', href: '#', icon: 'instagram' },
    { name: 'Facebook', href: '#', icon: 'facebook' },
    { name: 'Twitter', href: '#', icon: 'twitter' },
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
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Ekgüntaş</h3>
                <p className="text-gray-400 text-sm">
                  İnşaat ve Yapı Çözümleri
                </p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              25 yıllık deneyimimizle kaliteli inşaat hizmetleri sunuyoruz.
              Güvenilir çözümler ve müşteri memnuniyeti önceliğimizdir.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>📍 Beşiktaş, İstanbul, Türkiye</p>
              <p>📞 +90 212 555 0123</p>
              <p>✉️ info@ekguntas.com</p>
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

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              {t('footer.copyright')}
            </p>

            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm mr-2">
                {t('footer.follow_us')}:
              </span>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors p-2"
                  aria-label={social.name}
                >
                  {social.icon === 'linkedin' && (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                  {social.icon === 'instagram' && (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 2.5c2.444 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.412 4.412 0 0117.5 10a4.412 4.412 0 01-1.605 1.527c-.575.224-1.227.374-2.185.419-.96.045-1.266.054-3.71.054s-2.75-.009-3.71-.054c-.958-.045-1.61-.195-2.185-.419A4.412 4.412 0 012.5 10a4.412 4.412 0 011.605-1.527c.575-.224 1.227-.374 2.185-.419.96-.045 1.266-.054 3.71-.054zM10 0C7.284 0 6.944.012 5.877.06 4.813.109 4.086.277 3.45.525a6.917 6.917 0 00-2.507 2.507C.695 4.086.527 4.813.478 5.877.43 6.944.418 7.284.418 10s.012 3.056.06 4.123c.049 1.064.217 1.791.465 2.427a6.917 6.917 0 002.507 2.507c.636.248 1.363.416 2.427.465 1.067.048 1.407.06 4.123.06s3.056-.012 4.123-.06c1.064-.049 1.791-.217 2.427-.465a6.917 6.917 0 002.507-2.507c.248-.636.416-1.363.465-2.427.048-1.067.06-1.407.06-4.123s-.012-3.056-.06-4.123c-.049-1.064-.217-1.791-.465-2.427A6.917 6.917 0 0016.55.525C15.914.277 15.187.109 14.123.06 13.056.012 12.716 0 10 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                  {social.icon === 'facebook' && (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                  {social.icon === 'twitter' && (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
