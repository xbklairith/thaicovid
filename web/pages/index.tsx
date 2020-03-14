import * as React from 'react'
// import Link from 'next/link'
// import Layout from '../components/Layout'

import Dashboard from '../containers/Dashboard'
import RiskArea from '../containers/RiskArea'
import { NextPage } from 'next'

import { Container, Row, Col } from 'react-grid-system';


function Layout(props) {
  return (
    <div className="page-layout">
      {props.children}
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          font-size: 18px;
          font-weight: 400;
          line-height: 1.8;
          color: #333;
          background-color: #e4e3df;
        }
        h1 {
          font-weight: 700;
        }
        p {
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  )
}

const IndexPage: NextPage = () => {
  return (
    <Layout>
      <Container>
        <h1>Thai COVID-19 Tracker - สถานการณ์ COVID-19</h1>
        <Row>

            <RiskArea></RiskArea>

        
        </Row>

      <Dashboard></Dashboard>
      </Container>
     
      <footer>

      </footer>
    </Layout>
  )
}
export default IndexPage