export const FeedbackOptions = ({ options }) => {
  return (
    <ul>
      {options.map((item, index) => {
        return (
          <li key={index}>
            <button type="button">{item}</button>
          </li>
        );
      })}
    </ul>
  );
};
