import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Avatar, Box, Paper, Typography } from "@mui/material";

const UserInformation = () => {
  const { user, isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      p={2}
    >
      <Paper
        elevation={3}
        sx={{
          p: 2,
          display: "flex",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.1)", // Gray background with 70% opacity
          fontFamily: "Garamond, serif",
        }}
      >
        <Avatar
          src={user?.picture}
          alt={user?.name}
          style={{ width: 80, height: 80, marginRight: 2 }}
        />
        <div>
          <Typography variant="h6">{user?.name}</Typography>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {Object.keys(user).map((objKey, i) => (
              <li key={i}>
                <strong>{objKey}:</strong>{" "}
                {objKey === "picture" ? (
                  <a
                    href={user.picture}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link
                  </a>
                ) : (
                  user[objKey]
                )}
              </li>
            ))}
          </ul>
        </div>
      </Paper>
    </Box>
  ) : (
    <Typography variant="body1">Sign in to see User Information!</Typography>
  );
};

export default UserInformation;
