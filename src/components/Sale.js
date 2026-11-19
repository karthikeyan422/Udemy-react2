// Images

import sale from "../assets/images/sale-image.jpg";

// Sale image Components

function Sale() {

    return (
        <div className="sale-image">

            <img src={sale} alt="saleimage"></img>

            <div className="offerbox">
                <h1 className="offertitle">Udemy Flash sale! 24 hours to save</h1>
                <p>Get the top course for just 499. just one day to save. It's lifetime to learn </p>
            </div>

        </div>

    )

}
export default Sale