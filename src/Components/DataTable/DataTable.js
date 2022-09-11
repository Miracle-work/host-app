import {React,useState} from 'react';
import classes from './DataTable.module.scss'

const DataTable = ({data,isLoading,fetchError,handleClickRow,headers}) => {
    const [record, setRecord]=useState({})
    return (
        <div className={classes.table_container}>
            {/* <div className={classes.searchBar}>
                <input type="text" />
                <p>العناصر : {data.length}</p>
            </div> */}
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
        </div>
    );
};

export default DataTable;