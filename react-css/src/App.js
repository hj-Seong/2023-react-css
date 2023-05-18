import logo from './logo.svg';
import './App.css';
import CounterComp from './features/counter/CounterComp';
import InputForm from './features/inputform/InputForm';
import StyleComp from './features/styleComponent/StyleComp';
import StyleButton from './features/styleComponent/StyleButton';
import MyButton from './features/styleComponent/MyButton';

function App() {
  return (
    <div className="App">
      <InputForm />
      <CounterComp />
      <StyleComp >스타일드 컴포넌트</StyleComp>
      <StyleComp >스타일드 컴포넌트</StyleComp>
      <StyleButton color='red' bgcolor='pink' fontsize='3'
        onClick={(e)=>{
          e.preventDefault(); 
          console.log('이벤트');
        }}
      >
        버튼
      </StyleButton>
      <MyButton onClick={()=>{alert("버튼을 눌렀습니다")}}>버튼 확인</MyButton>
      <MyButton onClick={()=>{alert("확인")}}>버튼 확인</MyButton>

    </div>
  );
}

export default App;
