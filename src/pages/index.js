import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'
import { Link } from 'gatsby'
import { Col, Row } from 'reactstrap'

import SectionDiv from "../components/section-div";
import IndexAdvantages from "../components/index-advantages"
import IndexSolidBgSection from '../components/index-solid-bg-section'
import Whychaummixer from "../components/why-chaummixer";


const IndexPage = () => { 
     return (     
            <Layout isHomepage={true}>
        <Hero />
        <SectionDiv>
            <Whychaummixer/>
            <Row>
             <Col sm="12" md={{ size: 10, offset: 1 }}>
             <br/>
             <hr/>
              <p>chaummixer allows you to use bitcoin as a consumer or to accept bitcoin payments for your business, offering in both cases attractive advantages!</p>
             </Col>
            </Row>
            <Row>
            <Col sm="12" md={{ size: 10, offset: 1 }}>
                <Row>
                <Col>
                    <h3>Send and Receive</h3>
                    <p>Trade with other individuals within chaummixer or externally. Fast and with very low fees. Internal transfers are free!</p>
                </Col>
                <Col >
                    <h3>Store</h3>
                    <p>Use chaummixer wallet to keep your bitcoin safely for later use</p>
                </Col>
                <Col>
                    <h3>E-commerce</h3>
                    <p>chaummixer platform will allow you to process bitcoin payments from your customers, safely, cost effectively and hands free.
                      Super easy to generate your own <Link to="/docs/derive-deposit-addresses">deposit addresses offline</Link>. 
  
                    </p>
                </Col>
                </Row>
                <hr/>
                </Col>
            </Row>
        </SectionDiv>
        <IndexAdvantages />
        <SectionDiv>
            <Row>
             <Col xs={12} sm={9} md={{ size: 8, offset: 2}}>
              <br/>
              <hr/>
                <h2>Are you thinking of the possible drawbacks?</h2>
                    <h3>Counter-party-risk</h3>
                    <p>chaummixer requires you to place your bitcoin in our custody, therefore it is not trustless.
                        To tackle this we have developed chaummixer to be <Link to="/provably-honest">provably honest</Link>.
                    </p>
             </Col>
            </Row>
            <br/>
            <Row>
                <Col xs={12} sm={9} md={{ size: 8, offset: 2}}>
                    <h3>Availability</h3>
                    <p>chaummixer stores your bitcoin offline, therefore our system needs to be online for you to access it.</p>
                    < p>So there's a very small risk that our service could be down at some point. </p>
                    <p>To mitigate this risk we use the most reliable servers in the market, and are running without problems 99.9% of the time.</p>
                </Col>
                {/* TODO: add uptime call here from upptime actions @ github.io + graphs? */}
            </Row>
        </SectionDiv>
        <IndexSolidBgSection>
            <h2 style={{ textAlign: 'center' }}>Are you ready to start?</h2>
            <p style={{ textAlign: 'center' }}
               className="lead"
            >
                No registration required.
            </p>
            <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
            <a
                className="btn-lg btn-secondary btn-block"
                href="https://wallet.chaummixer.com"
                style={{ textAlign: 'center'}}
            >Go to Wallet</a>
                </Col>
            </Row>
        </IndexSolidBgSection>
    </Layout>
  )
  
  }

export default IndexPage

