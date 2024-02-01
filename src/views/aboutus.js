import React from 'react';
import styled from 'styled-components';

const CvContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 70px;
  margin-top: 60px;
`;

const ScrollableBox = styled.div`
  max-height: 600px; /* Adjust the max height as needed */
  overflow-y: auto;
  text-align: center;
  width: 60%; /* Adjust the width to make the boxes bigger */
  margin: 0 10px;
`;

const DownloadButton = styled.button`
  background-color: rgb(127, 129, 136);
  border: none;
  color: white;
  padding: 20px 30px;
  cursor: pointer;
  font-size: 20px;
  margin-top: 20px;
  text-decoration: none;

  &:hover {
    background-color: rgb(0, 0, 0);
  }
`;

const AboutUs = () => {
  return (
    <CvContainer>
      <ScrollableBox>
        <img className="img-fluid" src="https://thisresumedoesnotexist.com/data/elon-musk/resume.png" alt="CV 1" />
        <DownloadButton>
          <a href="https://zahrahassan14.github.io/portfolio/">Github link</a>
        </DownloadButton>
      </ScrollableBox>
      <ScrollableBox>
        <img className="img-fluid" src="https://www.my-resume-templates.com/wp-content/uploads/2023/12/personal-resume-example-254.jpg" alt="CV 2" />
        <DownloadButton>
          <a href="https://hiraali22.github.io/hira-portfolio/">Github link</a>
        </DownloadButton>
      </ScrollableBox>
    </CvContainer>
  );
};

export default AboutUs;
