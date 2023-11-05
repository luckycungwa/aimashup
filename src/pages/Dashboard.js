import React from 'react'
import { CandidateCard } from '../components/CandidateCard'
import SuccessCard from '../components/SuccessCard';
import FailedCard from '../components/FailedCard';

const Dashboard = ({isSuitable}) => {
  return (
    <div>
      <div class="card">
        <div class="header">
          
          <span class="price">RESULTS</span>
          <span class="title">_</span>
        </div>
        <p class="desc">Candidate status</p>
        
      </div>
    </div>
  );
};


export default Dashboard;