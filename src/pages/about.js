import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = () => (
  <Layout pageTitle="About us">
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <p>All my friends are heathens don't you know?</p>
  </Layout>
)

export default AboutPage
