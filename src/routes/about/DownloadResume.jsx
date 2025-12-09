import DownloadIcon from "../../assets/images/download-icon.png";
import Resume from "/Resume.pdf";

export const DownloadResume = () => {
  return (
    <a className="download-btn" href={Resume} download="Saranya-Maghendran-Resume.pdf">
      <span>Download Resume</span>
      <img src={DownloadIcon} alt="Download Icon" />
    </a>
  );
};
