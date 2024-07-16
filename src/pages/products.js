import RoutingPages from "../common/routingPages";
import Navigation from "../common/nav";

import { Outlet } from "react-router-dom";
const Products = ()=>{
    const routes = [{path:'/products/allproducts',
        name:'All Products',
       
      },
      {path:'addProduct/iphone',
          name:'Add Products',
        },
        {path:'editProduct/samsunng',
          name:'updateProduct',
        }]
    return(<div>
         <Navigation navigationDetails={routes}/>
        {/* <RoutingPages navigationDetails={routes}/> */}
       
      <Outlet/>
    </div>)
}

export default Products;