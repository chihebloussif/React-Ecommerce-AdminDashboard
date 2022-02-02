import React from 'react';
import './userList.css';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline} from '@material-ui/icons';
import { userRows } from '../../dummyData';
import { useState } from 'react';

const UserList = () => {
       const [data,setData] = useState(userRows);
       const handleDelete=(id)=> {
           setData(data.filter((item)=>item.id !== id))
       }
    const columns = [
        { field: 'id', headerName: 'ID', width: 120 },
        {
          field: 'firstName',
          headerName: 'First name',
          width: 150,
          editable: true,
        },
        {
          field: 'lastName',
          headerName: 'Last name',
          width: 150,
          editable: true,
        },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 110,
          editable: true,
        },
        {
          field: 'fullName',
          headerName: 'Full name',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
          valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
        {
          field: 'action',
          headerName: 'Action',
          width: 160,
          sortable: false,
         renderCell :(params)=> {
             return (
                 <>
                   <Link to='/user/:userId'>
                     <button className='userListEdit'>Edit</button>
                   </Link>
                   <DeleteOutline className='userListDelete' onClick={()=>handleDelete(params.row.id)}/>
                 </>
             )
         }
        },
      ];
      
      
      
    return (
        <div className='userList' style={{ height: 600, width: '100%' }}>
            <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
      />
        </div>
    )
}

export default UserList
