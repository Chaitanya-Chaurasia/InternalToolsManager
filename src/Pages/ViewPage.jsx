import React from "react";
import bg from "../assets/bg.jpg";
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

const ViewPage = () => {
  const containerStyle = {
    backgroundColor: "#000",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `url(${bg})`,
    height: "100vh",
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
    // Add more entries as needed
  ];

  return (
    <>
      <div style={containerStyle}>
        <LoggedInHeader />
        <Container maxWidth="lg" style={{ marginTop: "120px" }}>
          <TableContainer
            component={Paper}
            sx={{
              marginBottom: "20px",
              backgroundColor: "rgb(55,55,55,0.04)",
            }}
          >
            <Table sx={{}}>
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      fontFamily: "Raleway, sans-serif",
                      color: "white",
                      color: "white",
                    }}
                  >
                    Given Name
                  </TableCell>
                  <TableCell
                    sx={{
                      fontFamily: "Raleway, sans-serif",
                      color: "white",
                    }}
                  >
                    Family Name
                  </TableCell>
                  <TableCell
                    sx={{
                      fontFamily: "Raleway, sans-serif",
                      color: "white",
                    }}
                  >
                    Nickname
                  </TableCell>
                  <TableCell
                    sx={{
                      fontFamily: "Raleway, sans-serif",
                      color: "white",
                    }}
                  >
                    Name
                  </TableCell>
                  <TableCell
                    sx={{
                      fontFamily: "Raleway, sans-serif",
                      color: "white",
                    }}
                  >
                    Picture
                  </TableCell>
                  <TableCell
                    sx={{
                      fontFamily: "Raleway, sans-serif",
                      color: "white",
                    }}
                  >
                    Locale
                  </TableCell>
                  <TableCell
                    sx={{
                      fontFamily: "Raleway, sans-serif",
                      color: "white",
                    }}
                  >
                    Updated At
                  </TableCell>
                  <TableCell
                    sx={{
                      fontFamily: "Raleway, sans-serif",
                      color: "white",
                    }}
                  >
                    Email
                  </TableCell>
                  <TableCell
                    sx={{
                      fontFamily: "Raleway, sans-serif",
                      color: "white",
                    }}
                  >
                    Email Verified
                  </TableCell>
                  <TableCell
                    sx={{
                      fontFamily: "Raleway, sans-serif",
                      color: "white",
                    }}
                  >
                    Sub
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {entries.map((entry, index) => (
                  <TableRow key={index}>
                    <TableCell
                      sx={{
                        fontFamily: "Raleway, sans-serif",
                        color: "white",
                      }}
                    >
                      {entry.given_name}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "Raleway, sans-serif",
                        color: "white",
                      }}
                    >
                      {entry.family_name}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "Raleway, sans-serif",
                        color: "white",
                      }}
                    >
                      {entry.nickname}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "Raleway, sans-serif",
                        color: "white",
                      }}
                    >
                      {entry.name}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "Raleway, sans-serif",
                        color: "white",
                      }}
                    >
                      <Avatar alt={entry.name} src={entry.picture} />
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "Raleway, sans-serif",
                        color: "white",
                      }}
                    >
                      {entry.locale}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "Raleway, sans-serif",
                        color: "white",
                      }}
                    >
                      {entry.updated_at}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "Raleway, sans-serif",
                        color: "white",
                      }}
                    >
                      {entry.email}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "Raleway, sans-serif",
                        color: "white",
                      }}
                    >
                      {entry.email_verified ? "Yes" : "No"}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "Raleway, sans-serif",
                        color: "white",
                      }}
                    >
                      {entry.sub}
                    </TableCell>
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
