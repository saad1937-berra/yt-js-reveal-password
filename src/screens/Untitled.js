import React, { Component } from "react";
import styled, { css } from "styled-components";
import CupertinoButtonGrey3 from "../components/CupertinoButtonGrey3";
import CupertinoButtonGrey2 from "../components/CupertinoButtonGrey2";
import CupertinoButtonGrey1 from "../components/CupertinoButtonGrey1";
import CupertinoButtonGrey from "../components/CupertinoButtonGrey";
import CupertinoButtonWhiteTextColor from "../components/CupertinoButtonWhiteTextColor";
import CupertinoButtonWhiteTextColor1 from "../components/CupertinoButtonWhiteTextColor1";
import CupertinoButtonWhiteTextColor2 from "../components/CupertinoButtonWhiteTextColor2";

function Untitled(props) {
  return (
    <Container>
      <Rect>
        <ImageRow>
          <Image src={require("../assets/images/Group_1a.png")}></Image>
          <Image2 src={require("../assets/images/Startw_(1).png")}></Image2>
          <CupertinoButtonGrey3
            style={{
              height: 25,
              width: 52,
              backgroundColor: "rgba(15,15, 15,0)",
              marginLeft: 643,
              marginTop: 13
            }}
          ></CupertinoButtonGrey3>
          <CupertinoButtonGrey2
            style={{
              height: 25,
              width: 83,
              backgroundColor: "rgba(15,15, 15,0)",
              marginLeft: 7,
              marginTop: 13
            }}
          ></CupertinoButtonGrey2>
          <CupertinoButtonGrey1
            style={{
              height: 25,
              width: 82,
              backgroundColor: "rgba(15,15, 15,0)",
              marginLeft: 17,
              marginTop: 13
            }}
          ></CupertinoButtonGrey1>
          <CupertinoButtonGrey
            style={{
              height: 25,
              width: 78,
              backgroundColor: "rgba(15,15, 15,0)",
              marginLeft: 18,
              marginTop: 13
            }}
          ></CupertinoButtonGrey>
        </ImageRow>
        <WelcomeColumnRow>
          <WelcomeColumn>
            <Welcome>WELCOME</Welcome>
            <LoremIpsum>Lorem ipsum, dolor sit amet consectetur</LoremIpsum>
            <LoremIpsum2Stack>
              <LoremIpsum2></LoremIpsum2>
              <LoremIpsum3>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos
                error ipsum, voluptate culpa nesciunt delectus iste?
              </LoremIpsum3>
            </LoremIpsum2Stack>
          </WelcomeColumn>
          <Image3 src={require("../assets/images/Group1.png")}></Image3>
        </WelcomeColumnRow>
      </Rect>
      <PartnersStack>
        <Partners>PARTNERS</Partners>
        <LoremIpsumDolor>Lorem ipsum dolor</LoremIpsumDolor>
        <LoremIpsumDolor2>Lorem Ipsum Dolor</LoremIpsumDolor2>
      </PartnersStack>
      <LoremIpsum5Stack>
        <LoremIpsum5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </LoremIpsum5>
        <Rect2Stack>
          <Rect2>
            <Image5Row>
              <Image5 src={require("../assets/images/XMLID_1_2.png")}></Image5>
              <Image6 src={require("../assets/images/XMLID_30_3.png")}></Image6>
              <Image7 src={require("../assets/images/Vector4.png")}></Image7>
              <Image8 src={require("../assets/images/XMLID_2_5.png")}></Image8>
            </Image5Row>
          </Rect2>
          <Image4 src={require("../assets/images/XMLID_24_1.png")}></Image4>
        </Rect2Stack>
        <CupertinoButtonWhiteTextColor
          style={{
            height: 48,
            width: 170,
            position: "absolute",
            left: 502,
            top: 203,
            backgroundColor: "rgba(0,0,0,1)"
          }}
        ></CupertinoButtonWhiteTextColor>
      </LoremIpsum5Stack>
      <Image9Row>
        <Image9 src={require("../assets/images/Group1_(1).png")}></Image9>
        <Rect3Stack>
          <Rect3></Rect3>
          <LoremIpsum7>Lorem ipsum dolor sit amet consectetur</LoremIpsum7>
          <LoremIpsum9>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
            voluptate culpa nesciunt delectus iste?
          </LoremIpsum9>
        </Rect3Stack>
      </Image9Row>
      <LoremIpsum11ColumnRow>
        <LoremIpsum11Column>
          <LoremIpsum11>Lorem ipsum dolor sit amet consectetur</LoremIpsum11>
          <LoremIpsum13>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
            voluptate culpa nesciunt delectus iste?
          </LoremIpsum13>
          <CupertinoButtonWhiteTextColor1
            style={{
              height: 48,
              width: 170,
              backgroundColor: "rgba(0,0,0,1)",
              marginTop: 27
            }}
            caption="Learn more "
          ></CupertinoButtonWhiteTextColor1>
        </LoremIpsum11Column>
        <Image10 src={require("../assets/images/Group3.png")}></Image10>
      </LoremIpsum11ColumnRow>
      <Team>TEAM</Team>
      <OurTalents>Our talents</OurTalents>
      <LoremIpsum14Row>
        <LoremIpsum14></LoremIpsum14>
        <LoremIpsum15>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nemo
          hic quos, ab,
        </LoremIpsum15>
      </LoremIpsum14Row>
      <Rect4Stack>
        <Rect4>
          <Image11Row>
            <Image11 src={require("../assets/images/Group_321.png")}></Image11>
            <Image14 src={require("../assets/images/Group_291.png")}></Image14>
            <Image13 src={require("../assets/images/Group_301.png")}></Image13>
            <Image12 src={require("../assets/images/Group_311.png")}></Image12>
          </Image11Row>
        </Rect4>
        <CupertinoButtonWhiteTextColor2
          style={{
            height: 48,
            width: 170,
            position: "absolute",
            left: 509,
            top: 290,
            backgroundColor: "rgba(15,15, 15,1)"
          }}
          caption="View Team"
        ></CupertinoButtonWhiteTextColor2>
      </Rect4Stack>
      <Rect5>
        <Image15 src={require("../assets/images/Frame_311.png")}></Image15>
      </Rect5>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(255,255,255,1);
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const Rect = styled.div`
  width: 1440px;
  height: 586px;
  background-color: rgba(116,198,157,1);
  flex-direction: column;
  display: flex;
`;

const Image = styled.img`
  width: 100%;
  height: 50px;
  object-fit: contain;
`;

const Image2 = styled.img`
  width: 100%;
  height: 50px;
  margin-left: 15px;
  object-fit: contain;
`;

const ImageRow = styled.div`
  height: 50px;
  flex-direction: row;
  display: flex;
  margin-top: 50px;
  margin-left: 135px;
  margin-right: 138px;
`;

const Welcome = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: rgba(255,255,255,1);
  width: 113px;
  height: 20px;
  font-size: 17px;
  letter-spacing: 4px;
  margin-top: -1px;
  margin-left: 3px;
`;

const LoremIpsum = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  width: 416px;
  height: 100px;
  font-size: 40px;
  margin-top: 43px;
`;

const LoremIpsum2 = styled.span`
  font-family: Roboto;
  top: 6px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
`;

const LoremIpsum3 = styled.span`
  font-family: Roboto;
  top: 0px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  width: 466px;
  height: 75px;
`;

const LoremIpsum2Stack = styled.div`
  width: 466px;
  height: 75px;
  margin-top: 16px;
  position: relative;
`;

const WelcomeColumn = styled.div`
  width: 466px;
  flex-direction: column;
  display: flex;
  margin-top: 39px;
  margin-bottom: 86px;
`;

const Image3 = styled.img`
  width: 100%;
  height: 378px;
  margin-left: 86px;
  object-fit: contain;
`;

const WelcomeColumnRow = styled.div`
  height: 378px;
  flex-direction: row;
  display: flex;
  margin-top: 65px;
  margin-left: 132px;
  margin-right: 112px;
`;

const Partners = styled.span`
  font-family: Roboto;
  top: 10px;
  left: 93px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(116,198,157,1);
  letter-spacing: 7px;
  width: 121px;
  height: 37px;
  font-size: 13px;
  text-align: center;
`;

const LoremIpsumDolor = styled.span`
  font-family: Roboto;
  top: 0px;
  left: -1px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(116,198,157,1);
  line-height: 0px;
  font-size: 0px;
  letter-spacing: 7px;
  width: 121px;
  height: 37px;
`;

const LoremIpsumDolor2 = styled.span`
  font-family: Roboto;
  top: 37px;
  left: 41px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 25px;
`;

const PartnersStack = styled.div`
  width: 255px;
  height: 67px;
  margin-top: 43px;
  margin-left: 567px;
  position: relative;
`;

const LoremIpsum5 = styled.span`
  font-family: Roboto;
  top: 0px;
  left: 440px;
  position: absolute;
  font-style: normal;
  font-weight: 100;
  color: #121212;
  font-size: 15px;
  text-align: center;
  width: 266px;
  height: 60px;
  opacity: 0.68;
`;

const Rect2 = styled.div`
  top: 75px;
  left: 0px;
  width: 1150px;
  height: 50px;
  position: absolute;
  background-color: rgba(116,198,157,0);
  flex-direction: row;
  display: flex;
`;

const Image5 = styled.img`
  width: 100%;
  height: 50px;
  margin-left: -1px;
  object-fit: contain;
`;

const Image6 = styled.img`
  width: 100%;
  height: 50px;
  margin-left: 94px;
  object-fit: contain;
`;

const Image7 = styled.img`
  width: 100%;
  height: 50px;
  margin-left: 47px;
  object-fit: contain;
`;

const Image8 = styled.img`
  width: 100%;
  height: 50px;
  margin-left: 53px;
  object-fit: contain;
`;

const Image5Row = styled.div`
  height: 50px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-left: 225px;
`;

const Image4 = styled.img`
  top: 0px;
  left: 3px;
  width: 152px;
  height: 200px;
  position: absolute;
  object-fit: contain;
`;

const Rect2Stack = styled.div`
  top: 25px;
  left: 0px;
  width: 1150px;
  height: 200px;
  position: absolute;
`;

const LoremIpsum5Stack = styled.div`
  width: 1150px;
  height: 251px;
  margin-top: 6px;
  margin-left: 132px;
  position: relative;
`;

const Image9 = styled.img`
  width: 100%;
  height: 431px;
  object-fit: contain;
`;

const Rect3 = styled.div`
  top: 0px;
  left: 0px;
  width: 600px;
  height: 431px;
  position: absolute;
  background-color: rgba(230,230, 230,0);
`;

const LoremIpsum7 = styled.span`
  font-family: Roboto;
  top: 39px;
  left: 139px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  width: 462px;
  height: 100px;
  font-size: 30px;
`;

const LoremIpsum9 = styled.span`
  font-family: Roboto;
  top: 147px;
  left: 139px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  width: 462px;
  height: 17px;
  opacity: 0.57;
`;

const Rect3Stack = styled.div`
  width: 601px;
  height: 431px;
  position: relative;
`;

const Image9Row = styled.div`
  height: 431px;
  flex-direction: row;
  display: flex;
  margin-top: 54px;
  margin-left: 115px;
  margin-right: 50px;
`;

const LoremIpsum11 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  height: 97px;
  width: 341px;
  font-size: 30px;
`;

const LoremIpsum13 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  opacity: 0.6;
  margin-top: 17px;
`;

const LoremIpsum11Column = styled.div`
  width: 358px;
  flex-direction: column;
  display: flex;
  margin-top: 137px;
  margin-bottom: 188px;
`;

const Image10 = styled.img`
  width: 100%;
  height: 565px;
  margin-left: 247px;
  object-fit: contain;
`;

const LoremIpsum11ColumnRow = styled.div`
  height: 565px;
  flex-direction: row;
  display: flex;
  margin-top: 40px;
  margin-left: 115px;
  margin-right: 46px;
`;

const Team = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(116,198,157,1);
  width: 99px;
  height: 20px;
  letter-spacing: 5px;
  margin-top: 53px;
  margin-left: 660px;
`;

const OurTalents = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 40px;
  margin-left: 583px;
`;

const LoremIpsum14 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 1px;
`;

const LoremIpsum15 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  width: 395px;
  height: 60px;
  text-align: center;
  opacity: 0.53;
  margin-left: 31px;
`;

const LoremIpsum14Row = styled.div`
  height: 60px;
  flex-direction: row;
  display: flex;
  margin-left: 453px;
  margin-right: 487px;
`;

const Rect4 = styled.div`
  top: 0px;
  left: 0px;
  width: 1176px;
  height: 299px;
  position: absolute;
  background-color: rgba(230,230, 230,0);
  flex-direction: row;
  display: flex;
`;

const Image11 = styled.img`
  width: 100%;
  height: 260px;
  background-color: rgba(15,15, 15,0);
  object-fit: contain;
`;

const Image14 = styled.img`
  width: 100%;
  height: 260px;
  margin-left: 106px;
  object-fit: contain;
`;

const Image13 = styled.img`
  width: 100%;
  height: 260px;
  margin-left: 90px;
  object-fit: contain;
`;

const Image12 = styled.img`
  width: 100%;
  height: 260px;
  margin-left: 86px;
  object-fit: contain;
`;

const Image11Row = styled.div`
  height: 260px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 82px;
  margin-left: 4px;
  margin-top: 19px;
`;

const Rect4Stack = styled.div`
  width: 1176px;
  height: 338px;
  margin-top: 45px;
  margin-left: 115px;
  position: relative;
`;

const Rect5 = styled.div`
  width: 1440px;
  height: 125px;
  background-color: rgba(116,198,157,1);
  flex-direction: column;
  display: flex;
  margin-top: 25px;
`;

const Image15 = styled.img`
  width: 1178px;
  height: 100%;
  margin-left: 98px;
  object-fit: contain;
`;

export default Untitled;
