import Filters from "../filters/filters";
import Listing from "../listing/listing";
import Search from "../search/search";

function AllListings(){
    return(<>
        <Search></Search>
        <Filters></Filters>
        <Listing></Listing>
        <Listing></Listing>
        <Listing></Listing>
        <Listing></Listing>
    </>);
}
export default AllListings;