import React from 'react';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';
import FlareOutlinedIcon from '@mui/icons-material/FlareOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import BookmarkAddedOutlinedIcon from '@mui/icons-material/BookmarkAddedOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import TranslateIcon from '@mui/icons-material/Translate';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LogoDevOutlinedIcon from '@mui/icons-material/LogoDevOutlined';

import style from '../../styles/system/Icon.module.scss';

type IconProps = {
  name:
    | 'lightMode'
    | 'brightness4'
    | 'flare'
    | 'add'
    | 'edit'
    | 'delete'
    | 'arrowBack'
    | 'arrowForward'
    | 'arrowUp'
    | 'arrowDown'
    | 'check'
    | 'checkCircle'
    | 'dragIndicator'
    | 'close'
    | 'translate'
    | 'menu'
    | 'profile'
    | 'cart'
    | 'logo'
    | 'bookmarkAdded';
  color?: 'green' | 'white' | 'red' | 'yellow' | 'blue' | 'black';
  size?: 'small' | 'normal' | 'big' | 'huge';
  animate?: boolean;
  centred?: boolean;
  onClick?: () => void;
  tooltip?: string;
};

const iconComponents = {
  lightMode: LightModeOutlinedIcon,
  brightness4: Brightness4OutlinedIcon,
  flare: FlareOutlinedIcon,
  add: AddOutlinedIcon,
  edit: EditOutlinedIcon,
  delete: DeleteOutlineOutlinedIcon,
  arrowBack: KeyboardArrowLeftIcon,
  arrowForward: KeyboardArrowRightIcon,
  arrowDown: KeyboardArrowDownIcon,
  arrowUp: KeyboardArrowUpIcon,
  check: CheckOutlinedIcon,
  checkCircle: CheckCircleOutlineOutlinedIcon,
  bookmarkAdded: BookmarkAddedOutlinedIcon,
  dragIndicator: DragIndicatorIcon,
  close: CloseIcon,
  menu: MenuIcon,
  translate: TranslateIcon,
  profile: AccountCircleOutlinedIcon,
  cart: ShoppingCartOutlinedIcon,
  logo: LogoDevOutlinedIcon,
};

const Icon: React.FC<IconProps> = ({
  name,
  color,
  size = 'normal',
  animate = false,
  centred,
  onClick,
  tooltip,
}) => {
  const IconComponent = iconComponents[name];
  return (
    <IconComponent
      onClick={onClick}
      className={style['icon']}
      data-size={size}
      data-color={color}
      data-animate={animate}
      data-centred={centred}
    />
  );
};

export default Icon;
