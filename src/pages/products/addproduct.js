import { useNavigate, useParams } from "react-router-dom";

const AddProduct = ()=>{
    const {id} = useParams();

    //const nav = useNavigate();
    const handleBack = ()=>{
   //     nav("/products")
    }
    return(<>Product Add goes here <br/>
    <h1>{id} added</h1>
    <button onClick={()=>handleBack()}> Back </button>
    </>)
}

export default AddProduct;