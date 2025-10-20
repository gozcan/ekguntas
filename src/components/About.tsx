import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  ClockIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  CheckBadgeIcon,
} from '@heroicons/react/24/outline';

const About: React.FC = () => {
  const { t } = useTranslation();

  const stats = [
    {
      icon: ClockIcon,
      value: t('about.experience'),
      label: '',
    },
    {
      icon: BuildingOfficeIcon,
      value: t('about.projects'),
      label: '',
    },
    {
      icon: UserGroupIcon,
      value: t('about.clients'),
      label: '',
    },
    {
      icon: CheckBadgeIcon,
      value: t('about.team'),
      label: '',
    },
  ];

  return (
    <section
      id="about"
      className="section-padding bg-white"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('about.title')}
            </h2>
            <h3 className="text-xl text-primary-600 font-semibold mb-6">
              {t('about.subtitle')}
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {t('about.description')}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={index}
                    className="text-center p-4 rounded-lg bg-gray-50"
                  >
                    <IconComponent className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {stat.value}
                    </div>
                    {stat.label && (
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80"
                alt="Construction site"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary-100 rounded-full opacity-50"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary-100 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
