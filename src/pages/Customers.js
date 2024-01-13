import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Outlet } from 'react-router-dom';

function Customers() {

    const [customers, setCustomers] = useState([]);

    // once when page is rendered
    useEffect(() => {
        async function getCustomers() {
            // const response = await fetch("https://northwind.vercel.app/api/customers").then((res) => res.json());
            const response = await axios.get("https://northwind.vercel.app/api/customers")
            setCustomers(response?.data || []);
        }
        getCustomers();
    }, []);

  return (
    <div className="App">
      <h1>Customers</h1>
      <Outlet />
      <br/>
      <table id="customers">
        <thead>
          <tr>
            <th>SI.No.</th>
            <th>Name</th>
            <th>Contact Name</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((item, index) => (
            <tr key={index+item.companyName}>
              <td>{index + 1}</td>
              <td>{item.companyName}</td>
              <td>{item.contactName}</td>
              <td>{item.address.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Customers