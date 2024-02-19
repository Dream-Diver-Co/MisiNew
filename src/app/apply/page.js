import React from 'react'
import Head from 'next/head'
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Link from 'next/link';
const page = () => {
  return (
    <div>

            <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center" style={{ fontSize: '3rem' }}>
                    <div className="btn btn-link" style={{ fontSize: '3rem' }}> <BiLeftArrowAlt /></div>
                    Vacancies
                </div>
            </div>
            <div className="row align-items-center justify-content-center" style={{ minHeight: '600px' }}>

                <div className="col-md-6 border m-3 rounded shadow p-4">
                    <h2 className="text-center"> Apply Now </h2>

                    <div className="floating-window-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="inputName" className="form-label">Name</label>
                                <input type="text" name="name" className="form-control" id="inputName" placeholder="" value="" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputEmail" className="form-label">Email</label>
                                <input type="email" name="email" className="form-control" id="inputEmail" placeholder="Email" value="" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputPhone" className="form-label">Phone</label>
                                <input type="text" name="phone" className="form-control" id="inputPhone" placeholder="Phone" value=""  />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="inputPhone" className="form-label">Post name</label>
                                <input type="text" name="phone" className="form-control" id="inputPhone" placeholder="Post Name" value=""  />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="inputPhone" className="form-label">CV</label>
                                <input type="file" name="phone" className="form-control" id="inputPhone" placeholder="Phone" value="" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputPhone" className="form-label">Identity Card</label>
                                <input type="file" name="phone" className="form-control" id="inputPhone" placeholder="Phone" value="" />
                            </div>
                            <a className="btn-next btn btn-dark">Submit<BiRightArrowAlt className="ms-1" /></a>

                        </form>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default page