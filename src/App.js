import logo from './logo.svg';
import './App.css';

function App() {

 const checkFactor = (n,list)=>{
  let factor = []
  let reminder = n
  while(reminder!==1){
    if(reminder>1){
      if(reminder%2==0){
        factor.push(2)
        reminder = reminder/2
      }else{
         factor.push(reminder)
         reminder=1
      }
    }
  }

  const factorString = `(${factor.join()})` 

  if(factorString ===list)
  return "yes"

  return "no"
 }

  return (
    <div className="App">
       <p>Factor program</p>

       <div data-testid="div1">{checkFactor(6,"(2,3)")}</div>
       <div data-testid ="div2">{checkFactor(6,"(2,2)")}</div>
       <div data-testid ="div3">{checkFactor(4,"(2,2)")}</div>
    </div>
  );
}

export default App;
