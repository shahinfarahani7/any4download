import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Divider } from "@mui/material";

const PrivayPolicy = () => {
  return (
    <>
      <Box>
        <Grid>
          <Divider/>
          <article
            style={{ height: "100%", position: "relative", overflow: "hidden" }}
          >
            <img
              src="privacy_background.svg"
              alt=""
              style={{
                objectFit: "cover",
                height: "100%",
                width: "100%",
                opacity: "50%",
              }}
            />
            <Typography
              sx={{
                fontSize: { lg: "100px", md: "80px", xs: "40px" },
                textAlign: "center",
                position: "absolute",
                color: "black",
                top: "0",
                bottom: "0",
                right: "0",
                left: "0",
                height: "fit-content",
                margin: "auto",
              }}
            >
              Privacy Policy
            </Typography>
          </article>
        </Grid>
      </Box>
      <Box
        sx={{
          margin: { lg: "200px 200px 10px 200px", xs: "20px" },
          textAlign: "left",
        }}
      >
        <Grid>
          <Typography
            variant="h6"
            sx={{ margin: { lg: "20px 0px 20px 0px", xs: "20px" } }}
          >
            This{" "}
            <a href="/terms_of_services" style={{ color: "blue" }}>
              {" "}
              Terms of Service{" "}
            </a>{" "}
            informs you of our policies on the use and release of personal
            information we collect from users of this website.
          </Typography>
          <Typography
            variant="h6"
            sx={{ margin: { lg: "20px 0px 20px 0px", xs: "20px" } }}
          >
            No personal information or data shall be collected from persons
            under the legal age. We strictly limit the use of the Service to
            adults over 18 years and strictly forbid anyone under the stipulated
            age from using the Service.
          </Typography>
          <Typography
            variant="h3"
            sx={{ margin: { lg: "20px 0px 20px 0px", xs: "20px" } }}
          >
            Information Collection
          </Typography>
          <Typography
            variant="h4"
            sx={{
              margin: { lg: "20px 0px 20px 0px", xs: "20px" },
              fontWeight: "bold",
            }}
          >
            Using the Service
          </Typography>
          <Typography
            variant="h6"
            sx={{ margin: { lg: "20px 0px 20px 0px", xs: "20px" } }}
          >
            We may also collect information on how you use the Services such as
            your search, the content accessed and downloaded, and other relevant
            information.
          </Typography>
          <Typography
            variant="h6"
            sx={{ margin: { lg: "20px 0px 20px 0px", xs: "20px" } }}
          >
            Like many websites, we collect private information (log file
            information or aggregated traffic information) that your browser
            sends when you use any of our Services.
          </Typography>
          <Typography
            variant="h6"
            sx={{ margin: { lg: "20px 0px 20px 0px", xs: "20px" } }}
          >
            The private information may include information such as your IP
            address, country of origin, and other non-personal information about
            your computer such as browser type, web requests, referring URL,
            browser language, operating system and date and time of
            applications.
          </Typography>
          <Typography
            variant="h4"
            sx={{
              margin: { lg: "20px 0px 20px 0px", xs: "20px" },
              fontWeight: "bold",
            }}
          >
            Uploaded Content
          </Typography>
          <Typography
            variant="h6"
            sx={{ margin: { lg: "20px 0px 20px 0px", xs: "20px" } }}
          >
            We may collect any content you transmit, upload, or access through
            the Service.
          </Typography>
          <Typography
            variant="h4"
            sx={{
              margin: { lg: "20px 0px 20px 0px", xs: "20px" },
              fontWeight: "bold",
            }}
          >
            Correspondences
          </Typography>
          <Typography
            variant="h6"
            sx={{ margin: { lg: "20px 0px 20px 0px", xs: "20px" } }}
          >
            Also, we may keep a history of any correspondence between you and
            us.
          </Typography>
          <Typography
            variant="h4"
            sx={{
              margin: { lg: "20px 0px 20px 0px", xs: "20px" },
              fontWeight: "bold",
            }}
          >
            Cookies
          </Typography>
          <Typography
            variant="h6"
            sx={{ margin: { lg: "20px 0px 20px 0px", xs: "20px" } }}
          >
            Cookies are files with a small amount of data, which may include a
            unique anonymous identifier.
          </Typography>
          <Typography
            variant="h6"
            sx={{ margin: { lg: "20px 0px 20px 0px", xs: "20px" } }}
          >
            We may use both session cookies and persistent cookies. Like other
            websites, we use “cookies” to collect information. You can set your
            browser to turn down all cookies or to report when a cookies
            information is received. However, you may be denied the use of some
            portions of our site if you decline cookies.
          </Typography>
          <Typography
            variant="h4"
            sx={{
              margin: { lg: "20px 0px 20px 0px", xs: "20px" },
              fontWeight: "bold",
            }}
          >
            Information Usage
          </Typography>
          <Typography
            variant="h6"
            sx={{ margin: { lg: "20px 0px 20px 0px", xs: "20px" } }}
          >
            We reserve the right to use collected data to operate, maintain, and
            improve the functionality and features of the Service. We may use
            your information to provide certain features to create a
            personalized experience on the Service.
          </Typography>
          <Typography
            variant="h6"
            sx={{ margin: { lg: "20px 0px 20px 0px", xs: "20px" } }}
          >
            We use cookies and other materials to store information to provide
            personalized content and information, monitor aggregate metrics and
            effectiveness of the Service, and you will not have to re-enter it
            on a future visit.
          </Typography>
          <Typography
            variant="h6"
            sx={{ margin: { lg: "20px 0px 20px 0px", xs: "20px" } }}
          >
            Your private information may also be used to provide targeted
            advertising based on your country of origin and other relevant
            information.
          </Typography>
          <Typography
            variant="h6"
            sx={{ margin: { lg: "20px 0px 20px 0px", xs: "20px" } }}
          >
            Also, we may combine your data with the information of other users,
            and disclose such information to advertisers and other parties for
            marketing and promotional uses. We may also use your information to
            run contests, promotions, surveys, and other features and events.
          </Typography>
          <Typography
            variant="h4"
            sx={{
              margin: { lg: "20px 0px 20px 0px", xs: "20px" },
              fontWeight: "bold",
            }}
          >
            Disclosure of Information
          </Typography>
          <Typography
            variant="h6"
            sx={{ margin: { lg: "20px 0px 20px 0px", xs: "20px" } }}
          >
            We may have to release certain information to protect the property,
            rights, or safety of our users and us. This includes providing data
            to the police or governmental authorities for protection against
            prosecution of any illegal activity.
          </Typography>
          <Typography
            variant="h6"
            sx={{ margin: { lg: "20px 0px 20px 0px", xs: "20px" } }}
          >
            If you access or transmit any unauthorized or illegal material to or
            through the Service, we may forward all available information to
            relevant authorities, including copyright owners, without any notice
            to you.
          </Typography>
          <Typography
            variant="h4"
            sx={{
              margin: { lg: "20px 0px 20px 0px", xs: "20px" },
              fontWeight: "bold",
            }}
          >
            Security
          </Typography>
          <Typography
            variant="h6"
            sx={{ margin: { lg: "20px 0px 20px 0px", xs: "20px" } }}
          >
            While we endeavour to use business-oriented means, including
            physical, administrative, and industrial means to safeguard your
            content; we cannot pledge its complete safety.
          </Typography>
          <Typography
            variant="h6"
            sx={{ margin: { lg: "20px 0px 20px 0px", xs: "20px" } }}
          >
            The security of your information is crucial to us. Any content you
            send to us is at your own exclusive risk. However, you should know
            that no means of communicating information on the Internet or
            process of electronic storage is exclusively secure.
          </Typography>
        </Grid>
      </Box>
    </>
  );
};

export default PrivayPolicy;
