import React from "react";
const Sidebar=()=>{
return(
<React.Fragment>
<div class="col-2 sidebar">
         <h4>Medico Sales</h4>
         <ul>
            <li> <i className="fa-solid fa-table-columns"></i>Dashboard</li>
            <li><i className="fa-solid fa-vial"></i> Lab Test</li>
            <li><i className="fa-solid fa-calendar-xmark"></i> Appointment</li>
            <li><i className="fa-solid fa-suitcase-medical"></i> Medicine Order</li>
            <li><i className="fa-regular fa-envelope"></i> Message</li>
            <li><i className="fa-solid fa-wallet"></i> Payment</li>
            <li><i className="fa-solid fa-gear"></i> Settings</li>
         </ul>
         <div className="help"><i className="fa-regular fa-circle-question"></i>Help</div>       
        </div>
</React.Fragment>
)
}
export default Sidebar;