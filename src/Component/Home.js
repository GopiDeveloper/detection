import React from 'react';
import {Link} from 'react-router-dom';
import './headter.css';

const Home = () => {
    return(
        <>
            <div className="container">
            <span>Capstone Project</span><br/>
                <span>At</span><br/>
                <span>Lovely Professional University</span><br/>
                <span>created</span><br/>
                <span>By</span><br/>
                <span>Gajjala Naveen Kumar Reddy</span>&nbsp;&nbsp;&nbsp;<span>11902498</span><br/>
                <span>Padamati Gopi</span>&nbsp;&nbsp;&nbsp;<span>11902741</span><br/>
                <span>Ajay kumar</span>&nbsp;&nbsp;&nbsp;<span>Mentor</span>
            </div>
            <div className="jumbroton">
                <div className="card">
                    <div className="card-body">
                         <p id="heading">Website Resources</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                         <p id="heading"><a href="https://github.com/gajjalanav/yolov5.git" target="_blank">Detecion Resources</a></p>
                         <p id="#heading">information</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                         <span id="heading">GoogleColab</span><br/>
                         <span id="heading"><a  href="https://universe.roboflow.com/lovely-professional-university-czfn4/naveen-kumar-reddy-gajjala" target="_blank">Labelled Dataset</a></span><br/>
                         <span id="head"><a href="https://wandb.ai/naveen2228/ObjectDetection?workspace=user-naveenkumarareddygajjala" target="_blank">Workspace visualization</a></span>
                    </div>
                </div>
            </div>
            <div className="content">
                <h1>Introduction</h1>
                <div className="text">
                    <span>YOLOv5 is an object detection algorithm that uses deep learning techniques to detect objects in images or video frames. The "YOLO" acronym stands for "You Only Look Once," which means that the algorithm only needs to make a single pass over the image or video frame to detect objects.</span><br/>
                    <span>The YOLOv5 algorithm uses a convolutional neural network (CNN) architecture, specifically a modified version of the popular EfficientNet backbone, to extract features from the input image. These features are then passed through a series of detection layers to predict the bounding boxes and class probabilities for each detected object.</span><br/>
                    <span>One of the key features of YOLOv5 is its ability to detect objects at different scales and aspect ratios. This is achieved by using anchor boxes, which are pre-defined bounding boxes of various sizes and shapes that the algorithm uses to predict object locations.</span><br/>
                    <span>During training, YOLOv5 learns to optimize a loss function that penalizes incorrect object detections and rewards accurate detections. The algorithm is typically trained on large datasets such as COCO or Open Images, which contain thousands of annotated images with labeled object classes and bounding boxes.</span><br/>
                    <span>Once trained, the YOLOv5 algorithm can be used to detect objects in real-time on a variety of devices, including CPUs, GPUs, and specialized hardware. The algorithm is also highly customizable, allowing users to fine-tune the model.</span>
                </div>
                <div ClassName="detection">
                    <Link to = "/Image"><span id="mgg">Detection of Images</span></Link>
                </div>
            </div>
        </>
    )
}

export default Home;