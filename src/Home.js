import swoop from "./images/swoop.svg"
import factory from "./images/lightning1.png"
import ServicesSection from "./ServicesSection"
import WhoWeAre from "./WhoWeAre"
import BrandsBrag from "./BrandsBrag"

export default function Home() {

    return (
        <>
        <div className="contentmain">
            <div className="component-container">

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
            </div>
                <WhoWeAre />
                <BrandsBrag />
        </>

    )

}