import {Outlet} from 'react-router-dom'
import Navigation from './Navigation'
const Root = () =>{
    return (<>
    <Navigation/>
    <Outlet/>
    </>)
}
export default Root;