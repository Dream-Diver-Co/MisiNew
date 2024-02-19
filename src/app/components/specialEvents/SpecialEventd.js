'use client'
import React, { useContext, useEffect,useState } from 'react'
import Link from 'next/link';
import Countdown from "react-countdown";
import '../../page.module.css'
import '../../booking.css'
import '../../embala.css'
import '../../globals.css'
import '../../IdealBankSectionStyles.css'
import '../../responsive.css'
import '../../styles.css'
const SpecialEventd = () => {
    const [events, setEvents] = useState([
        {
            id: 1,
            title: "Neuro Seminar",
            description: '',
            image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            startDate: new Date('May 15, 2023').toDateString(),
            endDate: new Date('May 18, 2023').toDateString(),
        },
        {
            id: 2,
            title: "Neuro Seminar 2",
            description: '',
            image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            startDate: new Date('May 20, 2023').toDateString(),
            endDate: new Date('May 25, 2022').toDateString(),

        },
        {
            id: 3,
            title: "Health workshop",
            description: '',
            image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            startDate: new Date('May 20, 2023').toDateString(),
            endDate: new Date('May 25, 2023').toDateString(),

        }
    ])
  return (
    <div className='w-100' id='special'>
        <div className='pt-5 rounded' style={{ backdropFilter: 'brightness(0) grayscale(100%)' }}>
            <div className='text-center text-light my-5'>
            <h1> <span className='text-danger' style={{ fontFamily: 'Grape Nuts' }}>Upcoming</span> Events</h1>
            </div>
            <div id="specialCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ height: '50vh', overflow: 'hidden' }}>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#specialCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#specialCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#specialCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                {events.map((event, index) => (
                            <React.Fragment key={event.id}>
                                {index == 0 ? (
                                    <div data-bs-interval="2000" className="carousel-item active">
                                        <div className='row justify-content-center align-items-center h-100'>
                                            <div className='col-md-6'>
                                                <div className='row align-items-stretch' style={{ height: '350px', overflow: 'hidden', borderRadius: '10px', position: 'relative' }}>
                                                    <div className='eventDate' style={{zIndex: '9'}}>
                                                        <div className='eventDateText'>
                                                            {event.startDate}
                                                        </div>
                                                    </div>
                                                    <div className='col-12 p-0 h-100' style={{ overflow: 'hidden' }}>
                                                        <img className="w-100 h-100" style={{ objectFit: 'cover' }} src={`${event.image}`} alt="Image Title" />
                                                    </div>
                                                    <div className='col-12 m-0 p-0 bg-white row align-items-center justify-content-center' style={{position: 'absolute', top: '63px', opacity: '0.777'}}>
                                                        <div className='text-center col-11'>
                                                            <h1 className="text-dark text-uppercase fw-bold">{event.title}</h1>
                                                            <div className='text-dark'>
                                                                {event.description}
                                                            </div>
                                                            <div className='row text-center mt-1'>
                                                                <div className='col-3'>
                                                                    <h1 className='text-danger'>
                                                                        <Countdown date={event.startDate} renderer={({ days, hours, minutes, seconds }) => {
                                                                            return <span>{days}</span>;
                                                                        }} />
                                                                    </h1>
                                                                    <h6 className='text-secondary text-uppercase'>Days</h6>
                                                                </div>
                                                                <div className='col-3'>
                                                                    <h1 className='text-danger'>
                                                                        <Countdown date={event.startDate} renderer={({ days, hours, minutes, seconds }) => {
                                                                            return <span>{hours}</span>;
                                                                        }} />
                                                                    </h1>
                                                                    <h6 className='text-secondary text-uppercase'>Hours</h6>
                                                                </div>
                                                                <div className='col-3'>
                                                                    <h1 className='text-danger'>
                                                                        <Countdown date={event.startDate} renderer={({ days, hours, minutes, seconds }) => {
                                                                            return <span>{minutes}</span>;
                                                                        }} />
                                                                    </h1>
                                                                    <h6 className='text-secondary text-uppercase'>Minuets</h6>
                                                                </div>
                                                                <div className='col-3'>
                                                                    <h1 className='text-danger'>
                                                                        <Countdown date={event.startDate} renderer={({ days, hours, minutes, seconds }) => {
                                                                            return <span>{seconds}</span>;
                                                                        }} />
                                                                    </h1>
                                                                    <h6 className='text-secondary text-uppercase'>Seconds</h6>
                                                                </div>
                                                            </div>
                                                            <div className='d-flex justify-content-center mx-auto w-75 mt-2'>
                                                                {/* <button className='btn btn-link text-danger'>Book now</button> */}
                                                                <Link href="/reservation">
                                                                    <button className='btn btn-link text-danger'>Book now -&gt;</button>
                                                                </Link>
                                                                <Link href={`/events/${event.id}`}>
                                                                    <button className='btn btn-link text-danger'>View details -&gt;</button>
                                                                </Link>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div data-bs-interval="2000" className="carousel-item">
                                        <div className='row justify-content-center align-items-center h-100'>
                                            <div className='col-md-6'>
                                                <div className='row align-items-stretch' style={{ height: '350px', overflow: 'hidden', borderRadius: '10px', position: 'relative' }}>
                                                    <div className='eventDate' style={{zIndex: '9'}}>
                                                        <div className='eventDateText'>
                                                            {event.startDate}
                                                        </div>
                                                    </div>
                                                    <div className='col-12 p-0 h-100' style={{ overflow: 'hidden' }}>
                                                        <img className="w-100 h-100" style={{ objectFit: 'cover' }} src={`${event.image}`} alt="Image Title" />
                                                    </div>
                                                    <div className='col-12 m-0 p-0 bg-white row align-items-center justify-content-center' style={{position: 'absolute', top: '63px', opacity: '0.777'}}>
                                                        <div className='text-center col-11'>
                                                            <h2 className="text-dark text-uppercase fw-bold">{event.title}</h2>
                                                            <div className='text-dark'>
                                                                {event.description}
                                                            </div>
                                                            <div className='row text-center mt-1'>
                                                                <div className='col-3'>
                                                                    <h1 className='text-danger'>
                                                                        <Countdown date={event.startDate} renderer={({ days, hours, minutes, seconds }) => {
                                                                            return <span>{days}</span>;
                                                                        }} />
                                                                    </h1>
                                                                    <h6 className='text-secondary text-uppercase'>Days</h6>
                                                                </div>
                                                                <div className='col-3'>
                                                                    <h1 className='text-danger'>
                                                                        <Countdown date={event.startDate} renderer={({ days, hours, minutes, seconds }) => {
                                                                            return <span>{hours}</span>;
                                                                        }} />
                                                                    </h1>
                                                                    <h6 className='text-secondary text-uppercase'>Hours</h6>
                                                                </div>
                                                                <div className='col-3'>
                                                                    <h1 className='text-danger'>
                                                                        <Countdown date={event.startDate} renderer={({ days, hours, minutes, seconds }) => {
                                                                            return <span>{minutes}</span>;
                                                                        }} />
                                                                    </h1>
                                                                    <h6 className='text-secondary text-uppercase'>Minuets</h6>
                                                                </div>
                                                                <div className='col-3'>
                                                                    <h1 className='text-danger'>
                                                                        <Countdown date={event.startDate} renderer={({ days, hours, minutes, seconds }) => {
                                                                            return <span>{seconds}</span>;
                                                                        }} />
                                                                    </h1>
                                                                    <h6 className='text-secondary text-uppercase'>Seconds</h6>
                                                                </div>
                                                            </div>
                                                            <div className='d-flex justify-content-center mx-auto w-75 mt-2'>
                                                                {/* <button className='btn btn-link text-danger'>Book now</button> */}
                                                                <Link href="/reservation">
                                                                    <button className='btn btn-link text-danger'>Book now -&gt;</button>
                                                                </Link>
                                                                <Link href={`/events/${event.id}`}>
                                                                    <button className='btn btn-link text-danger'>View details -&gt;</button>
                                                                </Link>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </React.Fragment>

                        ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default SpecialEventd