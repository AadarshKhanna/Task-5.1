import '../index.css';
import U_val from './u_val';
import Tag from './Tag';

const containerStyle = {
    textAlign: 'center',
  };

function App()
{  
    return <div style={containerStyle}>
      <p className='inline-block'>New Post</p>
      <U_val />
      <br></br>
      <br></br>
      <Tag />
    </div>
}

export default App;