import './productList.css';
import { DataGrid } from '@mui/x-data-grid';
import { productRows } from '../../dummyData';
import { useState } from 'react';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
const ProductList = () => {

    const [data,setData] = useState(productRows) ;

    const handleDelete=(id)=> {
        setData(data.filter((item)=>item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 120 },
        {
          field: 'product',
          headerName: 'Product',
          width: 150,
          editable: true,
          renderCell :(params)=> {
            return (
                <div className="productList">
                    <img src={params.row.img} alt="" className="productImg" />
                    {params.row.name}
                </div>
            )
        }
    } ,
        {
          field: 'price',
          headerName: 'Price',
          width: 150,
          editable: true,
        },
        {
          field: 'status',
          headerName: 'Status',
          type: 'number',
          width: 110,
          editable: true,
        },
        {
          field: 'stock',
          headerName: 'Stock',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
        },
        {
          field: 'action',
          headerName: 'Action',
          width: 160,
          sortable: false,
         renderCell :(params)=> {
             return (
                 <>
                    <Link to="/product/:productId">
                     <button className='productListEdit'>Edit</button>
                    </Link>
                    <DeleteOutline className='productListDelete' onClick={()=>handleDelete(params.row.id)}/>
                 </>
             )
         }
        },
      ];
  return (
             <div className='productList'>
                 <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
      />
             </div>
  );
};

export default ProductList;
