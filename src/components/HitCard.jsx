import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HitCard = ({ item }) => {
    const navigate = useNavigate();
    const [currentImg, setCurrentImg] = useState(0);

    useEffect(() => {
        if (item.images.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentImg((prev) => (prev + 1) % item.images.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [item.images.length]);
    
    return (
        <div className="hit-card">
            <div
                className="hit-img-wrapper"
                onClick={() => navigate(`/product/${item.id}`)}
            >
                <picture>
                    <source
                        media="(max-width: 480px)"
                        srcSet={item.imageMobile?.[currentImg] ?? item.images[currentImg]}
                    />
                    <img
                        src={item.images[currentImg]}
                        alt={item.name}
                        className="hit-img"
                        loading="lazy"
                        width="800"
                        height="1000"
                    />
                </picture>
                <div
                    className="hit-overlay"
                    onClick={() => navigate(`/product/${item.id}`)}
                >
                    Select Size & Add to Cart
                </div>

                {item.images.length > 1 && (
                    <div className="hit-dots">
                        {item.images.map((_, i) => (
                            <span
                                key={i}
                                className={`hit-dot ${i === currentImg ? "hit-dot--active" : ""}`}
                            />
                        ))}
                    </div>
                )}
            </div>
            <p className="hit-label">{item.name}</p>
            <p className="hit-price">Rs {item.price.toLocaleString()}</p>
        </div>
    );
};

export default HitCard;