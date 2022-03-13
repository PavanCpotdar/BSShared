import React, {Fragment} from 'react'
import CustomTable from "../../components/table";

function ClientPage() {
    const columns = [
        {id: "checkBox"},
        {id: "name", label: "Name"},
        {id: "smartBoard", label: "Smart Board"},
        {id: "smartPad", label: "Smart Pad"},
        {id: "cabinet", label: "Cabinet"},
        {id: "endDateOfLicense", label: "End date of license"},
        {id: "email", label: "Email"},
        {id: "createdBy", label: "Created by"},
        {id: "createdAt", label: "Created At"},
        {id: "actions", label: "Actions"},
    ]

    const rows = [
        {
            name: "Tony", smartBoard: 5, smartPad: 6, cabinet: 1, endDateOfLicense: "10-09-2022",
            email: "xyz@test.com", createdBy: "Roy Walter", createdAt: "02-11-2020", id: "e1"
        },
        {
            name: "Vilim's", smartBoard: 2, smartPad: 4, cabinet: 2, endDateOfLicense: "20-06-2023",
            email: "vilims@test.com", createdBy: "Roy Walter", createdAt: "05-10-2020", id: "e2"
        },
    ]

    return (
        <Fragment>
            <CustomTable
                columns={columns}
                rows={rows}
            />
        </Fragment>
    )
}

export default ClientPage;