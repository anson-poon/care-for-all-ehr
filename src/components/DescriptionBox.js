export function DescriptionPatients() {
    return (
        <div className="page-description">
            <p>This page allows you to <b>get</b> and <b>search</b> a list of patients, if any, from the MySQL database.</p>
            <p>Available information on the list of patients from the database includes their IDs and names.</p>
            <p>You can <b>insert</b> a new patient into the MySQL database, and <b>update</b> or <b>delete</b> an existing patient</p>
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
            <p>You can <b>insert</b> information about a new patient that was created on List of Patients page, and <b>update</b> or <b>delete</b> information for an existing patient.</p>
            <p>Lastly, you can <b>update</b> a patient profile, including the ability to set Phone Number, Email Address, and Date of Birth as <b>NULL</b>.</p>
        </div>
    )
}

export function DescriptionInsurancePolicies() {
    return (
        <div className="page-description">
            <p>This page allows you to <b>get</b> and <b>search</b> information on insurance policies that have been associated with patients in the MySQL database.</p>
            <p>Available information for each insurance policy includes Insurance ID, Insurance Type, and Patient ID.</p>
            <p>You can <b>insert</b> information about an insurance policy for an existing patient or a newly created patient.</p>
            <p><b>Special Note</b>:  If an insurance policy is already linked with a patient, then an error will occur if the insurance policy is linked with another patient.</p>
        </div>
    )
}

export function DescriptionProviders() {
    return (
        <div className="page-description">
            <p>This page allows you to <b>get</b> and <b>search</b> a list of providers, if any, from the MySQL database.</p>
            <p>Available information on the list of providers from the database includes their IDs and names.</p>
            <p>You can <b>insert</b> a new provider into the MySQL database, and <b>update</b> or <b>delete</b> an existing provider.</p>
            <p><b>Special Note</b>:
                Deleting a provider from the database will result in the removal of the provider's demographics from Information for Each Provider page, if any.
                The provider's Provider ID and Provider Name, however, will not be changed for consideration of legality purposes.
                Details of any visit the provider may have had with patient(s) will remain unchanged.
            </p>
        </div>
    )
}

export function DescriptionProviderProfiles() {
    return (
        <div className="page-description">
            <p>This page allows you to <b>get</b> and <b>search</b> detailed information for all providers from the MySQL database.</p>
            <p>Available information for each provider includes their Provider Profile ID, Title, Specialty, Phone Number, and Provider ID.</p>
            <p>You can <b>insert</b> information about a new provider that was created on List of Providers page or <b>delete</b> an existing provider profile</p>
            <p>Also, you can <b>update</b> for each provider, including the ability to set Title, Specialty, and Phone Number as <b>NULL</b>.</p>
        </div>
    )
}

export function DescriptionPatientProviderRelationships() {
    return (
        <div className="page-description">
            <p>This page allows you to <b>get</b> and <b>search</b> information on current relationships between patients and providers from the MySQL database.</p>
            <p>Available information on the relationships between patients and providers include Patient ID and Provider ID.</p>
            <p>You can only <b>insert</b>, or define, a relationship among entities in the following scenarios, a new relationship can be formed between:</p>
            <ol className="userGuide">
                <li>A newly created patient and a newly created provider.</li>
                <li>A newly created patient and an existing provider.</li>
                <li>An existing patient and a newly created provider.</li>
                <li>An existing patient and an existing provider only if the two existing entities have never established a relationship before.</li>
            </ol>
            <p><b>Special Note</b>:  Once a relationship has been defined between a patient and a provider, then a visit entry can be created on List of Visits page to represent a visit occurred between the two entities.</p>
        </div>
    )
}

export function DescriptionVisits() {
    return (
        <div className="page-description">
            <p>This page allows you to <b>get</b> and <b>search</b> information on visits that have already been associated between patients and providers in the MySQL database.</p>
            <p>Available information for each visit includes Visit ID, Date and Time of Visit, Provider ID, Patient ID, and Insurance ID.</p>
            <p>You can <b>insert</b> information on a new visit between a patient and a provider when the following requirements have been <b>met</b>:</p>
            <ol className="userGuide">
                <li>The relationship between a patient and a provider have been formed on the Relationships between Patients & Providers page.</li>
                <li>An insurance ID has been associated with a patient on the List of Insurance Policies page.</li>
            </ol>
            <p>Failure to meet these requirements will result in an error if the creation of the new visit is attempted.</p>
            <p><b>Special Note</b>:  When a provider is selected, then the appropriate form will automatically generate the patients that have a relationship with the provider. Then once the patient is selected, then the form will also automatically generate insurance policies that have been associated with the specific patient.</p>
        </div>
    )
}

export function DescriptionInsuranceNotes() {
    return (
        <div className="page-description">
            <p>This page allows you to <b>get</b> and <b>search</b> information on insurance notes that have been associated with existing visits between patients and providers in the MySQL database.</p>
            <p>Available information for each insurance note includes Insurance Note ID, Reimbursement Code, and VisitID.</p>
            <p>You can <b>insert</b> information about an insurance note for only new visits.</p>
        </div>
    )
}

export function DescriptionClinicalNotes() {
    return (
        <div className="page-description">
            <p>This page allows you to <b>get</b> and <b>search</b> information on clinical notes that have been associated with existing visits between patients and providers in the MySQL database.</p>
            <p>Available information for each clinical note includes Clinical Note ID, Length of Visit, and Visit ID.</p>
            <p>You can <b>insert</b> information about a clinical note for only new visits.</p>
        </div>
    )
}

export function DescriptionClinicalFindings() {
    return (
        <div className="page-description">
            <p>This page allows you to <b>get</b> and <b>search</b> information on clinical findings that have been associated with existing clinical note IDs in the MySQL database.</p>
            <p>Available information for each clinical findings note includes Clinical Finding ID, Chief Complaint, Patient Blood Pressure, Patient Heart Rate, Patient Temperature, Patient Respiratory Rate, Treatment Plan, and Clinical Note ID.</p>
            <p>You can  <b>insert</b> information on clinical findings for only a new clinical note ID.</p>
        </div>
    )
}