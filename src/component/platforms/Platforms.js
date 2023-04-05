import { Grid } from "@mui/material";
import './PlatformsStyle.css';

const platforms = [
  {
    id: "1",
    platformimage: <img src="linkedin.svg" alt="" width="45px" />,
    platformname: "Linkedin",
  },
  {
    id: "2",
    platformimage: <img src="snapchat.svg" alt="" width="45px" />,
    platformname: "Snapchat",
  },
  {
    id: "3",
    platformimage: <img src="ted.svg" alt="" width="45px" />,
    platformname: "TED",
  },
  {
    id: "4",
    platformimage: <img src="likee.svg" alt="" width="45px" />,
    platformname: "Likee" ,
  },
  {
    id: "5",
    platformimage: <img src="twitter.svg" alt="" width="45px" />,
    platformname: "Twitter",
  },
  {
    id: "6",
    platformimage: <img src="instagram.svg" alt="" width="45px" />,
    platformname: "Instagram",
  },
  {
    id: "7",
    platformimage: <img src="pinterest.svg" alt="" width="45px" />,
    platformname: "Pinterest",
  },
  {
    id: "8",
    platformimage: <img src="facebook.svg" alt="" width="45px" />,
    platformname: "Facebook" 
  },
  {
    id: "9",
    platformimage: <img src="sharechat.svg" alt="" width="45px" />,
    platformname: "Sharechat",
  },
  {
    id: "10",
    platformimage: <img src="buzzfeed.svg" alt="" width="45px" />,
    platformname: "buzzfeed",
  },
  {
    id: "11",
    platformimage: <img src="espn.svg" alt="" width="45px" />,
    platformname: "espn",
  },
  {
    id: "12",
    platformimage: <img src="flickr.svg" alt="" width="45px" />,
    platformname: "flickr",
  },
  {
    id: "13",
    platformimage: <img src="9gag.svg" alt="" width="45px" />,
    platformname: "9gag",
  },
  {
    id: "14",
    platformimage: <img src="imdb.svg" alt="" width="45px" />,
    platformname: "imdb",
  },
];

function Supported() {
  return (
    <Grid
      container 
      className="grid"
      spacing={3}
    
    >
      {platforms.map((platform,index) => (
      
        <Grid key={index}
        display="flow"
          style={{ marginLeft: "40px", marginRight: "40px" }}
        >
          <Grid >
            
            <div>
              {platform.platformimage}
              <p style={{ justifyContent: "center", display: "flex" ,marginTop:"10px",marginBottom:"30px"}}>
                {" "}
                {platform.platformname}
              </p>
            </div>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}

export default Supported;
