import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { EyeIcon } from '@heroicons/react/24/outline';

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Dali Apartmanı',
      location: 'Sinan Ercan Cad. No 16, Kadıköy/İstanbul',
      type: 'Konut',
      area: '8.500 m²',
      floors: '15 Kat',
      units: '62 Bağımsız Bölüm',
      status: 'Tamamlandı',
      image: '/images/projects/konut/sen1.jpg',
      images: [
        '/images/projects/konut/sen1.jpg',
        '/images/projects/konut/sen1.jpg',
        '/images/projects/konut/sen1.jpg',
        '/images/projects/konut/sen1.jpg',
        '/images/projects/konut/sen1.jpg',
        '/images/projects/konut/sen1.jpg',
      ],
      description:
        '62 bağımsız bölümden oluşan, kapalı otopark, eşsiz peyzajı ile 15 katlı ultra lüks apartman.',
      detailedDescription:
        'Dali Apartmanı, modern yaşamın konforunu eşsiz peyzaj tasarımıyla buluşturan prestijli bir konut projesidir. 15 katlı yapıda 62 bağımsız bölümden oluşan proje, kapalı otoparkı ve ultra lüks tasarımıyla dikkat çekmektedir. Her detayı özenle planlanmış, kaliteli malzeme ve işçilikle inşa edilmiş bu proje, sakinlerine modern yaşamın tüm imkanlarını sunmaktadır.',
      features: [
        'Kapalı otopark',
        'Ultra lüks tasarım',
        'Eşsiz peyzaj',
        'Modern mimari',
        '24/7 güvenlik',
        'Güvenlik sistemi',
        'Asansör sistemi',
        'Jeneratör',
        'Yeşil alan',
        'Sosyal tesisler',
      ],
      specifications: {
        'Toplam Alan': '8.500 m²',
        'Bina Yüksekliği': '15 Kat',
        'Daire Sayısı': '62 Bağımsız Bölüm',
        Otopark: 'Kapalı Otopark',
        Özellikler: 'Ultra Lüks',
        'Teslim Tarihi': '2021',
      },
    },
    {
      title: 'Gül Apartmanı',
      location: 'Akış Sokak No:9, Göztepe/İstanbul',
      type: 'Konut',
      area: '9.200 m²',
      floors: '14 Kat',
      units: '48 Bağımsız Bölüm',
      status: 'Tamamlandı',
      image: '/images/projects/konut/gul.jpg',
      images: [
        '/images/projects/konut/gul.jpg',
        '/images/projects/konut/gul.jpg',
        '/images/projects/konut/gul.jpg',
        '/images/projects/konut/gul.jpg',
        '/images/projects/konut/gul.jpg',
        '/images/projects/konut/gul.jpg',
        '/images/projects/konut/gul.jpg',
        '/images/projects/konut/gul.jpg',
      ],
      description:
        '48 bağımsız bölümlü, kapalı otoparklı ve modern mimarisi ile 14 katlı lüks yaşam alanı.',
      detailedDescription:
        'Gül Apartmanı, modern mimarisi ve lüks yaşam standartlarıyla dikkat çeken prestijli bir konut projesidir. 14 katlı yapıda 48 bağımsız bölümden oluşan proje, kapalı otoparkı ve modern tasarımıyla konforlu yaşam imkanları sunmaktadır. Her detayı özenle planlanmış bu proje, sakinlerine kaliteli ve konforlu bir yaşam alanı sağlamaktadır.',
      features: [
        'Kapalı otopark',
        'Modern mimari',
        'Lüks yaşam alanı',
        '24/7 güvenlik',
        'Asansör sistemi',
        'Güvenlik sistemi',
        'Jeneratör',
        'Yeşil alan',
        'Sosyal tesisler',
        'Kaliteli malzeme',
      ],
      specifications: {
        'Toplam Alan': '9.200 m²',
        'Bina Yüksekliği': '14 Kat',
        'Daire Sayısı': '48 Bağımsız Bölüm',
        Otopark: 'Kapalı Otopark',
        Mimari: 'Modern',
        'Teslim Tarihi': '2021',
      },
    },
    {
      title: 'Kılıç Ali Köşkü',
      location: 'Sinan Ercan Caddesi, Kozyatağı/İstanbul',
      type: 'Ticari',
      area: '1.000 m²',
      floors: '4 Kat',
      units: '1 Köşk',
      status: 'Tamamlandı',
      image: '/images/projects/konut/kilicali.jpg',
      images: [
        '/images/projects/konut/kilicali.jpg',
        '/images/projects/konut/kilicali.jpg',
        '/images/projects/konut/kilicali.jpg',
        '/images/projects/konut/kilicali.jpg',
        '/images/projects/konut/kilicali.jpg',
        '/images/projects/konut/kilicali.jpg',
        '/images/projects/konut/kilicali.jpg',
        '/images/projects/konut/kilicali.jpg',
      ],
      description:
        '19 Mayıs Konakları içinde, şehir merkezine yakın, 2. derecede tarihi eser olarak kabul edilmiş prestijli köşk.',
      detailedDescription:
        "Kılıç Ali Köşkü, Kozyatağı'nda 19 Mayıs Konakları alanı içinde bulunan prestijli bir iş merkezidir. 1000 m² kullanım alanına sahip, 4 katlı yapıda toplam 10 odası, 3 salonu, 2 banyosu ve 3 WC'si bulunmaktadır. Ticari ruhsatlı olup 2. derecede tarihi eser olarak kabul edilmiştir. Aslına uygun olarak yeniden yapılmıştır. Bağdat Caddesi'ne 2 km, E-5'e 3 km, Kozzy AVM'ye 500 m uzaklıkta bulunmaktadır.",
      features: [
        '2. derecede tarihi eser',
        'Ticari ruhsatlı',
        'Asansör sistemi',
        'Biyolojik su arıtma',
        'Deprem sensörü',
        'Gaz ve yangın alarmı',
        '24 saat güvenlik',
        '3500 m² yeşil alan',
        'Fitness salonu',
        'Türk hamamı',
        'Sanayi tipi jeneratör',
        'Büyük depo alanı',
      ],
      specifications: {
        'Kullanım Alanı': '1.000 m²',
        'Bina Yüksekliği': '4 Kat',
        'Oda Sayısı': '10 Oda',
        Salon: '3 Salon',
        Banyo: '2 Banyo + 3 WC',
        Özellik: '2. Derecede Tarihi Eser',
        Ruhsat: 'Ticari',
        'Teslim Tarihi': '2021',
      },
    },
    {
      title: '19 Mayıs Konakları',
      location: '19 Mayıs Mah. Sinan Ercan Cad. No: 17, Kazasker/İstanbul',
      type: 'Konut',
      area: '3.500 m²',
      floors: 'Müstakil Konak',
      units: 'Butik Site',
      status: 'Tamamlandı',
      image: '/images/projects/konut/19mayis.jpg',
      images: [
        '/images/projects/konut/19mayis.jpg',
        '/images/projects/konut/19mayis.jpg',
        '/images/projects/konut/19mayis.jpg',
        '/images/projects/konut/19mayis.jpg',
        '/images/projects/konut/19mayis.jpg',
        '/images/projects/konut/19mayis.jpg',
        '/images/projects/konut/19mayis.jpg',
      ],
      description:
        'Butik site konsepti ile hazırlanan, 3500 m² yeşil alan içerisinde müstakil konak tarzında prestijli yaşam alanı.',
      detailedDescription:
        "19 Mayıs Konakları, Kozyatağı'nda butik site konsepti ile Ekşioğlu Holding tarafından hazırlanmış prestijli bir konut projesidir. Şehrin merkezinde, Kozzy Alışveriş Merkezi'ne 500 metre, Bağdat Caddesi'ne 2 kilometre uzaklıkta bulunan proje, E-5 yoluna 3 kilometre ve Işık Koleji'ne sadece 10 metre uzaklıktadır. 3500 m² yeşil izole yaşam alanı içerisinde modern ve elit yaşamı ekonomik giderlerle sunar.",
      features: [
        'Butik site konsepti',
        '3500 m² yeşil alan',
        '24 saat güvenlik',
        'Çocuk oyun parkı',
        'Fitness spor salonu',
        'Türk hamamı',
        'Kapalı otopark',
        'Jeneratör sistemi',
        'Merkezi konum',
        'İzole yaşam alanı',
      ],
      specifications: {
        'Yeşil Alan': '3500 m²',
        Tip: 'Müstakil Konak',
        Konsept: 'Butik Site',
        Güvenlik: '24 Saat',
        Otopark: 'Her Daire İçin Kapalı',
        Elektrik: 'Jeneratör Destekli',
        'Sosyal Tesisler': 'Fitness + Hamam',
        'Teslim Tarihi': '2020',
      },
    },
    {
      title: 'Ekşioğlu Plaza',
      location: 'İstanbul',
      type: 'Ticari',
      status: 'Tamamlandı',
      image: '/images/projects/ticari/eksiogluplaza.jpg',
      description:
        'Modern iş merkezi. Yüksek teknoloji altyapısı ve çağdaş ofis alanları.',
    },
    {
      title: 'Lokman Apartmanı',
      location: 'Kadıköy/İstanbul',
      type: 'Konut',
      status: 'Tamamlandı',
      image: '/images/projects/konut/lokman.jpg',
      description:
        'Şehir merkezinde konumlu, kaliteli malzeme ve işçilikle inşa edilmiş apartman.',
    },
    {
      title: 'Zeynep Apartmanı - Adil Özev Apartmanı',
      location: 'Fenerbahçe Mah. Doktor kazım lakay Sk. No:3, Kadıköy/İstanbul',
      type: 'Konut',
      status: 'Tamamlandı',
      image: '/images/projects/konut/zeynepadil.jpg',
      description:
        'İkiz apartman projesi. Modern mimari ve fonksiyonel yaşam alanları.',
    },
    {
      title: 'Seçer Apartmanı',
      location: 'Rıdvan Paşa Sk. No:3, Kadıköy/İstanbul',
      type: 'Konut',
      status: 'Tamamlandı',
      image: '/images/projects/konut/secer.jpg',
      description:
        'Çevre dostu malzemeler kullanılarak inşa edilmiş, enerji verimli konut projesi.',
    },
    {
      title: 'Nur Apartmanı',
      location: 'Tepegöz Sk. No:14, Göztepe/İstanbul',
      type: 'Konut',
      status: 'Tamamlandı',
      image: '/images/projects/konut/nur.jpg',
      description:
        'Aydınlık ve ferah daireleri ile ailelere özel tasarlanmış apartman projesi.',
    },
    {
      title: 'Duygun Apartmanı',
      location: 'Tepegöz Sk. No:16, Göztepe/Kadıköy/İstanbul',
      type: 'Konut',
      status: 'Tamamlandı',
      image: '/images/projects/konut/duygun.jpg',
      description:
        'Sosyal yaşam alanları ve modern konforu bir arada sunan konut projesi.',
    },
    {
      title: 'Can Apartmanı',
      location: 'Tütüncü Mehmet Efendi Cad. No:56, Göztepe/Kadıköy/İstanbul',
      type: 'Konut',
      status: 'Tamamlandı',
      image: '/images/projects/konut/can.jpg',
      description:
        'Yenilikçi tasarım anlayışıyla modern yaşamın standartlarını yükseltmiş proje.',
    },
    {
      title: 'Gökhan Ekşioğlu Apartmanı',
      location: 'Şehit İlknur Keleş Sk. No:14, Kozyatağı/İstanbul',
      type: 'Konut',
      status: 'Tamamlandı',
      image: '/images/projects/konut/gokhaneksioglu.jpg',
      description:
        'Şahsa özel tasarlanan, lüks detaylar ve kaliteli malzemeler içeren apartman.',
    },
    {
      title: 'Bahar Sitesi',
      location: 'Sonbahar Sk. No:22, Ataşehir/İstanbul',
      type: 'Konut',
      status: 'Tamamlandı',
      image: '/images/projects/konut/baharsitesi.jpg',
      description:
        'Çok bloklu site projesi. Yeşil alanlar, sosyal tesisler ve güvenlikli yaşam.',
    },
    {
      title: 'Ceylan Apartmanı',
      location: 'Ahmet Refik Sk. No:13/1, Çiftehavuzlar/Kadıköy/İstanbul',
      type: 'Konut',
      status: 'Tamamlandı',
      image: '/images/projects/konut/ceylan.jpg',
      description:
        'Şehir manzarası ile öne çıkan, kaliteli yaşam alanları sunan apartman projesi.',
    },
    {
      title: 'Çevre Apartmanı',
      location: 'Ahmet Refik Sk. No:13, Çiftehavuzlar/Kadıköy/İstanbul',
      type: 'Konut',
      status: 'Tamamlandı',
      image: '/images/projects/konut/cevre.jpg',
      description:
        'Çevresel sorumluluğu ön planda tutan, sürdürülebilir inşaat teknikleriyle yapılan proje.',
    },
    {
      title: 'Güneş Apartmanı',
      location: 'Ala Geyik Sk. No:15, Fenerbahçe/Kadıköy/İstanbul',
      type: 'Konut',
      status: 'Tamamlandı',
      image: '/images/projects/konut/gunes.jpg',
      description:
        'Güney cepheli, bol ışık alan daireleri ile enerji verimli konut projesi.',
    },
    {
      title: 'Ataallah Otel ve İş Merkezi',
      location: 'Medine, Suudi Arabistan',
      type: 'Ticari',
      area: '17.000 m²',
      floors: '5 Yıldızlı',
      units: '124 Oda',
      status: 'Tamamlandı',
      image: '/images/projects/yurtdisi/1.jpg',
      images: [
        '/images/projects/yurtdisi/1.jpg',
        '/images/projects/yurtdisi/2.jpg',
        '/images/projects/yurtdisi/3.jpg',
        '/images/projects/yurtdisi/4.jpg',
      ],
      description: '5 yıldızlı 124 odalı lüks otel ve iş merkezi kompleksi.',
      detailedDescription:
        "Ataallah Otel ve İş Merkezi, Medine'de konumlanan 5 yıldızlı lüks bir otel ve iş merkezi kompleksidir. 17.000 m² kapalı alana sahip olan proje, 124 oda ile misafirlerine üst düzey konfor sunmaktadır.",
      features: [
        '5 Yıldızlı Otel',
        '124 Oda',
        'İş Merkezi',
        'Lüks Tasarım',
        'Modern Mimari',
        '24/7 Resepsiyon',
        'Konferans Salonu',
        'Restoran',
        'Fitness Center',
        'Vale Hizmeti',
      ],
      specifications: {
        'Toplam Alan': '17.000 m²',
        'Oda Sayısı': '124 Oda',
        Kategori: '5 Yıldızlı Otel',
        Lokasyon: 'Medine, Suudi Arabistan',
        'Proje Türü': 'Otel ve İş Merkezi',
        Durum: 'Tamamlandı',
      },
    },
    {
      title: 'Ahmed Bekri İş Merkezi ve Oteli',
      location: 'Medine, Suudi Arabistan',
      type: 'Ticari',
      area: '12.400 m²',
      units: '94 Oda',
      status: 'Tamamlandı',
      image: '/images/projects/yurtdisi/2.jpg',
      images: [
        '/images/projects/yurtdisi/1.jpg',
        '/images/projects/yurtdisi/2.jpg',
        '/images/projects/yurtdisi/3.jpg',
        '/images/projects/yurtdisi/4.jpg',
      ],
      description: '94 odalı modern iş merkezi ve otel kompleksi.',
      detailedDescription:
        "Ahmed Bekri İş Merkezi ve Oteli, Medine'de 12.400 m² kapalı alana sahip modern bir iş merkezi ve otel kompleksidir. 94 oda kapasitesi ile hem iş hem de konaklama ihtiyaçlarına cevap vermektedir.",
      features: [
        'İş Merkezi',
        '94 Oda',
        'Otel',
        'Modern Tasarım',
        'Konferans Salonu',
        'İş Toplantı Odaları',
        'Restoran',
        'Kahvaltı Servisi',
        'Wi-Fi',
        'Klima Sistemi',
      ],
      specifications: {
        'Toplam Alan': '12.400 m²',
        'Oda Sayısı': '94 Oda',
        'Proje Türü': 'İş Merkezi ve Otel',
        Lokasyon: 'Medine, Suudi Arabistan',
        Durum: 'Tamamlandı',
      },
    },
    {
      title: 'Fatma Vakfı İş Merkezi',
      location: 'Yanbu, Medine, Suudi Arabistan',
      type: 'Ticari',
      area: '6.500 m²',
      status: 'Tamamlandı',
      image: '/images/projects/yurtdisi/3.jpg',
      images: [
        '/images/projects/yurtdisi/1.jpg',
        '/images/projects/yurtdisi/2.jpg',
        '/images/projects/yurtdisi/3.jpg',
        '/images/projects/yurtdisi/4.jpg',
      ],
      description: "Yanbu'da konumlanan modern iş merkezi kompleksi.",
      detailedDescription:
        "Fatma Vakfı İş Merkezi, Yanbu'da 6.500 m² kapalı alana sahip modern bir iş merkezi kompleksidir. Vakıf hizmetleri ve ticari faaliyetler için tasarlanmış özel bir projedir.",
      features: [
        'İş Merkezi',
        'Vakıf Hizmetleri',
        'Modern Ofisler',
        'Toplantı Salonları',
        'Güvenlik Sistemi',
        'Klima Sistemi',
        'Asansör',
        'Otopark',
      ],
      specifications: {
        'Toplam Alan': '6.500 m²',
        'Proje Türü': 'İş Merkezi',
        Lokasyon: 'Yanbu, Medine, Suudi Arabistan',
        Durum: 'Tamamlandı',
      },
    },
    {
      title: 'Ahmed El Sabah Sarayı',
      location: 'Taif, Suudi Arabistan',
      type: 'Yurtdışı',
      area: '10.200 m²',
      status: 'Tamamlandı',
      image: '/images/projects/yurtdisi/4.jpg',
      images: [
        '/images/projects/yurtdisi/1.jpg',
        '/images/projects/yurtdisi/2.jpg',
        '/images/projects/yurtdisi/3.jpg',
        '/images/projects/yurtdisi/4.jpg',
      ],
      description: "Taif'te inşa edilen lüks saray kompleksi.",
      detailedDescription:
        "Ahmed El Sabah Sarayı, Taif'te 10.200 m² kapalı alana sahip lüks bir saray kompleksidir. Geleneksel Arap mimarisi ile modern konforu birleştiren özel bir projedir.",
      features: [
        'Lüks Saray',
        'Geleneksel Mimari',
        'Özel Tasarım',
        'Bahçe Düzenlemesi',
        'Güvenlik Sistemi',
        'VIP Alanları',
        'Resepsiyon Salonları',
        'Özel Daireler',
      ],
      specifications: {
        'Toplam Alan': '10.200 m²',
        'Proje Türü': 'Saray Kompleksi',
        Lokasyon: 'Taif, Suudi Arabistan',
        Durum: 'Tamamlandı',
      },
    },
    {
      title: 'Dervişoğlu Villaları',
      location: 'Cidde, Suudi Arabistan',
      type: 'Yurtdışı',
      units: '17 Adet Villa',
      status: 'Tamamlandı',
      image: '/images/projects/yurtdisi/1.jpg',
      images: [
        '/images/projects/yurtdisi/1.jpg',
        '/images/projects/yurtdisi/2.jpg',
        '/images/projects/yurtdisi/3.jpg',
        '/images/projects/yurtdisi/4.jpg',
      ],
      description: "Cidde'de inşa edilen 17 adet lüks villa projesi.",
      detailedDescription:
        "Dervişoğlu Villaları, Cidde'de konumlanan 17 adet lüks villadan oluşan prestijli bir konut projesidir. Her villa modern konforu ve geleneksel estetiği bir arada sunmaktadır.",
      features: [
        'Lüks Villalar',
        'Özel Bahçe',
        'Modern Tasarım',
        'Güvenlik Sistemi',
        'Otopark',
        'Klimali Odalar',
        'Geniş Yaşam Alanları',
        'Özel Havuz (Seçili Villalar)',
      ],
      specifications: {
        'Villa Sayısı': '17 Adet',
        'Proje Türü': 'Lüks Villa Kompleksi',
        Lokasyon: 'Cidde, Suudi Arabistan',
        Durum: 'Tamamlandı',
      },
    },
    {
      title: 'Saudi Danish Süt Fabrikası',
      location: 'Medine, Suudi Arabistan',
      type: 'Ticari',
      area: '24.000 m²',
      status: 'Tamamlandı',
      image: '/images/projects/yurtdisi/2.jpg',
      images: [
        '/images/projects/yurtdisi/1.jpg',
        '/images/projects/yurtdisi/2.jpg',
        '/images/projects/yurtdisi/3.jpg',
        '/images/projects/yurtdisi/4.jpg',
      ],
      description: "Medine'de konumlanan modern süt üretim fabrikası.",
      detailedDescription:
        "Saudi Danish Süt Fabrikası, Medine'de 24.000 m² kapalı alana sahip modern bir süt üretim tesisidir. En son teknoloji ile donatılmış bu fabrika, yüksek kapasiteli üretim imkanı sunmaktadır.",
      features: [
        'Modern Üretim Hattı',
        'Yüksek Teknoloji',
        'Hijyen Standartları',
        'Otomatik Sistemler',
        'Kalite Kontrol',
        'Soğuk Hava Depoları',
        'Paketleme Ünitesi',
        'İdari Binalar',
      ],
      specifications: {
        'Toplam Alan': '24.000 m²',
        'Proje Türü': 'Endüstriyel Tesis',
        'Üretim Türü': 'Süt ve Süt Ürünleri',
        Lokasyon: 'Medine, Suudi Arabistan',
        Durum: 'Tamamlandı',
      },
    },
  ];

  const categories = ['Tümü', 'Konut', 'Ticari', 'Yurtdışı'];
  const [activeCategory, setActiveCategory] = useState('Tümü');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects =
    activeCategory === 'Tümü'
      ? projects
      : projects.filter((project) => project.type === activeCategory);

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  return (
    <section
      id="projects"
      className="section-padding bg-white"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {t('projects.subtitle')}
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setShowAll(false);
                }}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project, displayIndex) => {
            const actualIndex = filteredProjects.findIndex(
              (p) => p === project
            );
            return (
              <div
                key={actualIndex}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <button
                      onClick={() => setSelectedProject(actualIndex)}
                      className="bg-white text-primary-600 p-3 rounded-full opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300"
                    >
                      <EyeIcon className="h-6 w-6" />
                    </button>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.type}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    📍 {project.location}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button - show when there are more projects to display */}
        {!showAll && filteredProjects.length > 6 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(true)}
              className="btn-primary"
            >
              {t('projects.view_all')} ({filteredProjects.length - 6}{' '}
              {t('projects.more')})
            </button>
          </div>
        )}

        {/* Show Less Button - show when all projects are displayed */}
        {showAll && filteredProjects.length > 6 && (
          <div className="text-center">
            <button
              onClick={() => {
                setShowAll(false);
                // Scroll to projects section
                document.getElementById('projects')?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                });
              }}
              className="btn-secondary"
            >
              {t('projects.show_less')}
            </button>
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="relative">
              <img
                src={filteredProjects[selectedProject].image}
                alt={filteredProjects[selectedProject].title}
                className="w-full h-64 md:h-96 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {filteredProjects[selectedProject].title}
              </h3>
              <div className="flex flex-wrap gap-4 mb-4">
                <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                  {filteredProjects[selectedProject].type}
                </span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                  📍 {filteredProjects[selectedProject].location}
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {filteredProjects[selectedProject].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
