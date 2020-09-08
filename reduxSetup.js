const INITIAL_STATE = { face : '(◕ᴥ◕)'}

function reducer(state = INITIAL_STATE, action){
  switch(action.type){
    case "happy" :
      return {face : 'ヽ(ヅ)ノ'}
      
      case "sad" :
      return {face : '(︶︹︺)'}
     
      case "angry" :
      return {face : '(눈_눈)'}
     
      case "confused" :
      return {face : '(◎_◎;)'}

      default :
      return state;
  }
}

const store = Redux.createStore(reducer);
