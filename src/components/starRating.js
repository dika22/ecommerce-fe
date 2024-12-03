import React, {useState} from "react";
import "../rating.css"; 


const StarRating = ({ totalStars = 5 }) => {
    const [rating, setRating] = useState(0); // Nilai rating tetap
    const [hover, setHover] = useState(0);   // Nilai rating saat hover

    return (
        <div className="star-rating">
            {Array.from({ length: totalStars }, (_, index) => {
                const starValue = index + 1;
                return (
                    <span
                        key={index}
                        className={`star ${starValue <= (hover || rating) ? "filled" : ""}`}
                        onClick={() => setRating(starValue)} // Set rating saat klik
                        onMouseEnter={() => setHover(starValue)} // Ubah nilai hover
                        onMouseLeave={() => setHover(0)} // Reset hover saat keluar
                    >
                        &#9733; {/* Unicode untuk simbol bintang */}
                    </span>
                );
            })}
        </div>
    );
};

export default StarRating;