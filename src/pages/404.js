import { Fragment } from "react";
import { Col, Row, Image } from "react-bootstrap";
import Link from "next/link";

// import blank layout, header and footer to override default layout
import NotFound from "@/layout/NotFound";

const Error404 = () => {
  return (
    <Fragment>
      <Row>
        <Col sm={12}>
          <div className="text-center" style={{ paddingTop: '100px' }}>
            <div className="mb-3">
              <Image
                src="/assets/imgs/404-error-img.png"
                alt=""
                className="img-fluid"
              />
            </div>
            <h1 className="display-4 fw-bold">Oops! the page not found.</h1>
            <p className="mb-4">
              Or simply leverage the expertise of our consultation team.
            </p>
            <Link href="/dashboard/homepage" className="btn btn-primary">
              Go Home
            </Link>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

Error404.Layout = NotFound;

export default Error404;