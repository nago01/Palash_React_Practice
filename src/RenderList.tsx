export const RenderList = (props) => {
    const {list , setList} = props;
    return (list.map((item , index) => {
      return <div style={{display: 'flex' , alignItems: 'center'}}><div>{item?.task} at {item?.efforts} </div>
      <button style={{margin: '20px'}} onClick={(e)=>{
           console.log(e.target.id , 'e.target');
           setList((list)=>{
             return list.filter((item, index)=>{
                if(index!=e.target.id){
                  return item;
                }
             })
           })
      }} id={index}>Remove this task</button></div>
    }));
  }