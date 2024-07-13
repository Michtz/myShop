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
    { uuid: '04cff589-9248-4771-9ad4-310062595803', name: 'Item_6' },
    { uuid: 'd186b98f-0ba5-4242-83a6-870b7c701ed6', name: 'Item_7' },
    { uuid: '178e602e-cd9c-4d10-a235-10441c414d86', name: 'Item_8' },
    { uuid: 'c8ebdfea-e113-4a4b-a6e4-7ffe527a1c56', name: 'Item_9' },
    { uuid: '1145bab3-13ce-4255-9505-1bf1d0451b67', name: 'Item_10' },
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