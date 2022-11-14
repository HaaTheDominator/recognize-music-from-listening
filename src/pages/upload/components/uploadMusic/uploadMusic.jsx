import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import React from 'react';

const props = {
  name: 'file',
  action: 'localhost:8080/upload',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
  },
};

const UploadMusic = () => (
  <Upload {...props}>
    <Button icon={<UploadOutlined />}>点击上传音乐</Button>
  </Upload>
);

export default UploadMusic;