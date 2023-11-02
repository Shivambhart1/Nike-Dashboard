const HeroSection = () => {
    return (
        <main className="hero container">
            <div className="hero-content">
                <h1 className="hero-heading">YOUR FEET DESERVE THE BEST</h1>
                <p className="deserve-best">
                YOUR FEET DESERVE THE BEST AND WE’RE HERE TO
                HELP YOU WITH OUR SHOES.YOUR FEET DESERVE
                THE BEST AND WE’RE HERE TO HELP YOU WITH OUR 
                SHOES.
                </p>

                <div className="hero-btn">
                    <button className="shop-now">SHOP NOW</button>
                    <button className="category">CATEGORY</button>
                </div>

                <div className="shopping">
                    <p>Also Available On</p>
                    <div className="brand-icons">
                        <img src="/public/flipkart.png" />
                        <img src="/public/amazon.png" />
                    </div>
                </div>
            </div>
            <div className="hero-img">
                <img className="hero-img" src="/public/shoe_image.png"/>
            </div>
        </main>
    )
}

export default HeroSection; 