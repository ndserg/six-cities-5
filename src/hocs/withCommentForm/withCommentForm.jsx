import React, {useState} from "react";
import PropTypes from "prop-types";
import {useDispatch} from 'react-redux';
import {postCommentAction} from '../../store/api-actions';

const minValues = {
  rating: 1,
  review: 10,
};

const withCommentForm = (Component) => {
  const WithCommentForm = (props) => {
    const {offerId: id} = props;
    const [inputValues, setInputValues] = useState({rating: 0, review: ``});
    const [isDisabled, setIsDisabled] = useState(false);
    const dispatch = useDispatch();

    const submitHandler = (evt) => {
      evt.preventDefault();
      if ((inputValues.rating >= minValues.rating) && (inputValues.review.length >= minValues.review)) {
        setIsDisabled(true);
        dispatch(postCommentAction({id, inputValues}))
        .then(() => setIsDisabled(false));
      } else {
        alert(`Ошибка при заполнении формы`);
      }
    };

    const fieldChangeHandler = (evt) => {
      const {name, value} = evt.target;
      setInputValues({...inputValues, [name]: value});
    };

    return (
      <Component
        {...props}
        isDisabled={isDisabled}
        onSubmit={(evt) => submitHandler(evt)}
        onChange={(evt) => fieldChangeHandler(evt)}
      />
    );
  };

  WithCommentForm.propTypes = {
    offerId: PropTypes.number.isRequired
  };

  return WithCommentForm;
};

export default withCommentForm;
