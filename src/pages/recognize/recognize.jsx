import React, { useState } from "react";
import './recognize.css';
import { Upload, Button, message, Spin } from "antd";
import { UploadOutlined } from '@ant-design/icons';

export const Recognize = () => {
    const [recognizing, setRecognizing] = useState(false);
    const [resAvailable, setResAvailable] = useState(false);
    const [recording, setRecording] = useState(false);
    const fromAudio = false;

    const onChangeUploadStatus = (info) => {
        setRecognizing(true);
        setTimeout(() => {
            setRecognizing(false);
            setResAvailable(true);
        }, 2000);
    }

    const afterUploadSucc = () => {
        message.success('上传成功');
        setRecognizing(false);
        setResAvailable(true);
    }

    const onClickBackToRecognize = () => {
        window.location.href = '/recognize';
    }

    const Record = () => {
        const getUserMicroPhone = async () => {
            const getUserMediaSucc = await navigator.mediaDevices.getUserMedia({audio: true});
            if (getUserMediaSucc) {
                message.info('正在录音');
                setRecording(true);
                setTimeout(() => {
                    getUserMediaSucc.getTracks().forEach(track => track.stop());
                    setRecording(false);
                    message.success('录音完成');
                    setRecognizing(true);
                    setTimeout(() => {
                        afterUploadSucc();
                    }, 3000);
                }, 5000);
            } else {
                message.error('获取录音权限失败！');
            }
        }
        return(<Button 
            disabled={recognizing} 
            onClick={getUserMicroPhone}>
                点击以开始录音
            </Button>)
    }
    return (
       resAvailable ?         
        <div className="recognize-result">
            识别成功！结果为：
            <div className="recognize-result-row">
                歌手名：{fromAudio ? 'mizuki' : 'Rihanna'}
            </div>
            <div className="recognize-result-row">
                歌曲名： {fromAudio ? 'Avid' : 'Lift me up'}
            </div>
            <Button type='default' onClick={onClickBackToRecognize}>
                返回识别页
            </Button>
        </div> 
        : 
    <Spin spinning={recognizing}>
    <div className="recognize-wrapper">
        <div className="recognize-text">
            识别
        </div>
        <div className="recognize-buttons">
        <div className="upload-button">
        <Upload
        onChange={onChangeUploadStatus}
        >
            <Button disabled={recording} icon={<UploadOutlined />}>点击上传音乐</Button>
        </Upload>
        </div>
        <div>
        <Record />
        </div>
        </div>
    </div>
    </Spin> )
}