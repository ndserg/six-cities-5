import React from "react";
import PropTypes from "prop-types";
import reviewsProp from "./reviews.prop";

const MONTHS = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `Desember`];

const reviewTemplate = (review) => {
  const {id, comment, date, rating, user} = review;
  const {avatarUrl, name} = user;

  const commentDate = new Date(date);
  const dateToLoacal = commentDate.toLocaleDateString(`en-CA`);
  const dateToString = `${MONTHS[commentDate.getMonth()]}  ${commentDate.getFullYear()}`;
  const ratingWidth = (rating * 100 / 5) + `%`;

  return (
    <li key={id} className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: ratingWidth}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={dateToLoacal}>{dateToString}</time>
      </div>
    </li>
  );
};

const Reviews = (props) => {
  const {comments} = props;

  return (
    <React.Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {comments.map((comment) => reviewTemplate(comment))}
      </ul>
    </React.Fragment>
  );
};

Reviews.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(reviewsProp).isRequired).isRequired,
};

export default Reviews;
