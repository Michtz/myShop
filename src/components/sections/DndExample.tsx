import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ContainerSection } from '../system/Containers';
import Icon from '../system/Icon';
import DraggableList from '../system/DraggableList';

interface DraggableItem {
  uuid: string;
  name: string;
}

const DraggableListExample: React.FC = () => {
  const { t } = useTranslation();

  const [items, setItems] = useState<DraggableItem[]>([
    { uuid: 'dd45797e-fb53-47cf-9fe4-1d0a8e0b6a78', name: 'Item_1' },
    { uuid: 'cc9d6944-536c-46a1-93da-c04aba04a8f1', name: 'Item_2' },
    { uuid: '15e5c24e-857c-4be6-8ea1-fd1d676e7bab', name: 'Item_3' },
    { uuid: '64693107-89f6-456f-9f6c-c91c2f572c7c', name: 'Item_4' },
    { uuid: '32e4d2bf-625a-4575-8489-894d2d1f7741', name: 'Item_5' },
  ]);

  const handleReorder = (newOrder: DraggableItem[]) => {
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