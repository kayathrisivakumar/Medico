import React from "react";
const Tablebody=({invoice,date,customer,payable_amount,paid_amount,Due})=>{
return(
<tr className="table">            

                    
                    <td scope="col"><input type="checkbox"/></td>
                    <td scope="col">{invoice}</td>
                    <td scope="col">{date}</td>
                    <td scope="col">{customer}</td>
                    <td scope="col">{payable_amount}</td>
                    <td scope="col">{paid_amount}</td>
                    <td scope="col">{Due}</td>
                 
                  
                  
</tr>


)}
export default Tablebody;