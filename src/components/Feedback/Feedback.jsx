import propTypes from 'prop-types';
import css from './Feedback.module.css';
import { nanoid } from 'nanoid'

export const Feedback = ({ options, onFeedback }) => (
    <>
        {options.map(option => (
            
                <button name={option} key={nanoid(5)} className={css.feedbackBtn} onClick={onFeedback}>
                {option[0].toUpperCase() + option.substring(1)}
                </button>
            
            
        ))}
    </>
);

Feedback.propTypes = {
    options: propTypes.arrayOf(propTypes.string).isRequired,
    plusFeedback: propTypes.func.isRequired,
}
