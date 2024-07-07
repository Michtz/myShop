import React from 'react';
import style from '../../styles/system/feedback.module.scss';
import Icon from './Icon';


interface FeedbackProps {
  variant?: 'error' | 'info' | 'success';
  label: string;
}

const Feedback: React.FC<FeedbackProps> = React.memo(({ variant = 'success', label}): JSX.Element => {
  return (
      <section className={style['feedback-container']} data-variant={variant}>
        <Icon name={'check'} />
        <div className={style['feedback-content']} children={label} />
      </section>
  );
});

export default Feedback;