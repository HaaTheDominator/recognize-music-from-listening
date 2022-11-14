import { Button } from "antd";
import React from "react";
import { Description } from "./components/desciprtion/description";
import UploadMusic from "./components/uploadMusic/uploadMusic";
import UploadPic from "./components/uploadPic/uploadPic";
import './upload.css';


export const Upload = () => {
    return (<div className="upload-wrapper">
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
        <Button type="primary" >点击上传</Button>
    </div>)
}