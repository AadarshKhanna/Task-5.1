import React, { useState } from 'react';

const inputStyle = {
  width: '25%',
};

const containerStyle = {
  textAlign: 'left',
};

function U_val() {
  // Define a state variable to store the selected value
  const [selectedValue, setSelectedValue] = useState('');

  // Function to handle radio button change
  const handleRadioChange = (event) => {setSelectedValue(event.target.value);  };

  return (
    <div>
      <form>
        <div className='alignleft'>
          <label>Select Post Type:</label>
          <input
            type="radio"
            id="postQuestion"
            name="post_type"
            value="Question"
            onChange={handleRadioChange}
          />
          <label htmlFor="postQuestion">Question</label>
          <input
            type="radio"
            id="postArticle"
            name="post_type"
            value="Article"
            onChange={handleRadioChange}
          />
          <label htmlFor="postArticle">Article</label>
        </div>
      </form>
      <p className='inline-block'>What do you want to ask or share</p>
      {selectedValue === 'Question' && (
        <div>
          <div>
            <label htmlFor="title" >Title</label>
            <input
              id="question"
              placeholder='Start your question with how, what, why, etc.'
              style={inputStyle}
            />
          </div>
          <div>
            <p className='alignleft'>Describe your problem</p>
            <br></br>
            <textarea id="msg" name="user_message"></textarea>
          </div>
        </div>
      )}

      {selectedValue === 'Article' && (
        <div>
          <div>
            <label htmlFor="articleTitle">Title</label>
            <input
              id="articleTitle"
              placeholder="Enter a descriptive title."
              style={inputStyle}
            />
          </div>
          <div>
            <p className='alignleft'>Abstract</p>
            <br></br>
            <textarea
              id="msg"
              name="user_message"
              style={containerStyle}
              className='abstract_area'
              placeholder='Enter a 1-paragraph abstract'
            ></textarea>
          </div>
          <div>
            <p className='alignleft'>Article Text</p>
            <br></br>
            <textarea
              id="msg"
              name="user_message"
              style={containerStyle}
              className='article_area'
              placeholder='Enter a 1-paragraph abstract'
            ></textarea>
          </div>
        </div>
      )}
    </div>
  );
}

export default U_val;
