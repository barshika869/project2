import React, { createContext, useState } from 'react'


export const CartContext = createContext()


export function CartProvider({children}){
const [items, setItems] = useState([])


function addItem(product){
setItems(prev => {
const found = prev.find(p=>p.id===product.id)
if(found) return prev.map(p=>p.id===product.id?{...p,qty:p.qty+1}:p)
return [...prev, {...product, qty:1}]
})
}


function removeItem(id){
setItems(prev => prev.filter(p=>p.id!==id))
}


return (
<CartContext.Provider value={{items, addItem, removeItem}}>
{children}
</CartContext.Provider>
)
}