import { useDispatch, useSelector } from "react-redux";
import { actionOne } from "../actions/HelloActions";

export const Hello = () => {
  const dispatch = useDispatch();
  const { greeting } = useSelector((state) => state.HelloReducer);

  const isGreetingByName = (name) => {
    return greeting === name;
  };

  console.log("rerendering");
  return (
    <div>
      <h1>Greeting : {greeting}</h1>

      <button onClick={() => dispatch(actionOne("Jonny"))}>
        Change Greeting Jonny
      </button>
      <button onClick={() => dispatch(actionOne("Bravo"))}>
        Change Greeting Bravo
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "ACTION_ONE",
            payload: "Stavre",
          })
        }
      >
        Change Greeting Stavre
      </button>

      {isGreetingByName("Bravo") && <div>Displaying when Bravo</div>}

      {isGreetingByName("Stavre") && <div>Displaying when Stavre</div>}
    </div>
  );
};
