import React from "react";
const Search=()=>{
return(

<React.Fragment>

<form>
    <div className="form-row">
                  <div className="col-3">
                    <label for="validationDefault01">Customer</label>
                    <input type="text" className="form-control" id="validationDefault01" placeholder="Enter Customer Name"/>
                  </div>
                  <div className="col-3">
                    <label for="validationDefault02">invoice ID</label>
                    <input type="number" className="form-control" id="validationDefault02"  placeholder="Enter invoice ID"/>
                  </div>
                  <div className="col-3">
                    <label for="validationDefault01">Start Date</label>
                    <input type="date" className="form-control" id="validationDefault01" placeholder="Start Date"/>
                  </div>
                  <div className="col-3">
                    <label for="validationDefault01">End Date</label>
                    <input type="date" className="form-control" id="validationDefault01"  placeholder="End Date"/>
                  </div>
                </div>
            </form>
</React.Fragment>


)}
export default Search;