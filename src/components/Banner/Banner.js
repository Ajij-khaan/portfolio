import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className="global-bg">
            <Container>
                <Row className="text-start pt-5">
                    <Col>
                        <h3 className="text-white">Hi There,</h3>
                        <h1 className="text-white pt-3 ">I'M <span className="fw-bolder text-green">AJIJ KHAN.</span></h1>
                        <h1 className="text-white pt-3 fw-bolder">MERN Stack Developer</h1>
                        <Button className="mt-5 py-2 px-4 rounded-pill bg-green fw-bold">GET RESUME</Button>
                    </Col>
                    <Col className="text-center" >
                        <Image src='https://i.ibb.co/2vQFKSm/3657404.png' />

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;