import Child from './Child';


export default function Parent() {

    function getDataFn(data) {
        console.log(data)

    }
       

    return (
        <Child onGetData={getDataFn} a="eugene" /> //pass the function to the child
    )
}





// const data_from_child = (data) => {
//     console.log(data); // or set the data to a state
// }