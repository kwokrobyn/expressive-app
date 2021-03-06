const defaultPoll = {
  isActive: false,
  question: "",
  option1: {text: "", count: 0},
  option2: {text: "", count: 0}
}

const pollReducer = (state = defaultPoll, action) => {
  switch (action.type) {

    case "CREATE_POLL":
      return {
        isActive: true,
        question: action.pollInfo.question,
        option1: action.pollInfo.option1,
        option2: action.pollInfo.option2
      }

    case "CLEAR_POLL":
      return defaultPoll

    default:
        return state;
  }
}

export default pollReducer;
