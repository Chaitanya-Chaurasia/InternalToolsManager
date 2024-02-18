import React, { useState } from "react";
import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import axios from "axios";

const URL = import.meta.env.VITE_FACE_RECOGNITION_URL;
const linkedinURL = import.meta.env.VITE_LINKEDIN_URL;
const verifyURL = import.meta.env.VITE_FACE_VERIFY_URL;
const TakePicture = () => {
  const [capturedImage, setCapturedImage] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);

  const [loading, setLoading] = useState(false);

  function imageToBase64(url) {
    // Fetch the image
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        // Read the image blob as Data URL
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = function () {
          // Callback with base64 data
          return reader.result;
        };
      })
      .catch((error) => console.error("Error:", error));
  }
  const verifyImage = (image) => {
    setLoading(true);

    let data = {
      img1_path: capturedImage,
      img2_path: image,
      model_name: "Facenet",
      detector_backend: "mtcnn",
      distance_metric: "euclidean",
    };

    console.log(data);
    axios
      .post(verifyURL, data)
      .then((res) => {
        console.log(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  const getName = (filePath) => {
    const nameRegex = /\/app\/data\/([a-zA-Z]+)-([a-zA-Z]+)-\d+\.[a-zA-Z]+/;
    const match = filePath.match(nameRegex);

    if (match) {
      const firstName = match[1];
      const lastName = match[2];
      console.log("First Name:", firstName);
      console.log("Last Name:", lastName);

      axios
        .get(linkedinURL, {
          params: {
            first_name: firstName,
            last_name: lastName,
          },
        })
        .then((response) => {
          setLoading(50);
          console.log(JSON.stringify(response.data));

          response.data.map((profile) => {
            let img64 = imageToBase64(profile.large_picture_url);
            console.log(profile.large_picture_url);

            verifyImage(img64);
          });
          setLoading(100);
        })
        .catch((error) => {
          setLoading(0);
          console.log(error);
        });
    } else {
      console.log("No match found.");
    }
  };

  const sendPictureToAWS = (image) => {
    let data = {
      judge: false,
      img: image,
      model_name: "VGG-Face",
      distance_metric: "cosine",
      detector_backend: "opencv",
      enforce_detection: true,
      align: true,
    };

    setLoading(10);

    axios
      .post(URL, data)
      .then((response) => {
        setLoading(50);
        console.log(JSON.stringify(response.data));
        getName(JSON.stringify(response.data.data[0][0].identity));
        setLoading(100);
      })
      .catch((error) => {
        setLoading(0);
        console.log(error);
      });
  };

  const handleCapture = () => {
    const video = document.createElement("video");

    // Access the user's webcam
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        video.srcObject = stream;
        video.onloadedmetadata = () => {
          video.play();
          const canvas = document.createElement("canvas");
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          const context = canvas.getContext("2d");
          // Draw the current frame of the video onto the canvas
          context.drawImage(video, 0, 0, canvas.width, canvas.height);
          // Convert the canvas content to base64
          const imageData = canvas.toDataURL("image/jpeg");

          // Set the captured image
          setCapturedImage(imageData);
          // Stop the webcam stream
          stream.getTracks().forEach((track) => track.stop());
        };
      })
      .catch((error) => {
        console.error("Error accessing webcam:", error);
      });

    console.log(capturedImage);

    sendPictureToAWS(capturedImage);
  };

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      console.log(file);
    } else {
      alert("Please upload an image file.");
    }
  };

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Paper
            style={{
              borderRadius: "15px",
              height: "40vh",
              border: "2px solid",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {capturedImage ? (
              <img
                src={capturedImage}
                alt="Captured"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            ) : (
              <Typography variant="body1">No image captured</Typography>
            )}
          </Paper>
          <Button
            variant="contained"
            onClick={handleCapture}
            style={{ marginTop: "1rem" }}
          >
            Capture
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Paper
            style={{
              borderRadius: "15px",
              height: "40vh",
              border: "2px dotted",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {uploadedImage ? (
              <img
                src={uploadedImage}
                alt="Uploaded"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            ) : (
              <Typography variant="body1">No image uploaded</Typography>
            )}
          </Paper>
          <input
            type="file"
            accept="image/*"
            onChange={handleUpload}
            style={{ marginTop: "1rem" }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default TakePicture;
