import React, { Component } from 'react';
// import { connect } from 'dva';
import { Row, Col, Icon, Menu, Dropdown } from 'antd';
import GridContent from '@/components/PageHeaderWrapper/GridContent';

import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
import styles from './index.less';

const BgElement = Element.BgElement;

class Animation extends Component {
  state = {};

  render() {
    const formItemLayout = {
      xs: {
        span: 12,
        offset: 6,
      },
      sm: {
        span: 12,
        offset: 6,
      },
      lg: {
        span: 12,
        offset: 6,
      },
    };
    return (
      <GridContent>
        <Row>
          <Col span={12} offset={6} {...formItemLayout}>
            <BannerAnim prefixCls={styles.bannerUser} autoPlay>
              <Element prefixCls={styles.bannerUserEelem} key="0">
                <BgElement
                  key="bg"
                  className="bg"
                  style={{
                    background: '#364D79',
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    overflow: 'hidden',
                  }}
                />

                <TweenOne
                  className={styles.bannerUserTitle}
                  animation={{ y: 30, opacity: 0, type: 'from' }}
                >
                  Ant Motion Banner
                </TweenOne>

                <TweenOne
                  className={styles.bannerUserText}
                  animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
                >
                  The Fast Way Use Animation In React
                </TweenOne>
              </Element>

              <Element prefixCls={styles.bannerUserEelem} key="1">
                <BgElement
                  key="bg"
                  style={{
                    background: '#64CBCC',
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    overflow: 'hidden',
                  }}
                />

                <TweenOne
                  className={styles.bannerUserTitle}
                  animation={{ y: 30, opacity: 0, type: 'from' }}
                >
                  Ant Motion Banner
                </TweenOne>

                <TweenOne
                  className={styles.bannerUserText}
                  animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
                >
                  The Fast Way Use Animation In React
                </TweenOne>
              </Element>
            </BannerAnim>
          </Col>
        </Row>
      </GridContent>
    );
  }
}
export default Animation;
