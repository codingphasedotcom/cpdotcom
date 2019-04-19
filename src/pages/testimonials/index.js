import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/layout'
import Adsense from '../../components/Adsense'

import SEO from '../../components/seo'

const CoursesPage = ({ data }) => (
  <Layout>
    <SEO
      title="CodingPhase Testimonials"
      keywords={[`Testimonials`, `application`, `react`]}
    />
    <section id="testimonials-page">
      <div className="content-area">
        <div className="container">
          <div className="tweets">
            <h1>Tweets</h1>
            <div className="tweet">
              <blockquote class="twitter-tweet" data-lang="en">
                <p lang="en" dir="ltr">
                  If you’re trying to become a web developer you should
                  DEFINITELY be following{' '}
                  <a href="https://twitter.com/codingphase?ref_src=twsrc%5Etfw">
                    @codingphase
                  </a>{' '}
                  . This man is the real deal.
                </p>
                &mdash; Cenecia Lattimore (@cenecia_l){' '}
                <a href="https://twitter.com/cenecia_l/status/1115938209651990528?ref_src=twsrc%5Etfw">
                  April 10, 2019
                </a>
              </blockquote>
            </div>
            <div className="tweet">
              <blockquote className="twitter-tweet" data-lang="en">
                <p lang="en" dir="ltr">
                  Nobody is telling the truth like Joe
                </p>
                &mdash; Hashim Warren (@hashim_warren){' '}
                <a href="https://twitter.com/hashim_warren/status/1118826285608861696?ref_src=twsrc%5Etfw">
                  April 18, 2019
                </a>
              </blockquote>
            </div>
            <div className="tweet">
              <blockquote class="twitter-tweet" data-lang="en">
                <p lang="en" dir="ltr">
                  <a href="https://twitter.com/codingphase?ref_src=twsrc%5Etfw">
                    @codingphase
                  </a>{' '}
                  Is an excellent mentor to all of his subscribers. He helps to
                  keep me going. He&#39;ll have subscribers in his google
                  hangouts occasionally.
                </p>
                &mdash; Justin the Dev (@JustintheDev1){' '}
                <a href="https://twitter.com/JustintheDev1/status/1114201114772156416?ref_src=twsrc%5Etfw">
                  April 5, 2019
                </a>
              </blockquote>
            </div>
            <div className="tweet">
              <blockquote class="twitter-tweet" data-lang="en">
                <p lang="en" dir="ltr">
                  Joe, I first learned Laravel through your Udemy course while
                  was in college. I got my first job using Laravel, 5 months
                  later.
                </p>
                &mdash; Andre MacNamara (@andremacnamara){' '}
                <a href="https://twitter.com/andremacnamara/status/1113936448649142272?ref_src=twsrc%5Etfw">
                  April 4, 2019
                </a>
              </blockquote>
            </div>
            <div className="tweet">
              <blockquote class="twitter-tweet" data-lang="en">
                <p lang="en" dir="ltr">
                  It&#39;s official, I am a lifetime member and lifetime learner
                  at{' '}
                  <a href="https://twitter.com/codingphase?ref_src=twsrc%5Etfw">
                    @codingphase
                  </a>{' '}
                  , Thanks Joe for all that you do.{' '}
                  <a href="https://t.co/h5cz5QKbc6">
                    pic.twitter.com/h5cz5QKbc6
                  </a>
                </p>
                &mdash; 💻 Donovan 📱 (@browncdonovan){' '}
                <a href="https://twitter.com/browncdonovan/status/1112046142437642240?ref_src=twsrc%5Etfw">
                  March 30, 2019
                </a>
              </blockquote>
            </div>
            <div className="tweet">
              <blockquote class="twitter-tweet" data-lang="en">
                <p lang="en" dir="ltr">
                  Making my way through the{' '}
                  <a href="https://twitter.com/codingphase?ref_src=twsrc%5Etfw">
                    @codingphase
                  </a>{' '}
                  HTML email course. Having a lot of fun learning this. It can
                  get confusing, but the course has helped keep that under
                  control. So many tables!
                  <br />
                  365CodingPhaseChallenge Day 141
                </p>
                &mdash; David Frost (@dmfrost7){' '}
                <a href="https://twitter.com/dmfrost7/status/1104604625309712384?ref_src=twsrc%5Etfw">
                  March 10, 2019
                </a>
              </blockquote>
            </div>
            <div className="tweet">
              <blockquote class="twitter-tweet" data-lang="en">
                <p lang="en" dir="ltr">
                  Guys make sure to subscribe to{' '}
                  <a href="https://twitter.com/codingphase?ref_src=twsrc%5Etfw">
                    @codingphase
                  </a>
                  !{' '}
                  <a href="https://t.co/zoqjjovCeK">https://t.co/zoqjjovCeK</a>
                </p>
                &mdash; Sami3t (@Sami3t){' '}
                <a href="https://twitter.com/Sami3t/status/1103029063587954690?ref_src=twsrc%5Etfw">
                  March 5, 2019
                </a>
              </blockquote>
            </div>
            <div className="tweet" />
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export const query = graphql`
  query TestimonialsPageQuery {
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
