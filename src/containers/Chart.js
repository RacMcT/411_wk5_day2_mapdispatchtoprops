import { connect } from 'react-redux'
import Chart from '../components/Chart'

const mapStateToProps = (state) => {
    return {
        chart: state.chart
    }
}

export default connect(mapStateToProps)(Chart)