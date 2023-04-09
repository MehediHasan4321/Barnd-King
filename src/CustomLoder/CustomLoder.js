const lodaedOrderCart = async () => {
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
const lodedSmartWatch = async()=>{
    const lodedWatch = await fetch('smartWatch.json');
    const allSmartWatch = lodedWatch.json()
    return allSmartWatch
}

const lodedProductDetails = async ()=>{
    const lodedDetails = await fetch('product.json');
    const productDetails = await lodedDetails.json()
    const saveProduct = localStorage.getItem('productDetailId');
    const getProduct = productDetails.find(pro=>pro.id === saveProduct)
    return getProduct
}

const getOrderCart= ()=>{
    let order = {}
    const storedOrder = localStorage.getItem('orderedCart')
    if(storedOrder){
       order = JSON.parse(storedOrder)
    }
    return order
}

const getInnerTextById=id=>{
    const strTxt = document.getElementById(id).innerText;
    const numTex = parseFloat(strTxt)
    return numTex
}
export { lodaedOrderCart , getOrderCart ,lodedProductDetails,getInnerTextById,lodedSmartWatch}