import React, { Component } from 'react';
// import { connect } from 'dva';
import { Row, Col, Icon, Menu, Dropdown } from 'antd';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import BannerAnim from 'rc-banner-anim';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
import styles from './defined.less';

const { Element, Arrow, Thumb } = BannerAnim;
const BgElement = Element.BgElement;

class DefinedBanner extends Component {
  constructor() {
    super(...arguments);
    this.imgArray = [
      'https://zos.alipayobjects.com/rmsportal/hzPBTkqtFpLlWCi.jpg',
      'https://zos.alipayobjects.com/rmsportal/gGlUMYGEIvjDOOw.jpg',
    ];
    this.state = {
      intShow: 0,
      prevEnter: false,
      nextEnter: false,
      thumbEnter: false,
    };
    [
      'onChange',
      'prevEnter',
      'prevLeave',
      'nextEnter',
      'nextLeave',
      'onMouseEnter',
      'onMouseLeave',
    ].forEach(method => (this[method] = this[method].bind(this)));
  }

  onChange(type, int) {
    if (type === 'before') {
      this.setState({
        intShow: int,
      });
    }
  }

  getNextPrevNumber() {
    let nextInt = this.state.intShow + 1;
    let prevInt = this.state.intShow - 1;
    if (nextInt >= this.imgArray.length) {
      nextInt = 0;
    }
    if (prevInt < 0) {
      prevInt = this.imgArray.length - 1;
    }

    return [prevInt, nextInt];
  }

  prevEnter() {
    this.setState({
      prevEnter: true,
    });
  }

  prevLeave() {
    this.setState({
      prevEnter: false,
    });
  }

  nextEnter() {
    this.setState({
      nextEnter: true,
    });
  }

  nextLeave() {
    this.setState({
      nextEnter: false,
    });
  }

  onMouseEnter() {
    this.setState({
      thumbEnter: true,
    });
  }

  onMouseLeave() {
    this.setState({
      thumbEnter: false,
    });
  }

  render() {
    console.log('SS', this.state.prevEnter);
    const intArray = this.getNextPrevNumber();
    const thumbChildren = this.imgArray.map((img, i) => (
      <span key={i}>
        <i style={{ backgroundImage: `url(${img})` }} />
      </span>
    ));
    return (
      <GridContent>
        <BannerAnim
          onChange={this.onChange}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          prefixCls={styles.customArrowThumb}
        >
          <Element key="aaa" prefixCls={styles.bannerUserElem}>
            <BgElement
              key="bg"
              className="bg"
              style={{
                backgroundImage: `url(${this.imgArray[0]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
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
          <Element key="bbb" prefixCls={styles.bannerUserElem}>
            <BgElement
              key="bg"
              className="bg"
              style={{
                backgroundImage: `url(${this.imgArray[1]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
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
          <Arrow
            arrowType="prev"
            key="prev"
            prefixCls={styles.userArrow}
            component={TweenOne}
            onMouseEnter={this.prevEnter}
            onMouseLeave={this.prevLeave}
            animation={{ left: this.state.prevEnter ? 0 : -120 }}
          >
            <div className={styles.arrow} />
            <TweenOneGroup
              enter={{ opacity: 0, type: 'from' }}
              leave={{ opacity: 0 }}
              appear={false}
              className={styles.imgWrapper}
              component="ul"
            >
              <li
                style={{ backgroundImage: `url(${this.imgArray[intArray[0]]})` }}
                key={intArray[0]}
              />
            </TweenOneGroup>
          </Arrow>
          <Arrow
            arrowType="next"
            key="next"
            prefixCls={styles.userArrow}
            component={TweenOne}
            onMouseEnter={this.nextEnter}
            onMouseLeave={this.nextLeave}
            animation={{ right: this.state.nextEnter ? 0 : -120 }}
          >
            <div className={styles.arrow} />
            <TweenOneGroup
              enter={{ opacity: 0, type: 'from' }}
              leave={{ opacity: 0 }}
              appear={false}
              className={styles.imgWrapper}
              component="ul"
            >
              <li
                style={{ backgroundImage: `url(${this.imgArray[intArray[1]]})` }}
                key={intArray[1]}
              />
            </TweenOneGroup>
          </Arrow>
          <Thumb
            prefixCls={styles.userThumb}
            key="thumb"
            component={TweenOne}
            animation={{ bottom: this.state.thumbEnter ? 0 : -70 }}
          >
            {thumbChildren}
          </Thumb>
        </BannerAnim>
      </GridContent>
    );
  }
}
export default DefinedBanner;
