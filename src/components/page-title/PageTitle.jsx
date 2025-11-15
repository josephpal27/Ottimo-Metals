import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    let title = "Ottimo Metals Pvt. Ltd."; // default
    let description = ""; // default

    switch (location.pathname) {
      case "/":
        title = "Ottimo Metals Pvt. Ltd.";
        description = "";
        break;
      case "/about":
        title = "About - Ottimo Metals Pvt. Ltd.";
        description = "";
        break;
      case "/products":
        title = "Products - Ottimo Metals Pvt. Ltd.";
        description = "";
        break;
      case "/quality-assurance":
        title = "Quality Assurance - Ottimo Metals Pvt. Ltd.";
        description = "";
        break;
      case "/services":
        title = "Services - Ottimo Metals Pvt. Ltd.";
        description = "";
        break;
      case "/applications":
        title = "Applications - Ottimo Metals Pvt. Ltd.";
        description = "";
        break;
      case "/gallery":
        title = "Gallery - Ottimo Metals Pvt. Ltd.";
        description = "";
        break;
      case "/contact":
        title = "Contact - Ottimo Metals Pvt. Ltd.";
        description = "";
        break;
      default:
        title = "Ottimo Metals Pvt. Ltd.";
        description = "";
    }

    // Page Title update
    document.title = title;

    // Meta Title & Description update
    let metaTitle = document.querySelector("meta[name='title']");
    let metaDesc = document.querySelector("meta[name='description']");

    if (metaTitle) metaTitle.setAttribute('content', title);
    if (metaDesc) metaDesc.setAttribute('content', description);

  }, [location]);

  return null; // doesn’t render anything visible
};

export default PageTitle;
