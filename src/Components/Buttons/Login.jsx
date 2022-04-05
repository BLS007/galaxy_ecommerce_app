// Importing react functionality.
import React from 'react';

function Login() {
    return (
        <>
            {/* Button Trigger Modal, in this case it's just "Login" */}
            <button type="button" className="btn btn-lg btn-outline-warning ms-2" data-bs-toggle="modal" data-bs-target="#loginModal">
                <span className="fa fa-sign-in me-1"></span>Login
            </button>

            {/* Login Modal */}
            <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        
                        {/* Title of the Modal, in this case it's just "Login". */}
                        <div className="modal-header bg-dark">
                            <h5 className="modal-title text-light" id="exampleModalLabel">Login</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body bg-dark">
                            {/* Login with Google Button. */}
                            <button className="btn btn-primary w-100 mb-4">
                                <span className="fa fa-google me-2"></span>Login with Google
                            </button>
                            {/* Login with Facebook Button. */}
                            <button className="btn btn-primary w-100 mb-4">
                                <span className="fa fa-facebook me-2"></span>Login with Facebook
                            </button>
                            <form className="needs-validation was-validated" novalidate>
                                {/* Email Address Form. */}
                                <div className="mb-3">
                                    <label htmlFor="InputEmailAddress" className="form-label text-light">Email Address</label>
                                    <input type="email" className="form-control" id="EmailAddress" required />
                                    <div className="invalid-feedback">
                                        Please enter a valid email address.
                                    </div>
                                </div>
                                {/* Password Form. */}
                                <div className="mb-3">
                                    <label htmlFor="InputPassword" className="form-label text-light">Password</label>
                                    <input type="password" className="form-control" id="Password" required />
                                    <div className="invalid-feedback">
                                        Please enter a valid.
                                    </div>
                                </div>
                                {/* Submit Button. */}
                                <button type="submit" className="btn btn-outline-warning w-100 mt-3">Submit</button>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;