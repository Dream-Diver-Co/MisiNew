import React from 'react'
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Link from 'next/link';
const page = () => {
  return (
    <div>
            <div className="row m-3 align-items-center justify-content-center" style={{ minHeight: '600px' }}>

                <div className="col-md-6 border rounded shadow p-4">
                    <h2 className="text-center"> Forgot </h2>

                    <div className="floating-window-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="inputEmail" className="form-label">Email</label>
                                <input type="email" name="email" className="form-control" id="inputEmail" placeholder="Enter Email address" value="" />
                            </div>
                            <a className="btn-next btn btn-dark">Send code<BiRightArrowAlt className="ms-1" /></a>

                        </form>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default page