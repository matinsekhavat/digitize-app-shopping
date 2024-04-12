import map from "../../public/images/map.png";
import company from "../../public/images/company-logo.com.png";
function Logo({ hasPsuedo = false }) {
  return (
    <div className={`size-12  ${hasPsuedo ? "logo-psuedo" : ""}`}>
      <img src={company} alt="Digitize logo" className="w-full" />
    </div>
  );
}

export default Logo;
