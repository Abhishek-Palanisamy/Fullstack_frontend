import React, { Component } from 'react';
import './Getdata.css';
class Getdata extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:8080/Beverages/getbeverages')
      .then(response => response.json())
      .then(data => {
        this.setState({ data: data });
      })
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div>
      <center>
        <h2>Products Details</h2>
        <br/>
        <table className='table'>
        <tr>
        <th>Product ID</th>
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
        <th>Product Name</th>
        &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
        <th>Quantity</th>
        &nbsp;
        <th>Price</th>

        </tr>
        
        <tr>
        <td>
          {this.state.data.map(item => (
            <p key={item.id}>{item.productId}</p>
          ))}
          </td>
          &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
          <td>      
          {this.state.data.map(item => (
          <p key={item.id}>{item.name}</p>
          ))}</td>

          &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
          <td>      
          {this.state.data.map(item => (
          <p key={item.id}>{item.quantity}</p>
          ))}</td>
          
          &ensp;&nbsp;&ensp;&nbsp;&ensp;&nbsp;
          <td>      
          {this.state.data.map(item => (
          <p key={item.id}>{item.price}</p>
          ))}</td>

          </tr>
        </table>
        </center>
      </div>
    );
  }
}

export default Getdata;
