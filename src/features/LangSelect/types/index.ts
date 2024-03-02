import { Dispatch, SetStateAction } from 'react';

export interface IProps {
  selected: string;
  onSelect: Dispatch<SetStateAction<string>>;
}

export interface ILangItem {
  value: string;
  title: string;
}
