import "./hero.scss";

const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <div className="textContainer">
                    <h2>STEVEN ASTUDILLO</h2>
                    <h1>Software developer and Technology Coordinator</h1>
                    <div className="buttons">
                        <button>See Latest Projects</button>
                        <button>Let's chat</button>
                    </div>
                    <img src="/scroll.png" alt="" />
                </div>
            </div>
            <div className="slidingTextContainer">
                Developer Operations Coordinator Writer
            </div>
            <div className="imageContainer">
                <img src="/steven.png" alt="" />
            </div>
        </div>
    );
};
export default Hero;