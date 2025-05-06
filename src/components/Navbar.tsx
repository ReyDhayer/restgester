import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, UserCheck } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ProfilePhotoEditor } from "./ProfilePhotoEditor";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const checkUser = () => {
      const storedUser = localStorage.getItem("currentUser");
      if (storedUser) {
        setCurrentUser(JSON.parse(storedUser));
      }
    };

    window.addEventListener("scroll", handleScroll);
    checkUser(); // Check on mount
    
    // Setup event listener for login/logout events
    window.addEventListener("storage", checkUser);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("storage", checkUser);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    navigate("/");
  };

  const handleUpdatePhoto = (newPhotoUrl: string) => {
    setCurrentUser(prev => ({
      ...prev,
      profileImage: newPhotoUrl
    }));
  };

  const navItems = [{
    name: "Recursos",
    href: "/recursos"
  }, {
    name: "Benefícios",
    href: "/beneficios"
  }, {
    name: "Depoimentos",
    href: "/depoimentos"
  }, {
    name: "Preços",
    href: "/#pricing"
  }, {
    name: "Blog",
    href: "/blog"
  }, {
    name: "Ajuda",
    href: "/ajuda",
    isDropdown: true,
    subItems: [{
      name: "Suporte",
      href: "/suporte"
    }, {
      name: "Tutoriais",
      href: "/tutoriais"
    }, {
      name: "FAQ",
      href: "/faq"
    }, {
      name: "Status",
      href: "/status"
    }]
  }, {
    name: "Contato",
    href: "/contato"
  }];

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}>
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-xl md:text-2xl font-bold font-playfair text-restaurant-primary animate-fade-in">
              RestGester<span className="text-restaurant-secondary">.</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map(item => item.isDropdown ? <div key={item.name} className="relative group">
                  <button onClick={() => handleDropdownToggle(item.name)} className="text-restaurant-primary hover:text-restaurant-secondary transition-colors duration-300 flex items-center">
                    {item.name}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  
                  <div className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300 origin-top-right ${activeDropdown === item.name ? 'transform opacity-100 scale-100' : 'transform opacity-0 scale-95 invisible'}`}>
                    <div className="py-1">
                      {item.subItems?.map(subItem => <Link key={subItem.name} to={subItem.href} className="block px-4 py-2 text-sm text-restaurant-primary hover:bg-gray-50 hover:text-restaurant-secondary" onClick={() => setActiveDropdown(null)}>
                          {subItem.name}
                        </Link>)}
                    </div>
                  </div>
                </div> : <Link key={item.name} to={item.href} className="text-restaurant-primary hover:text-restaurant-secondary transition-colors duration-300 animate-fade-in" style={{
            animationDelay: `${0.1 * navItems.indexOf(item)}s`
          }}>
                  {item.name}
                </Link>)}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {currentUser ? (
              <div className="flex items-center space-x-4">
                <ProfilePhotoEditor 
                  currentUser={currentUser}
                  onPhotoUpdate={handleUpdatePhoto}
                />
                <Button 
                  variant="restaurant" 
                  className="animate-fade-in"
                  onClick={handleLogout}
                >
                  Sair
                </Button>
              </div>
            ) : (
              <>
                <Button 
                  variant="restaurantOutline" 
                  className="animate-fade-in"
                  onClick={() => navigate('/login')}
                >
                  Entrar
                </Button>
                <Button 
                  variant="restaurant" 
                  className="animate-fade-in"
                  onClick={() => navigate('/cadastro')}
                >
                  Cadastrar
                </Button>
              </>
            )}
          </div>

          <button className="md:hidden text-restaurant-primary" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <Menu size={24} />
          </button>
        </nav>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navItems.map(item => item.isDropdown ? <div key={item.name}>
                    <button onClick={() => handleDropdownToggle(item.name)} className="text-restaurant-primary hover:text-restaurant-secondary py-2 flex items-center justify-between w-full">
                      {item.name}
                      <svg className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </button>
                    
                    {activeDropdown === item.name && <div className="ml-4 mt-2 space-y-2 border-l-2 border-gray-200 pl-4">
                        {item.subItems?.map(subItem => <Link key={subItem.name} to={subItem.href} className="block py-2 text-restaurant-primary hover:text-restaurant-secondary" onClick={() => {
                setActiveDropdown(null);
                setIsMobileMenuOpen(false);
              }}>
                            {subItem.name}
                          </Link>)}
                      </div>}
                  </div> : <Link key={item.name} to={item.href} className="text-restaurant-primary hover:text-restaurant-secondary py-2" onClick={() => setIsMobileMenuOpen(false)}>
                    {item.name}
                  </Link>)}
              <div className="flex flex-col space-y-2 pt-2">
                {currentUser ? (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ProfilePhotoEditor 
                        currentUser={currentUser}
                        onPhotoUpdate={handleUpdatePhoto}
                      />
                      <span className="text-restaurant-primary">{currentUser.name}</span>
                    </div>
                    <Button 
                      variant="restaurant" 
                      className="w-24"
                      onClick={() => {
                        handleLogout();
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Sair
                    </Button>
                  </div>
                ) : (
                  <>
                    <Button 
                      variant="restaurantOutline" 
                      className="w-full"
                      onClick={() => {
                        navigate('/login');
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Entrar
                    </Button>
                    <Button 
                      variant="restaurant" 
                      className="w-full"
                      onClick={() => {
                        navigate('/cadastro');
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Cadastrar
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>;
};
