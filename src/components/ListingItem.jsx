import { Link } from "react-router-dom";
import { ReactComponent as DeleteIcon } from "../assets/svg/deleteIcon.svg";
import bedIcon from "../assets/svg/bedIcon.svg";
import bathtubIcon from "../assets/svg/bathtubIcon.svg";

const ListingItem = ({ listing, id }) => {
  return (
    <div>
      <li className="categoryListing">
        <Link to={`/category/${listing.type}/${id}`}>
          <div className="categoryListingLink">
            <img
              className="categoryListingImg"
              src={listing.imageUrls[0]}
              alt={listing.name}
            />
          </div>
        </Link>
      </li>
    </div>
  );
};

export default ListingItem;
