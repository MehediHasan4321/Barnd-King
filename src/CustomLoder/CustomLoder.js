const lodedData = async () => {
    const lodateCart = await fetch('product.json')
    const orderedCart = await lodateCart.json()
    const saveOrderId = JSON.parse(localStorage.getItem('orderedCart'))
    const orderCart = []
    for (const id in saveOrderId) {
        const saveOrderCart = orderedCart.find(pro => pro.id === id)
        orderCart.push(saveOrderCart)
    }
    return orderCart
}
const getOrderCart= ()=>{
    let order = {}
    const storedOrder = localStorage.getItem('orderedCart')
    if(storedOrder){
       order = JSON.parse(storedOrder)
    }

    return order
}
export { lodedData , getOrderCart}