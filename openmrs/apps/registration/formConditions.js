Bahmni.ConceptSet.FormConditions.rules = {      //This is a constant that Bahmni expects
    'Type of Patient': function(formName, formFieldValues) {//'Chief Complaint Data' concept when edited, triggers this function
        var patient_type = formFieldValues['Type of Patient'];
        if (patient_type == "Insurance") {
            return {
                enable: ["Insurance Provider","Client Number"]
            }
        } else {
            return {
                disable: ["Insurance Provider","Client Number"]
            }
        }
    }
};