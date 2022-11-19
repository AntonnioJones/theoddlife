import React, {useReducer} from "react";

const PlayerTraits = {
    firstname: "name"
}

type Action = { type: "firstname"; payload: string };

const reducer = (state: typeof PlayerTraits, action: Action) => {
        switch (action.type) {
            case 'firstname': 
                return {...state, firstname : action.payload};
            default :
                throw new Error('unknown action');
        }
    }

const CreateCharacter = () => {
    const [state, dispatch] = useReducer(reducer, PlayerTraits);
    return (
        <div className="charactersheet">
                <form>
                    <label><h1>Create Character</h1></label>
                    <input type="text" name="firstname" placeholder="First Name"/>
                    <br></br>
                    <input type="text" name="lastname" placeholder="Last Name"/>
                    <br></br>
                    <select value="gender">
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                    <br></br>
                    <input type="submit" value="submit"/>
                </form>      
            </div>
    )
}

export default CreateCharacter; 