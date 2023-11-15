import React from "react";
import Table from "./Table";

import Search from "./Search";

const Main=()=>{
    return(
<React.Fragment>
<div class="col-10 salesinfo">            
<input type="text" class="form-control longsearch" id="formGroupExampleInput" placeholder="Search..."/>
<div>  
<h5>Sales Information</h5>
<Search/>
<Table/>

</div>
</div>
    
    </React.Fragment>
    )
}
export default Main;