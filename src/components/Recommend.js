// Images

import one from "../assets/images/c1.jpg";
import two from "../assets/images/c2.jpg";
import three from "../assets/images/c3.jpg";
import four from "../assets/images/c4.jpg"

// Recommended Components

function Recommend() {

    return (

        <div className="recommended">

            <h1>Rcommended For you</h1>
            <p>Pick the best fit</p>


            <div className="recommended__container">

                <div className="course-card">

                    <img src={one} alt="coursecard"></img>
                    <h3>2026 python Data visulisazion masterclass</h3>
                    <p>col steel</p>
                    <p>3.9 ⭐⭐⭐</p>
                    <p>499 <del>999</del></p>

                </div>

                <div className="course-card">

                    <img src={two} alt="coursecard"></img>
                    <h3>2026 python Data visulisazion masterclass</h3>
                    <p>col steel</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>699 <del>899</del></p>

                </div>

                <div className="course-card">

                    <img src={three} alt="coursecard"></img>
                    <h3>2026 python Data visulisazion masterclass</h3>
                    <p>col steel</p>
                    <p>3.9 ⭐⭐⭐</p>
                    <p>999 <del>1999</del></p>

                </div>

                <div className="course-card">

                    <img src={four} alt="coursecard"></img>
                    <h3>2026 python Data visulisazion masterclass</h3>
                    <p>col steel</p>
                    <p>2.9 ⭐⭐</p>
                    <p>299 <del>599</del></p>

                </div>
            </div>
        </div>
    )

}

export default Recommend
