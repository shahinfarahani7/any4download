import * as React from "react";
import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Grid, Alert } from "@mui/material";
import axios from "axios";
import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LoadingButton from '@mui/lab/LoadingButton';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

export default function SearchBar() {
  const [pasteLink, setPasteLink] = useState("");
  const [link, setLink] = useState([]);
  const [loading,setLoading] = useState(false)

  const getLink = () => {
    setLoading(true)
    axios
      .post(
        "https://app.ariosun.com/api/anywhere_downloader/download/get_link",
        { link: pasteLink }
      )
      .then((response) => {
        console.log("res ==>", response);
        setLoading(false)
        setLink(response.data.data);

        if (response.data.setting.success === 1) {
        } else if (response.data.setting.success === 0) {
          toast.error("LINK WAS WRONG", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Grid
        sx={{ display: "flex", justifyContent: "center", paddingTop: "50px" }}
      >
        <TextField
          id="outlined-basic"
          label="Paste Here"
          variant="outlined"
          sx={{ width: "70%", backgroundColor: "white" }}
          onChange={(e) => setPasteLink(e.target.value)}
        />
        <Stack spacing={2} direction="row">
        <LoadingButton variant="contained" endIcon={<DownloadForOfflineIcon />} loading={loading} loadingPosition="end" onClick={getLink} >
            Download
          </LoadingButton>

        </Stack>
      </Grid>
      <Grid container sx={{ justifyContent: "center", justifyItems: "center" }}>
        <Grid marginTop="30px">
          {link.length > 0 ? (
            <div>
              {link.map((as, index) => (
                <Alert
                  key={index}
                  variant="outlined"
                  severity="success"
                  sx={{
                    marginBottom: "10px",
                    backgroundColor: "ButtonFace",
                    width: "500px",
                  }}
                >
                  <a href={as.url}>{as.description}</a>
                </Alert>
              ))}
            </div>
          ) : (
            ""
          )}
        </Grid>
      </Grid>
      <ToastContainer />
    </>
  );
}
