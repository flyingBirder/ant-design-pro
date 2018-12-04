import React, { Component } from 'react';
import { Parallax, OverPack } from 'rc-scroll-anim';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';

import styles from './index.less';

class ScrollAnim extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <div style={{ height: '500px' }}>gggggggggggggggggggggg</div>
        {/* 随滚动播放动画 */}
        <Parallax
          animation={{ x: 0 }}
          style={{ transform: 'translateX(-100px)', margin: '10px auto' }}
          className="code-box-shape"
        />
        <Parallax
          animation={{ scale: 1 }}
          style={{ transform: 'scale(0)', margin: '10px auto' }}
          className="code-box-shape"
        />
        <Parallax
          animation={{ rotate: 360 }}
          style={{ margin: '10px auto' }}
          className="code-box-shape"
        />

        <div style={{ height: '200px' }}>gggggggggggggggggggggg</div>

        {/* 自定义 playScale，在屏幕中间开始播放，到 80％ 结束动画 */}
        <div>
          <Parallax
            animation={{ x: 0, opacity: 1, playScale: [0.5, 0.8] }}
            style={{ transform: 'translateX(-100px)', opacity: 0 }}
            className="code-box-shape"
          />
        </div>

        <div style={{ height: '200px' }}>gggggggggggggggggggggg</div>
        {/* parallax 的时间轴动画--可配置多个动画，然后再配合 playScale 完成滚动动画 */}

        <div>
          <Parallax
            animation={[
              { x: 0, opacity: 1, playScale: [0, 0.2] },
              { y: 100, playScale: [0, 0.3] },
              { blur: '10px', playScale: [0, 0.5] },
            ]}
            style={{ transform: 'translateX(-100px)', filter: 'blur(0px)', opacity: 0 }}
            className="code-box-shape"
          />
        </div>

        <div>
          <OverPack style={{ overflow: 'hidden', height: 200 }}>
            <TweenOne
              key="0"
              animation={{ opacity: 1 }}
              className="code-box-shape"
              style={{ opacity: 0, marginBottom: 10 }}
            />
            <QueueAnim
              key="queue"
              leaveReverse
              style={{ float: 'left', position: 'relative', left: '50%', marginLeft: -165 }}
            >
              <div key="a" className="code-box-shape queue-anim-demo" />
              <div key="b" className="code-box-shape queue-anim-demo" />
              <div key="c" className="code-box-shape queue-anim-demo" />
              <div key="d" className="code-box-shape queue-anim-demo" />
              <div key="e" className="code-box-shape queue-anim-demo" />
              <div key="f" className="code-box-shape queue-anim-demo" />
            </QueueAnim>
          </OverPack>
        </div>
      </div>
    );
  }
}
export default ScrollAnim;
