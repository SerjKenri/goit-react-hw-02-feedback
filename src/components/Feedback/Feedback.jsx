import propTypes from 'prop-types';
import css from './Feedback.module.css';
import { nanoid } from 'nanoid'

export const Feedback = ({ options, plusFeedback }) => (
    <div>
        {options.map(option => (
            <button key={nanoid(5)} className={css.feedbackBtn} onClick={() => plusFeedback(option)}>
                {option}
            </button>
        ))}
    </div>
);

Feedback.propTypes = {
    options: propTypes.arrayOf(propTypes.string).isRequired,
    plusFeedback: propTypes.func.isRequired,
}
