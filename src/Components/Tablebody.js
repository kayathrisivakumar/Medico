import React from "react";
const Tablebody=({invoice,date,customer,payable_amount,paid_amount,Due})=>{
return(
<tr className="table">            

                    
                    <th scope="col"><input type="checkbox"/></th>
                    <th scope="col">{invoice}</th>
                    <th scope="col">{date}</th>
                    <th scope="col">{customer}</th>
                    <th scope="col">{payable_amount}</th>
                    <th scope="col">{paid_amount}</th>
                    <th scope="col">{Due}</th>
                 
                  
                  
</tr>


)}
export default Tablebody;