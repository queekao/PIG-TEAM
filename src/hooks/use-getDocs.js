import {useEffect, useState} from "react";
import {database} from "../firebaseConfig";
import {collection, getDocs} from "firebase/firestore";
// const getState = (state, action) => {
//   if (action.type === "SEND") {
//     return {
//       status: "pending",
//       data: null,
//       error: null,
//     };
//   }
//   if (action.type === "SUCCESS") {
//     return {
//       status: "success",
//       data: action.data,
//       error: null,
//     };
//   }
//   if (action.type === "ERROR") {
//     return {
//       status: "success",
//       data: action.data,
//       error: null,
//     };
//   }
// };
const useGetDocs = (fetchComp) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  //   const [request, dispatch] = useReducer(getState, {
  //     status: startWithPending ? "pending" : null,
  //     data: null,
  //     error: null,
  //   });
  const db = collection(database, fetchComp);
  useEffect(() => {
    const fetchPageContent = async () => {
      try {
        setIsLoading(true);
        const getData = await getDocs(db)
          .then((res) => {
            return res.docs.map((item) => {
              return {...item.data(), id: item.id};
            });
          })
          .catch((err) => {
            console.log(err);
            throw new Error(err);
          });
        const loadData = [];
        loadData.push(...getData);
        setData(loadData);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setError(err.message);
      }
    };
    fetchPageContent();
  }, []);
  //   if (isLoading) {
  //     return <p>Loading...</p>;
  //   }
  //   if (!isLoading && error) {
  //     return (
  //       <section>
  //         <p>{error}</p>
  //       </section>
  //     );
  //   }
  return {isLoading, error, data};
};
export default useGetDocs;
