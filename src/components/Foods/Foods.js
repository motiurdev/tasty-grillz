import React from 'react';
import { Tab } from 'react-bootstrap';
import Tabs from 'react-bootstrap/Tabs'

const Foods = () => {
    return (
        <div className="container py-5 mb-5">
            <div>
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 w-25 mx-auto">
                    <Tab eventKey="home" title="Breakfast" >
                        <h1>Hello 1</h1>
                    </Tab>
                    <Tab eventKey="profile" title="Lunch" >
                        <h1>Hello 2</h1>
                    </Tab>
                    <Tab eventKey="contact" title="Dinner" >
                        <h1>Hello 3</h1>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
};

export default Foods;