import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";
import Index from "./pages/Index";
import LandscapeLighting from "./pages/LandscapeLighting";
import UnderwaterLighting from "./pages/UnderwaterLighting";
import ArchitecturalLighting from "./pages/ArchitecturalLighting";
import CobSpotLights from "./pages/CobSpotLights";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/landscape-lighting" element={<LandscapeLighting />} />
          <Route path="/underwater-lighting" element={<UnderwaterLighting />} />
          <Route path="/architectural-lighting" element={<ArchitecturalLighting />} />
          <Route path="/architectural-lighting/concealed-cob-lights" element={<CobSpotLights />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
