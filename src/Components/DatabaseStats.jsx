import React from "react";
import { Grid, Paper, LinearProgress } from "@mui/material";
import CountUp from "react-countup";
import { useAuth0 } from "@auth0/auth0-react";
import AddToDatabaseButton from "./AddToDatabaseButton";
import MigrateFromCSVButton from "./MigrateFromCSVButton";

const DatabaseStats = () => {
  const entries = 3;
  const capacity = 100;

  const { user } = useAuth0();

  return (
    <div className="p-5">
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
      <h4></h4>
      <Grid container>
        <Grid item xs={12} className="p-6">
          <Paper
            style={{
              height: "70px",
              backgroundColor: "rgba(55, 55, 55, 0.2)",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AddToDatabaseButton />
            <MigrateFromCSVButton />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default DatabaseStats;
