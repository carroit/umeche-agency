
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, Globe, FileCheck, MapPin, ArrowRight, Star, Clockimport, Clock,
   Menu as MenuIcon,X}  from 'lucide-react';
   import { Link as ScrollLink } from 'react-scroll';
   import { Link as RouterLink, useLocation } from 'react-router-dom';


const Card = ({ className, ...props }) => (
   <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`} {...props} />
 );
 
 const CardContent = ({ className, ...props }) => (
   <div className={`p-6 pt-0 ${className}`} {...props} />
 );



 
 
 // Navigation Component
 const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';
  
    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const routeLinks = [
      { to: "/", label: "Home" },
      { to: "/about", label: "About" },
      { to: "/gallery", label: "Gallery" },
      { to: "/contact", label: "Contact" }
    ];
 
    const scrollLinks = [
      { to: "experience", label: "Experience" },
      { to: "services", label: "Services" },
      { to: "requirements", label: "Requirements" },
      { to: "countries", label: "Countries" },
    ];
  
    return (
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md text-gray-800' : 'bg-transparent text-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <RouterLink to="/" className="text-xl font-bold">Ahlen Agency</RouterLink>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md hover:bg-opacity-20 hover:bg-white focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
              </button>
            </div>
  
            {/* Desktop menu */}
            <ul className="hidden md:flex space-x-8">
              {routeLinks.map(({ to, label }) => (
                <li key={to}>
                  <RouterLink
                    to={to}
                    className="cursor-pointer hover:opacity-75 transition-opacity"
                  >
                    {label}
                  </RouterLink>
                </li>
              ))}
              {isHomePage && scrollLinks.map(({ to, label }) => (
                <li key={to}>
                  <ScrollLink
                    to={to}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer hover:opacity-75 transition-opacity"
                    spy={true}
                    activeClass="font-bold"
                  >
                    {label}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
  
          {/* Mobile menu */}
          <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
            <ul className="px-2 pt-2 pb-3 space-y-1">
              {routeLinks.map(({ to, label }) => (
                <li key={to}>
                  <RouterLink
                    to={to}
                    className="block px-3 py-2 rounded-md hover:bg-opacity-20 hover:bg-white cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </RouterLink>
                </li>
              ))}
              {isHomePage && scrollLinks.map(({ to, label }) => (
                <li key={to}>
                  <ScrollLink
                    to={to}
                    smooth={true}
                    duration={500}
                    className="block px-3 py-2 rounded-md hover:bg-opacity-20 hover:bg-white cursor-pointer"
                    onClick={() => setIsOpen(false)}
                    spy={true}
                    activeClass="font-bold"
                  >
                    {label}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    );
 };
 // Button Component
 const Button = ({ className, size = "default", children, ...props }) => {
   const sizeClasses = {
     default: "h-10 px-4 py-2",
     sm: "h-9 rounded-md px-3",
     lg: "h-11 rounded-md px-8",
     icon: "h-10 w-10"
   };
 
   return (
     <button
       className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${sizeClasses[size]} ${className}`}
       {...props}
     >
       {children}
     </button>
   );
 };
 
 const fadeInUp = {
   initial: { opacity: 0, y: 20 },
   animate: { opacity: 1, y: 0 },
   transition: { duration: 0.5 }
 };
 
 const stagger = {
   animate: {
     transition: {
       staggerChildren: 0.1
     }
   }
 };
 
 const AnimatedCard = ({ title, description, icon: Icon }) => (
   <motion.div
     whileHover={{ scale: 1.05 }}
     whileTap={{ scale: 0.95 }}
     initial="initial"
     animate="animate"
     variants={fadeInUp}
     className="w-full md:w-64 m-4"
   >
     <Card className="h-full">
       <CardContent className="p-6 text-center">
         {Icon && <Icon className="w-8 h-8 mx-auto mb-4 text-blue-500" />}
         <h3 className="text-lg font-semibold mb-2">{title}</h3>
         <p className="text-gray-600">{description}</p>
       </CardContent>
     </Card>
   </motion.div>
 );
 
 const Home = () => {
   // Stats data
   const stats = [
     { number: "10+", label: "Years Experience", icon: Clock },
     { number: "1000+", label: "People Placed", icon: Users }
   ];
 
   // Services data
   const services = [
     { title: "Female House Maid", icon: Users },
     { title: "House Worker", icon: Users },
     { title: "Female Private Teacher", icon: Briefcase },
     { title: "Female Nurse", icon: Users },
     { title: "Female Cooker", icon: Users },
     { title: "House Nanny", icon: Users }
   ];
 
   // Requirements data
   const requirements = [
     { title: "Renewed Passport", icon: FileCheck },
     { title: "COC Certificate", icon: FileCheck },
     { title: "Medical Clearance", icon: FileCheck },
     { title: "Age: 21-45", icon: Users },
     { title: "ID Card & Family ID", icon: FileCheck }
   ];
 
   return (
     <div className="min-h-screen">
       <Navigation />
       
       {/* Hero Section */}
       <section id="home" className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white pt-16">
         <div className="max-w-7xl mx-auto px-4 py-32">
           <motion.div
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1.5, ease: "easeOut" }}
             className="text-center max-w-3xl mx-auto"
           >
             <h1 className="text-5xl font-bold mb-6">Welcome to Ahlen Agency</h1>
             <p className="text-xl mb-4">Creating high-quality foreign business relations</p>
             <p className="text-lg mb-8 text-blue-100">
               With many years of experience, we are on a mission to connect talented, motivated, 
               and skilled workers with great businesses while opening up opportunities for all.
             </p>
             <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
               Get Started
               <ArrowRight className="ml-2 h-5 w-5" />
             </Button>
           </motion.div>
         </div>
         <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
       </section>
      

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center">
                  <CardContent className="p-8">
                    <stat.icon className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                    <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Domestic Profession Names
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <AnimatedCard
                key={index}
                title={service.title}
                description="Professional placement services"
                icon={service.icon}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Requirements for Starting the Process
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {requirements.map((req, index) => (
              <AnimatedCard
                key={index}
                title={req.title}
                description="Essential requirement"
                icon={req.icon}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Global Reach
          </motion.h2>
          
          {/* Current Countries */}
          <motion.div 
            className="mb-16"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-center mb-8">Countries We Are Sending To</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {['Dubai', 'Saudi Arabia', 'Kuwait'].map((country, index) => (
                <AnimatedCard
                  key={index}
                  title={country}
                  description="Active destination"
                  icon={Globe}
                />
              ))}
            </div>
          </motion.div>

          {/* Upcoming Countries */}
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-center mb-8">Coming Soon</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {['Beirut', 'Bahrain', 'Lebanon'].map((country, index) => (
                <AnimatedCard
                  key={index}
                  title={country}
                  description="Upcoming destination"
                  icon={MapPin}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-blue-600 text-white">
        <motion.div 
          className="max-w-4xl mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Star className="w-12 h-12 mx-auto mb-8 text-yellow-400" />
          <blockquote className="text-2xl font-medium italic mb-8">
            "Nothing We Do is More Important Than Hiring and Developing People. At The End Of The Day, You Bet On People, Not On Strategies."
          </blockquote>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;