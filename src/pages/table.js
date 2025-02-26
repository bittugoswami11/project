import React from "react";
import tabledata from "./table.json"
import select from "../practice/select";
function Table(){
    const TableList = tabledata.data

    return(
        <div>
            select:<select/>
            <table>
                <tr className="text-cyan-300 bg-black">
<td>Name</td>
<td>Class</td>
<td>Subject</td>
<td>Roll_no</td>
                </tr>

        {TableList.map(function (data){
            return(
                <tr>
                <td>{data.name}</td>
                <td>{data.class}</td>
                <td>{data.subject}</td>
                <td>{data.roll}</td>
                </tr>
            )
        })
        }
            </table>
        </div>
    )
}

export default Table;
























































