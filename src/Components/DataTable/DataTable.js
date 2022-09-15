import {React,useState} from 'react';
import classes from './DataTable.module.scss'
import { AiOutlineSearch } from "react-icons/ai";

const DataTable = ({data,isLoading,fetchError,handleClickRow,headers}) => {

    return (
        <div className={classes.table_container}>
            <div className={classes.searchBar}>
                <div className={`mt-2 ${classes.containerFlex}`}>
                    <div className={`me-2 ${classes.searchInput}`}>
                        <AiOutlineSearch className={classes.icon}/>
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
            <div className={classes.tableFooter}>
                <div className={`float-start ${classes.selectItems}`} dir='rtl'>
                    <select>
                        <option>عدد العناصر : 10</option>
                        <option>20</option>
                        <option>30</option>
                        <option>40</option>
                    </select>
                </div>
                <div className={`float-end ${classes.paginateContainer}`}>
                    <nav aria-label="Page navigation example">
                        <ul className={`pagination ${classes.paginationList}`}>
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&#8677;</span>
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&#xbb;</span>
                                </a>
                            </li>
                            <li className="page-item">
                                <a className={`page-link ${classes.active}`} href="#">1</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&#xab;</span>
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&#8676;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={classes.clear}></div>
            </div>
        </div>
    );
};

export default DataTable;