import { useEffect, useState } from "react";
import ShortenedUrl from "./ShortenedUrl";
import "../../App.scss";


const UrlShortener = () => {

    const linkFromLocalStorage = localStorage.getItem("link");
    const storedLink = linkFromLocalStorage ? JSON.parse(linkFromLocalStorage) : [];
    const [url, setUrl] = useState("");
    const [link, setLink] = useState(storedLink);
    const [error, setError] = useState(false);

    useEffect(() => {
        localStorage.setItem("link", JSON.stringify(link));
    }, [link]);

    const shortenUrl = async (e) => {
        e.preventDefault();
        if (url.replaceAll(" ", "") === "") {
            setError(true);
            return;
        }
        // const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
        // const fetchedLink = await res.json();
        const fetchedLink = {
            ok: true,
            result: { original_link: url, full_short_link: `https://skraceno.com/${url}` }
        }
        if (fetchedLink.ok) {
            setLink([...link, fetchedLink.result])
        } else {
            setError(true);
        }

    };

    return (

        <div className="form">
            <form onSubmit={shortenUrl}>
                <div className='shorten bg' >
                    <div className='shorten'>
                        <div style={{ display: "flex", flexDirection: "column"}}>
                            <input
                                type="text"
                                name="url"
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                onFocus={() => setError(false)}
                                placeholder="Shorten a link here..."
                                className={`${error ? "border border-danger text-danger" : "border"}`}
                            />
                            <span
                                className={`${error ? "visible opacity-100 text-danger" : "invisible opacity-0"
                                    }`}
                            >
                                Please add valid a link
                            </span>
                        </div>
                        <button type="submit" className="input-btn">Shorten it!</button>
                    </div>
                </div>
            </form>
            {link.map((link) => <ShortenedUrl key={link.full_short_link} data={link} />)}
        </div>
    )


}

export default UrlShortener;