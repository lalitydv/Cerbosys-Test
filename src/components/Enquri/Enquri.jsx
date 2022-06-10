import React, { useState, useEffect } from "react";
import axios from "axios";

const Enquri = () => {
  const [data, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [postsPerPage] = useState(10);

  //Get
  const fetchData = async (query) => {
    await axios
      .get(`https://cerbosys.in:3700/cerbosys/getAllEnquiry`, {
        // params: {
        //   page: currentPage,
        //   limit: postsPerPage,
        //   ...query,
        // },
      })
      .then((res) => {
        const response = res.data.data;
        console.log(response);
        setUsers(response);
        setTotal(res.data.data.count);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="gap-40 p-20 pl-56">
      <h1 className="font-bold text-2xl ">Enquri</h1>
      <table className="table-fixed gap-20 ">
        <thead>
          <tr>
            <th>s.no</th>
            <th>fist name</th>
            <th>last Name</th>
            <th>Phone Number</th>
            <th>email</th>
            <th>enquirystatus</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, index) => (
            <tr key={index}>
              <td>{val.enquiry_id}</td>
              <td>{val.first_name}</td>
              <td>{val.last_name}</td>
              <td>{val.contact_number}</td>
              <td>{val.email}</td>
              <td>{val.enquiry_status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Enquri;
