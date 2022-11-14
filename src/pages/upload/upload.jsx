import { Button, message, Spin } from "antd";
import React, { useState } from "react";
import { Description } from "./components/desciprtion/description";
import UploadMusic from "./components/uploadMusic/uploadMusic";
import UploadPic from "./components/uploadPic/uploadPic";
import './upload.css';


export const Upload = () => {
    const [uploading, setUploading] = useState(false);

    const onClickUpload = () => {
        if (!uploading) {
            setUploading(true);
            setTimeout(() => {
                setUploading(false);
                message.success('上传成功！');
            }, 3000)
        }
    }

    return (
<div>
    <Spin spinning={uploading}>
        <div className="upload-wrapper">
            <div className="upload-text">
            上传页
            </div>
            <div className="upload-pic">
                <UploadPic />
            </div>
            <div className="upload-music">
                <UploadMusic />
            </div>
            <Description />
            <Button type="primary" onClick={onClickUpload}>点击上传</Button>
        </div>
    </Spin>
</div>)
}