import React, { Component } from "react";
import {
  DivWithImageBG,
  BigTitle,
  TextWrapper,
  SubtitleText,
  SubtitleWrapper,
  SolidLine,
  StyledLink,
  FooterWRapper,
  DarkMe,
  FlexColumnMe,
  EachNavOption,
  MainOption,
  JustBlack
} from "../components/UI_parts/projects/projects";

import MDJSX from "../util/MDJSXLoader";

class Test extends Component {
  state = { md: "# I'm loading man" };
  componentDidMount() {
    fetch("/assets/markdowns/hamsa.md")
      .then(res => res.text())
      // .then(t => console.log(t));
      .then(t => this.setState({ md: t }));
  }
  render() {
    return (
      <>
        <DivWithImageBG>
          <BigTitle>Event sharing made easy</BigTitle>
        </DivWithImageBG>

        <TextWrapper>
          <SubtitleWrapper>
            <SolidLine />
            <SubtitleText>
              Kickstarting a lightweight event-hosting and event-discovering App
              for Young people in NYC.
            </SubtitleText>
            <SolidLine />
          </SubtitleWrapper>
          <MDJSX>{this.state.md}</MDJSX>
          {/* <MDJSX>{process.env.PUBLIC_URL + "/assets/markdowns/hamsa.md"}</MDJSX> */}
        </TextWrapper>

        {/* <ProjectFooter /> */}
      </>
    );
  }
}

export { Test };
