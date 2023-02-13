import React from "react";
import Image from "../../Images/pic1.png";

function index() {
  return (
    <div>
      <section class="h-100 bg-secondary">
        <div class="container py-5 h-100 ">
          <div class="row d-flex justify-content-center align-items-center h-100 ">
            <div class="col">
              <div class="card card-registration my-4">
                <div class="row g-0">
                  <div class="col-xl-6 d-none d-xl-block ">
                    <img
                      src={Image}
                      style={{ width: "90%", marginTop: "15%" }}
                    />
                  </div>
                  <div class="col-xl-6">
                    <div class="card-body p-md-5 text-black">
                      <h3 class="mb-5 text-uppercase">
                        Student registration form
                      </h3>

                      <div class="row">
                        <div class="col-md-6 mb-4">
                          <div class="form-outline">
                            <input
                              type="text"
                              id="form3Example1m"
                              class="form-control form-control-lg"
                              placeholder="First name"
                            />
                            {/* <label class="form-label" for="form3Example1m">
                              First name
                            </label> */}
                          </div>
                        </div>
                        <div class="col-md-6 mb-4">
                          <div class="form-outline">
                            <input
                              type="text"
                              id="form3Example1n"
                              class="form-control form-control-lg"
                              placeholder="Last name"
                            />
                            {/* <label class="form-label" for="form3Example1n">
                              
                            </label> */}
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-md-6 mb-4">
                          <div class="form-outline">
                            <input
                              type="text"
                              id="form3Example1m1"
                              class="form-control form-control-lg"
                              placeholder="Mother's Name"
                            />
                            {/* <label class="form-label" for="form3Example1m1">
                              Mother's name
                            </label> */}
                          </div>
                        </div>
                        <div class="col-md-6 mb-4">
                          <div class="form-outline">
                            <input
                              type="text"
                              id="form3Example1n1"
                              class="form-control form-control-lg"
                              placeholder="Father's Name"
                            />
                            {/* <label class="form-label" for="form3Example1n1">
                              Father's name
                            </label> */}
                          </div>
                        </div>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example8"
                          class="form-control form-control-lg"
                          placeholder="Address"
                        />
                        {/* <label class="form-label" for="form3Example8">
                          Address
                        </label> */}
                      </div>

                      {/* <label class="form-label" for="form3Example8">
                          Address
                        </label> */}

                      <div class="d-md-flex justify-content-start align-items-center mb-4 py-2">
                        <h6 class="mb-0 me-4">Gender: </h6>

                        <div class="form-check form-check-inline mb-0 me-4">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="femaleGender"
                            value="option1"
                          />
                          <label class="form-check-label" for="femaleGender">
                            Female
                          </label>
                        </div>

                        <div class="form-check form-check-inline mb-0 me-4">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="maleGender"
                            value="option2"
                          />
                          <label class="form-check-label" for="maleGender">
                            Male
                          </label>
                        </div>

                        <div class="form-check form-check-inline mb-0">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="otherGender"
                            value="option3"
                          />
                          <label class="form-check-label" for="otherGender">
                            Other
                          </label>
                        </div>
                      </div>

                      {/* <div class="row">
                        <div class="col-md-6 mb-4">
                          <select class="select">
                            <option value="1">State</option>
                            <option value="2">Option 1</option>
                            <option value="3">Option 2</option>
                            <option value="4">Option 3</option>
                          </select>
                        </div>
                        <div class="col-md-6 mb-4">
                          <select class="select">
                            <option value="1">City</option>
                            <option value="2">Option 1</option>
                            <option value="3">Option 2</option>
                            <option value="4">Option 3</option>
                          </select>
                        </div>
                      </div> */}

                      <div class="form-outline mb-4">
                        <input
                          type="date"
                          id="form3Example9"
                          class="form-control form-control-lg"
                          placeholder="DOB"
                        />
                        {/* <label class="form-label" for="form3Example9">
                          DOB
                        </label> */}
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example90"
                          class="form-control form-control-lg"
                          placeholder="Mobile no"
                        />
                        {/* <label class="form-label" for="form3Example90">
                          Mobile no
                        </label> */}
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example99"
                          class="form-control form-control-lg"
                          placeholder="Email ID"
                        />
                        {/* <label class="form-label" for="form3Example99">
                          Mobile no
                        </label> */}
                      </div>
                      <div class="form-group col-md-4">
                        <label for="inputState" style={{ MarginLeft: "50%" }}>
                          State
                        </label>
                        <select id="inputState" class="form-control">
                          <option selected>Choose...</option>
                          <option>...</option>
                        </select>
                      </div>
                      <div class="d-flex justify-content-end pt-3">
                        <button type="button" class="btn btn-light btn-lg">
                          Reset
                        </button>
                        <button
                          type="button"
                          class="btn btn-warning btn-lg ms-2"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default index;
