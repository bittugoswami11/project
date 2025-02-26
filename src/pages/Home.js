import Navbar from "../components/Navbar";
import table_data from "./table.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHouse,faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
function Home(){
    
    return   (
    <div className="App">
    <FontAwesomeIcon icon={faHouse} color="black" size="2x" />
    <FontAwesomeIcon icon={faMagnifyingGlass} color="black" size="2x" />
    <Navbar />
    <h1>TABLE FOR BACKBANCHAER STUDENTS</h1>
        
    <table>
    <tr className="rowheading ">
            <th>Name</th>
            <th>Class</th>
            <th>Roll No.</th>
            <th>Subject</th>
        </tr>
        

    </table>

  </div>
    )   
}
export default Home;