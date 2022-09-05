import React from 'react';
import classes from './DataTable.module.scss'
const DataTable = ({data,isLoading,fetchError}) => {
    return (
        <div className={classes.table_container}>
            <table className={classes.table}>
                <thead>
                    <tr>
                        <th>الكود</th>
                        <th>الاسم</th>
                        <th>رقم الحساب</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item)=>{
                        return(
                            <tr key={item.id}>
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