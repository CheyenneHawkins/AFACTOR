import swoop from "./images/swoop.svg"
import factory from "./images/hero-art4.png"
import Header from "./Header"
import ServicesSection from "./ServicesSection"

export default function Home() {

    return (
        <>
        <div className="contentmain">
            <div className="swoopbg">
                <img src={swoop} alt='' className="swoop-svg"/>
                <div className="purplebg"></div>
            </div>
                <div className="hero-main">
                    <div className="hero-text">
                        <span>CONTENT THAT IS</span>
                        <div id='flip'>
                            <div><div>CREATIVELY</div></div>
                            <div><div>CULTURALLY</div></div>
                            <div><div>CONSISTENTLY</div></div>
                        </div>
                        <span>A FACTOR</span>
                    </div>
                    <div className="hero-pic">
                        <img src={factory} alt='' className="" height={400}/>
                    </div>
                </div>
        </div>
                <ServicesSection />
        </>

    )

}