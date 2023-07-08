import PropTypes from 'prop-types';
export default function FeedbackOptions({ options, onLeaveFeedback }){
    return(
        <>
            {options.map(option => (
                <button key={option} name={option} onClick={onLeaveFeedback} type="button">{option}</button>
            ))}
        </>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}