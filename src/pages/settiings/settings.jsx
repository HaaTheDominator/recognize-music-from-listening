import { Button, Input, message } from "antd";
import React, { useState } from "react";
import './settings.css';

export const Settings = () => {
    const hostName = localStorage.getItem('hostName');
    const hostIp = localStorage.getItem('hostIp');
    const hostKey = localStorage.getItem('hostKey');

    const [hostNameState, setHostNameState] = useState(hostName);
    const [hostIpState, setHostIpState] = useState(hostIp);
    const [hostKeyState, setHostKeyState] = useState(hostKey);

    const onChangeHostName = (e) => {
        setHostNameState(e.target.value);
    }

    const onChangeHostIp = (e) => {
        setHostIpState(e.target.value);
    }

    const onChangeHostKey = (e) => {
        setHostKeyState(e.target.value);
    }

    const onClickRenewButton = () => {
        localStorage.setItem('hostName', hostNameState);
        localStorage.setItem('hostIp', hostIpState);
        localStorage.setItem('hostKey', hostKeyState);
        message.success('更新服务器信息成功');
    }

    return (
    <div className="setting-wrapper">
        <div className="setting-text">
            设置
        </div>
        <Input 
        addonBefore={'主机名'}
        value={hostNameState} 
        onChange={onChangeHostName} 
        placeholder="请输入主机名"/>
        <Input 
        addonBefore={'主机IP'}
        value={hostIpState} 
        onChange={onChangeHostIp} 
        placeholder="请输入主机IP" />
        <Input 
        addonBefore={'主机密钥'}
        value={hostKeyState} 
        onChange={onChangeHostKey} 
        placeholder="请输入主机密钥" />
        <div className="renew-button">
            <Button type='primary'onClick={onClickRenewButton} >更新</Button>
        </div>
    </div>
    )
}