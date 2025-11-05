import './CTA.css';

import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <>
      <div className="cta-box">
        <div className="cta-box-left">
            <span>Looking for a quality and affordable project?</span>
        </div>
        <div className="cta-box-right">
            <Button component={Link} to="/contact" className="button">CONTACT US</Button>
        </div>
      </div>
    </>
  )
}

export default CTA
