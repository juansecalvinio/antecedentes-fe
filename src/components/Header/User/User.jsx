import React from 'react'
import { UserWrapper } from './styled';
import { Avatar, Tooltip } from 'antd';

const User = ({ user }) => {
    return (
        <UserWrapper>
            <Tooltip title={user.email}>
                <Avatar style={{ backgroundColor: '#ffbf00' }}>{user.name.charAt(0)}</Avatar>
            </Tooltip>
        </UserWrapper>
    )
}

export default User;
