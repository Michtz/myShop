import React from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';
import style from '../../styles/system/dndList.module.scss';
import Icon from './Icon';

export interface DraggableItem {
  id: string;
  name: string;
}

interface DraggableListProps {
  items: Array<DraggableItem>;
  onReorder: (newOrder: Array<DraggableItem>) => void;
}

const DraggableList: React.FC<DraggableListProps> = ({ items, onReorder }) => {
  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const newItems:Array<DraggableItem> = Array.from(items);
    const [reorderedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, reorderedItem);
    onReorder(newItems);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {(provided) => (
          <ul
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={style['dndList-container']}
          >
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{
                      ...provided.draggableProps.style,
                      background: snapshot.isDragging ? '#f0f0f0' : 'white',
                      padding: '10px',
                      marginBottom: '8px',
                      borderRadius: '4px',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
                      cursor: 'pointer',
                    }}
                  >
                    <Icon name={'dragIndicator'} color={'black'} size={'small'} />
                    {item.name}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DraggableList;