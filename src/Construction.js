
import redesign from "./images/redesign.png"

export default function Construction(){

    return (
        <>
            <div className="work">
            {/* <div className="circlebg">
                <div className="purplecircle"></div>
                <div className="purplebg2"></div>
            </div> */}
                {/* <h2>
                    <span>Our </span><span className="bluetext">WORK</span>
                </h2> */}
                <h2>
                    REDESIGN
                </h2>
                <h2>
                    <span className="bluetext">IN</span>
                </h2>
                <h2>
                    PROGRESS
                </h2>
                <img src={redesign} alt="redesign" height={280}/>
            </div>
        </>

    )

}