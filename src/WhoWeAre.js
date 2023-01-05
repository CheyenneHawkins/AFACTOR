import brands from "./images/all-logos1.png"
import dc from "./images/DC-Fitness-logo.png"
import asaal from "./images/ASAAL-logo.png"
import firstlight from "./images/First-Light-logo.png"
import king from "./images/King-Construction-logo.png"

export default function WhoWeAre(){
    const logoHeight = 150;

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
                <div className="who-worked-with">
                    <div>
                        <img src={firstlight} height={logoHeight}/>
                    </div>
                    <div>
                        <img src={dc} height={logoHeight}/>
                    </div>
                    <div>
                        <img src={king} height={logoHeight}/>
                    </div>
                    <div>
                        <img src={asaal} height={logoHeight}/>
                    </div>
                </div>
            </div>
        </div>
        </>

    )


}