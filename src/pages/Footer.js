import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "../styles/FooterStyles.js";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "white",
				textAlign: "center",
				marginTop: "-60px",
                marginBottom: "25px" }}>
		BankPro: The Investors Bank
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">Aim</FooterLink>
			<FooterLink href="#">Vision</FooterLink>
			<FooterLink href="#">Testimonials</FooterLink>
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="#">Loans</FooterLink>
			<FooterLink href="#">Online Transfers</FooterLink>
			<FooterLink href="#">Deposits</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">Lagos</FooterLink>
			<FooterLink href="#">Abuja</FooterLink>
			<FooterLink href="#">Sokoto</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
    <h6 style={{color: "white"}}>@BankPro</h6>
	</Box>
);
};
export default Footer;