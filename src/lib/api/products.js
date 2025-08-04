export async function fetchProducts(){
try {
    // get the response
    const response  = await fetch('https://fakestoreapi.com/products');
    // throw error
    if(!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    // parse and return the data
    const data = await response.json();
    console.log(data);
    return data;
} catch (error) {
    console.error('Fetch Failed:', error);
    return error;
}
}