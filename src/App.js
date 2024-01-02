import React from 'react';
import ChatBot from 'react-simple-chatbot';

const steps = [
  {
    id: '0',
    message: 'Hello, Welcome to SciAstra!',
    trigger: '1',
  }, {
    id: '1',
    message: 'Please Enter Your Name',
    trigger: '2'
  }, {
    id: '2',
    user: true,
    trigger: '3',
  }, {
    id: '3',
    message: "Hello {previousValue}, What do you want to know?",
    trigger: 4
  },
  {
    id: '4',
    options: [
      { value: 'SciAstra', label: 'SciAstra', trigger: 'SciAstra' },
      { value: 'What is SciAstra?', label: 'What is SciAstra?', trigger: 'What is SciAstra?' },
      { value: 'Why SciAstra?', label: 'Why SciAstra?', trigger: 'Why SciAstra?' },
      { value: 'more..', label: 'more', trigger: 'more' },
    ],
  },
  {
    id: 'more',
    options: [
      { value: 'SciAstra', label: 'SciAstra', trigger: 'SciAstra' },
      { value: 'What is SciAstra?', label: 'What is SciAstra?', trigger: 'What is SciAstra?' },
      { value: 'Why SciAstra?', label: 'Why SciAstra?', trigger: 'Why SciAstra?' },
      { value: 'more..', label: 'more', trigger: 'more' },
    ],
  },
  {
    id: 'SciAstra',
    message: 'SciAstra is learning site where you can buy courses.',
    trigger: 'more'
  },
  {
    id: 'What is SciAstra?',
    message: 'SciAstra is a best learing plateform.',
    trigger: 'more'
  },
  {
    id: 'Why SciAstra?',
    message: 'Because SciAstra is provides best courses.',
    trigger: 'ended'
  },
  {
    id: 'ended',
    message: 'Thank yor for asking your question.',
    end: true
  },
];

const config = {
  floating: true
};

export default function App() {
  return (
    <div className='text-white pt-5 bg-gradient-to-r from-cyan-500 to-blue-500 w-full h-[100vh]'>
      <h1 className='text-center text-5xl underline font-bold'>SciAstra Chat</h1>
    <ChatBot
      headerTitle="SciAstra"
      steps={steps}
      {...config} />
     </div>
  )
}
