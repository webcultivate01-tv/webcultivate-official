
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import WorkProcess from "./pages/WorkProcess";
import Testimonials from "./pages/Testimonials";
import Pricing from "./pages/Pricing";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

import Services from "./pages/Services";

// Service Pages
import WebsiteDesign from "./pages/services/WebsiteDesign";
import WebsiteDevelopment from "./pages/services/WebsiteDevelopment";
import GraphicDesign from "./pages/services/GraphicDesign";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import DomainRegistration from "./pages/services/DomainRegistration";
import BusinessEmail from "./pages/services/BusinessEmail";
import SocialMedia from "./pages/services/SocialMedia";
import AIAutomation from "./pages/services/AIAutomation";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="work-process" element={<WorkProcess />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="careers" element={<Career />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-conditions" element={<TermsConditions />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          
          {/* Services Overview */}
          <Route path="services" element={<Services />} />

          {/* Service Routes */}
          <Route path="services/website-design" element={<WebsiteDesign />} />
          <Route path="services/website-development" element={<WebsiteDevelopment />} />
          <Route path="services/graphic-design" element={<GraphicDesign />} />
          <Route path="services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="services/domain-registration" element={<DomainRegistration />} />
          <Route path="services/business-email" element={<BusinessEmail />} />
          <Route path="services/social-media" element={<SocialMedia />} />
          <Route path="services/ai-automation" element={<AIAutomation />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
