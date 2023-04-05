const lodedData=async ()=>{
    const lodateCart = await fetch('product.json')
    const orderedCart = await lodateCart.json()
    const saveOrderId = JSON.parse(localStorage.getItem('orderedCart'))
    const orderCart = []
    for(const id of saveOrderId){
        const saveOrderCart =  orderedCart.find(pro=>pro.id === id)
        orderCart.push(saveOrderCart)
    }
    return orderCart
}

export default lodedData