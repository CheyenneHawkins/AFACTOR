import brands from "./images/all-logos1.png"
import dc from "./images/DC-Fitness-logo.png"
import asaal from "./images/ASAAL-logo.png"
import firstlight from "./images/First-Light-logo.png"
import king from "./images/King-Construction-logo.png"
import tomahawk from "./images/Tomahawk-logo.png"

export default function WhoWeAre(){
    const logoHeight = 250;

    return (
        <>
        <div className="who-content">
            <div className="who-box">
                <div className="who-text ">
                    <div className="who-indent">
                        <h5>
                        who we are
                        </h5>
                        <div className="who-desc">
                            <p className="">
                            We're a full service production agency specializing in web design, branding, creative development, and multimedia production.    
                            </p>
                        </div>
                    </div>
                </div>
                <div className="who-carousel">
                        <img src={firstlight} height={logoHeight} className="pic"/>
                        <img src={dc} height={logoHeight} className="pic"/>
                        <img src={king} height={logoHeight} className="pic"/>
                        <img src={asaal} height={logoHeight} className="pic"/>
                        <img src={tomahawk} height={200} className="pic"/>
                    {/* <div>
                    </div>
                    <div>
                    </div>
                    <div>
                    </div>
                    <div>
                    </div> */}
                </div>
            </div>
        </div>
        </>

    )


}