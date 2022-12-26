import propTypes from 'prop-types';
import css from './Statistic.module.css';

export const Statistic = ({ good, neutral, bad, total, positiveFeed}) => (
    <ul className={css.list}>
        <li className={css.item}>Good: {good}</li>
        <li className={css.item}>Neutral: {neutral}</li>
        <li className={css.item}>Bad: {bad}</li>
        <li className={css.item}>Total: {total}</li>
        <li className={css.item}>Positive feedback: {positiveFeed}%</li>
    </ul>
)

Statistic.propTypes = {
    good: propTypes.number.isRequired,
    neutral: propTypes.number.isRequired,
    bad: propTypes.number.isRequired,
    total: propTypes.number.isRequired,
    positiveFeed: propTypes.number.isRequired,
};
