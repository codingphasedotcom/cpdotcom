import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../../components/layout'
import FilterCoursesComp from '../../components/FilterCoursesComp'

import SEO from '../../components/seo'

// import chartImg from '../../../assets/chart.png'

const CoursesPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <section id="courses-page">
      {console.log(data)}
      <section id="popular-courses">
        <div className="bg" />
        <div className="section-content">
          <div className="container">
            <div className="sub-title">Our Most Popular Courses</div>
            <FilterCoursesComp data={data} />
          </div>
        </div>
      </section>
    </section>
  </Layout>
)

export const query = graphql`
  query CoursesPageQuery {
    coursesDataJson {
      data {
        title
        price
        type
        category
        slug
        url
        hours
        favorite
        imgs {
          thumbnail
        }
      }
    }
  }
`

export default CoursesPage
