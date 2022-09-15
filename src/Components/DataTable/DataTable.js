import {React,useState} from 'react';
import classes from './DataTable.module.scss'

const DataTable = ({data,isLoading,fetchError,handleClickRow,headers}) => {

    return (
        <div className={classes.table_container}>
            <div className={classes.searchBar}>
                <div className={`mt-2 ${classes.containerFlex}`}>
                    <div className={`me-2 ${classes.searchInput}`}>
                        <input type="text" placeholder='البحث عن'/>
                    </div>
                    <div className={`ms-4 mt-1 text-white ${classes.itemsCounter}`}>
                        <p>العناصر : {data.length}</p>
                    </div>
                    <div className={classes.clear}></div>
                </div>
            </div>
            <table className={classes.table}>
                <thead>
                    <tr>
                    {headers.map((header)=>{
                        return(
                                <th>{header}</th>
                            )
                        })
                    }           
                    </tr>
                </thead>
                <tbody>
                    {data.map((item)=>{
                        return(
                            <tr key={item.id} onClick={handleClickRow}>
                                <td>{item.name}</td>
                                <td>{item.name}</td>
                                <td>{item.name}</td>
                            </tr>
                        )
                    })
                }   
                </tbody>
            </table>
            <div className={classes.tableFooter}></div>
        </div>
    );
};

export default DataTable;