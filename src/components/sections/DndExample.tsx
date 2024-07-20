import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ContainerSection } from '../system/Containers';
import Icon from '../system/Icon';
import DraggableList, { DraggableItem } from '../system/DraggableList';
import { dndItems } from '../../data/data';

const DraggableListExample: React.FC = () => {
  const { t } = useTranslation();
  const [items, setItems] = useState<Array<DraggableItem>>(dndItems);

  const handleReorder = (newOrder: Array<DraggableItem>) => {
    setItems(newOrder);
  };

  return (
    <>
      <ContainerSection width="small" centred>
        <h1>{t('dnd-example')}</h1>
        <Icon name="lightMode" centred color="blue" size="huge" animate />
      </ContainerSection>
      <ContainerSection noGap width="small" centred>
        <DraggableList items={items} onReorder={handleReorder} />
      </ContainerSection>
    </>
  );
};

export default DraggableListExample;