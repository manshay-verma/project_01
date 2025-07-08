import './App.css';
import MessageCard from './component/MessageCard';
import FeedbackForm from './component/FeedbackForm';

function App() {
  const messages = [
    { sender: 'Mom', text: 'Dinner is ready!' },
    { sender: 'Boss', text: 'Meeting at 3 PM!' },
    { sender: 'Friend', text: 'Wanna go out?' },
    { sender: 'AI Bot 🤖', text: 'You are learning fast!' }
  ];
  return (
    <div className='App'>
      <h1>💬 Message List</h1>

      {messages.map((msg,index)=>(
      <div key={index}>
        <p><strong>#{index + 1}</strong></p> {/* Index printed here */}
        <MessageCard sender={msg.sender} text={msg.text} />
      </div>
      ))}
      <FeedbackForm/>
    </div>
  );
}

export default App;
