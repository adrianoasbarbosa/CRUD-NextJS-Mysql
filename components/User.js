function User() {
    return (
        <>
            <tr>
                <td>
                    <span className="custom-checkbox">
                        <input type="checkbox" id="data_checkbox" className="data_checkbox" name="data_checkbox"
                            value="" />
                        <label for="data_checkbox"></label>
                    </span>
                </td>
                <td>Anand Raj</td>
                <td>Rajanand@gmail.com</td>
                <td>
                    <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons"
                        data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                    <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i
                        className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                </td>
            </tr>
        </>
    )
}

export default User;