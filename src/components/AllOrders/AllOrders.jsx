export default function AllOrders() {
  return (
    <>
      <table className="table table-hover shadow ">
        <thead>
          <tr>
            <th scope="col"> Id </th>
            <th scope="col"> Date </th>
            <th scope="col"> Desk</th>
            <th scope="col"> Amount </th>
            <th scope="col"> Status </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row">1</td>
            <td> 26 March 2020, 12:42 AM</td>
            <td>2</td>
            <td>260$</td>
            <td>
              <button className=""> on Delivery </button>
            </td>
          </tr>
          <tr>
            <td scope="row">2</td>
            <td> 26 March 2020, 12:42 AM</td>
            <td>3</td>
            <td>270$</td>
            <td>
              <button className="p-1"> on Delivery </button>
            </td>
          </tr>
          <tr>
            <td scope="row">3</td>
            <td> 26 March 2020, 12:42 AM</td>
            <td>4</td>
            <td>290$</td>
            <td>
              <button className="p-1"> New Order </button>
            </td>
          </tr>

          <tr>
            <td scope="row">1</td>
            <td> 26 March 2020, 12:42 AM</td>
            <td>2</td>
            <td>260$</td>
            <td>
              <button className=""> on Delivery </button>
            </td>
          </tr>
          <tr>
            <td scope="row">2</td>
            <td> 26 March 2020, 12:42 AM</td>
            <td>3</td>
            <td>270$</td>
            <td>
              <button className="p-1"> on Delivery </button>
            </td>
          </tr>
          <tr>
            <td scope="row">3</td>
            <td> 26 March 2020, 12:42 AM</td>
            <td>4</td>
            <td>290$</td>
            <td>
              <button className="p-1"> New Order </button>
            </td>
          </tr>
          <tr>
            <td scope="row">1</td>
            <td> 26 March 2020, 12:42 AM</td>
            <td>2</td>
            <td>260$</td>
            <td>
              <button className=""> on Delivery </button>
            </td>
          </tr>
          <tr>
            <td scope="row">2</td>
            <td> 26 March 2020, 12:42 AM</td>
            <td>3</td>
            <td>270$</td>
            <td>
              <button className="p-1"> on Delivery </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="pagi">
        <button className="mr-1">Previos </button>
        <button>1 </button>
        <button>2 </button>
        <button>3 </button>
        <button>Next</button>
      </div>
    </>
  );
}
