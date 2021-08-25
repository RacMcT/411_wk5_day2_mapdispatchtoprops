import { connect } from 'react-redux'
import Car from '../components/Car'
import { addCar } from "../redux/actions"

const mapDispatchToProps = dispatch => {
  return {
    addCar: car => dispatch(addCar(car))
    }
}

export default connect(null, mapDispatchToProps)(Car)
