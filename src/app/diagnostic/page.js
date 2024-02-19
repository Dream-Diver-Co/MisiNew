import React from 'react'
import Link from "next/link";

const page = () => {
  return (
    <div>
      <div className="container text editable-text left mt-5">
        <h2>Diagnostic research</h2>{" "}
        <p>The diagnostics in the context of treatment that we can do:</p>
        <ul>
          <li> Neuropsychological Examination</li>
          <li> Personality research</li>
          <li> IQ research</li>
          <li> ADHD screening</li>
          <li> Autism screening</li>
        </ul>
        <p>
          {" "}
          You <a href="/onze-werkwijze">can</a> read more information about our
          method and treatments <a href="/onze-werkwijze">here</a> .
        </p>
        <h3> Contact</h3>
        <p>
          {" "}
          For questions or to make an appointment, you can always contact us.
        </p>
        <Link href="/contact" className="btn-sm btn-dark">
          <p className="btn btn-sm btn-dark">Contact</p>
        </Link>
      </div>
    </div>
  )
}

export default page