import webicon from "./images/web-icon-black.png"
import branding from "./images/branding.png"
import computer from "./images/computer.png"
import creative from "./images/creative.png"
import animation from "./images/spore.png"
import { useNavigate } from "react-router-dom";



export default function ServicesSection(){
    const navigate = useNavigate();

    return (
        <>
                <div className="services-section">
                    <h2>
                        <span>WHAT WE </span><span className="bluetext">DO</span>
                    </h2>
                    <hr className="divider"/>
                    <div className="who">
                        <p>AFACTOR Media is a full-service production agency specializing in:</p>
                        <div className="services-list">
                            <div className="services-item" onClick={()=>{
                                navigate('/construction');
                            }}>
                                <img src={computer} alt="web design" />
                                <span>Web Design</span>
                            </div>
                            <div className="services-item" onClick={()=>{
                                navigate('/construction');
                            }}>
                                <img src={branding} alt="branding" />
                                <span>Branding</span>
                            </div>
                            <div className="services-item" onClick={()=>{
                                navigate('/construction');
                            }}>
                                <img src={creative} alt="Creative Development" />
                                <span>Creative Development</span>
                            </div>
                            <div className="services-item more-gap" onClick={()=>{
                                navigate('/construction');
                            }}>
                                <img src={animation} alt="animation" className="spacer-top shrinker" />
                                <span>Animation</span>
                            </div>
                            {/* <div className="services-item">
                                <img src={webicon} alt="Video Production" />
                                <span>Video Production</span>
                            </div> */}
                        </div>
                    </div>

                </div>
        </>

    )


}