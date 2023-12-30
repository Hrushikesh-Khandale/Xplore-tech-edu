import React from "react";

import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from "mdb-react-ui-kit";

const Footers = () => {
  return (
    <>
      <MDBFooter className="bg-dark text-center text-white">
        <MDBContainer className="p-4 pb-0">
          <section className="mb-4">
            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="https://twitter.com/hrushiHK"
              role="button"
            >
              <MDBIcon fab icon="twitter" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="khandalehrushikesh@gmail.com"
              role="button"
            >
              <MDBIcon fab icon="google" />
            </MDBBtn>
            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="https://www.instagram.com/h.r.k_._/"
              role="button"
            >
              <MDBIcon fab icon="instagram" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="https://www.linkedin.com/in/hrushikesh-khandale-76b82b196/"
              role="button"
            >
              <MDBIcon fab icon="linkedin-in" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="https://github.com/Hrushikesh-Khandale"
              role="button"
            >
              <MDBIcon fab icon="github" />
            </MDBBtn>
          </section>
        </MDBContainer>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2024 Copyright : Hrushikesh Khandale
          {/* 
          <a className="text-white" href="https://mdbootstrap.com/">
            Xplore-tech-edu
          </a> */}
        </div>
      </MDBFooter>
    </>
  );
};

export default Footers;
