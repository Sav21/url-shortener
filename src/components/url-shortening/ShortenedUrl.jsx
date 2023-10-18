import { useState } from "react";


const ShortenedUrl = ({ data }) => {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    await navigator.clipboard.writeText(data.full_short_link);
    setCopied(true);
  };
  


  return (
    
    <div className="shortend-container shortend-bg">
        <div style={{ flexGrow: '1'}} className="shortend-link">
          <a href={data.original_link} style={{color: "black"}}>{data.original_link}</a>
        </div>
        <div><hr className="shortend-line"/></div>
        <div style={{display: "flex", flexDirection: "row", alignItems: "baseline"}}>
          <a href={data.full_short_link} style={{color: "#2BD0D0"}} className="shortend-new-link">{data.full_short_link}</a>
        </div>
          <button onClick={copyLink} className="shortend-btn">{ copied ? "Copied!" : "Copy"}</button>
    </div>
  )
};

export default ShortenedUrl;
