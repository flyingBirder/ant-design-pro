import React, { Component } from 'react';
import { Chart, Axis, Tooltip, Geom } from 'bizcharts';
import Debounce from 'lodash-decorators/debounce';
import Bind from 'lodash-decorators/bind';
import autoHeight from '../autoHeight';
import styles from '../index.less';

@autoHeight()
class Bar extends Component {
  state = {
    autoHideXLabels: false,
  };

  componentDidMount() {
    window.addEventListener('resize', this.resize, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  handleRoot = n => {
    this.root = n;
  };

  handleRef = n => {
    this.node = n;
  };

  @Bind()
  @Debounce(400)
  resize() {
    if (!this.node) {
      return;
    }
    const canvasWidth = this.node.parentNode.clientWidth;
    const { data = [], autoLabel = true } = this.props;
    if (!autoLabel) {
      return;
    }
    const minWidth = data.length * 30;
    const { autoHideXLabels } = this.state;

    if (canvasWidth <= minWidth) {
      if (!autoHideXLabels) {
        this.setState({
          autoHideXLabels: true,
        });
      }
    } else if (autoHideXLabels) {
      this.setState({
        autoHideXLabels: false,
      });
    }
  }

  render() {
    const {
      height,
      title,
      forceFit = true,
      data,
      color = 'rgba(24, 144, 255, 0.85)',
      padding,
    } = this.props;

    const { autoHideXLabels } = this.state;

    const scale = {
      x: {
        type: 'cat',
        alias: '坐标轴标题名称-月份',
      },
      y: {
        min: 0,
        alias: '坐标轴标题名称-销售额',
        // max: 10000,
        // ticks: [100, 1000, 2000, 3000],
        // tickInterval: 1000,
        // tickCount: 10,
      },
    };

    const tooltip = [
      'x*y',
      (x, y) => ({
        name: x,
        value: y,
      }),
    ];
    const obj = {
      fill: '#cecede',
      stroke: '1px solid dedede',
    };

    const titleConfig = {
      offset: 52,
      textStyle: {
        fontSize: '16',
        textAlign: 'center',
        fill: 'red',
        // fontWeight: 'bold',
        // rotate: 90,
      },
      position: 'center',
    };
    const lineConfig = {
      stroke: 'green',
      fill: 'green',
      // lineDash: [2, 2, 2],
      lineWidth: 1,
    };
    const tickLineConfig = {
      lineWidth: 2,
      stroke: 'red',
      length: 6,
    };
    const labelConfig = {
      // offset: 20,
      textStyle: {
        textAlign: 'end',
        fill: 'pink',
        fontSize: '12',
        // fontWeight: 'bold',
        // rotate: 0,
        topBaseline: 'middle',
      },
      autoRotate: true,
      // formatter(text, item, index) {
      //   let arr = text + '00';
      //   return arr;
      // },
    };

    return (
      <div className={styles.chart} style={{ height }} ref={this.handleRoot}>
        <div ref={this.handleRef}>
          {title && <h4 style={{ marginBottom: 20 }}>{title}</h4>}
          <Chart
            scale={scale}
            height={title ? height - 41 : height}
            forceFit={forceFit}
            data={data}
            padding={padding || 'auto'}
            placeholder={
              <div style={{ position: 'relative', top: '48%', textAlign: 'center' }}>暂无数据</div>
            }
            onGetG2Instance={chartIns => {
              chartIns.downloadImage();
            }}
          >
            <Axis
              name="x"
              title={titleConfig}
              // label={autoHideXLabels ? false : {}}
              label={labelConfig}
              tickLine={autoHideXLabels ? false : {}}
              position="bottom"
              line={lineConfig}
            />
            <Axis
              name="y"
              min={0}
              position="left"
              title={titleConfig}
              line={lineConfig}
              tickLine={tickLineConfig}
              label={labelConfig}
            />
            <Tooltip showTitle={false} crosshairs={false} />
            <Geom type="interval" position="x*y" color={color} tooltip={tooltip} />
          </Chart>
        </div>
      </div>
    );
  }
}

export default Bar;
