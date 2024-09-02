import Alert from "./Alert";
import Navbar from "./Navbar";
import Pagination from "./Pagination";
import UsersTable from "./UsersTable";

function Layout() {
    return (
        <>
            <div id="addEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">
                                <h4 className="modal-title">Add Employee</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" className="form-control" name="username" required />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" name="email" required />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" name="submit" data-dismiss="modal" value="Cancel" />
                                <input type="submit" className="btn btn-success" value="Add" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div id="editEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">
                                <h4 className="modal-title">Edit Employee</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">
                                <input type="hidden" name="updateId" className="updateId" />
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" className="form-control updateUsername" name="username" required />
                                </div>
                                <div className="form-group">
                                    <label>password</label>
                                    <input type="text" className="form-control updatePassword" name="password" required />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="button" name="submit" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                                <input type="submit" className="btn btn-info" value="Save" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="container-xl">
                <div className="table-responsive d-flex flex-column">
                    <Alert />
                    <div class="table-wrapper">
                        <Navbar />
                        <UsersTable />
                        <Pagination />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout;