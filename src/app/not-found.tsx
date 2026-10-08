import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap band">
      <div className="intro">
        <p className="flourish">Oops!</p>
        <h1 className="display">Sorry, we cannot find that page.</h1>
        <p className="lede">The link may be out of date. Have a look at our tours, or get in touch.</p>
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link className="btn btn-solid" href="/enquire">
          Get in touch
        </Link>
        <Link className="btn btn-line" href="/tours">
          Leisure Tours
        </Link>
      </div>
    </section>
  );
}
