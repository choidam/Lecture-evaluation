import React, { Component } from 'react';
import Loading from 'components/Loading'
import { connect } from 'react-redux';
import { selectLecture } from '../actions';
// import { getCourse } from '../redux/actions/courses'
import { bindActionCreators } from 'redux';
import * as cousreActions from 'redux/actions/courses'
import './LectureList.scss';
import Data from './data'


class LectureList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: !props.course,
    }
  }
  // componentWillMount() {
  //   console.log("3??")
  //   const { getCourse } = this.props
  //   getCourse()
  // }
  componentDidMount() {
    const { course, getCourse } = this.props
    console.log(getCourse())
    if (!course) getCourse()
  }
  // componentDidMount() {
  //   console.log("3??")

  //   const { getCourse } = this.props
  //   getCourse()
  //   const { course } = this.props
  //   console.log('course', course)
  //   console.log('courses', courses)
  // }
  renderList(lectures) {
    console.log("2??")

    return lectures.map((lecture, index) => (
      <li 
        key={index} 
        onClick={(e) => {
          this.props.selectLecture(lecture)
        }}
        // onClick={this}
        className='list-group-item'
      >
        { lecture.campus }<br></br>
        { lecture.title } &nbsp; 
        { lecture.professor }
      </li>
    ));
  }

  render() {
    const { courses } = this.props
    console.log('??', courses)
    if (this.state.isLoading) return <Loading />
    // if (!this.props.lectures) {
    //   return <div> No lectures </div>;
    // }
    console.log("1??")
    return (
      <div className="lectureList__list col-3">
        <ul className="list-group">
          {this.renderList(courses)}
        </ul>
      </div>
    );
  }
}

// function mapStateToProps({lectures}) {
//   return {
//     lectures,
//     // lectures: state.dajfl.lecture
//   };
// }
const mapStateToProps = (state) => ({
  courses: state.courses.course,
})
const mapDispatchToProps = (dispatch) => ({
  getCourse: () => dispatch(cousreActions.getCourse()),
  // lectures: bindActionCreators({ selectLecture}, dispatch)
  // return bindActionCreators({selectLecture}, dispatch);
})
export default connect(mapStateToProps, mapDispatchToProps)(LectureList);

