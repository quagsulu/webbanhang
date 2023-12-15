import { Outlet } from 'react-router-dom'
import Header from '../pages/Header'
import Footer from '../pages/Footer'

const BaseLayout = () => {
    return (
        <div>
            <Header/>
                <Outlet />
            <Footer/>
        </div>
    )
}

export default BaseLayout
