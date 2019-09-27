import React from "react";
import M2J from "markdown-to-jsx";
import styled from "styled-components";

const screenSizes = {
  mobile: 769
};

function px2rem(px) {
  return px * 0.0625;
}

const H1 = styled.h1`
  color: black;
  text-align: left;
  /* font-family: "IBM Plex Sans", Arial, Helvetica, sans-serif; */
  font-family: "IBM Plex Mono", "Courier New", Courier, monospace;
  /* font-family: 'Manjari', Arial, Helvetica, sans-serif; */
  /* font-size: ${px2rem(30)}rem; */
  font-size: ${px2rem(45)}rem;

  font-weight: 700;
  margin-top: 4rem;
  margin-bottom: 4rem;
  text-transform: uppercase;
`;

const H2 = styled.h2`
  text-align: left;
  /* font-family: "IBM Plex Sans", Arial, Helvetica, sans-serif; */
  font-family: "Manjari", Arial, Helvetica, sans-serif;
  font-size: ${px2rem(20)}rem;
  font-weight: 700;
`;

const H3 = styled.h2`
  text-align: left;
  /* font-family: "IBM Plex Sans", Arial, Helvetica, sans-serif; */
  font-family: "Manjari", Arial, Helvetica, sans-serif;
  font-size: ${px2rem(20)}rem;
  font-weight: 700;
`;

const PP = styled.div`
  text-align: left;
  font-size: ${px2rem(22)}rem;
  /* font-size: 24px; */
  font-family: "IBM Plex Sans", Arial, Helvetica, sans-serif;
  /* font-family: "Manjari", Arial, Helvetica, sans-serif; */
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-weight: 300;

  line-height: 2.5rem;

  @media (max-width: ${screenSizes.mobile}px) {
    font-size: ${px2rem(18)}rem;
  }
`;

const Img = styled.img`
  /* max-height: 20vh; */
  width: 100%;
  height: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

// new stuf here

const Lululemon = styled.div`
  background: teal;
`;

const TwinImagesWrapper = styled.div`
  width: 100%;
  height: auto;
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: row;

  /* background: teal; */
`;

const Twin = styled.img`
  width: 49%;
  height: auto;
  margin-right: 2%;
`;

const TwinImages = props => (
  <TwinImagesWrapper>
    {/* {props.left && <div>hello</div>} */}
    {/* {props.right && <div>hello</div>} */}

    {props.left && <Twin alt={"test"} src={props.left} />}
    {props.right && <Twin alt={"test"} src={props.right} />}
  </TwinImagesWrapper>
);

// italic
const Subtext = styled.div`
  font-size: ${px2rem(18)}rem;
  font-family: "IBM Plex Sans", Arial, Helvetica, sans-serif;
  margin-top: 1rem;
  margin-bottom: 1rem;
  line-height: 2rem;
`;

const BulletPoints = styled.div`
  font-size: ${px2rem(20)}rem;
  font-family: "IBM Plex Sans", Arial, Helvetica, sans-serif;
  /* line-height: 0.8rem; */
  margin-left: -2.5rem;
`;

// const DividerWrapper = styled.div``;
// const Divider = () => <DividerWrapper>line man</DividerWrapper>;

const Divider = styled.hr`
  background-color: #fff;
  border-top: 2px dashed #8c8b8b;
`;

//

const VideoWrapper = styled.div`
  padding: 56.25% 0 0 0;
  position: relative;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
const StylediFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const ResponsiveVideo = props => (
  <VideoWrapper>
    <StylediFrame
      src={props.src + "?title=0&byline=0&portrait=0"}
      frameBorder="0"
      allow="autoplay; fullscreen"
      allowFullScreen
      title="video"
    />
  </VideoWrapper>
);

// bullet points
// video
// twin image
// subtitle

const MDJSX = props => (
  <M2J
    options={{
      overrides: {
        h1: H1,
        h2: H2,
        h3: H3,
        img: Img,
        p: PP,
        hr: Divider,
        // Lululemon,
        TwinImages,
        Subtext,
        BulletPoints,
        ResponsiveVideo
      },
      forceBlock: true
    }}
  >
    {props.children}
  </M2J>
);

export default MDJSX;
