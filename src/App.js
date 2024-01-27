import { useState } from 'react';
import './App.css';
import Chip from './components/Chip';
import { names } from './data/chipData';

function App() {
  const [clickInput, setClickInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [chipList, setChipList] = useState([]);
  const [items, setItems] = useState(names);
  const [focusedChip, setFocusedChip] = useState(null);

  const addChip = (item)=>{
    setChipList([...chipList, item.name]);
    setItems(items.filter((i)=> i !== item));
    setInputValue("");
  }

  const deleteChip = (item, key)=>{
    setChipList(chipList.filter((i)=>i !== item));
    const obj = {id: key, name: item};
    setItems([...items, obj]);
  }

  const onChangeHandler = (e)=> {
    setInputValue(e.target.value);
  }

  const filteredNames = items.filter(item =>
    item?.name?.toLowerCase().includes(inputValue?.toLowerCase())
  );

  const handleBackspace = () => {
    if (inputValue === '') {
      const lastChip = chipList[chipList.length - 1];
      if (lastChip) {
        deleteChip(lastChip, lastChip.id);
      }
    }
  };

  return (
    <>
      <h1 className='flex justify-center text-3xl font-bold underline'>Chip Component</h1>
      <center>
      <div className='mt-16 w-2/5 flex justify-center flex-wrap'>
      
            {
              chipList.map((item)=>{
                return (
                  <>
                    <Chip name={item}
                    deleteChip={deleteChip}
                    key={item.id}
                    setFocusedChip={setFocusedChip}
                    focusedChip={focusedChip}
                    />
                  </>
                )
              })
            }
          <input
              className="mt-1 flex block border-b border-gray-500 placeholder-gray-500 focus:outline-none focus:border-blue-500"
              type="text"
              placeholder="Add User"
              onClick={()=>setClickInput(true)}
              value={inputValue}
              onChange={(e)=>onChangeHandler(e)}
              onKeyDown={(event) => {
                if (event.key === 'Backspace') {
                  handleBackspace();
                }
              }}
          />
        </div>

       
          <ul className='mt-1 h-40 no-scrollbar overflow-y-auto'>
            {
              clickInput === true ?
              filteredNames.map((item)=>{
                return(
                  <li className='w-[100px]  text-center bg-gray-300 rounded-lg px-2 py-1 hover:bg-gray-500 hover:cursor-pointer' onClick={()=>{addChip(item)}} key={item.id}>{item.name} </li>
                )
              }):
              <></>
            }
          </ul>
        </center>
  
    </>
  );
}

export default App;
