import React from 'react';
import StarRatings from 'react-star-ratings';
import styles from './StarRatings.module.css';

const DifficultyRating = ({ rating }) => {
    return (
        <div className={styles.ratingContainer}>
            <h4>Complexity Rating</h4>
            <StarRatings
                rating={rating}
                starRatedColor="gold"
                numberOfStars={5}
                starDimension="1em"
                starSpacing="5px"
            />
        </div>
    );
};

export default DifficultyRating;
