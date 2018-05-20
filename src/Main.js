import React, {Component} from 'react';
import Card from './Card';

import './Main.css';

class Main extends Component {
  render() {
    return (
        <div className="padd">
            <div className="main">
                <Card width={'full'} Name={'Anujeet Chatterjee'} Email={'anujeet99@gmail.com'} PhNo={'+91 9971937465'}/>
                <Card width={'half-1'} Name={'Anujeet Chatterjee'} Email={'anujeet99@gmail.com'} PhNo={'+91 9971937465'}/>
                <Card width={'half-2'} Name={'Anujeet Chatterjee'} Email={'anujeet99@gmail.com'} PhNo={'+91 9971937465'}/>
                <Card width={'quater-1'} Name={'Anujeet Chatterjee'} Email={'anujeet99@gmail.com'} PhNo={'+91 9971937465'}/>
                <Card width={'quater-2'} Name={'Anujeet Chatterjee'} Email={'anujeet99@gmail.com'} PhNo={'+91 9971937465'}/>
                <Card width={'quater-3'} Name={'Anujeet Chatterjee'} Email={'anujeet99@gmail.com'} PhNo={'+91 9971937465'}/>
                <Card width={'quater-4'} Name={'Anujeet Chatterjee'} Email={'anujeet99@gmail.com'} PhNo={'+91 9971937465'}/>
            </div>
        </div>

    );
  }
}

export default Main;