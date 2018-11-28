import React, { Component } from 'react';
import { connect } from 'dva';
// import { Row, Col, Icon, Menu, Dropdown } from 'antd';
import GridContent from '@/components/PageHeaderWrapper/GridContent';

import Animate from 'rc-animate';
// import styles from './index.less';

@connect(({ chart, loading }) => ({
  chart,
  loading: loading.effects['animation/fetch'],
}))
class Animation extends Component {
  state = {
    show: true,
  };

  render() {
    const { show } = this.state;
    return (
      <GridContent>
        <Animate showProp="true" transitionName="fade-appear">
          {show ? (
            <div visible key="1">
              示例
            </div>
          ) : null}
        </Animate>
      </GridContent>
    );
  }
}

export default Animation;
