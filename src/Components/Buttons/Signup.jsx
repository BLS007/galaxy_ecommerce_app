// Importing react functionality.
import React from 'react';

const Signup = () => {
    return (
        <div>
            {/* Button Trigger Modal, in this case it's just "Sign Up" */}
            <button type="button" className="btn btn-lg btn-outline-warning ms-2" data-bs-toggle="modal" data-bs-target="#signupModal">
                <span className="fa fa-user-plus me-1"></span>Sign Up
            </button>

            {/* Login Modal */}
            <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        
                        {/* Title of the Modal, in this case it's just "Sign Up". */}
                        <div className="modal-header bg-dark">
                            <h5 className="modal-title text-light" id="exampleModalLabel">Sign Up</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body bg-dark">

                            {/* Sign up with Google Button. */}
                            <button className="btn btn-primary w-100 mb-4">
                                <span className="fa fa-google me-2"></span>Sign up with Google
                            </button>

                            {/* Sign up with Facebook Button. */}
                            <button className="btn btn-primary w-100 mb-4">
                                <span className="fa fa-facebook me-2"></span>Sign up with Facebook
                            </button>

                            <form className="needs-validation was-validated" novalidate>
                                
                                {/* Username Form. */}
                                <div className="mb-3">
                                    <label htmlFor="exampleInput" className="form-label text-light">Username</label>
                                    <input type="text" className="form-control" id="exampleInput" required />
                                    <div className="invalid-feedback">
                                        Please enter a valid username.
                                    </div>
                                </div>

                                {/* Email Address Form. */}
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label text-light">Email Address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" required />
                                    <div className="invalid-feedback">
                                        Please enter a valid email address.
                                    </div>
                                </div>

                                {/* Password Form. */}
                                <div className="mb-3">
                                    <label htmlFor="SignUpPassword" className="form-label text-light">Password</label>
                                    <input type="password" className="form-control" id="SignUpPassword" required />
                                    <div className="invalid-feedback">
                                        Please enter a valid password.
                                    </div>
                                </div>

                                {/* Check Box (Agreeing to the terms). */}
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="SignUpCheckbox" required />
                                    <label className="form-check-label text-light" htmlFor="SignUpCheckbox">By clicking the box, you agree to our Privacy Policy & Terms of Use.</label>
                                    <div class="invalid-feedback">
                                        You must agree before submitting.
                                    </div>
                                </div>

                                {/* Submit Button. */}
                                <button type="submit" className="btn btn-outline-warning w-100 mt-3">Submit</button>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;