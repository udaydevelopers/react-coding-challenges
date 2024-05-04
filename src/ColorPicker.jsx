// Challenge 2: Create a React component called ColorPicker that allows a user to select a color from a predefined list of colors. 
// The selected color should be displayed in a box below the color options. Use state to manage the selected color.

// You can start with a list of colors like ['red', 'blue', 'green', 'yellow']. When a color is clicked, 
// update the selected color state to reflect the chosen color.

import React from 'react'
import { useState } from 'react';

export const ColorPicker = () => {
    const [color, setColor] = useState("red");
    const colorList = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

    const handleClick = (item) => {
        //if (item !== color) {
            setColor(item);
       // }
    }

  return (
    <>
    <div>ColorPicker</div>
    <div>
    { colorList.map((item, index)=><button key={index} onClick={()=>handleClick(item)}>{item}</button>)}
    </div>
    <div style={{backgroundColor:color, height:'200px', width:'200px', marginLeft: '37%',
    marginTop: '50px'}}> Hello Color
</div>
    </>
  )
}
