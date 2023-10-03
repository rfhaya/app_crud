import React from 'react'
import Header from './Header';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

function UpdateArticles() {
    const navigate = useNavigate();

    const [data, setData] = useState([]);
    const [id, setId] = useState(useParams().id);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const [validationError,setValidationError] = useState({})
 
     
    useEffect(() => {
        axios.get(`http://localhost:8000/api/EditArticle/${id}`)
        .then(function (response) {
            let project = response.data
            setTitle(project.title);
            setContent(project.content);
        })
        .catch(function (error) {
            Swal.fire({
                 icon: 'error',
                title: 'An Error Occured!',
                showConfirmButton: false,
                timer: 1500
            })
        })
         
    }, [])

    const handleSave = async (e) => {
        e.preventDefault();
    
        const formData = new FormData()
        formData.append('_method', 'PUT');
        formData.append('title', title)
        formData.append('content', content)
    
        await axios.post(`http://localhost:8000/api/updateArticle/${id}`, formData).then(({data})=>{
          Swal.fire({
            icon:"success",
            text:"Data Berhasil di Edit",
            showConfirmButton: false,
            timer: 1500
          })
          navigate("/")
        }).catch(({response})=>{
          if(response.status===422){
            setValidationError(response.data.errors)
          }else{
            Swal.fire({
              text:response.data.message,
              icon:"error"
            })
          }
        })
      }

    return (
        <>
            {/* <!--wrapper--> */}
            <div className="wrapper">
                <Header></Header>

                {/* <!--start page wrapper --> */}
                <div className="page-wrapper">
                    <div className="page-content">
                        <div className="row listarticle">
                            <Link to='/' className="col-md-3 d-flex listing">
                                <div className="article-img">
                                    <img src="/assets/images/1.png" />
                                </div>

                                <div className="info ps-3">
                                    <p className="title-big mb-0">Article</p>
                                    <p className="title-small mb-0">List Article</p>
                                </div>
                            </Link> 

                            <Link to='/AddArticle' className="col-md-3 d-flex align-items-center listing listing active-list">
                                <div className="article-img  active-list-border">
                                    <img src="/assets/images/2.png" />
                                </div>

                                <div className="info ps-3">
                                    <p className="title-big mb-0  active-list-text">Add / Edit</p>
                                    <p className="title-small mb-0  active-list-text">Detail Article</p>
                                </div>
                            </Link>
                        </div>

                        <div className="row">
                            <div className="col mx-auto">
                                <div className="card border-top border-0 border-4">
                                    <div className="card-body p-5">
                                        <div className="card-title d-flex align-items-center">
                                            <h5 className="mb-0">Edit</h5>
                                        </div>
                                        <hr />

                                        <div className="row g-3">
                                            <div className="col-md-12">
                                                <label htmlFor="title" className="form-label">Title</label>
                                                <input type="text" className="form-control" value={title} onChange={(event)=>{setTitle(event.target.value)}}/>
                                            </div>

                                            <div className="col-md-12">
                                                <label htmlFor="Content" className="form-label">Content</label>
                                                <textarea className="form-control" value={content} onChange={(event)=>{setContent(event.target.value)}}/>
                                            </div>
                                            
                                            <div className="col-6">
                                                <button className="btn btn-success px-5" onClick={handleSave}>Save</button>
                                            </div>
                                        </div>
                                    </div>
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

export default UpdateArticles;