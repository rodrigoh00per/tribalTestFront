const fieldsDataOfSection = {
    business: {
        name: {
            name: "name",
            label: "Business Name",
            type: "text",
            required: true,
            mask: "",
            disabled: false,
            size: "85",
            responsive: "85",
           }
        },
    persons: {
        name: {
            name: "name",
            label: "Name",
            type: "text",
            required: true,
            mask: "",
            disabled: false,
            size: "85",
            responsive: "85",
        },
        role: {
            name: "role",
            label: "Role",
            type: "text",
            required: true,
            mask: "",
            disabled: false,
            size: "85",
            responsive: "85",
        },
        email: {
            name: "email",
            label: "Email",
            type: "email",
            required: true,
            mask: "",
            disabled: false,
            size: "85",
            responsive: "85",
        },
        phone: {
            name: "phone",
            label: "Phone",
            type: "text",
            placeholder: "(999) 999-9999",
            required: true,
            mask: "phone",
            disabled: false,
            size: "85",
            responsive: "85",
        },
        join_date: {
            name: "join_date",
            label: "Join Date",
            type: "text",
            required: true,
            mask: "date",
            disabled: false,
            size: "85",
            responsive: "85",
        },

    }
}

export const getFieldsDataOfAction = (section) => fieldsDataOfSection?.[section] ?? {}


