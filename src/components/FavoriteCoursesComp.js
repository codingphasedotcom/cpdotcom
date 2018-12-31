import React, { Component } from 'react'

class FavoriteCoursesComp extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Joe',
      filteredData: [],
      categories: [],
      currentOrder: 'atoz',
    }
  }
  componentDidMount() {
    let favoriteCourses = this.props.data.coursesDataJson.data

    favoriteCourses = favoriteCourses.filter(course => {
      return course.favorite === true
    })

    this.setState(
      {
        data: this.props.data.coursesDataJson.data,
        filteredData: favoriteCourses,
      },
      () => {
        console.log(this.state)
      }
    )
  }

  render() {
    return (
      <div>
        <div id="FavoriteCoursesComp">
          <div className="course-grid">
            {this.state.filteredData.map(course => (
              <a
                key={course.slug}
                href={course.url}
                className="course"
                style={{
                  background: `linear-gradient(45deg, rgba(67, 1, 124, 1) 30%, rgba(150, 55, 239, 0.1) 100%), url("${
                    course.imgs.thumbnail
                  }")`,
                }}
              >
                <h4>{course.title}</h4>
                <h5>{course.hours} Hours</h5>
              </a>
            ))}
          </div>
        </div>
        <div className="courses-total">
          {this.props.data.coursesDataJson.data.length}+
        </div>
        <div className="sub-title">
          Courses and every month <br />
          we add more
        </div>
      </div>
    )
  }
}

export default FavoriteCoursesComp
