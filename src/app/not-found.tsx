import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap band">
      <div className="intro">
        <p className="flourish">A wrong turning</p>
        <h1 className="display">That page is not on the map.</h1>
        <p className="lede">The tour may have a new name. Start from the collection, or write to Anita.</p>
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link className="btn btn-solid" href="/tours">
          Browse tours
        </Link>
        <Link className="btn btn-line" href="/enquire">
          Enquire
        </Link>
      </div>
    </section>
  );
}
