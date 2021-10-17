import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Tab } from 'react-bootstrap';
import Tabs from 'react-bootstrap/Tabs'
import Food from '../Food/Food';

const Foods = () => {
    const [foods, setFoods] = useState([])

    useEffect(() => {
        fetch('./foods.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])
    return (
        <div className="container py-5 mb-5">
            <div>
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 w-25 mx-auto">
                    <Tab eventKey="home" title="Breakfast" >
                        <h1>Hello 1</h1>
                    </Tab>
                    <Tab eventKey="profile" title="Lunch" >
                        <div class="row row-cols-1 row-cols-md-3 g-4">
                            {
                                foods.map(food => <Food food={food}></Food>)
                            }
                        </div>
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