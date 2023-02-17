import { Wrapper } from './Feedback.styled';
import { Title } from './Feedback.styled';

export const Section = ({ children, title }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <div>{children}</div>
    </Wrapper>
  );
};
