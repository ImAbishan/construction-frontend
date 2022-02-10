import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  ColumnOne,
  FooterLinkOne,
} from "./footerStyles.js";

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <ColumnOne>
            <Heading>About Us</Heading>
            <FooterLinkOne>
              Having established in year 2018, we started off as a CAD Drafting
              & Modeling arm of TT Builders. Over the last one decade, we have
              carved a niche for ourselves into focus areas like 3D Stills and
              Architectural Visualization CGI.
            </FooterLinkOne>
          </ColumnOne>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Designing</FooterLink>
            <FooterLink href="#">Build</FooterLink>
            <FooterLink href="#">Architect</FooterLink>
            <FooterLink href="#">Maintainence</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Colombo</FooterLink>
            <FooterLink href="#">Kandy</FooterLink>
            <FooterLink href="#">Jaffna</FooterLink>
            <FooterLink href="#">Galle</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>Youtube</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
