import React from "react";
import bg from "../assets/bg.png";
import LoggedInHeader from "../Components/LoggedInHeader";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Container,
} from "@mui/material";

import { Row, Col } from "react-bootstrap";
import DatabaseWelcome from "../Components/DatabaseWelcome";
import FancySearchBar from "../Components/FancySearchBar";

const ViewPage = () => {
  const containerStyle = {
    backgroundColor: "#000",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `url(${bg})`,
    height: "100vh",
  };

  const tableHeadStyle = {
    fontFamily: "Raleway, sans-serif",
    fontWeight: "900",
    color: "white",
    color: "white",
  };

  const tableCellStyle = {
    fontFamily: "Raleway, sans-serif",
    color: "white",
  };
  // Sample data (replace with your actual data)
  const entries = [
    {
      given_name: "John",
      family_name: "Doe",
      nickname: "johndoe",
      name: "John Doe",
      picture: "https://example.com/johndoe.jpg",
      locale: "en-US",
      updated_at: "2023-01-01T12:00:00Z",
      email: "john.doe@example.com",
      email_verified: true,
      sub: "123456789",
    },
    {
      given_name: "John",
      family_name: "Doe",
      nickname: "johndoe",
      name: "John Doe",
      picture: "https://example.com/johndoe.jpg",
      locale: "en-US",
      updated_at: "2023-01-01T12:00:00Z",
      email: "john.doe@example.com",
      email_verified: true,
      sub: "123456789",
    },
    {
      given_name: "John",
      family_name: "Doe",
      nickname: "johndoe",
      name: "John Doe",
      picture: "https://example.com/johndoe.jpg",
      locale: "en-US",
      updated_at: "2023-01-01T12:00:00Z",
      email: "john.doe@example.com",
      email_verified: true,
      sub: "123456789",
    },
    // Add more entries as needed
  ];

  return (
    <>
      <div style={containerStyle}>
        <LoggedInHeader />
        <Container maxWidth="lg" style={{ marginTop: "20px" }}>
          <Row className="justify-content-center p-3 my-1">
            <Col md={8} className="text-center">
              <Row className="justify-content-center p-3 my-4">
                <Col md={8} className="text-center">
                  <DatabaseWelcome />
                </Col>
                <Col md={8} className="text-center">
                  <FancySearchBar />
                </Col>
              </Row>
            </Col>
          </Row>
          <TableContainer
            component={Paper}
            sx={{
              marginBottom: "20px",
              backgroundColor: "rgb(55,55,55,0.2)",
            }}
          >
            <Table sx={{}}>
              <TableHead>
                <TableRow>
                  <TableCell sx={tableHeadStyle}>Given Name</TableCell>
                  <TableCell sx={tableHeadStyle}>Family Name</TableCell>
                  <TableCell sx={tableHeadStyle}>Nickname</TableCell>
                  <TableCell sx={tableHeadStyle}>Name</TableCell>
                  <TableCell sx={tableHeadStyle}>Picture</TableCell>
                  <TableCell sx={tableHeadStyle}>Locale</TableCell>
                  <TableCell sx={tableHeadStyle}>Updated At</TableCell>
                  <TableCell sx={tableHeadStyle}>Email</TableCell>
                  <TableCell sx={tableHeadStyle}>Email Verified</TableCell>
                  <TableCell sx={tableHeadStyle}>Sub</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {entries.map((entry, index) => (
                  <TableRow key={index}>
                    <TableCell sx={tableCellStyle}>
                      {entry.given_name}
                    </TableCell>
                    <TableCell sx={tableCellStyle}>
                      {entry.family_name}
                    </TableCell>
                    <TableCell sx={tableCellStyle}>{entry.nickname}</TableCell>
                    <TableCell sx={tableCellStyle}>{entry.name}</TableCell>
                    <TableCell sx={tableCellStyle}>
                      <Avatar alt={entry.name} src={entry.picture} />
                    </TableCell>
                    <TableCell sx={tableCellStyle}>{entry.locale}</TableCell>
                    <TableCell sx={tableCellStyle}>
                      {entry.updated_at}
                    </TableCell>
                    <TableCell sx={tableCellStyle}>{entry.email}</TableCell>
                    <TableCell sx={tableCellStyle}>
                      {entry.email_verified ? "Yes" : "No"}
                    </TableCell>
                    <TableCell sx={tableCellStyle}>{entry.sub}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </div>
    </>
  );
};

export default ViewPage;
