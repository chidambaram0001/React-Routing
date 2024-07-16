import { Outlet } from 'react-router-dom';
import Navigation from '../common/nav';
const InventryReport = ()=>{
    const routes = [{path:'/Allinventry',
        name:'All Products',
       
      },
      {path:'/mobileInventry',
          name:'Add Products',
         
        }]
    return(<div>
         <Navigation navigationDetails={routes}/>
        {/* <RoutingPages navigationDetails={routes}/> */}
       
      <Outlet/>
    </div>)
}

export default InventryReport;