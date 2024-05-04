// Challenge 4: Create a React component called Accordion that implements an accordion UI pattern. The component should accept an array of items, where each item has a title and content. 
// Initially, only the titles are displayed. When a title is clicked, the corresponding content should expand or collapse, 
// showing or hiding the content.

// You can start with an array of items like [{"title": "Item 1", "content": "Content 1"}, 
// {"title": "Item 2", "content": "Content 2"}]. Use state to manage the expanded/collapsed state of each item.

import React, { useState } from 'react';

const Accordian = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const items = [
        {"title": "Item 1", "content": "Content 1"}, 
        {"title": "Item 2", "content": "Content 2"}
    ];

    const toggleItem = (index) => {
        setExpandedIndex(index);
    }

  return (
    <div>{items.map((item, index)=>(
        <div key={index}>
            <div onClick={()=>toggleItem(index)} style={{ cursor: 'pointer', marginBottom: '8px', fontWeight: 'bold' }}>{item.title}</div>
            {expandedIndex === index && (<div style={{ marginBottom: '16px' }}>{item.content}</div>)}
        </div>
    )
    )}
    </div>
  )
}

export default Accordian;
