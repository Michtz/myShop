import React from 'react';
import style from '../../styles/system/feedback.module.scss';
import Icon from './Icon';
import { useFeedback } from '../../hook/FeedbackHook';

const Feedback: React.FC = React.memo(() => {
  const { isVisible, variant, label } = useFeedback();

  if (!isVisible) return null;

  return (
    <section className={`${style['feedback-container']}`} data-variant={variant}>
      <Icon name={'check'} color={"white"} />
      <div className={style['feedback-content']}>{label}</div>
    </section>
  );
});

Feedback.displayName = 'Feedback';

export default Feedback;