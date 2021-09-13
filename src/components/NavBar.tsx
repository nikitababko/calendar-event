import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Row, Menu } from 'antd';

import { RouteNames } from '../routes';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const NavBar: FC = () => {
  const { isAuth, user } = useTypedSelector((state) => state.auth);
  const { logout } = useActions();

  const router = useHistory();

  return (
    <div>
      <Layout.Header>
        <Row justify="end">
          {isAuth ? (
            <>
              <div style={{ color: '#fff' }}>{user.username}</div>
              <Menu theme="dark" mode="horizontal" selectable={false}>
                <Menu.Item onClick={() => logout()} key={1}>
                  Logout
                </Menu.Item>
              </Menu>
            </>
          ) : (
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item onClick={() => router.push(RouteNames.LOGIN)} key={2}>
                Login
              </Menu.Item>
            </Menu>
          )}
        </Row>
      </Layout.Header>
    </div>
  );
};

export default NavBar;
