
import React from "react";
import moment from "moment-timezone";
import { Row, Col, Card} from '@themesberg/react-bootstrap';

export default () => {
  const currentYear = moment().get("year");

  return (
    <div>
      <footer className="footer section py-5">
        <Row>
          <Col className="mb-4 mb-lg-0">
            <p className="mb-0 text-center text-xl-center">
              Assist Control App {`${currentYear} `}
            </p>
          </Col>
        </Row>
      </footer>
    </div>
  );
};
