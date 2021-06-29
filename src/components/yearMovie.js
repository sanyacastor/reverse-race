import React from "react";
import styled from "styled-components";
import Portal from "./portal.js";
import CrossButton from "./crossButton";

const Container = styled.section`
  display: "none";
  width: 100%;
  max-height: 100vh;
  background: var(--main-color);
  color: var(--secondary-color);
  padding: 20px 30px;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 19px;
  line-height: 23px;
  color: var(--secondary-color);
  overflow: auto;

  & .video {
    position: "absolute";
    top: 0;
    left: 0;
    border: "none";
    margin: 0 80px;
  }

  @media (max-width: 780px) {
    & .video {
      margin: 0;
    }
    /* padding: 54px 18px; */
    padding: 14px;
    /* padding-right: 41px; */
  }
`;

const PortalOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: black;
  top: 0;
  left: 0;
  z-index: 50;
  overflow: hidden;
`;

const ModalWindow = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: auto;
  display: flex;
  align-items: center;
`;

const YearMovie = ({ close, iframeData }) => {
  return (
    <Portal>
      <PortalOverlay>
        <ModalWindow>
          <Container>
            <CrossButton action={close} />

            <div
              className="video"
              style={{
                position: "relative",
                paddingBottom: "56.25%" /* 16:9 */,
                paddingTop: 25,
                height: 0,
              }}
            >
              <iframe
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  maxHeight: "640px",
                  maxWidth: "1024px",
                }}
                src={iframeData.src}
                title={iframeData.title}
                frameborder={iframeData.frameborder}
                allow={iframeData.allow}
                allowfullscreen={iframeData.allowfullscreen}
              ></iframe>
            </div>
          </Container>
        </ModalWindow>
      </PortalOverlay>
    </Portal>
  );
};

export default YearMovie;
