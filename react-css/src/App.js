import logo from './logo.svg';
import './App.css';
import CounterComp from './features/counter/CounterComp';
import InputForm from './features/inputform/InputForm';
import StyleComp from './features/styleComponent/StyleComp';
import StyleButton from './features/styleComponent/StyleButton';

function App() {
  return (
    <div className="App">
      <InputForm />
      <CounterComp />
      <StyleComp >스타일드 컴포넌트</StyleComp>
      <StyleComp >스타일드 컴포넌트</StyleComp>
      <StyleButton color='red' bgcolor='pink'>
        버튼
        </StyleButton>
    </div>
  );
}

export default App;
