import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, Tools } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/navbar"; // Changed to use the navbar layout
import About from "./pages/About.jsx";
import Solutions from "./pages/Solutions.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";
import Index from "./pages/Index.jsx";
import ToolsPage from "./pages/Tools.jsx"; // Import the new Tools page

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Sobre Nós",
    to: "/about",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Nossas Soluções",
    to: "/solutions",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Blog",
    to: "/blog",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Contato",
    to: "/contact",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Ferramentas",
    to: "/tools",
    icon: <Tools className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="about" element={<About />} />
              <Route path="solutions" element={<Solutions />} />
              <Route path="blog" element={<Blog />} />
              <Route path="contact" element={<Contact />} />
              <Route path="tools" element={<ToolsPage />} /> {/* Add the new Tools page route */}
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;