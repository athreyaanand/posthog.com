import React from 'react'
import Layout from '../components/Layout'
import Button from 'antd/lib/button'
import 'antd/lib/button/style/css'
import { Link } from "gatsby"
import trends from "../images/trends.png";
import stackAndroid from "../images/stack-android.png";
import stackPython from "../images/stack-python.png";
import stackIos from "../images/stack-ios.png";
import stackNode from "../images/stack-node.png";
import stackPhp from "../images/stack-php.png";
import stackRuby from "../images/stack-ruby.png";
import stackGatsby from "../images/stack-gatsby.png";
import stackJavascript from "../images/stack-javascript.png";
import stackGo from "../images/stack-go.png";
import stackApi from "../images/stack-api.png";
import installHeroku from "../images/install-heroku.png";
import installDocker from "../images/install-docker.png";
import installAws from "../images/install-aws.png";
import installKubernetes from "../images/install-kubernetes.png";
import communityGithub from "../images/community-github.png";
import communitySlack from "../images/community-slack.png";
import communityRoadmap from "../images/community-roadmap.png";

import { Row, Col } from 'antd';

const IndexPage = () => {
  return (
    <Layout>
      <Row gutter={[24, 8]}>
        <Col span={24} className="gutter-row">
          <h2 className="large-header">Understand your users.<br />Build a better product.</h2>
        </Col>
      </Row>
      <Row gutter={[16, 8]}>
        <Col span={16} className="gutter-row">
          <p>Join 1,000 companies using PostHog.</p>
        </Col>
      </Row>
      <Row gutter={[24, 8]}>
        <Col span={5} className="gutter-row">
          <Link to="https://app.posthog.com/signup">
            <Button type="primary" size="large" icon="right-circle" style={{marginRight: 10}}>Try Hosted, Free</Button>
          </Link>
        </Col>
        <Col span={5} className="gutter-row">
          <Link to="https://github.com/posthog/posthog">
            <Button type="secondary" size="large">Self-Managed</Button>
          </Link>
        </Col>
      </Row>
      <Row gutter={[24, 24]}>
        <Col span={24} className="gutter-row header-row" align="middle">
          <h2>Open source product analytics</h2>
        </Col>
      </Row>
      <Row gutter={[48, 24]}>
        <Col span={12} className="gutter-row">
          <h3>Understand users and events</h3>
          <p>PostHog autocaptures events and user behavior in your mobile or web app.</p>
        </Col>
        <Col span={12} className="gutter-row">
          <p>
            <img alt="trends" src={trends} className="shadow" />
          </p>
        </Col>
      </Row>
      <Row gutter={[24, 24]}>
        <Col span={24} className="gutter-row header-row" align="middle">
          <h2>Self-hosted available, with full underlying data access.</h2>
        </Col>
      </Row>
      <Row gutter={[48, 24]}>
        <Col span={12} className="gutter-row">
          <p>
            <img alt="trends" src={trends} className="shadow" />
          </p>
        </Col>
        <Col span={12} className="gutter-row">
          <h3>Full product analytics UX</h3>
          <p>PostHog provides a full product analytics UX. Analyze trends, funnels, retention and cohorts.</p>
        </Col>
      </Row>
      <Row gutter={[24, 24]} className="gutter-row">  
        <Col span={24} className="gutter-row" align="middle">
          <h2 align="middle" className="icons-header header-row">Designed for your stack</h2>
          <Row gutter={[24,24]} className="gutter-row">
            <Col span={2} className="gutter-row"></Col>
            <Col span={4} className="gutter-row">
              <img alt="Python" src={stackPython} />
            </Col>
            <Col span={4} className="gutter-row">
              <img alt="Android" src={stackAndroid} />
            </Col>
            <Col span={4} className="gutter-row">
              <img alt="iOS" src={stackIos} />
            </Col>
            <Col span={4} className="gutter-row">
              <img alt="Node" src={stackNode} />
            </Col>
            <Col span={4} className="gutter-row">
              <img alt="PHP" src={stackPhp} />
            </Col>
            <Col span={2} className="gutter-row"></Col>
          </Row>
          <Row gutter={[24,24]} className="gutter-row">
            <Col span={2} className="gutter-row"></Col>
            <Col span={4} className="gutter-row">
              <img alt="Ruby" src={stackRuby} />
            </Col>
            <Col span={4} className="gutter-row">
              <img alt="Gatsby" src={stackGatsby} />
            </Col>
            <Col span={4} className="gutter-row">
              <img alt="Javascript" src={stackJavascript} />
            </Col>
            <Col span={4} className="gutter-row">
              <img alt="Go" src={stackGo} />
            </Col>
            <Col span={4} className="gutter-row">
              <img alt="API" src={stackApi} />
            </Col>
            <Col span={2} className="gutter-row"></Col>
          </Row>
        </Col>
      </Row>
      <Row gutter={[24, 8]}>
        <Col span={24} className="header-row" align="middle">
          <h2>PostHog for Enterprise</h2>
        </Col>
        <Col span={8} className="gutter-row" align="middle">
          <h3>Self-managed</h3>
          <p>PostHog can be deployed in your cloud, for painless adoption and onboarding.</p>
        </Col>
        <Col span={8} className="gutter-row" align="middle">
          <h3>Unlimited volume</h3>
          <p>PostHog is built to scale. That includes our open core pricing model.</p>
        </Col>
        <Col span={8} className="gutter-row" align="middle">
          <h3>Support</h3>
          <p>PostHog can manage your deployment for you. All the benefits of sel-hosting with the reliability and scalability of the cloud.</p>
        </Col>
      </Row>
      <Row gutter={[24, 24]}>
          <Col span={24} className="header-row" align="middle">    
            <h2>Install now, free</h2>
          </Col>
          <Col span={6} align="middle">
            <img alt="Deploy on Heroku" src={installHeroku} />
          </Col>
          <Col span={6} align="middle">
            <img alt="Deploy on Docker" src={installDocker} />
          </Col>
          <Col span={6} align="middle">
            <img alt="Deploy on AWS" src={installAws} />
          </Col>
          <Col span={6} align="middle">
            <img alt="Deploy on Kubernetes" src={installKubernetes} />
          </Col>
          
          <Col span={24} align="middle">
            <p>... or start a <Link to="https://app.posthog.com/signup">free trial</Link> with PostHog SaaS.</p>
          </Col>
      </Row>
      <Row gutter={[24, 8]}>
        <Col span={24} className="gutter-row header-row" align="middle">
          <h2>Join the community</h2>
        </Col>
      </Row>
      <Row gutter={[24, 8]}>
        <Col span={8} className="gutter-row" align="middle">
          <img alt="GitHub" src={communityGithub} />
          <h3>GitHub</h3>
        </Col>
        <Col span={8} className="gutter-row" align="middle">
          <img alt="Slack" src={communitySlack} />
          <h3>Slack</h3>
        </Col>
        <Col span={8} className="gutter-row" align="middle">
          <img alt="Roadmap" src={communityRoadmap} />
          <h3>Roadmap</h3>
        </Col>
      </Row>
      <Row gutter={[24, 24]}>
        <Col span={24} className="gutter-row header-row" align="middle">
          <h2>What's new</h2>
          <p>1.1.0</p>
          <Button type="information" size="large">Release notes</Button>
        </Col>
      </Row>
    </Layout>
  )
}

export default IndexPage