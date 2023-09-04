import React, { useState } from 'react';

const inputStyle = {
  width: '25%',
};

const containerStyle = {
    display: 'flex', // Use flex display to align items horizontally
    alignItems: 'center', // Center items vertically within the container
  };

function U_val() {
  // Define a state variable to store the selected value
  const [selectedValue, setSelectedValue] = useState('');

  // Function to handle radio button change
  const handleRadioChange = (event) => {setSelectedValue(event.target.value);  };

  return (
    <div>
      <form>
        <label>Select Post Type:</label>
        <input
          type="radio"
          id="postQuestion"
          name="post_type"
          value="Question"
          onChange={handleRadioChange}
        />
        <label for="postQuestion">Question</label>
        <input
          type="radio"
          id="postArticle"
          name="post_type"
          value="Article"
          onChange={handleRadioChange}
        />
        <label for="postArticle">Article</label>
      </form>
      <p className='inline-block'>What do you want to ask or share</p>
      {selectedValue === 'Question' && (
        <div>
          <p>This section is designed based on the type of the post.It could be developed by conditional rendering.<span> For post a question, the following section would be appeared.</span></p>
          <div style={containerStyle}>
        <label for="title">Title</label>
        <input
            id="question"
            placeholder='Start your question with how, what, why, etc.'
            style={inputStyle}
        />
            </div>
            <div>
                <p>Describe you problem</p>
                <textarea id="msg" name="user_message" style={containerStyle}></textarea>
            </div>
        </div>
      )}

      {selectedValue === 'Article' && (
        <div>
          <p>This section is designed based on the type of the post. It could be developed by conditional rendering.<span> For post an article, the following section would be appeared.</span></p>
          <div style={containerStyle}>
            <label for="title">Title</label>
            <input
              id="articleTitle"
              placeholder="Enter a descriptive title."
              style={inputStyle}
            />
          </div>
          <div>
                <p>Abstract</p>
                <textarea id="msg" name="user_message" style={containerStyle} className='abstract_area' placeholder='Enter a 1-paragraph abstract'></textarea>
            </div>
          <div>
                <p>Article Text</p>
                <textarea id="msg" name="user_message" style={containerStyle} className='article_area' placeholder='Enter a 1-paragraph abstract'></textarea>
            </div>
        </div>
      )}
    </div>
  );
}

export default U_val;
