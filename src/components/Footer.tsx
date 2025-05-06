import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-4">
              <span className="text-2xl font-bold font-playfair text-restaurant-primary">
                RestGester<span className="text-restaurant-secondary">.</span>
              </span>
            </a>
            <p className="text-restaurant-muted mb-4 max-w-md">
              Transformando a gestão de restaurantes com tecnologia avançada e experiência no setor gastronômico.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-8 w-8 rounded-full bg-restaurant-light flex items-center justify-center text-restaurant-primary hover:bg-restaurant-secondary hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77,22H5.23A3.24,3.24,0,0,1,2,18.77V5.23A3.24,3.24,0,0,1,5.23,2H18.77A3.24,3.24,0,0,1,22,5.23V18.77A3.24,3.24,0,0,1,18.77,22ZM13.06,8.9V6.73c0-.74.49-.91,1.23-.91h3V2H13.06a5.4,5.4,0,0,0-2.38.42,3.91,3.91,0,0,0-1.55,1.09A4.19,4.19,0,0,0,8.23,5a6.47,6.47,0,0,0-.19,1.69V8.9H5V12h3v9h5V12h3.85L17.46,8.9Z"/></svg>
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-restaurant-light flex items-center justify-center text-restaurant-primary hover:bg-restaurant-secondary hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12,2C8.3,2,7.9,2,6.5,2.1c-2.9,0.1-4.3,1.5-4.4,4.4C2,7.9,2,8.3,2,12s0,4.1,0.1,5.5c0.1,2.9,1.5,4.3,4.4,4.4C7.9,22,8.3,22,12,22s4.1,0,5.5-0.1c2.9-0.1,4.3-1.5,4.4-4.4C22,16.1,22,15.7,22,12s0-4.1-0.1-5.5c-0.1-2.9-1.5-4.3-4.4-4.4C16.1,2,15.7,2,12,2z M12,7c2.8,0,5,2.2,5,5s-2.2,5-5,5s-5-2.2-5-5S9.2,7,12,7L12,7z M17.5,4.9c0.7,0,1.2,0.5,1.2,1.2s-0.5,1.2-1.2,1.2s-1.2-0.5-1.2-1.2S16.8,4.9,17.5,4.9z M12,9c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S13.7,9,12,9z"/></svg>
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-restaurant-light flex items-center justify-center text-restaurant-primary hover:bg-restaurant-secondary hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46,6c-0.77,0.35-1.6,0.58-2.46,0.69c0.88-0.53,1.56-1.37,1.88-2.38c-0.83,0.5-1.75,0.85-2.72,1.05C18.37,4.5,17.26,4,16,4c-2.35,0-4.27,1.92-4.27,4.29c0,0.34,0.04,0.67,0.11,0.98C8.28,9.09,5.11,7.38,3,4.79C2.63,5.42,2.42,6.16,2.42,6.94c0,1.49,0.75,2.81,1.91,3.56C3.6,10.5,2.96,10.3,2.38,10c0,0.01,0,0.03,0,0.05c0,2.07,1.48,3.8,3.44,4.19c-0.36,0.1-0.74,0.15-1.12,0.15c-0.27,0-0.54-0.02-0.8-0.08c0.54,1.7,2.12,2.95,4,2.98C6.2,18.35,4.36,19,2.33,19c-0.33,0-0.66-0.02-0.98-0.05c1.9,1.22,4.16,1.93,6.58,1.93c7.88,0,12.21-6.56,12.21-12.25c0-0.19,0-0.37-0.01-0.56C21.17,7.63,21.88,6.87,22.46,6L22.46,6z"/></svg>
              </a>
              <a href="#" className="h-8 w-8 rounded-full bg-restaurant-light flex items-center justify-center text-restaurant-primary hover:bg-restaurant-secondary hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3V9.74h3v1.3a3,3,0,0,1,2.71-1.5c2,0,3.45,1.29,3.45,4.06Z"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-restaurant-primary uppercase tracking-wider mb-4">
              Produto
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-restaurant-muted hover:text-restaurant-secondary">Recursos</a></li>
              <li><a href="#" className="text-restaurant-muted hover:text-restaurant-secondary">Preços</a></li>
              <li><a href="#" className="text-restaurant-muted hover:text-restaurant-secondary">Demonstração</a></li>
              <li><a href="#" className="text-restaurant-muted hover:text-restaurant-secondary">Atualizações</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-restaurant-primary uppercase tracking-wider mb-4">
              Empresa
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-restaurant-muted hover:text-restaurant-secondary">Sobre nós</a></li>
              <li><a href="#" className="text-restaurant-muted hover:text-restaurant-secondary">Blog</a></li>
              <li><a href="#" className="text-restaurant-muted hover:text-restaurant-secondary">Carreiras</a></li>
              <li><a href="#" className="text-restaurant-muted hover:text-restaurant-secondary">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-restaurant-primary uppercase tracking-wider mb-4">
              Suporte
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-restaurant-muted hover:text-restaurant-secondary">Ajuda</a></li>
              <li><a href="#" className="text-restaurant-muted hover:text-restaurant-secondary">Tutoriais</a></li>
              <li><a href="#" className="text-restaurant-muted hover:text-restaurant-secondary">FAQ</a></li>
              <li><a href="#" className="text-restaurant-muted hover:text-restaurant-secondary">Status</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-restaurant-muted mb-4 md:mb-0">
              © 2024 RestGester. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-restaurant-muted hover:text-restaurant-secondary">
                Termos de Serviço
              </a>
              <a href="#" className="text-sm text-restaurant-muted hover:text-restaurant-secondary">
                Política de Privacidade
              </a>
              <a href="#" className="text-sm text-restaurant-muted hover:text-restaurant-secondary">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
