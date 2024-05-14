export function DisplayProduct({shoppingCart}){
    const {products} = shoppingCart;
    return(
        <ul>
            {products.map(product => (
                <li>
                    <img src={product.img} alt={product.pName ? product.pName : "Error!"}/>
                    <h2>{product.pName}</h2>
                    <p>Price:{product.price}</p>
                </li>
            ))}
        </ul>
    )
}