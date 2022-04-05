{/* Adding the product. */}
export const addItem = (product) => {
    return {
        type : "ADDITEM",
        payload : product
    }
}

{/* Deleting the product. */}
export const delItem = (product) => {
    return {
        type : "DELITEM",
        payload : product
    }
}