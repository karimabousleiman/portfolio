import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Products from "./pages/Products";
import Music from "./pages/Music";
import PhotoFilm from "./pages/PhotoFilm";
import Bio from "./pages/Bio";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Navigate to="/work/tf1" replace />} />
          <Route path="/work/:slug" element={<Work />} />
          <Route path="/products" element={<Products />} />
          <Route path="/music" element={<Music />} />
          <Route path="/photo-film" element={<PhotoFilm />} />
          <Route path="/bio" element={<Bio />} />
          {/* Old addresses from the previous site keep working. */}
          <Route path="/experience" element={<Navigate to="/work/tf1" replace />} />
          <Route path="/visual-arts" element={<Navigate to="/photo-film" replace />} />
          <Route path="/about" element={<Navigate to="/bio" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
