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
  color?: string;
  size?: 'small' | 'medium' | 'large' | 'huge';
  animate?: boolean;
};

const Icon: React.FC<IconProps> = ({
  name,
  color,
  size = 'medium',
  animate = false,
}) => {
  let icon = null;

  switch (name) {
    case 'lightMode':
      icon = (
        <LightModeOutlinedIcon
          className={style['icon']}
          data-size={size}
          data-color={color}
          data-animate={animate}
        />
      );
      break;
    case 'brightness4':
      icon = (
        <Brightness4OutlinedIcon
          className={style['icon']}
          data-size={size}
          data-color={color}
          data-animate={animate}
        />
      );
      break;
    case 'flare':
      icon = (
        <FlareOutlinedIcon
          className={style['icon']}
          data-size={size}
          data-color={color}
          data-animate={animate}
        />
      );
      break;
    case 'add':
      icon = (
        <AddOutlinedIcon
          className={style['icon']}
          data-size={size}
          data-color={color}
          data-animate={animate}
        />
      );
      break;
    case 'edit':
      icon = (
        <EditOutlinedIcon
          className={style['icon']}
          data-size={size}
          data-color={color}
          data-animate={animate}
        />
      );
      break;
    case 'delete':
      icon = (
        <DeleteOutlineOutlinedIcon
          className={style['icon']}
          data-size={size}
          data-color={color}
          data-animate={animate}
        />
      );
      break;
    case 'arrowBack':
      icon = (
        <ArrowBackIosNewOutlinedIcon
          className={style['icon']}
          data-size={size}
          data-color={color}
          data-animate={animate}
        />
      );
      break;
    case 'arrowForward':
      icon = (
        <ArrowForwardIosOutlinedIcon
          className={style['icon']}
          data-size={size}
          data-color={color}
          data-animate={animate}
        />
      );
      break;
    case 'check':
      icon = (
        <CheckOutlinedIcon
          className={style['icon']}
          data-size={size}
          data-color={color}
          data-animate={animate}
        />
      );
      break;
    case 'checkCircle':
      icon = (
        <CheckCircleOutlineOutlinedIcon
          className={style['icon']}
          data-size={size}
          data-color={color}
          data-animate={animate}
        />
      );
      break;
    case 'bookmarkAdded':
      icon = (
        <BookmarkAddedOutlinedIcon
          className={style['icon']}
          data-size={size}
          data-color={color}
          data-animate={animate}
        />
      );
      break;
    default:
      break;
  }

  return icon;
};

export default Icon;
