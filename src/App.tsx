
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SupportPage from "./pages/Support";
import HelpPage from "./pages/Help";
import TutorialsPage from "./pages/Tutorials";
import FAQPage from "./pages/FAQ";
import StatusPage from "./pages/Status";
import ContactPage from "./pages/Contact";
import BlogPage from "./pages/Blog";
import BlogPostPage from "./pages/BlogPost";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import BenefitsPage from "./pages/Benefits";
import ResourcesPage from "./pages/Resources";
import TestimonialsPage from "./pages/Testimonials";
import Consultant from "./pages/Consultant";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/suporte" element={<SupportPage />} />
          <Route path="/ajuda" element={<HelpPage />} />
          <Route path="/tutoriais" element={<TutorialsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/status" element={<StatusPage />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cadastro" element={<SignupPage />} />
          <Route path="/beneficios" element={<BenefitsPage />} />
          <Route path="/recursos" element={<ResourcesPage />} />
          <Route path="/depoimentos" element={<TestimonialsPage />} />
          <Route path="/consultor" element={<Consultant />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
