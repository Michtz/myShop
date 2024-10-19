import Home from '../components/sections/Home';
import UsedTechnologies from '../components/sections/UsedTechnologies';
import FormExample from '../components/sections/FormExample';
import AccordionExample from '../components/sections/AccordionExample';
import DraggableListExample from '../components/sections/DndExample';
import ProductCardExample from '../components/sections/ProductCardExample';
import LoginExample from '../components/sections/LoginExample';
import { ComponentType } from 'react';
import { DraggableItem } from '../components/system/DraggableList';
import Shop from '../components/sections/Shop';

export interface SideDataProps {
  path: string;
  label: string;
  component: ComponentType;
}

// Data for the navigation
export const sides: Array<SideDataProps> = [
  { path: '/', label: 'home', component: Home },
  { path: '/shop', label: 'Shop', component: Shop },
  { path: '/usedTechnologies', label: 'usedTechnologies', component: UsedTechnologies },
  { path: '/form', label: 'formExample', component: FormExample },
  { path: '/accordion', label: 'accordion-example', component: AccordionExample },
  { path: '/dndList', label: 'dnd-example', component: DraggableListExample },
  { path: '/card', label: 'card-example', component: ProductCardExample },
  { path: '/login', label: 'login', component: LoginExample },
];


// Data for the draggable list
export const dndItems:Array<DraggableItem>= [
  { id: '1', name: 'Item_1' },
  { id: '2', name: 'Item_2' },
  { id: '3', name: 'Item_3' },
  { id: '4', name: 'Item_4' },
  { id: '5', name: 'Item_5' },
]

// Regex for a valid email
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;