import React from 'react'
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
const page = () => {
  return (
    <div>
            <div className='pb-5' style={{ minHeight: '500px', paddingTop: '100px' }}>
                <div className='row align-items-center justify-content-center'>
                    <div className='col-sm-8 border rounded shadow p-4'>
                        <nav>
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <button className="nav-link active" id="nav-details-tab" data-bs-toggle="tab" data-bs-target="#nav-details" type="button" role="tab" aria-controls="nav-home" aria-selected="true">profileDetails</button>
                                <button className="nav-link" style={{ textTransform: 'uppercase' }} id="nav-booking-tab" data-bs-toggle="tab" data-bs-target="#nav-booking" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Bookings</button>
                            </div>
                        </nav>
                        <div className="tab-content mt-3" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-details" role="tabpanel" aria-labelledby="nav-details-tab">
                                <h1>PROFILE DETAILS</h1>
                                <hr />
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="inputName" className="form-label">bookingName</label>
                                        <input type="text" name="name" className="form-control" id="inputName" placeholder="Name" value='' />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="inputEmail" className="form-label">{state.text.bookingEmail}</label>
                                        <input type="email" name="email" className="form-control" id="inputEmail" placeholder={state.text.bookingEmailPlaceholder} value={formData.email} onChange={(e) => setSetFromData({ ...formData, email: e.target.value })} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="inputPassword" className="form-label">{state.text.bookingPassword}</label>
                                        <input type="password" name="password" className="form-control" id="inputPassword" placeholder={state.text.bookingPasswordPlaceholder} value={formData.password} onChange={(e) => setSetFromData({ ...formData, password: e.target.value })} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="inputPhone" className="form-label">{state.text.bookingPhone}</label>
                                        <input type="text" name="phone" className="form-control" id="inputPhone" placeholder={state.text.bookingPhonePlaceholder} value={formData.phone} onChange={(e) => setSetFromData({ ...formData, phone: e.target.value })} />
                                    </div>

                                    <a className="btn-next btn btn-dark" onClick={onSignup}>{state.text.saveChangesText}<BiRightArrowAlt className="ms-1" /></a>

                                </form>
                            </div>
                            <div className="tab-pane fade" id="nav-booking" role="tabpanel" aria-labelledby="nav-booking-tab">
                                <h1>{state.text.Bookings}</h1>
                                <div className='table-responsive'>
                                    <table className='table table-light'>
                                        <thead>

                                            <tr>
                                                <th> {state.text.bookingDateTime} </th>
                                                <th> {state.text.bookingServices} </th>
                                                <th> {state.text.bookingDuration} </th>
                                                <th> {state.text.stylist} </th>
                                                <th> {state.text.bookingTotalPrice} </th>
                                                <th> {state.text.Status} </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {bookings.map((booking, index) => (
                                                <tr key={index}>
                                                    <td> {booking.data.booking_time} </td>
                                                    <td> {booking.data.services?.map((service, index2) => (
                                                        <div key={index2}> {state.locale == 'en' ? service.data.name_en : service.data.name} </div>
                                                    ))} </td>
                                                    <td> {booking.data.duration} min </td>
                                                    <td> {booking.data.server?.data.name} </td>
                                                    <td> {`€${parseInt(booking.data.charge).toFixed(2)}`} </td>
                                                    <td> {booking.data.payment_status} </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
  )
}

export default page