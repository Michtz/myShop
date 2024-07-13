import React, { useState } from 'react';
import style from '../../styles/system/accordion.module.scss';
import Icon from './Icon';

interface AccordionPanelProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionPanel: React.FC<AccordionPanelProps> = ({ title, children, isOpen, onClick }) => (
  <section className={style['accordion-item-container']}>
    <div onClick={onClick}>
      <span aria-expanded={isOpen}>{title}</span>
      <span>
        <Icon name={isOpen ? 'arrowUp' : 'arrowDown'} size="normal" />
      </span>
    </div>
    {isOpen && <article>{children}</article>}
  </section>
);

interface AccordionProps {
  panels: Array<{ title: string; content: React.ReactNode }>;
  allowMultiple?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ panels, allowMultiple = false }) => {
  const [openPanels, setOpenPanels] = useState<number[]>([]);

  const togglePanel = (index: number) => {
    setOpenPanels((prevOpenPanels) => {
      if (allowMultiple) {
        return prevOpenPanels.includes(index)
          ? prevOpenPanels.filter((i) => i !== index)
          : [...prevOpenPanels, index];
      } else {
        return prevOpenPanels.includes(index) ? [] : [index];
      }
    });
  };

  return (
    <div className={style['accordion-container']}>
      {panels.map((panel, index) => (
        <AccordionPanel
          key={index}
          title={panel.title}
          isOpen={openPanels.includes(index)}
          onClick={() => togglePanel(index)}
        >
          {panel.content}
        </AccordionPanel>
      ))}
    </div>
  );
};

export default Accordion;