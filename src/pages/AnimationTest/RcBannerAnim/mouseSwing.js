import React, { Component } from 'react';
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
import styles from './mouseSwing.less';

const BgElement = Element.BgElement;

class MouseSwing extends Component {
  constructor() {
    super(...arguments);
    this.imgArray = [
      'https://zos.alipayobjects.com/rmsportal/hzPBTkqtFpLlWCi.jpg',
      'https://zos.alipayobjects.com/rmsportal/gGlUMYGEIvjDOOw.jpg',
    ];
  }

  render() {
    return (
      <BannerAnim prefixCls="banner-user">
        <Element
          key="aaa"
          prefixCls="banner-user-elem"
          followParallax={{
            delay: 1000,
            data: [
              { id: 'bg', value: 20, bgPosition: '50%', type: ['backgroundPositionX'] },
              { id: 'title', value: 50, type: 'x' },
              { id: 'content', value: -30, type: 'x' },
            ],
          }}
        >
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
            id="bg"
          />
          <TweenOne
            className="banner-user-title"
            animation={{ y: 30, opacity: 0, type: 'from' }}
            id="title"
          >
            Ant Motion Banner
          </TweenOne>
          <TweenOne
            className="banner-user-text"
            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
            id="content"
          >
            The Fast Way Use Animation In React
          </TweenOne>
        </Element>
        <Element
          key="bbb"
          prefixCls="banner-user-elem"
          followParallax={{
            delay: 1000,
            data: [
              { id: 'bg', value: 20, bgPosition: '50%', type: ['backgroundPositionY'] },
              { id: 'title', value: 50, type: 'y' },
              { id: 'content', value: -30, type: 'y' },
            ],
          }}
        >
          <BgElement
            key="bg"
            className="bg"
            id="bg"
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
            className="banner-user-title"
            animation={{ y: 30, opacity: 0, type: 'from' }}
            id="title"
          >
            Ant Motion Banner
          </TweenOne>
          <TweenOne
            id="content"
            className="banner-user-text"
            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
          >
            The Fast Way Use Animation In React
          </TweenOne>
        </Element>
      </BannerAnim>
    );
  }
}

export default MouseSwing;
