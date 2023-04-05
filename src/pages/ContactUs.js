import Typography from '@mui/material/Typography';

const ContactUs = () => {
    return (
        <div>
            <Typography sx={{ marginTop: '300px', marginRight: { lg: '90px', xs: '10px' }, marginLeft: { lg: '90px', xs: '10px' }, marginBottom: '50px', textAlign: 'center' }} variant="h6">
                If there’s any question regarding the content posted on the website, report advertisement, or any service, please send an email to <u> <a href='mailto:support@any4download.com'>support@any4download.com</a></u> and we will get back to you as soon as possible.
            </Typography>
        </div>
    )
}

export default ContactUs
