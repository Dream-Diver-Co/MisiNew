'use client'
import React,{ useState } from 'react'
import Head from 'next/head'
import jobImage1 from "@../../../public/images/jobs/job1.jpg";
import Link from "next/link";
const page = () => {
    const [jobs, setJobs] = useState([
        {
          id: 1,
          title: "Vacancy: Front office employee",
          description: "",
          image: "https://picsum.photos/200?random=1",
        },
        {
          id: 2,
          title: "Vacancy: Psychologist / Neuropsychologist",
          description: "",
          image: "https://picsum.photos/200?random=2",
        },
        {
          id: 3,
          title: "Vacancy: GZ PSYCHOLOGIST / Psychotherapist",
          description: "",
          image: "https://picsum.photos/200?random=3",
        },
        {
          id: 4,
          title: "Vacancy: Psychologist Arabic",
          description: "",
          image: "https://picsum.photos/200?random=4",
        },
      ]);
  return (
    <div>
      <Head>
        <title>Career</title>
        <meta
          name="description"
          content="Sensehair is a saloon shop website with an appointment/booking system."
        />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, shrink-to-fit=no"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container py-5">
        <h1 className="text-center">Vacancies</h1>
        <hr />
        {jobs.map((job) => (
          <div
            key={job.id}
            className="rounded-5 p-4 row shadow mb-4"
            data-aos="zoom-in"
            data-aos-duration="750"
            data-aos-delay="200"
          >
            <div className="col-4 col-lg-3">
              <div
                className="rounded-4"
                style={{ width: "100%", height: "200px", overflow: "hidden" }}
              >
                <img
                  src={job.image}
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-7">
              <Link href={`/jobs/${job.id}`}>
                <h2 className="cursor-pointer">{job.title}</h2>
              </Link>
              <div>{job.description}</div>
              <div>
                <Link href="/apply">
                  <button className="btn m-1 btn-sm btn-dark">Apply Now</button>
                </Link>
                <Link href={`/jobs/${job.id}`}>
                  <button className="btn btn-sm btn-dark">Read more</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default page