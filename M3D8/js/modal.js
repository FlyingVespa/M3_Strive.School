// window.onload = () => {
let container = document.querySelector(".container");
container.innerHTML = `
    <div
    class="modal"
    id="exampleModalCenter"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">
            Add New Product
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form onsubmit="postData(event)">
            <!-- product-name -->
            <div class="form-group row">
              <label for="product-name" class="col-sm-2 col-form-label"
                >Product Name</label
              >
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="product-name"
                  placeholder="required"
                  minlength="3"
                  value="test1"
                />
                <div class="valid-feedback">Looks good!</div>
              </div>
            </div>
            <div class="form-group row">
              <label for="product-brand" class="col-sm-2 col-form-label"
                >Product Brand</label
              >
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="product-brand"
                  placeholder="required"
                  minlength="2"
                  value="test2"
                />
                <div class="valid-feedback">Looks good!</div>
              </div>
            </div>
            <!-- price -->
            <div class="form-group row">
              <label for="product-price" class="col-sm-2 col-form-label"
                >Price</label
              >
              <div class="col-sm-10">
                <input
                  step="10"
                  type="number"
                  min="0"
                  class="form-control"
                  id="product-price"
                  placeholder="$"
                  value= "20"
                
                />
              </div>
            </div>
            <!-- desc -->
            <div class="form-group">
              <label for="product-desc" class="form-label">Description</label>
              <textarea
                type="textarea"
                class="form-control"
                id="product-desc"
                value="Required example textarea"
                minlength="10"
                maxlength="150"
                value= " Please enter a description with minimun of 10 characters."
                required
              ></textarea>
              <div id="char" class="float-right">0</div>
              <div class="invalid-feedback">
                Please enter a description with minimun of 10 characters.
              </div>
            </div>
            <!-- tabs for images -->
            <ul
              class="nav nav-pills flex-row mb-3"
              id="pills-tab"
              role="tablist"
            >
              <li class="nav-item flex-fill">
                <a
                  class="nav-link active"
                  id="pills-img-upload-tab"
                  data-toggle="pill"
                  href="#pills-img-upload"
                  role="tab"
                  aria-controls="pills-img-upload"
                  aria-selected="true"
                  >Upload Image</a
                >
              </li>
              <li class="nav-item flex-fill">
                <a
                  class="nav-link"
                  id="pills-img-url-tab"
                  data-toggle="pill"
                  href="#pills-img-url"
                  role="tab"
                  aria-controls="pills-img-url"
                  aria-selected="false"
                  >Image URL</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="pills-none-tab"
                  data-toggle="pill"
                  href="#pills-none"
                  role="tab"
                  aria-controls="pills-none"
                  aria-selected="false"
                  >None</a
                >
              </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="pills-img-upload"
                role="tabpanel"
                aria-labelledby="pills-img-upload-tab"
              >
                <div class="form-group">
                  <input
                    type="file"
                    class="form-control-file"
                    id="product-img-upload"
                    disabled
                  />
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-img-url"
                role="tabpanel"
                aria-labelledby="pills-img-url-tab"
              >
                <div class="form-group row">
                  <label for="product-img" class="col-sm-2 col-form-label"
                    >URL</label
                  >
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      id="product-img"

                      minlength="3"
                    />
                    <div class="valid-feedback">Looks good!</div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-none"
                role="tabpanel"
                aria-labelledby="pills-none-tab"
              >
                <div class="form-group row">
                  <label for="product-img" class="col-sm-2 col-form-label"
                    >Placeholder</label
                  >
                  <div class="col-sm-10">
                    <input
                      type="url"
                      class="form-control"
                      id="product-img"
                      placeholder="required"
                      value=" https://placeholder.pics/svg/300"
                    />
                    <div class="valid-feedback">Looks good!</div>
                  </div>
                </div>
              </div>
            </div>
            <!-- tabs desc end -->
            <!-- final checkbox -->
            <div class="form-group row">
              <div class="col-sm-10">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="gridCheck1"
                  />
                  <label class="form-check-label" for="gridCheck1"
                    >Is everything correct?</label
                  >
                </div>
              </div>
            </div>
            <button type="reset" class="btn btn-danger">Update</button>
            <button type="reset" class="btn btn-danger">Delete Form</button>
            <button type="reset" class="btn btn-danger">Clear Form</button>
            <button type="submit" class="btn btn-success">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>`;
// };
