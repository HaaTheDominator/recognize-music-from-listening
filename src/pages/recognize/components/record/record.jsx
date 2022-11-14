import { Button, message } from "antd";
import React from "react";

export const Record = () => {
    const getUserMicroPhone = async () => {
        const getUserMediaSucc = await navigator.mediaDevices.getUserMedia({audio: true});
        if (getUserMediaSucc) {
            console.log(getUserMediaSucc);
            console.log('tracks are', getUserMediaSucc.getTracks());
            message.success('正在录音');
            setTimeout(() => {
                getUserMediaSucc.getTracks().forEach(track => track.stop());
                message.success('录音完成');
            }, 5000);
        } else {
            message.error('获取录音权限失败！');
        }
    }
    return(<Button onClick={getUserMicroPhone}>点击以开始录音</Button>)
}