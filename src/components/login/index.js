import React from "react";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="container">
      <div className="card m-auto p-3" style={{ width: "400px" }}>
        <div className="card-body">
          <h1 className="card-title">Login page</h1>
          <form className="pt-5">
            <div class="form-outline mb-4">
              <label class="form-label" for="form2Example1">
                User ID
              </label>
              <input type="email" id="form2Example1" class="form-control" />
            </div>

            <div class="form-outline mb-4">
              <label class="form-label" for="form2Example2">
                Password
              </label>
              <input type="password" id="form2Example2" class="form-control" />
            </div>

            <div class="row mb-4">
              <div class="col d-flex justify-content-center">
                <div class="form-check">
                  <label class="form-check-label" for="form2Example31">
                    {" "}
                    Remember me{" "}
                  </label>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="form2Example31"
                    checked
                  />
                </div>
              </div>

              <div class="col">
                <a href="#!">Forgot password?</a>
              </div>
            </div>

            <button type="button" class="btn btn-primary btn-block mb-4">
              Sign in
            </button>

            <div class="text-center">
              <p>
                Not a member? <Link to="/register">Register</Link>
              </p>
              {/* <p>or sign up with:</p> */}
              <button type="button" class="btn btn-link btn-floating mx-1">
                <i class="fab fa-facebook-f"></i>
              </button>

              <button type="button" class="btn btn-link btn-floating mx-1">
                <i class="fab fa-google"></i>
              </button>

              <button type="button" class="btn btn-link btn-floating mx-1">
                <i class="fab fa-twitter"></i>
              </button>

              <button type="button" class="btn btn-link btn-floating mx-1">
                <i class="fab fa-github"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
