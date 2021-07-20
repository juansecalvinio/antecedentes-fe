import React from 'react'
import { UserWrapper } from './styled';
import { Avatar, Tooltip } from 'antd';

const User = ({ user }) => {
    return (
        <UserWrapper>
            <Tooltip title={user.email}>
                <Avatar src={user.picture || ""} style={{ backgroundColor: '#ffbf00' }}>{!user.picture ? user.name.charAt(0) : ""}</Avatar>
            </Tooltip>
        </UserWrapper>
    )
}

export default User;
