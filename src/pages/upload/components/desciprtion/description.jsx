import React from 'react';
import { Input } from 'antd';
import './description.css';

export const Description = () => {
  return (
    <div className='description-wrapper'>
    <div className='song-name'>
    <Input
      placeholder="请输入歌曲名"
    />
    </div>
    <div className='artist-name'>
    <Input
      placeholder="请输入歌手姓名"
    />
        </div>
    </div>
  );
}