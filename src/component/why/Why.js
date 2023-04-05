import { Grid, Typography } from "@mui/material";
// import { textAlign } from "@mui/system";
import './Why.module.css';
import classes from './Why.module.css'

function Why() {
    return (
        <Grid container spacing={2} marginTop='100px'marginBottom='100px'>
            <Grid item xs={12} md={12} lg={6} >
                <img src="social.png" alt="" className={classes.imageresponsive} />
            </Grid>
            <Grid item xs={12} md={12} lg={6} textAlign={'center'} >
                <div className={classes.textresponsive}>

                    <Typography fontSize='1rem' color='#008000' fontWeight='bold'>WHY ANY4DOWNLOAD?!</Typography>
                    <Typography fontSize='2rem' marginTop='20px'><img src="approve.svg" alt="" style={{ width: "30px", marginRight: "10px" }} />Easy to use and unlimited</Typography>
                    <Typography fontSize='2rem' ><img src="approve.svg" alt="" style={{ width: "30px", marginRight: "10px" }} />Free</Typography>
                    <Typography fontSize='2rem'><img src="approve.svg" alt="" style={{ width: "30px", marginRight: "10px" }} />Unlimited</Typography>
                    <Typography fontSize='1rem' marginTop='20px'>Any4Download is a free video downloading site that allows you to download videos in a variety of formats, such as MP4, M4A, WEBM, and 3GP, from several social media networks and sources. Downloads of GIF, JPG, and PNG images are also supported. If available, Full HD or 4K resolution is another option when downloading using Any4Download. All services offered by AnyDownloader are free of charge. Have you ever wanted to quickly download any video from any platform? Any video or music may be downloaded quickly and effortlessly to your mobile device, Android, iOS, PC, or Mac with Any4Download. You can also download Ok.ru, VK, Vimeo, Dailymotion, and other services that are supported by Any4Download.com.</Typography>
                </div>
            </Grid>
        </Grid>

    )
}

export default Why;