import React, { Component } from 'react'
import AdSense from 'react-adsense'

class FilterCoursesComp extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Joe',
      filteredData: [],
      categories: [],
    }
  }
  componentDidMount() {
    //Find unique categories
    let categories = []
    this.props.data.coursesDataJson.data.map(course => {
      course.category.map(item => {
        categories.push(item)
      })
    })
    categories = categories.filter(value => {
      return !this[value] && (this[value] = true)
    }, Object.create(null))
    categories = categories.sort()

    this.setState(
      {
        data: this.props.data.coursesDataJson.data,
        filteredData: this.props.data.coursesDataJson.data,
        categories,
      },
      () => {
        console.log(this.state)
      }
    )
  }
  filterTheData = category => {
    if (category !== 'all') {
      let newdata = this.state.data.filter(item => {
        return item.category.includes(category)
      })
      console.log('filter============')
      this.setState({
        currentCategory: category,
        filteredData: newdata,
      })
    } else {
      this.setState({
        currentCategory: category,
        filteredData: this.state.data,
      })
    }
  }
  dropdownChange = event => {
    // var name = event.target.name
    var value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value

    // this.setState(
    //   {
    //     [name]: value,
    //   },
    //   () => {
    //     console.log(this.state)
    //   }
    // )
    this.filterTheData(value)
    console.log('change')
  }
  showCategories = () => {
    return this.state.categories.map(item => (
      <option value={item} key={item}>
        {item}
      </option>
    ))
  }
  render() {
    return (
      <div id="FilterCoursesComp">
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
              <h5>32 Videos</h5>
            </a>
          ))}
        </div>
        <div className="course-filters">
          <div className="dropdown">
            <select
              id="lang"
              onChange={this.dropdownChange}
              name="currentCategory"
              value={this.state.currentCategory}
            >
              <option value="all">All</option>
              {this.showCategories()}
            </select>
          </div>
          <AdSense.Google
            client="ca-pub-7292810486004926"
            slot="7806394673"
            style={{ display: 'block' }}
            format="auto"
            responsive="true"
          />
        </div>
      </div>
    )
  }
}

export default FilterCoursesComp
