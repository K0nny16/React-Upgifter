import { DisplayProduct } from "./displayProducts.jsx";
import {Buttons} from "./buttons.jsx";

export function App(){
    const shoppingCart = {
        products : [
            {img:"https://thebestadirondackchair.com/cdn/shop/products/IMG_3208_64878bbf-2e84-40ee-9830-db980a35e805_256x.jpg?v=1678319352",pName:"Chair",price:100},
            {img:"https://media.lekia.se/lekia/images/g_bigb_800001303_1/0/0/0/big-bobby-car-classic-rod.jpg",pName:"Ferrari",price:200},
            {img:"https://www.scstyling.com/_next/image?url=https%3A%2F%2Fomnium.blob.core.windows.net%2Fscstylingproducts%2FSCO01338%2Fpub_images-original-SCO01338_1.jpg&w=256&q=75",pName:"Tröja",price:501},
            {img:"https://images.prod.babyshopgroup.io/images/PM-52903%23a/256x256.jpeg",pName:"Byxa",price:200},
            {img:"https://img.eobuwie.cloud/eob_product_256w_256h(b/4/6/5/b465aead9bdf06f985e4a71841998a28f6578552_20_8720644247570_MJ.jpg,jpg)/hatt-tommy-jeans-am0am11180-bds-8720644247570.jpg",pName:"Hat",price:404}
        ]
    }
    return(
        <>
            <h1>Shopping Cart!</h1>
            <DisplayProduct shoppingCart={shoppingCart}/>
            <Buttons/>
        </>
    )
}