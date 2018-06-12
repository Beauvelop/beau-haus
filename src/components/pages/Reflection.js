import React, { Component } from 'react';
import styled from 'styled-components';

import ShortTree from '../scene/trees/ShortTree';
import MediumTree from '../scene/trees/MediumTree';
import TallTree from '../scene/trees/TallTree';
import WaterBg from '../scene/water/WaterBg';
import WaterBody from '../scene/water/WaterBody';
import Shore from '../scene/water/Shore';
import MuteBtn from '../scene/MuteBtn';
import LogoTheme from '../scene/LogoTheme';

const ReflectionPageCompDiv = styled.div`
  background: fuchsia;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  color: #fff;
  display: grid;
  grid-template-columns: 25vw 50vw 25vw;
  grid-template-rows: 20vh 60vh 20vh;
  
  & > .grid-ctr {
    grid-column: 2;
    grid-row: 2;
    
    border: 2px solid navy;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);

    & > .ctr-row-top {
      grid-column: 1/4;
      grid-row: 1;
      border: 2px solid green;
    }
    & > .ctr-row-mid {
      grid-column: 1/4;
      grid-row: 2;
      border: 2px solid yellow;
    }
    & > .ctr-row-bot {
      grid-column: 1/4;
      grid-row: 3;
      border: 2px solid orangered;
    }
  }
`;

class Reflection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      init: 'state',
      profile: props.pageStyles
    };

   }

  render() {
    const { pageStyles, tree, water } = this.props.profile;
    const { fill } = this.props.profile.pageStyles.fill;

    return (
      <ReflectionPageCompDiv className="page reflection-container" style={pageStyles}>
        <div className="grid-ctr">
          <div className="ctr-row-top">
            <p className="q1">Learn fast and fix things.</p>
          </div>
          <div className="ctr-row-mid">
            <p className="q2">Learn fast and fix things.</p>
          </div>
          <div className="ctr-row-bot">
            <p className="q3">Learn fast and fix things.</p>
          </div>
        </div>
        <WaterBg {...water} />
        <WaterBody />
        <Shore />
        <LogoTheme themeFill={fill} />
        </ReflectionPageCompDiv>
      );
    }
  }
  // <MediumTree db={tree.medium} />
  // <TallTree db={tree.tall} />
  // <ShortTree db={tree.short} />
  // <MuteBtn />

export default Reflection;
/*

        <div className="page-Reflection">
          <img id="temp-img" src="./img/madcoding.gif" alt="woman typing on computer wagging her tongue." />

          <h1>
            <span>Under Construction...</span>
            <br />
            <br />
            Rome wasn't built in a day.<br />
            Neither was this site.
          </h1>
          <p>Your patience is appreciated.</p>
        </div>

        */
