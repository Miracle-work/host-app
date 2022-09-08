import {React,useState} from 'react';
import classes from './DataTable.module.scss'
import { ImArrowDown } from "react-icons/im";

const DataTable = ({data,isLoading,fetchError,handleClickColumn}) => {
    return (
        <div className={classes.table_container}>
            {/* <div className={classes.searchBar}>
                <input type="text" />
                <p>العناصر : {data.length}</p>
            </div> */}
            <table className={classes.table}>
                <thead>
                    <tr>
                        <th>الكود</th>
                        <th>الاسم <ImArrowDown className={classes.down_arrow_icon} /></th>
                        <th>رقم الحساب</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item)=>{
                        return(
                            <tr key={item.id} onClick={handleClickColumn}>
                                <td>{item.name}</td>
                                <td>{item.name}</td>
                                <td>{item.name}</td>
                            </tr>
                        )
                    })
                }   
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;