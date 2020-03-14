import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Row,
    Col
} from "reactstrap";


function Dashboard(props) {
    return (
        <div className="content">
            <Row>
                <Col lg="3" md="6" sm="6">
                    <Card className="card-stats">
                        <CardBody>
                            <Row>
                                <Col md="4" xs="5">
                                    <div className="icon-big text-center icon-warning">
                                        {/* <i className="nc-icon nc-globe text-warning" /> */}
                                        <i className="fa fa-diagnoses text-warning" />
                                    </div>
                                </Col>
                                <Col md="8" xs="7">
                                    <div className="numbers">
                                        <p className="card-category">ผู้ป่วย</p>
                                        <CardTitle tag="p">82</CardTitle>
                                        <p />
                                    </div>
                                </Col>
                            </Row>
                        </CardBody>
                        <CardFooter>
                            <hr />
                            <div className="stats">
                                <i className="fas fa-sync-alt" /> +3 </div>
                        </CardFooter>
                    </Card>
                </Col>
                <Col lg="3" md="6" sm="6">
                    <Card className="card-stats">
                        <CardBody>
                            <Row>
                                <Col md="4" xs="5">
                                    <div className="icon-big text-center icon-warning">
                                        <i className="fa fa-skating text-success" />
                                    </div>
                                </Col>
                                <Col md="8" xs="7">
                                    <div className="numbers">
                                        <p className="card-category">หายแล้ว</p>
                                        <CardTitle tag="p">30</CardTitle>
                                        <p />
                                    </div>
                                </Col>
                            </Row>
                        </CardBody>
                        <CardFooter>
                            <hr />
                            <div className="stats">
                                <i className="far fa-calendar" />0
            </div>
                        </CardFooter>
                    </Card>
                </Col>
                <Col lg="3" md="6" sm="6">
                    <Card className="card-stats">
                        <CardBody>
                            <Row>
                                <Col md="4" xs="5">
                                    <div className="icon-big text-center icon-warning">
                                        <i className="fa fa-cannabis " />
                                    </div>
                                </Col>
                                <Col md="8" xs="7">
                                    <div className="numbers">
                                        <p className="card-category">เสียชีวิต</p>
                                        <CardTitle tag="p">1</CardTitle>
                                        <p />
                                    </div>
                                </Col>
                            </Row>
                        </CardBody>
                        <CardFooter>
                            <hr />
                            <div className="stats">
                                <i className="far fa-clock" /> In the last hour
            </div>
                        </CardFooter>
                    </Card>
                </Col>
                <Col lg="3" md="6" sm="6">
                    <Card className="card-stats">
                        <CardBody>
                            <Row>
                                <Col md="4" xs="5">
                                    <div className="icon-big text-center icon-warning">
                                        <i className="nc-icon nc-favourite-28 text-primary" />
                                    </div>
                                </Col>
                                <Col md="8" xs="7">
                                    <div className="numbers">
                                        <p className="card-category">เข้าข่าย</p>
                                        <CardTitle tag="p">+4500</CardTitle>
                                        <p />
                                    </div>
                                </Col>
                            </Row>
                        </CardBody>
                        <CardFooter>
                            <hr />
                            <div className="stats">
                                <i className="fas fa-sync-alt" /> Update now
            </div>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md="12">
                    <Card>
                        <CardHeader>
                            <CardTitle tag="h5">พื้นที่เสี่ยง</CardTitle>
                            <p className="card-category">24 Hours performance</p>
                        </CardHeader>
                        <CardBody>
                            {/* <Line
                                data={dashboard24HoursPerformanceChart.data}
                                options={dashboard24HoursPerformanceChart.options}
                                width={400}
                                height={100}
                            /> */}
                        </CardBody>
                        <CardFooter>
                            <hr />
                            <div className="stats">
                                <i className="fa fa-history" /> Updated 3 minutes ago
            </div>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
    
        </div>
    )
}

export default Dashboard