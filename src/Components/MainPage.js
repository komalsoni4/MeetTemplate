import React from 'react'
import Chat from "./Chat"
import EmojiReact from "./EmojiReact"
import LiveVideo from "./LiveVideo"
import Navbar from "./Navbar"
import StudentVideo from "./StudentVideo"
import Content8 from "./Content8" 
import Time from './Time'
import ButtonBar from './ButtonBar'
const MainPage = () => {
  return (
    <React.Fragment>
      <section>
      <div className="layout ">
        <div className="content1 ">
          <Navbar/>
        </div>
        <div className="content2 centered">
          <LiveVideo/>
        </div>
        <div className="content3 centered">
         <Content8/>
        </div>
        <div className="content4 centered">
          <EmojiReact/>
        </div>
        <div className="content5 ">
          <Chat/>
        </div>
        <div className="content6 centered">
        <Time/>
        </div>
        <div className="content7 centered">
        <ButtonBar/>
        </div>
        <div className="content8 centered">
        <StudentVideo/>
        </div>

      </div>
      </section>
          
    </React.Fragment>
   
  )
}


// import React, { useState } from 'react';
// import { Grid, Row, Col } from 'react-flexbox-grid';

// const VideoTemplate = () => {
//     const [instructionalVideo, setInstructionalVideo] = useState('');
//     const [studentVideo, setStudentVideo] = useState('');
//     const [emotionalStatus, setEmotionalStatus] = useState('');

//     return (
//         <Grid>
//             <Row>
//                 <Col xs={12} md={8}>
//                     <video src={instructionalVideo} controls />
//                 </Col>
//                 <Col xs={12} md={4}>
//                     <video src={studentVideo} controls />
//                     <p>Emotional Status: {emotionalStatus}</p>
//                 </Col>
//             </Row>
//         </Grid>
//     );
// }

// export default VideoTemplate;



export default MainPage