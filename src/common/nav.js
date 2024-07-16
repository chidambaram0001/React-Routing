import { NavLink } from "react-router-dom";

const Navigation = ({navigationDetails =[]})=>{
    let list = []
    navigationDetails.forEach((element, idx) => {
        list.push(<li key={element.name+idx}><NavLink to={element.path} >{element.name}</NavLink></li>)
    });

    return(<nav>
        <ul>
        {list}
    </ul>
        </nav>)
}

export default Navigation;