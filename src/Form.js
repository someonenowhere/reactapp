import React from 'react';

function Form(props) {
    return (
        <div>
            <form>
                <section>
                    <input
                        type="text"
                        name="firstname"
                        value={props.data.firstname}
                        onChange={props.handleChange}
                        placeholder="First Name"
                    /><br />
                    <input
                        type="text"
                        name="lastname"
                        value={props.data.lastname}
                        onChange={props.handleChange}
                        placeholder="Last Name"
                    /><br />
                    <input
                        type="number"
                        name="age"
                        placeholder="Age"
                        onChange={props.handleChange}
                    /><br />
                    <input type="radio"
                        name="gender"
                        value="Male"
                        checked={props.data.gender === 'Male'}
                        onChange={props.handleChange}
                    /> Male
                        <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={props.data.gender === 'Female'}
                        onChange={props.handleChange}
                    /> Female<br />
                    <select
                        value={props.data.location}
                        name="location"
                        onChange={props.handleChange}>
                        <option value="">- Select Location - </option>
                        <option value="Pune">Pune</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Banglore">Banglore</option>
                        <option value="Nagpur">Nagpur</option>
                    </select><br />
                    <label>
                        Dietary Restrictions
                            <input
                            type="checkbox"
                            name="vegetarian"
                            checked={props.data.vegetarian}
                            onChange={props.handleChange}
                        /> Vegetarian
                            <input
                            type="checkbox"
                            name="kosher"
                            checked={props.data.kosher}
                            onChange={props.handleChange}
                        /> Kosher
                            <input type="checkbox"
                            type="checkbox"
                            name="lactoseFree"
                            checked={props.data.lactoseFree}
                            onChange={props.handleChange}
                        /> Lactose free
                    </label><br />
                </section>
                <section>
                    First Name: {props.data.firstname}<br />
                    Last Name: {props.data.lastname}<br />
                    Age: {props.data.age}<br />
                    Gender: {props.data.gender}<br />
                    Location: {props.data.location}<br />
                    Dietary Restrictions:
                            <label>
                        Vegiterian: {props.data.vegetarian ? "Yes" : "No"}<br />
                        Kosher: {props.data.kosher ? "Yes" : "No"}<br />
                        Lactose Free: {props.data.lactoseFree ? "Yes" : "No"}
                    </label>
                </section>
            </form>
        </div>
    )
}

export default Form;