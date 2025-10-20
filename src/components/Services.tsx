import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  HomeIcon,
  BuildingOffice2Icon,
  BuildingStorefrontIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

const Services: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: HomeIcon,
      title: t('services.residential.title'),
      description: t('services.residential.description'),
      image: '/images/services/brown-building.jpg',
    },
    {
      icon: BuildingOffice2Icon,
      title: t('services.commercial.title'),
      description: t('services.commercial.description'),
      image:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      icon: BuildingStorefrontIcon,
      title: t('services.industrial.title'),
      description: t('services.industrial.description'),
      image: '/images/services/endustriyel-yapi.jpg',
    },
    {
      icon: WrenchScrewdriverIcon,
      title: t('services.renovation.title'),
      description: t('services.renovation.description'),
      image:
        'https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
  ];

  return (
    <section
      id="services"
      className="section-padding bg-gray-50"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  <div className="absolute top-6 left-6">
                    <div className="bg-white p-3 rounded-lg">
                      <IconComponent className="h-6 w-6 text-primary-600" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <button className="text-primary-600 font-medium hover:text-primary-700 transition-colors">
                    {t('common.learn_more')} →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
