import React from "react";
import styled from "styled-components";
import JustRect from "./UI_parts/JustRect";

const PageWrapper = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MonoText = styled.div`
  font-family: "IBM Plex Mono", "Courier New", Courier, monospace;
  font-weight: 700;
  font-size: 2.815rem;
  text-align: center;
  color: ${props => (props.isHovered ? `white` : `black`)};
`;

const CenterPiece = props => (
  <div>
    <MonoText {...props}>-------</MonoText>
    <MonoText {...props}>KYLIN--</MonoText>
    <MonoText {...props}>DESIGNS</MonoText>
    <MonoText {...props}>-------</MonoText>
    <MonoText {...props}>WORKS</MonoText>
    <MonoText {...props}>ABOUT</MonoText>
    <MonoText {...props}>-------</MonoText>

    {/* <div>maybe social links</div> */}
  </div>
);

class Greetings extends React.Component {
  state = {
    isHovered: false
  };
  handleHovered = () => {
    this.setState({ isHovered: !this.state.isHovered });
    console.log(this.state);
  };
  render() {
    return (
      <PageWrapper id="main">
        <JustRect isHovered={this.state.isHovered} />
        <div
          onMouseEnter={this.handleHovered}
          onMouseLeave={this.handleHovered}
        >
          <CenterPiece isHovered={this.state.isHovered} />
        </div>
      </PageWrapper>
    );
  }
}

export { Greetings };
