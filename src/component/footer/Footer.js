import { Divider, Typography } from "@mui/material";


function Footer() {
  return (
    <div style={{marginBottom:'70px'}}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          justifyItems: "center",
        }}
      >
        <Divider sx={{ width: "70%" }} />
      </div>
      <Typography
        sx={{ marginTop: "20px", color: "grey", marginBottom: "20px" }}
      >
        © 2021-2023 AnyDownloader.com All Rights Reserved.
      </Typography>
      <div  style={{
          display: "flex",
          justifyContent: "center",
          justifyItems: "center",
        }}>
        <Typography sx={{ width: "70%" ,fontFamily:"inherit",fontSize:'13px'}}>
          Disclaimer: All site names, logos, and trademarks are property of
          their respective owners and used on this site for identification
          purposes only. This website does not host any pirated or copyright
          content on its server, and all the videos that you download are
          downloaded to your system directly from their respective CDN servers.
        </Typography>
      </div>
    </div>
  );
}

export default Footer;
