import React from 'react'
import {fetchSkyScanner} from './utils/browsequotesapi'
import {Row, Col, Button} from 'react-bootstrap';

export default class FlightQuotes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null
        }
        this.getAPI()
    }
    async getAPI() {
        let {destination, origin, startDate, endDate} = this.props.wizardData
        const data = await fetchSkyScanner(origin, destination, startDate, endDate)
        this.setState({data})
    }

    refreshPage = () => {
    }

    render() {
        let {destination, origin, startDate, endDate} = this.props.wizardData
        return (
            <React.Fragment>
                <br></br>
                <div>
                    <Row>
                        <Col>
                            <Button 
                            variant="primary"
                            onClick={this.refreshPage()}>
                                Do another search
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col><strong>From</strong></Col>
                        <Col><strong>To</strong></Col>
                    </Row>
                    <Row>
                        <Col>{origin}</Col>
                        <Col>{destination}</Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col><strong>Depart</strong></Col>
                        <Col><strong>Return</strong></Col>
                    </Row>
                    <Row>
                        <Col>{startDate}</Col>
                        <Col>{endDate}</Col>
                    </Row>
                </div>
                <br></br>
                <div>
                    <Row>
                        <Col><strong>Lowest Price</strong></Col>
                    </Row>
                    <Row>
                    {this.state.data && this.state.data.Quotes.map(quote => {
                        if(quote.Direct) {
                        return <Col>{quote.MinPrice}</Col>
                        }
                    })}
                    </Row>


                </div>
         </React.Fragment>
        )
    }
}