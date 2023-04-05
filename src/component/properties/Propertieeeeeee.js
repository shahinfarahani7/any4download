

import { Box, Grid, Typography } from "@mui/material";
import "./PropertieStyle.css";

const Propertie = [
  {
    id: "1",
    image: <img src="icon-free.png" width={"50px"} alt="" />,
    title: "100% Free Tool",
    desc: "AnyDownloader is a completely free online video downloader and converter.",
  },
  {
    id: "2",
    image: <img src="icon-protect.png" width={"50px"} alt="" />,
    title: "Simple, Secure & Fast",
    desc: "Download process is very simple just copy and paste the url of the video or music then click download button.",
  },
  {
    id: "3",
    image: <img src="icon-infinity.png" width={"50px"} alt="" />,
    title: "Unlimited Video Download",
    desc: "No limitations! download & save your favorite video or music as much as you want.",
  },
  {
    id: "4",
    image: <img src="icon-registration.png" width={"50px"} alt="" />,
    title: "No Registration Required",
    desc: "No account or installation software required to convert and download videos.",
  },
  {
    id: "5",
    image: <img src="icon-compatibility.png" width={"50px"} alt="" />,
    title: "Compatibility",
    desc: "AnyDownloader works with all major browsers, including Chrome, Firefox, Safari, and Microsoft Edge etc.",
  },
  {
    id: "6",
    image: <img src="icon-everything.png" width={"50px"} alt="" />,
    title: "All in One Downloader",
    desc: "We provide to download videos in multiple formats including MP4, 3GP, MP3, M4A, WEBM. And supported platforms more than 40+.",
  },
];

function Properties() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center',justifyItems:'center'}}>
      <Grid
        container
        spacing={5}
        display='flex'
        justifyContent="center"
        
        width='60%'
      >
        
        {Propertie.map((asghr) => (
          <Grid item xs={12} lg={4}
          flexDirection="column"
           >
            <div className="img">{asghr.image}</div>
            <div >
              <Typography fontSize='1.25rem' fontWeight='bold' marginBottom='5px'>{asghr.title}</Typography>
            </div>
            <div className="desc">
              <Typography fontFamily='sans-serif' >{asghr.desc}</Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Properties;
