import { products } from "@/products"

export default function Products() {

    async function handleAddToCart (n: number) {
        if (products[n].quantity === 0) {
            const response = await fetch(`/api/oos`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({})
            })

            if (response.ok) return
        }
    }

    return (
        <div>
            <div className="container">
                <header>
                    <div className="title">PRODUCT LIST</div>
                    <div className="icon-cart">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"/>
                        </svg>   
                        <span>0</span>                               
                    </div>
                </header>

                {products.map((product, i) => {
                    return (
                        <div className="listProduct" key={i}>
                            <div className="item">
                                {/* <img src="images/1.png" alt=""> */}
                                <h2>{product.name}</h2>
                                <div className="price">{product.price}</div>
                                <button onClick={() => handleAddToCart(product.id)} className="addCart">
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    )
                })}

            </div>
            <div className="cartTab">
                <h1>Shopping Cart</h1>
                <div className="listCart">
                    <div className="item">
                        <div className="image">
                            {/* <img src="images/1.png" alt=""> */}
                        </div>
                        <div className="name">
                            NAME
                        </div>
                        <div className="totalPrice">
                            $200
                        </div>
                        <div className="quantity">
                            <span className="minus"></span>
                            <span>1</span>
                            <span className="plus"></span>
                        </div>
                    </div>
                </div>
                <div className="btn">
                    <button className="close">CLOSE</button>
                    <button className="checkOut">CHECK OUT</button>
                </div>
            </div>
        </div>
    )
}