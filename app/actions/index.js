export const DATA_AVAILABLE = "DATA_AVAILABLE";

//Import the sample data
// import Data from "../instructions.json";

const Data = {
  instructions: "there are no instructions."
};

export function getData() {
  return dispatch => {
    //Make API Call
    //For this example, I will be using the sample data in the json file
    //delay the retrieval [Sample reasons only]
    setTimeout(() => {
      const data = Data.instructions;
      dispatch({ type: DATA_AVAILABLE, data: data });
    }, 200);
  };
}
