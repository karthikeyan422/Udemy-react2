
// Navbar Components

function Navbar() {


    return (

    <div className="Navbar-section">

        <div className="section__s1">

            <h1 className="section-one__name">Udemy</h1>

        </div>

        <div className="section__s2">

            <i className="fa-solid fa-magnifying-glass"></i>
            <input className="section-two__input" type="text"
                placeholder="Search for anything here Business,Tech,Arts......"></input>

        </div>

        <div className="section__s3">

            <p style={{ cursor: "pointer"}}>courses</p>
            
            {/* My Learning */}
             
            <div className="mylearning">

                <p>My learning</p>

                <div className="mylearnig__popup">
                    <p>You didn't purchase anything</p>
                </div>

            </div>

            <i className="fa-solid fa-cart-shopping"></i>
            <i className="fa-solid fa-bell"></i>
            <i className="fa-solid fa-user-tie"></i>

        </div>
         <div className="section__s4">
            <i className="fa-solid fa-bars"></i>
         </div>

    </div>


    )

}

export default Navbar