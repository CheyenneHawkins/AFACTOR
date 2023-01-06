import wavy from "./images/Wavy.png"
import pureflix from "./images/Pureflix.png"
import affirm from "./images/Affirm.png"
import viralish from "./images/Viralish.png"
import fairtrade from "./images/Fairtrade.png"




export default function BrandsBrag() {

    return (
        <>
        <div className="brag-content">
            <div className="brands">
                <div className="brands-title ">
                    <h1>
                        Brands We've Worked With
                    </h1>
                    {/* <hr/> */}
                </div>  
                <div className="brands-row ">
                        {/* <img src={pureflix} height={50}/>
                        <img src={affirm} height={50}/>
                        <img src={viralish} height={50}/>
                        <img src={wavy} height={50}/> */}
                    <div>
                        <img src={pureflix} height={50}/>
                    </div>
                    <div>
                        <img src={affirm} height={50}/>
                    </div>
                    <div>
                        <img src={viralish} height={50}/>
                    </div>
                    <div>
                        <img src={wavy} height={50}/>
                    </div>
                    <div>
                        <img src={fairtrade} height={20}/>
                    </div>
                </div>

            </div>
        </div>
        </>

    )

}