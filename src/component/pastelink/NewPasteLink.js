import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import { Box } from "@mui/system";

export default function ActionAreaCard() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <Grid
        sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" } }}
      >
 <Card
          sx={{
            maxWidth: 345,
            marginBottom: "20px",
            marginRight: "20px",
            borderRadius: "20px",
            ":hover": {
              transform: "scale(1.05)",
              transition: "0.5s",
            },
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image="Copy-Link-.jpg"
              alt="Copy-Link-"
              sx={{marginTop:"20px"}}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <img
                  src="icon-copy.png"
                  alt=""
                  style={{ width: "30px", paddingRight: "5px"}}
                />
                Copy Link
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Find your favorite videos or musics then copy the link which you want to download.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            maxWidth: 345,
            marginBottom: "20px",
            marginRight: "20px",
            borderRadius: "20px",
            ":hover": {
              transform: "scale(1.05)",
              transition: "0.5s",
            },
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image="Paste-Link.jpg"
              alt="Paste-Link"
              sx={{marginTop:"20px"}}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <img
                  src="icon-paste.png"
                  alt=""
                  style={{ width: "30px", paddingRight: "5px" }}
                />
                Paste Link
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Paste your link into the field above, then click to download button.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            maxWidth: 345,
            marginBottom: "20px",
            borderRadius: "20px",
            ":hover": {
              transform: "scale(1.05)",
              transition: "0.5s",
            },
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image="Download-Now.jpg"
              alt="Download-Now"
              sx={{marginTop:"20px"}}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <img
                  src="icon-download.png"
                  alt=""
                  style={{ width: "30px", paddingRight: "5px" }}
                />
                Download
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Sit back and relax, when your file is available, select which format you want then click download.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Box>
  );
}
