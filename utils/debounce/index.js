const debounce=(func,wait)=>{
    let timer=null;
    return function(){
      if(timer) clearTimeout(timer);
      timer=setTimeout(()=>{
        // 绑定this的目的是，使得func的this指针保持普通,调用时候的指向
        // argument也为调用debounce过后的func传入的参数
        func.apply(this,arguments);
      },wait)
    }  
  }

  export default debounce;