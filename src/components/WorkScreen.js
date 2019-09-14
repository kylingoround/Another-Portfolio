import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

// https://media1.tenor.com/images/5a934e84f67d2a61a118ec95b1d6cb74/tenor.gif?itemid=11312357
function px2rem(px) {
  return px * 0.0625;
}

const SectionWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CenterFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const HorizentalFlex = styled.div`
  display: flex;
  flex-direction: row;
`;

const MenuWrapper = styled.div`
  width: ${px2rem(422)}rem;
  height: ${px2rem(386)}rem;
  margin-right: ${px2rem(60)}rem;
  border: solid 8px black;
  position: relative;
`;

const MenuOptionWrapper = styled.div`
  width: ${px2rem(200)}rem;
  overflow: visible;
  white-space: nowrap;
`;
const ScreenWrapper = styled.div`
  width: ${px2rem(550)}rem;
  height: ${px2rem(400)}rem;
  background: yellow;
`;

const Img = styled.img`
  width: ${px2rem(550)}rem;
  height: ${px2rem(300)}rem;
  border: solid 8px black;
`;

const MenuTitle = styled.div`
  position: absolute;
  top: -${px2rem(40)}rem;
  left: ${px2rem(45)}rem;
  font-family: "IBM Plex Mono", "Courier New", Courier, monospace;
  font-weight: 700;
  font-size: ${px2rem(60)}rem;
  color: #613fe3;
`;
const MenuText = styled.div`
  font-family: Montserrat, Helvetica, sans-serif;
  font-weight: 700;
  font-size: ${px2rem(45)}rem;
  text-transform: uppercase;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
const ScreenTitle = styled.div`
  font-family: "IBM Plex Mono", "Courier New", Courier, monospace;
  font-size: ${px2rem(35)}rem;
  margin-top: 0.4rem;
  font-weight: 700;
`;
const ScreenSubtitle = styled.div`
  font-family: "IBM Plex Mono", "Courier New", Courier, monospace;
  font-size: ${px2rem(35)}rem;
`;

const MenuGroup = props => (
  <MenuWrapper>
    <MenuTitle>MENU</MenuTitle>

    <CenterFlex>
      <MenuOptionWrapper>
        <MenuText
          onMouseEnter={() => props.handleMouseEnter("cyber")}
          onMouseLeave={props.handleMouseLeave}
          // onClick={() => props.handleMouseClick("cyber")}
        >
          <StyledLink to={"/cyber"}>
            {props.currentProject === "cyber" ? "> Cyber" : "Cyber"}
          </StyledLink>
        </MenuText>
        <MenuText
          onMouseEnter={() => props.handleMouseEnter("pipo")}
          onMouseLeave={props.handleMouseLeave}
          // onClick={() => props.handleMouseClick("pipo")}
        >
          {props.currentProject === "pipo" ? "> PIPO" : "PIPO"}
        </MenuText>
        <MenuText
          onMouseEnter={() => props.handleMouseEnter("magicam")}
          onMouseLeave={props.handleMouseLeave}
          // onClick={() => props.handleMouseClick("magicam")}
        >
          {props.currentProject === "magicam" ? "> magicam" : "magicam"}
        </MenuText>
        <MenuText
          onMouseEnter={() => props.handleMouseEnter("border")}
          onMouseLeave={props.handleMouseLeave}
          // onClick={() => props.handleMouseClick("border")}
        >
          {props.currentProject === "border" ? "> border" : "border"}
        </MenuText>
      </MenuOptionWrapper>
    </CenterFlex>
  </MenuWrapper>
);

const ScreenGroup = props => {
  const { projects, currentProject } = props;
  let data;
  projects[currentProject]
    ? (data = projects[currentProject])
    : (data = projects["default"]);
  console.log(data);

  const { title, subtitle, thumbnail } = data;

  return (
    <ScreenWrapper>
      <Img src={thumbnail} />
      <ScreenTitle>{title}</ScreenTitle>
      <ScreenSubtitle>{subtitle}</ScreenSubtitle>
    </ScreenWrapper>
  );
};

class WorkScreen extends React.Component {
  state = {
    projects: {
      default: {
        title: "Select a project.",
        subtitle: ["*"],
        thumbnail:
          "https://media1.tenor.com/images/5a934e84f67d2a61a118ec95b1d6cb74/tenor.gif?itemid=11312357"
      },
      cyber: {
        title: "Design a humane dashboard",
        subtitle: ["product", "ui / ux", "data viz"],
        thumbnail: ""
      },
      pipo: {
        title: "Event Sharing made Easy",
        subtitle: ["mobile design", "product", "ui / ux"],
        thumbnail: ""
      },
      // magicam: {
      //   title: "Event Sharing made Easy",
      //   subtitle: ["mobile design", "product", "ui / ux"],
      //   thumbnail: ""
      // },
      border: {
        title: "Design a humane dashboard",
        subtitle: "***",
        thumbnail: ""
      }
    },
    currentProject: "default"
  };
  handleMouseEnter = d => this.setState({ currentProject: d });
  handleMouseLeave = () => this.setState({ currentProject: "default" });
  handleMouseClick = d => this.setState({ currentProject: d });
  componentDidUpdate() {}
  render() {
    const { projects, currentProject } = this.state;
    return (
      <SectionWrapper>
        <HorizentalFlex>
          <MenuGroup
            handleMouseEnter={this.handleMouseEnter}
            handleMouseLeave={this.handleMouseLeave}
            handleMouseClick={this.handleMouseClick}
            currentProject={currentProject}
          />
          <ScreenGroup currentProject={currentProject} projects={projects} />
        </HorizentalFlex>
      </SectionWrapper>
    );
  }
}

export { WorkScreen };
