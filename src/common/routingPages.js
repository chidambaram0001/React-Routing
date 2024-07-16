import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import React from 'react';
import Home from '../pages/home';
const RoutingPages = ({navigationDetails=[],key})=>{
    const routes = [];
    navigationDetails.forEach((element, idx) => {
       
        if(element.Children){
            const childRoute = []; 
            let idxEle = element.Children[0].path;
            childRoute.push(<Route index  key={idxEle+idx}  element={<Navigate replace to={idxEle}/>}/>)
            element.Children.forEach((ele,idx)=>{
                childRoute.push(<Route path={ele.path} key={ele+idx} element={<ele.Component/>}/>)
            })
            childRoute.push(<Route path="*" element={<Home />} />)
            routes.push(<Route  key={element+idx} path={element.path} element={<element.Component/>}>{childRoute}</Route>)
            
           
        }else{
            routes.push(<Route path={element.path} key={element+idx} element={<element.Component/>}/>)
        }
       
    });


    return(<>
  
        <Routes>
            {routes}
         </Routes>
 
         
        
    </>)
}

export default RoutingPages;