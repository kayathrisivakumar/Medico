import React from "react";
import Tablebody from "./Tablebody";
import {Tableinfo} from "./Constants"
const Table=()=>{
    return(
     <React.Fragment>
            <table className="table">
                <thead>
                  <tr>
                    <th scope="col"><input type="checkbox"/></th>
                    <th scope="col">Invoice ID</th>
                    <th scope="col">Date</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Payable Amount</th>
                    <th scope="col">Paid Amount</th>
                    <th scope="col">Due</th>
                  </tr>
                </thead>
                <tbody>
                {Tableinfo.map((element,index)=>{
return(<Tablebody{...element} key={index} />)

})}
                </tbody>
            </table>
       
     </React.Fragment>
    )
}
export default Table;