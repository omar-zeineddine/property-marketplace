import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import { async, FirebaseError } from "@firebase/util";

const Category = () => {
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    const fetListings = async () => {
      try {
        // get reference
        const listingsRef = collection(db, "listings");

        // create a query
        const q = query(
          listingsRef,
          where("type", "==", params.CategoryName),
          orderBy("timestamp", "desc"),
          limit(10)
        );
        // execute query
        const querySnap = await getDocs(q);
        const listings = [];
        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setListings(listings);
        setLoading(false);
      } catch (err) {
        toast.error("could not fetch listings");
      }
    };
  }, []);
  return (
    <div className="category">
      <header>
        <p className="pageHeader">
          {params.CategoryName === "rent"
            ? "Places for rent"
            : "Places for sale"}
        </p>
      </header>
    </div>
  );
};

export default Category;
