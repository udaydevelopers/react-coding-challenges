// Challenge 9: Create a React component called ProgressBar that displays a progress bar with a given percentage. The component should accept a percentage prop that determines the filled portion of the progress bar.

// You can start with a percentage value between 0 and 100. Use CSS to style the progress bar and make sure it fills the appropriate percentage of the bar.

import React from 'react'

const ProgressBar = ({percentage}) => {
  return (
    <div style={{ width: '100%', backgroundColor: '#f0f0f0', borderRadius: '5px', padding: '2px' }}>
        <div style={{ width: `${percentage}%`, backgroundColor: '#007bff', borderRadius: '5px', height: '20px' }}></div>
    </div>
  )
}

export default ProgressBar