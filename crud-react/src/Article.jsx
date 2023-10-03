import React, { useState, useEffect } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

function Article() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
      getData();
    }, []);
    
    const deleteOperation = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You can't undo this action!",
            icon: 'warning',
            confirmButtonText: 'Yes, delete it!',
            showCancelButton: true,
            confirmButtonColor: '#ff0000',
            cancelButtonColor: '#c7c7c7',
        
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:8000/api/delete/${id}`)
                .then(function (response) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Project deleted successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    getData();
                    navigate("/");
                })
                .catch(function (error) {
                    Swal.fire({
                         icon: 'error',
                        title: 'An Error Occured!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                });
            }
        })
    }

    const getData = () => {
        axios.get('http://localhost:8000/api/listArticle')
        .then(function (response) {
          setData(response.data);
        })
        .catch(function (error) {
          console.log(error);
        })
    }

    async function getSearchResult(key, signal) {
        let result = await fetch("http://localhost:8000/api/search/" + key, {signal})

        result = await result.json();
        setData(result);
    }

    useEffect(
        function () {
          let controller = new AbortController();
          let signal = controller.signal;
          getData();

          getSearchResult(search, signal).catch((error) => {
            getData()
          });
          return () => controller.abort();
        },
        [search]
    );

    return (
        <>
            {/* <!--wrapper--> */}
            <div className="wrapper">
                <Header></Header>

                {/* <!--start page wrapper --> */}
                <div className="page-wrapper">
                    <div className="page-content">
                        <div className="row listarticle">
                            <Link to='/' className="col-md-3 d-flex listing active-list">
                                <div className="article-img active-list-border">
                                    <img src="assets/images/1.png" />
                                </div>

                                <div className="info ps-3">
                                    <p className="title-big mb-0  active-list-text">Article</p>
                                    <p className="title-small mb-0  active-list-text">List Article</p>
                                </div>
                            </Link> 

                            <Link to='/AddArticle' className="col-md-3 d-flex align-items-center listing">
                                <div className="article-img">
                                    <img src="assets/images/2.png" />
                                </div>

                                <div className="info ps-3">
                                    <p className="title-big mb-0">Add / Edit</p>
                                    <p className="title-small mb-0">Detail Article</p>
                                </div>
                            </Link>
                        </div>

                        
                        <div className="card">
                            <div className="card-body">
                                <div className="row justify-content-end align-items-center mb-4 top-table">
                                    <div className="col-8">
                                        <input type="text" className="form-control" onChange={(event) => setSearch(event.target.value)} placeholder="Search Title Here"/>
                                    </div>

                                    <div className="col">
                                        <div className="dropdown">
                                            <button className="btn btn-primary-calendar dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className='bx bx-calendar'></i> 2023</button>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">2022</a>
                                                </li>
                                                <li><a className="dropdown-item" href="#">2021</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <Link to='/AddArticle' className="btn btn-primary-tambah radius-30 mt-2 mt-lg-0">
                                            <i className='bx bx-plus'></i> Add
                                        </Link>
                                    </div>
                                </div>

                                <div className="table-responsive">
                                    <table id="datatabel" className="table table-bordered mb-0 datatable_style">
                                        <thead>
                                            <tr>
                                                <th>No.</th>
                                                <th>Date</th>
                                                <th>Title</th>
                                                <th>Content</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>

                                        {data.map((item) => (
                                            <tbody key={Math.random()} className="tbody_style">
                                                <tr>
                                                    <td>{item.id}</td>
                                                    <td>{dayjs(item.date).format("MM/DD/YYYY")}</td>
                                                    <td style={{overflow: 'hidden', textOverflow: 'ellipsis'}}>{item.title.substring(0, 20)}</td>
                                                    <td style={{overflow: 'hidden', textOverflow: 'ellipsis'}}>{item.content.substring(0, 20)}</td>
                                                    <td>
                                                        <div className="order-actions">
                                                            <Link to = {`/EditArticle/${item.id}`} className="btn-edit"><i className='bx bxs-edit'></i></Link>
                                                            <a onClick={() => deleteOperation(item.id)} className="btn-delete ms-1"><i className='bx bxs-trash'></i></a>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        ))}
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--end page wrapper --> */}

                {/* <!--start overlay--> */}
                <div className="overlay toggle-icon"></div>
                {/* <!--end overlay--> */}
                
                {/* <!--Start Back To Top Button--> */}
                <a href="#" className="back-to-top"><i className='bx bxs-up-arrow-alt'></i></a>
                {/* <!--End Back To Top Button--> */}
                
            </div>
            {/* <!--end wrapper--> */}
        </>
        
    );
}

export default Article;