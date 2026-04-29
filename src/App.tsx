import { motion } from "motion/react";
import { useState } from "react";
import { menuData } from "./data/menu";
import {
  MapPin,
  Clock,
  Phone,
  Wifi,
  Wind,
  Coffee,
  Music,
  Tv,
  Star,
  Leaf,
  PawPrint,
  ChevronRight,
  ParkingCircle,
  ExternalLink,
  Menu,
  X
} from "lucide-react";

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-50 transition-all duration-300 glass-panel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-2">
              <Leaf className="w-6 h-6 text-eywa-gold" />
              <span className="serif text-2xl font-semibold tracking-widest uppercase text-eywa-light">EYWA</span>
            </div>
            <div className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-widest text-eywa-light">
              <a href="#about" className="hover:text-eywa-gold transition-colors">О нас</a>
              <a href="#menu" className="hover:text-eywa-gold transition-colors">Меню</a>
              <a href="#offers" className="hover:text-eywa-gold transition-colors">Акции</a>
              <a href="#features" className="hover:text-eywa-gold transition-colors">Услуги</a>
              <a href="#contacts" className="hover:text-eywa-gold transition-colors">Контакты</a>
            </div>
            <div className="hidden md:flex items-center">
              <a 
                href="#contacts"
                className="inline-flex items-center justify-center px-6 py-2 border border-eywa-gold text-eywa-gold text-sm uppercase tracking-widest rounded-full hover:bg-eywa-gold hover:text-eywa-dark transition-all duration-300"
              >
                Бронь
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-eywa-light p-2 focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu panel */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-eywa-dark border-t border-eywa-light/10 absolute w-full left-0 shadow-xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-4 text-eywa-light uppercase tracking-widest text-sm border-b border-eywa-light/5">О нас</a>
              <a href="#menu" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-4 text-eywa-light uppercase tracking-widest text-sm border-b border-eywa-light/5">Меню</a>
              <a href="#offers" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-4 text-eywa-light uppercase tracking-widest text-sm border-b border-eywa-light/5">Акции</a>
              <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-4 text-eywa-light uppercase tracking-widest text-sm border-b border-eywa-light/5">Услуги</a>
              <a href="#contacts" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-4 text-eywa-light uppercase tracking-widest text-sm border-b border-eywa-light/5">Контакты</a>
              <div className="mt-6 flex flex-col gap-3 px-3">
                <a 
                  href="tel:+77761491666" 
                  className="flex items-center justify-center w-full px-6 py-3 bg-eywa-gold text-eywa-dark uppercase tracking-widest text-sm font-semibold rounded-full"
                >
                  <Phone className="w-4 h-4 mr-2" /> Позвонить
                </a>
                <a 
                  href="https://wa.me/77761491666" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full px-6 py-3 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 uppercase tracking-widest text-sm font-semibold rounded-full"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-[100svh] flex items-center justify-center overflow-hidden bg-eywa-dark">
        <div className="absolute inset-0">
          <img
            src="/hero-bg.jpg"
            onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop'; }}
            alt="EYWA Terrace"
            className="w-full h-full object-cover opacity-50 transition-opacity duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-eywa-dark/30 via-eywa-dark/20 to-eywa-dark"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-8xl xl:text-9xl font-light mb-4 md:mb-6 text-eywa-light tracking-tighter">
              EYWA <span className="italic block text-3xl sm:text-4xl md:text-6xl xl:text-7xl mt-2 md:mt-4 text-eywa-gold">Terrace</span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-eywa-light/80 mb-8 md:mb-10 max-w-2xl mx-auto font-light leading-relaxed px-4"
          >
            Жұмыс пен демалысты бірге өткізуге арналған жайлы кеңістік. Пространство, где не нужно выбирать между продуктивностью и отдыхом.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a href="#contacts" className="px-8 py-4 bg-eywa-gold text-eywa-dark uppercase tracking-widest text-sm font-semibold rounded-full hover:bg-white transition-colors duration-300 w-full sm:w-auto">
              Забронировать столик
            </a>
            <a href="#menu" className="px-8 py-4 border border-eywa-light text-eywa-light uppercase tracking-widest text-sm rounded-full hover:bg-eywa-light/10 transition-colors duration-300 w-full sm:w-auto">
              Смотреть меню
            </a>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-eywa-light/50"
        >
          <span className="text-xs uppercase tracking-[0.2em]">Листайте вниз</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-eywa-light/50 to-transparent"></div>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section id="about" className="py-24 md:py-32 px-4 bg-eywa-dark text-eywa-light relative">
        <div className="absolute top-0 right-0 w-1/2 h-[500px] bg-eywa-gold/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-[3/4] rounded-t-full overflow-hidden border-2 border-eywa-gold/10 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-eywa-dark via-transparent to-transparent z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2068&auto=format&fit=crop" 
                  alt="Pet friendly atmosphere" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-eywa-brown border border-eywa-gold/20 text-eywa-light rounded-full flex flex-col items-center justify-center p-6 text-center shadow-2xl hidden md:flex z-20">
                <PawPrint className="w-8 h-8 text-eywa-gold mb-2" />
                <span className="text-xs uppercase tracking-widest text-eywa-gold">Pet & Eco</span>
                <span className="serif text-xl italic mt-1 text-white">Friendly</span>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-sm uppercase tracking-[0.3em] text-eywa-gold mb-4 font-semibold">Наша философия</h2>
              <h3 className="serif text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-8 leading-tight">
                Ваши любимцы — наши <span className="italic text-eywa-accent block sm:inline">почетные гости</span>
              </h3>
              <p className="text-text-muted mb-8 text-lg leading-relaxed">
                Сүйікті үй жануарларыңыз — біздің ең сыйлы қонағымыз! В EYWA мы создали пространство, где вам будет комфортно работать, отдыхать и заряжаться вместе с теми, кто вам дорог.
              </p>
              
              <ul className="space-y-6 mb-12">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full border border-eywa-gold/30 bg-eywa-brown flex items-center justify-center shrink-0 text-eywa-gold shadow-[0_0_15px_rgba(207,161,95,0.15)]">
                    <Wifi className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-white">Идеально для работы</h4>
                    <p className="text-text-muted">Быстрый Wi-Fi и розетки у каждого стола.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full border border-eywa-gold/30 bg-eywa-brown flex items-center justify-center shrink-0 text-eywa-gold shadow-[0_0_15px_rgba(207,161,95,0.15)]">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-white">Eco-friendly атмосфера</h4>
                    <p className="text-text-muted">Особое внимание к окружающей среде и комфорту вашей собаки.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Offers & Compliments */}
      <section id="offers" className="py-24 bg-eywa-dark-elevated text-eywa-light relative border-y border-eywa-gold/10">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-eywa-gold/5 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-sm uppercase tracking-[0.3em] text-eywa-gold mb-4 font-semibold">Специальные предложения</h2>
            <h3 className="serif text-4xl md:text-5xl lg:text-6xl">Для гурманов и ценителей</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            {/* Offer 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden mb-6 relative">
                <div className="absolute inset-0 bg-eywa-dark/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop" 
                  alt="Business Lunch" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-eywa-light text-eywa-dark px-4 py-2 font-semibold text-sm uppercase tracking-wider z-20">
                  От 4390 ₸
                </div>
              </div>
              <h4 className="serif text-3xl mb-3 group-hover:text-eywa-gold transition-colors">Бизнес-ланчи</h4>
              <p className="text-eywa-light/60">
                Идеальный перерыв в рабочем дне. Вкусные, сытные и сбалансированные ланчи в приятной атмосфере.
              </p>
            </div>

            {/* Offer 2 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden mb-6 relative">
                <div className="absolute inset-0 bg-eywa-dark/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1582260655099-23ba5fb58cd8?q=80&w=2070&auto=format&fit=crop" 
                  alt="Hookah / Cloud" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-eywa-gold text-eywa-dark px-4 py-2 font-semibold text-sm uppercase tracking-wider z-20">
                  От 4000 ₸
                </div>
              </div>
              <h4 className="serif text-3xl mb-3 group-hover:text-eywa-gold transition-colors">Cloud Lounge</h4>
              <p className="text-eywa-light/60 mb-4">
                Премиальные дымные облака. Работайте, отдыхайте и заряжайтесь вместе с теми, кто вам дорог.
              </p>
            </div>
          </div>

          {/* Compliment Banner */}
          <div className="mt-16 md:mt-20 relative rounded-3xl overflow-hidden glass-panel border border-eywa-gold/30 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-eywa-dark via-eywa-dark/95 to-eywa-dark/40 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=2068&auto=format&fit=crop" 
              alt="EYWA Compliment Background" 
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30"
            />
            <div className="relative z-20 p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-eywa-gold/10 border border-eywa-gold/30 rounded-full text-eywa-gold text-xs uppercase tracking-widest font-semibold mb-6">
                  <Star className="w-4 h-4 fill-eywa-gold" />
                  EYWA Compliment
                </div>
                <h3 className="serif text-3xl md:text-4xl lg:text-5xl mb-4 leading-tight">
                  Внимание к каждой <br/><span className="italic text-eywa-gold">детали</span>
                </h3>
                <p className="text-base md:text-lg text-eywa-light/80 mb-2">
                  Мы любим радовать своих гостей и ценим вашу лояльность. 
                </p>
                <div className="bg-eywa-gold/10 border-l-4 border-eywa-gold p-4 mt-6">
                  <strong className="block text-xl md:text-2xl text-white font-normal serif italic">
                    Каждый 10-й дымный cloud в зале — <span className="text-eywa-gold not-italic font-medium">комплимент</span> от EYWA Terrace.
                  </strong>
                </div>
              </div>
              <div className="shrink-0 w-full md:w-auto">
                <a href="#contacts" className="inline-flex justify-center w-full md:w-auto px-8 py-4 bg-eywa-gold text-eywa-dark uppercase tracking-widest text-sm font-semibold rounded-full hover:bg-white transition-colors duration-300 shadow-[0_0_30px_rgba(194,154,100,0.3)]">
                  Забронировать
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <MenuSection />

      {/* Features Grid */}
      <section id="features" className="py-24 bg-eywa-dark text-eywa-light relative">
        <div className="absolute top-1/2 left-0 w-1/3 h-[400px] bg-eywa-gold/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="serif text-4xl md:text-5xl mb-6">Всё для вашего <br/><span className="italic text-eywa-gold">комфорта</span></h2>
              <p className="text-text-muted mb-8">
                Мы продумали каждую деталь, чтобы ваше время в EYWA Terrace было незабываемым. От утреннего кофе с собой до грандиозного банкета на 150 персон.
              </p>
              <a href="#contacts" className="inline-flex items-center gap-2 font-semibold uppercase tracking-widest text-sm text-eywa-gold hover:text-white transition-colors border-b border-eywa-gold/50 hover:border-white pb-1">
                Заказать столик <ChevronRight className="w-4 h-4" />
              </a>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-x-8 sm:gap-y-12">
              <FeatureItem icon={Music} title="Живая музыка" />
              <FeatureItem icon={Tv} title="Спорт. трансляции" />
              <FeatureItem icon={Star} title="VIP-зал" />
              <FeatureItem icon={Wind} title="Летняя веранда" />
              <FeatureItem icon={Coffee} title="Напитки с собой" />
              <FeatureItem icon={MapPin} title="Заказ навынос" />
            </div>
          </div>
          
          {/* Banquets Banner */}
          <div className="mt-16 md:mt-24 p-6 md:p-12 bg-eywa-brown border border-eywa-gold/20 text-eywa-light rounded-3xl relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
             <div className="absolute top-0 right-0 w-64 h-64 bg-eywa-gold/30 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4"></div>
             <div className="relative z-10 md:w-2/3">
               <h3 className="serif text-3xl md:text-4xl mb-3 md:mb-4">Проведение банкетов</h3>
               <p className="text-eywa-light/80 mb-6 md:mb-8 max-w-xl text-sm md:text-base">
                 Идеальное место для вашего праздника. До 150 посадочных мест, индивидуальное меню, винная карта и сервис высочайшего уровня.
               </p>
               <a href="tel:+77761491666" className="inline-block w-full sm:w-auto text-center px-6 md:px-8 py-4 bg-eywa-gold text-eywa-dark uppercase tracking-widest text-xs md:text-sm font-semibold rounded-full hover:bg-white transition-colors duration-300">
                 Обсудить мероприятие
               </a>
             </div>
          </div>
        </div>
      </section>

      {/* Footer / Contacts */}
      <footer id="contacts" className="bg-eywa-dark text-eywa-light pt-24 pb-12 border-t border-eywa-light/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <Leaf className="w-8 h-8 text-eywa-gold" />
                <span className="serif text-3xl font-semibold tracking-widest uppercase">EYWA</span>
              </div>
              <p className="text-eywa-light/50 text-sm mb-6">
                Ресторан / Кафе / Летняя веранда в самом сердце Алматы.
              </p>
            </div>
            
            <div>
              <h4 className="uppercase tracking-[0.2em] text-xs text-eywa-light/50 mb-6 font-semibold">Локация</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-eywa-gold shrink-0 mt-0.5" />
                  <span className="text-eywa-light/80">Шевченко 99,<br/>г. Алматы</span>
                </li>
                <li>
                  <a 
                    href="https://2gis.kz/almaty/geo/70000001104940651" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-eywa-gold hover:text-white transition-colors mt-2"
                  >
                    Показать в 2GIS <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="uppercase tracking-[0.2em] text-xs text-eywa-light/50 mb-6 font-semibold">Контакты</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-eywa-gold shrink-0" />
                  <span className="text-eywa-light/80">Ежедневно<br/>с 12:00 до 02:00</span>
                </li>
                {/* Placeholder phone, as it's not provided in screenshots exactly, add a generic one */}
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-eywa-gold shrink-0" />
                  <a href="tel:+77761491666" className="text-eywa-light/80 hover:text-white transition-colors">
                    +7 (776) 149-16-66
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="uppercase tracking-[0.2em] text-xs text-eywa-light/50 mb-6 font-semibold">Парковка</h4>
              <p className="text-sm text-eywa-light/80 mb-4">
                Для гостей ресторана доступна удобная парковка.
              </p>
              <a 
                href="https://2gis.kz/almaty/geo/9430468312648303/76.927238,43.245508" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-3 border border-eywa-light/30 text-eywa-light text-sm uppercase tracking-widest rounded-full hover:bg-eywa-light hover:text-eywa-dark transition-all duration-300 mb-4"
              >
                <ParkingCircle className="w-4 h-4 mr-2" /> Схема проезда
              </a>
              <a 
                href="https://wa.me/77761491666" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-sm font-semibold rounded-full hover:bg-[#25D366] hover:text-white transition-all duration-300"
              >
                Написать в WhatsApp
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-eywa-light/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-eywa-light/40 uppercase tracking-wider">
            <p>© {new Date().getFullYear()} EYWA Terrace. Все права защищены.</p>
            <div className="flex gap-6">
              <a href="https://instagram.com/eywa_terrace" target="_blank" rel="noopener noreferrer" className="hover:text-eywa-light transition-colors">Instagram</a>
              <a href="#menu" className="hover:text-eywa-light transition-colors">Меню</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureItem({ icon: Icon, title }: { icon: any, title: string }) {
  return (
    <div className="flex flex-col gap-3 group">
      <div className="w-12 h-12 rounded-full border border-eywa-gold/30 bg-eywa-dark-elevated flex items-center justify-center text-eywa-gold group-hover:bg-eywa-gold group-hover:text-eywa-dark shadow-lg transition-all duration-300">
        <Icon className="w-5 h-5" />
      </div>
      <span className="font-medium text-[15px] text-white/90 group-hover:text-eywa-gold transition-colors">{title}</span>
    </div>
  );
}

function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(menuData[0].title);
  const currentCategoryData = menuData.find(c => c.title === activeCategory) || menuData[0];

  return (
    <section id="menu" className="py-24 bg-eywa-dark-elevated text-eywa-light border-y border-eywa-gold/10 relative">
      <div className="absolute bottom-0 left-0 w-1/2 h-[300px] bg-eywa-gold/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-sm uppercase tracking-[0.3em] text-eywa-gold mb-4 font-semibold">Наше меню</h2>
          <h3 className="serif text-4xl md:text-5xl lg:text-6xl text-white">Изысканные блюда EYWA</h3>
        </div>

        {/* Categories Tabs */}
        <div className="flex overflow-x-auto hide-scrollbar justify-start lg:justify-center gap-3 mb-12 max-w-6xl mx-auto pb-4 px-1 snap-x scroll-smooth">
          {menuData.map((category) => (
            <button
              key={category.title}
              onClick={() => setActiveCategory(category.title)}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm uppercase tracking-wider transition-all duration-300 whitespace-nowrap snap-center shrink-0 ${
                activeCategory === category.title
                  ? "bg-eywa-gold text-eywa-dark shadow-[0_0_15px_rgba(207,161,95,0.4)] font-semibold"
                  : "bg-eywa-dark border border-eywa-gold/20 text-eywa-light/70 hover:border-eywa-gold hover:text-eywa-gold"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <motion.div 
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-10"
        >
          {currentCategoryData.items.map((item, idx) => (
            <div key={idx} className="group cursor-pointer">
              {item.image && (
                <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-2xl mb-4 relative bg-eywa-dark border border-eywa-gold/10">
                  <div className="absolute inset-0 bg-eywa-dark/30 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              )}
              <div className="flex justify-between items-baseline mb-2">
                <h4 className="serif text-xl md:text-2xl font-medium tracking-tight text-white group-hover:text-eywa-gold transition-colors pr-4">{item.name}</h4>
                <div className="flex-grow border-b border-dotted border-eywa-gold/30 mx-4 relative top-[-6px]"></div>
                <span className="font-semibold text-eywa-gold whitespace-nowrap">{item.price}</span>
              </div>
              {item.description && (
                <p className="text-eywa-light/60 text-sm leading-relaxed max-w-[85%]">{item.description}</p>
              )}
            </div>
          ))}
        </motion.div>
        
        <div className="mt-16 text-center text-sm text-eywa-light/40 border-t border-eywa-gold/10 pt-8 max-w-3xl mx-auto">
          <p>Пожалуйста, сообщите официанту о наличии аллергических реакций на ингредиенты для вашей безопасности и комфорта. <br/>10% обслуживание.</p>
        </div>
      </div>
    </section>
  );
}
