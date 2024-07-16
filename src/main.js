import { BrowserRouter as Router, Routes,Route, Outlet } from 'react-router-dom';
import Navigation from './common/nav';
import RoutingPages from './common/routingPages';
import Dashboard from './pages/dashboard';
import CustomerReport from './pages/customerReport';
import Products from './pages/products';
import UserList from './pages/userlist';
import InventryReport from './pages/inventryReport';
import VendorList from './pages/vendorlist';
import ProductList from "./pages/products/productlist";
import AddProduct from "./pages/products/addproduct";
import AllInventry from './pages/inventry/allinventry';
import MobileInventry from './pages/inventry/mobileInventry'
import Login from './pages/login/login';


const Main = ()=>{
    const routes = [
        {path:'/',
        name:'DashBoard',
        Component: Dashboard 
      },
      {path:'/products',
          name:'Products',
          Component: Products,
          Children: [{path:'/products/allproducts',
            name:'All Products',
            Component: ProductList 
          },
          {path:'addProduct/:id',
              name:'Add Products',
              Component: AddProduct
            },
            {path:'editProduct/:id',
              name:'updateProduct',
              Component: AddProduct  
            }]
        },
        {path:'/inventryreport',
          name:'Inventry Reports',
          Component: InventryReport,
          Children: [{path:'/inventryreport/allinventry',
            name:'All Inventry',
            Component: AllInventry 
          },
          {path:'mobileinventry',
              name:'Mobile Inventry',
              Component: MobileInventry
            }]  
        },{path:'/customerreport',
          name:'Customer Issue Reports',
          Component: CustomerReport  
        },
        {path:'/vendorlist',
          name:'Vendor List',
          Component: VendorList  
        },
        {path:'/userlist',
          name:'User List',
          Component: UserList  
        }]



 return (
  <div className='app'>
   
      
     <header className="App-header">
      <div className='logo'>My Logo</div>
      <div className='userInfo'>User</div>
      </header>
    <aside>
        <Navigation navigationDetails={routes}/>
    </aside>
    <section>
     <h1>test</h1>
     <RoutingPages  navigationDetails={routes}/>
    
    </section>
{/*       
      <Route path='/login' element={<Login/>}/>
  
    <Outlet/> */}
  </div>
        

    
     
  );
}

export default Main;