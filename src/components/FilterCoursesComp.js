import React, { Component } from 'react'
import Adsense from './Adsense.js'

class FilterCoursesComp extends Component {
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
    //Find unique categories
    let categories = []
    this.props.data.coursesDataJson.data.map(course => {
      course.category.map(item => {
        categories.push(item)
        return ''
      })
      return ''
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
      () => {}
    )
  }
  filterTheData = category => {
    if (category !== 'all') {
      let newData = this.state.data.filter(item => {
        return item.category.includes(category)
      })
      newData = this.sortTheData(this.state.currentOrder, 'return', newData)
      this.setState({
        currentCategory: category,
        filteredData: newData,
      })
    } else {
      this.setState({
        currentCategory: category,
        filteredData: this.state.data,
      })
    }
  }
  sortTheData = (value, mode, data) => {
    let newData = mode !== 'normal' ? data : this.state.filteredData
    if (value === 'atoz') {
      newData = newData.sort((a, b) => {
        if (a.title < b.title) {
          return -1
        }
        if (a.title > b.title) {
          return 1
        }
        return 0
      })
    }

    if (value === 'ztoa') {
      newData = newData.sort((a, b) => {
        if (a.title > b.title) {
          return -1
        }
        if (a.title < b.title) {
          return 1
        }
        return 0
      })
    }

    if (value === 'new') {
      newData = newData.sort((a, b) => {
        if (a.hours < b.hours) {
          return -1
        }
        if (a.hours > b.hours) {
          return 1
        }
        return 0
      })
    }
    if (value === 'old') {
      newData = newData.sort((a, b) => {
        if (a.hours > b.hours) {
          return -1
        }
        if (a.hours < b.hours) {
          return 1
        }
        return 0
      })
    }
    if (mode === 'normal') {
      this.setState({
        currentOrder: value,
        filteredData: newData,
      })
    } else {
      return newData
    }
  }
  dropdownChange = event => {
    var name = event.target.name
    var value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value
    if (name === 'categories') {
      this.filterTheData(value)
    }
    if (name === 'sortby') {
      this.sortTheData(value, 'normal')
    }
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
      <div>
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
                <h5>{course.hours} Hours</h5>
              </a>
            ))}
          </div>
          <div className="course-filters">
            <div className="dropdown">
              <label>Categories</label>
              <select
                id="lang"
                onChange={this.dropdownChange}
                name="categories"
                value={this.state.currentCategory}
              >
                <option value="all">All</option>
                {this.showCategories()}
              </select>

              <label>Sort By</label>
              <select
                id="lang"
                onChange={this.dropdownChange}
                name="sortby"
                value={this.state.currentOrder}
              >
                <option value="atoz">A to Z</option>
                <option value="ztoa">Z to A</option>
                <option value="new">Newest</option>
                <option value="old">Oldest</option>
                <option value="short">Shortest</option>
                <option value="long">Longest</option>
              </select>
            </div>
            <Adsense />
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

export default FilterCoursesComp
