import React from "react";
import { Grid, Paper, LinearProgress } from "@mui/material";
import CountUp from "react-countup";
import { useAuth0 } from "@auth0/auth0-react";

const DatabaseStats = () => {
  const entries = 3;
  const capacity = 100;

  const { user } = useAuth0();

  return (
    <div className="p-3">
      {/* Row 1: One rectangle box */}
      <Grid container>
        <Grid item xs={12}>
          <Paper
            style={{
              height: "150px",
              backgroundColor: "rgba(55, 55, 55, 0.2)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CountUp
              start={entries * 10}
              end={entries}
              duration={3}
              useEasing={true}
              useGrouping={true}
              separator=" "
              suffix=" entries"
              style={{ color: "white", fontSize: "50px" }}
            />
            <div style={{ width: "80%" }}>
              <LinearProgress
                variant="determinate"
                value={(entries * 100) / capacity}
                style={{ marginTop: "10px" }}
              />
            </div>
          </Paper>
        </Grid>
      </Grid>

      {/* Row 2: Two equal width boxes */}
      <Grid container spacing={1} className="p-3">
        {/* First box */}
        <Grid item xs={8}>
          <Paper
            style={{
              height: "100px",
              backgroundColor: "rgba(55, 55, 55, 0.2)",
              color: "white",
              fontSize: "20px",
            }}
          >
            Last Accessed : {user?.updated_at}
          </Paper>
        </Grid>

        {/* Second box */}
        <Grid item xs={4}>
          <Paper
            style={{
              height: "100px",
              backgroundColor: "rgba(55, 55, 55, 0.2)",
              color: "white",
              fontSize: "15px",
            }}
          >
            Some more stats :)
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default DatabaseStats;
