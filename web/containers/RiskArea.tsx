import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Row,
    Col
} from "reactstrap";

import Map from '../components/Map'


function RiskArea() {
    return (
        <>
            <Col md="12">
                <Card>
                    <CardHeader>
                        <CardTitle tag="h5">พื้นที่เสี่ยง</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col lg='12' md='12'>
                                <Map></Map>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>


        </>
    )
}

export default RiskArea
