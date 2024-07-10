import React from 'react';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';
import FlareOutlinedIcon from '@mui/icons-material/FlareOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import BookmarkAddedOutlinedIcon from '@mui/icons-material/BookmarkAddedOutlined';
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
    | 'check'
    | 'checkCircle'
    | 'bookmarkAdded';
  color?: 'green' |'white' |'red'|'yellow';
  size?: 'small' | 'normal' | 'big' | 'huge';
  animate?: boolean;
  centred?: boolean;
};

const iconComponents = {
  lightMode: LightModeOutlinedIcon,
  brightness4: Brightness4OutlinedIcon,
  flare: FlareOutlinedIcon,
  add: AddOutlinedIcon,
  edit: EditOutlinedIcon,
  delete: DeleteOutlineOutlinedIcon,
  arrowBack: ArrowBackIosNewOutlinedIcon,
  arrowForward: ArrowForwardIosOutlinedIcon,
  check: CheckOutlinedIcon,
  checkCircle: CheckCircleOutlineOutlinedIcon,
  bookmarkAdded: BookmarkAddedOutlinedIcon,
};

const Icon: React.FC<IconProps> = ({ name, color, size = 'normal', animate = false, centred }) => {
  const IconComponent = iconComponents[name];
  return (
    <IconComponent
      className={style['icon']}
      data-size={size}
      data-color={color}
      data-animate={animate}
      data-centred={centred}
    />
  );
};

export default Icon;