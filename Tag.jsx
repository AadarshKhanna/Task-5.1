import React from 'react';

const inputStyle = {
    width: '25%',
  };
function Tag()
{
    return <div><label for="tags">Tags</label>
    <input
    id="tag"
    placeholder='Please add up to 3 tags to describe what your question is about e.g., Java'
    style={inputStyle}
    />
    <br></br>
    <br></br>
    <button type="submit" className='b_type'>Post</button>
    </div>
}
export default Tag;