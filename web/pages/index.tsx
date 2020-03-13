import * as React from 'react'
// import Link from 'next/link'
// import Layout from '../components/Layout'
import Map from '../components/Map'
import { NextPage } from 'next'
import { Container, Row, Col } from 'react-grid-system';

const IndexPage: NextPage = () => {
  return (
    <>
      <Container>
        <h1>Thai COVID-19 Tracker - สถานการณ์ COVID-19</h1>
        <Row>
          <Col md={7}>
            <Map></Map>

          </Col>

          <Col md={5}>
            <Row>
            <Col md={12}>
              {"{{Graph1}}"}
            </Col>
            <Col md={12}>
              {"{{Graph2}}"}
            </Col>
          </Row>
          </Col>
        </Row>
      </Container>
      <footer>
        {"{{footer}}"}  

      </footer>
    </>
  )
}
export default IndexPage