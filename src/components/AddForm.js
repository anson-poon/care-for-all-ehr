/*
(Inactive) Components that, once imported, allow for the insertion of new data on a Page for a given entity
*/

// general form to add data
export const AddForm = () => {
    <form action="" method="get" className="add-form">
        <h4>Add Temp</h4>
        <div className="form-row">
            <label for="temp-input">Temp: </label>
            <input type="text" name="temp-input" id="temp-input" required />
        </div>
        <button className="add-button">Add</button>
    </form>
}

// form for specifically Provider Index page
export const AddFormProviderIndex = () => {
    <form action="" method="get" className="add-form">
        <h4>Add a New Provider</h4>
        <div className="form-row">
            <label for="firstName">First Name: </label>
            <input type="text" name="firstName" id="firstName" required />
        </div>
        <div className="form-row">
            <label for="lastName">Last Name: </label>
            <input type="text" name="lastName" id="lastName" required />
        </div>
        <br />
        <button className="add-button">Add</button>
    </form>
}



export default AddForm;