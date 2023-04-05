import classes from '../layout/Layout.module.css'
import MainNavigation from "./MainNavigation";

function Layout(props) {
    return (<div className={classes.App}>
        <MainNavigation />
        <main >
        {props.children}
        </main>
    </div>

    )
}

export default Layout;