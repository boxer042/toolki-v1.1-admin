import * as React from 'react';
import { FiMenu, FiSearch } from 'react-icons/fi';
import Button from '../components/Button';

export interface IDashboardPageProps {}

export default function DashboardPage(props: IDashboardPageProps) {
  return (
    <>
      <br />
      <Button shape="round">
        <FiSearch />
      </Button>
      <Button shape="round" size="large">
        <FiSearch />
      </Button>
      <Button size="large">Default Large</Button>
      <div style={{ marginTop: '1rem' }}>
        <Button size="max">Default Max</Button>
      </div>
      <div style={{ marginTop: '1rem', display: 'flex' }}>
        <Button>
          <FiMenu />
          메뉴
        </Button>
        <Button>Default Medium</Button>
        <br />
        dd
        <br />
        dd
        <br />d
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />d
        <br />
        <br />d
        <br />
        <br />
        <br />1
        <br />
        <br />2
        <br />3
        <br />4
        <br />5
        <br />6
        <br />
        <br />7
        <br />
        <br />
        <br />
        <br />1
      </div>
    </>
  );
}

// 2rem = 32px
// 2.625rem = 42px
// 3rem = 48px
// 1px solid #DDDDDD !important
