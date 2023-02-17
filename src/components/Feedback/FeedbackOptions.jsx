export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {options.map((item, index) => {
        return (
          <li key={index}>
            <button
              name={options[index].toLowerCase()}
              type="button"
              onClick={onLeaveFeedback}
            >
              {item}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
