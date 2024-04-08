import { useState } from "react"
import React from 'react'
import './ScoreCard.css';

export default function ScoreCard(){
    const [marks, setMarks] = useState({
        CWS: 0,
        OOPS: 0,
        MATHS: 0,
        PHYSICS: 0
      });
    
      const [totalMarks, setTotalMarks] = useState(0);
      const [totalPercentage, setTotalPercentage] = useState(0);
    
      const handleMarksChange = (subject, value) => {
        setMarks(prevState => ({
          ...prevState,
          [subject]: parseInt(value) || 0
        }));
      };
    
      const calculateTotalMarks = () => {
        const total = Object.values(marks).reduce((acc, curr) => acc + curr, 0);
        setTotalMarks(total);
        calculatePercentage(total);
      };
    
      const calculatePercentage = (total) => {
        const percentage = (total / (4 * 100)) * 100;
        setTotalPercentage(percentage.toFixed(2));
      };

    return(
        <>
        <div className='Total'>
        <div className='Heading'>
            <h2>Students Score Card Calculation System</h2>
        </div>
        <br/>
        <br/>
        <div className='Data'>
            <label for='name' id='name'>Name</label>   <input type="text" id='name1' placeholder="        Enter the Name      "></input><br/><br/>
            <label for='section' id='section'>Section</label>   <input type="text" id='name2' placeholder="      Enter the Section         "></input>
        </div>
        <br/>
        <br/>
        <div className='Heading2'>
            <h2>Enter the Marks of the Subjects</h2>
        </div>
        <br/>
        <br/>
        <div className='Data2'>
            <label for='1' id='name'>1. CWS</label>   <input type="number" id='s1' placeholder="Enter the CWS Marks"  onChange={(e) => handleMarksChange('CWS', e.target.value)}></input><br/><br/>
            <label for='2' id='name'>2. OOPS</label>   <input type="number" id='s2' placeholder="Enter the OOPS Marks" onChange={(e) => handleMarksChange('OOPS', e.target.value)}></input><br/><br/>
            <label for='3' id='name'>3. Maths</label>   <input type="number" id='s3' placeholder="Enter the Maths Marks" onChange={(e) => handleMarksChange('MATHS', e.target.value)}></input><br/><br/>
            <label for='4' id='name'>4. Physics</label>   <input type="number" id='s4' placeholder="Enter the Physics Marks" onChange={(e) => handleMarksChange('PHYSICS', e.target.value)}></input><br/><br/>
        </div>
        <div className='ScoreButton'>
            <button id='sbtn' onClick={calculateTotalMarks}>Calculate The Score</button>
        </div>

        <div className='Score'>
        <h3 id='score'>Total Marks: {totalMarks}</h3>
        <h3 id='score'>Total Percentage: {totalPercentage}%</h3>
      </div>
      </div>
        </>
    );
}