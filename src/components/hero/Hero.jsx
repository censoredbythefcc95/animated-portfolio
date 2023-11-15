import "./hero.scss";

const Hero = () => {
    return (
        <div className="hero">
            <div className="textContainer">
                <h2>Steven Astudillo</h2>
                <h1>Developer and Technology Coordinator</h1>
                <div className="buttons">
                    <button>See Latest Projects</button>
                    <button>Let's talk</button>
                </div>
                <img src="/scroll.png" alt="" />
            </div>
            <div className="imageContainer">
                <img src="steven.png" alt="" />
            </div>
        </div>
    )
}

export default Hero;