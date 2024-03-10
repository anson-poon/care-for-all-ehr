export function DescriptionPatients() {
    return (
        <div className="page-description">
            <p>This page allows you to <b>get</b> and <b>search</b> a list of patients, if any, from the MySQL database.</p>
            <p>Available information on the list of patients from the database includes their IDs and names.</p>
            <p>You can <b>insert</b> a new patient into the MySQL database or <b>delete</b> an existing patient</p>
            <p><b>Special Note</b>:
                Deleting a patient from the database will result in the removal of the patient's demographics from Information for Each Patient page, if any.
                The patient's Patient ID and Patient Name, however, will not be changed for consideration of legality purposes.
                Details of any visit the patient may have had with provider(s) will remain unchanged.
            </p>
        </div>
    )
}

export function DescriptionPatientProfiles() {
    return (
        <div className="page-description">
            <p>This page allows you to <b>get</b> and <b>search</b> patient profiles from the MySQL database.</p>
            <p>Available information for patient profiles includes their Profile ID, Phone Number, Email Address, Date of Birth, and Patient ID.</p>
            <p>Additionally, you can <b>insert</b> information about a new patient that was created on List of Patients page and <b>delete</b> information for an existing patient.</p>
            <p>Lastly, you can <b>update</b> a patient profile, including the ability to set Phone Number, Email Address, and Date of Birth as <b>NULL</b>.</p>
        </div>
    )
}

export function DescriptionInsuranceNotes() {

}