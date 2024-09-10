<?php 

$url = plugin_dir_url(__FILE__);

?>

<div class="credit-strength-calc">
      
      
      <div class="calculator">
        <div class="flex flex-three">
          <div class="col-1">
            <label
              >AVERAGE<span class="sub"
                >Transaction Amount <span class="req">*</span></span
              ></label
            >
          </div>
          <div class="col-2">
            <div class="flex-input">
              $
              <input type="text" id="input1Value" value="166.50" />
            </div>
          </div>
          <div class="col-3 flex">
            <div class="start">
              <input
                type="text"
                class="range-input"
                id="startInputValue1"
                value="0"
              />
              <i
                class="fa-solid fa-circle-info"
                title="Enter a minimum value"
              ></i>
            </div>
            <div id="input1"></div>
            <div class="end">
              <input
                type="text"
                class="range-input"
                id="endInputValue1"
                value="1000"
              />
              <i
                class="fa-solid fa-circle-info"
                title="Enter a maximum value"
              ></i>
            </div>
          </div>
        </div>
        <div class="flex flex-three">
          <div class="col-1">
            <label
              >AVERAGE Monthly<span class="sub"
                >No. of Transactions <span class="req">*</span></span
              ></label
            >
          </div>
          <div class="col-2">
            <div class="flex-input">
              <input type="text" id="input2Value" value="0" />
            </div>
          </div>
          <div class="col-3 flex">
            <div class="start">
              <input
                type="text"
                class="range-input"
                id="startInputValue2"
                value="0"
              />
              <i
                class="fa-solid fa-circle-info"
                title="Enter a minimum value"
              ></i>
            </div>
            <div id="input2"></div>
            <div class="end">
              <input
                type="text"
                class="range-input"
                id="endInputValue2"
                value="1000"
              />
              <i
                class="fa-solid fa-circle-info"
                title="Enter a maximum value"
              ></i>
            </div>
          </div>
        </div>
        <div class="flex flex-two">
          <div class="col-1">
            <div class="output-wrap">
              <label
                >AVERAGE Monthly<span class="sub"
                  >Transaction Volume</span
                ></label
              >
              <div class="output1">$166,500</div>
            </div>
          </div>
          <div class="col-2 text">
            Ready for Low Fees with USBSwiper?
            <a href="https://calendar.app.google/9CbqksVxLWxJFS7V9" target="_blank">SCHEDULE A 15 MIN. CONSULT</a>
          </div>
        </div>

        <div class="flex flex-two-third">
          <div class="col-two-third">
            <h3 id="percentage_payment_types">% OF TRANSACTIONS BY PAYMENT TYPE</h3>
            <div id="paymentTypeError" style="display: none">
              Payment type split needs to equal 100%
            </div>
            <div class="flex flex-two">
              <div class="col-1">
                <div class="label">Paid via Terminal Reader</div>
                <div class="input input-img">
                  <div class="images img1">
                    <img src="<?php echo $url; ?>img/calc/credit-card-comparison/1.png" />
                    <img src="<?php echo $url; ?>img/calc/credit-card-comparison/2.png" />
                  </div>
                  <input type="text" id="input3Value" value="10" />
                </div>
                <div class="slide flex">
                  <div class="start">0</div>
                  <div id="input3"></div>
                  <div class="end">100</div>
                </div>
              </div>
              <div class="col-2">
                <div class="label">Keyed In</div>
                <div class="input input-img img2">
                  <div class="images">
                    <img src="<?php echo $url; ?>img/calc/credit-card-comparison/3.png" />
                    <img src="<?php echo $url; ?>img/calc/credit-card-comparison/4.png" />
                  </div>
                  <input type="text" id="input4Value" value="0" />
                </div>
                <div class="slide flex">
                  <div class="start">0</div>
                  <div id="input4"></div>
                  <div class="end">100</div>
                </div>
              </div>
            </div>
            <div class="flex flex-two">
              <div class="col-1">
                <div class="label">Invoices Paid With</div>
                <div class="input input-img">
                  <div class="images">
                    <img src="<?php echo $url; ?>img/calc/credit-card-comparison/6.png" />
                    <img src="<?php echo $url; ?>img/calc/credit-card-comparison/5.png" />
                    <img src="<?php echo $url; ?>img/calc/credit-card-comparison/7.png" />
                  </div>
                  <input type="text" id="input5Value" value="0" />
                </div>
                <div class="slide flex">
                  <div class="start">0</div>
                  <div id="input5"></div>
                  <div class="end">100</div>
                </div>
              </div>
              <div class="col-2">
                <div class="label">Invoices Paid With</div>
                <div class="input input-img">
                  <div class="images">
                    <img src="<?php echo $url; ?>img/calc/credit-card-comparison/8.png" />
                    <img src="<?php echo $url; ?>img/calc/credit-card-comparison/9.png" />
                  </div>
                  <input type="text" id="input6Value" value="0" />
                </div>
                <div class="slide flex">
                  <div class="start">0</div>
                  <div id="input6"></div>
                  <div class="end">100</div>
                </div>
              </div>
            </div>
            <div class="full">
              <label>Total % of Transactions</label>
              <div class="output">100.00%</div>
            </div>
          </div>
          <div class="col-one-third">
            <div class="chart">
              <canvas id="myChart" width="300" height="300"></canvas>
            </div>
          </div>
        </div>
      </div>
      <div class="tables">
        <h2>USBSwiper vs. Competitors</h2>
        <p class="mobile" id="mobile_dropdown_message">Tap the button to compare other competitors</p>
        <select class="mobile select-mobile">
          <option value="1">USBSwiper vs. Stripe</option>
          <option value="2">USBSwiper vs. Square</option>
          <option value="3">USBSwiper vs. Quickbooks</option>
        </select>
        <div class="table">
          <div class="table-header">
            <div class="label">Payment Type</div>
            <div class="item prod-logo prod-logo1 data-usb">
              <img src="<?php echo $url; ?>img/calc/credit-card-comparison/10.png" />
            </div>
            <div class="item prod-logo prod-logo2 data-quick">
              <img src="<?php echo $url; ?>img/calc/credit-card-comparison/11.png" />
            </div>
            <div class="item prod-logo prod-logo3 data-square hide">
              <img src="<?php echo $url; ?>img/calc/credit-card-comparison/12.png" />
            </div>
            <div class="item prod-logo prod-logo4 data-stripe show">
              <img src="<?php echo $url; ?>img/calc/credit-card-comparison/13.png" />
            </div>
          </div>
          <div class="table-data">
            <div class="label label-logo">
              Invoicing
              <div class="images">
                <img src="<?php echo $url; ?>img/calc/credit-card-comparison/6.png" />
                <img src="<?php echo $url; ?>img/calc/credit-card-comparison/5.png" />
                <img src="<?php echo $url; ?>img/calc/credit-card-comparison/7.png" />
              </div>
            </div>
            <div class="item dark tableOutput1 data-usb">
              2.69%<span>$1,800.70</span>
            </div>
            <div class="item light tableOutput2 data-quick">
              2.99%<span>$1,991.34</span>
            </div>
            <div class="item light tableOutput3 data-square hide">
              2.90%<span>$2,051.40</span>
            </div>
            <div class="item light tableOutput4 data-stripe show">
              3.30%<span>$2,317.80</span>
            </div>
          </div>
          <div class="table-data">
            <div class="label label-logo">
              Terminal Card Reader
              <div class="images img1">
                <img src="<?php echo $url; ?>img/calc/credit-card-comparison/1.png" />
                <img src="<?php echo $url; ?>img/calc/credit-card-comparison/2.png" />
              </div>
            </div>
            <div class="item dark tableOutput5 data-usb">
              2.29%<span>$390.29</span>
            </div>
            <div class="item light tableOutput6 data-quick">
              2.50%<span>$416.25</span>
            </div>
            <div class="item light tableOutput7 data-square hide">
              2.70%<span>$454.55</span>
            </div>
            <div class="item light tableOutput8 data-stripe show">
              2.60%<span>$442.90</span>
            </div>
          </div>
          <div class="table-data">
            <div class="label label-logo">
              Keyed-In Cards
              <div class="images img1">
                <img src="<?php echo $url; ?>img/calc/credit-card-comparison/3.png" />
                <img src="<?php echo $url; ?>img/calc/credit-card-comparison/4.png" />
              </div>
            </div>
            <div class="item dark tableOutput9 data-usb">
              2.69%<span>$1,242.21</span>
            </div>
            <div class="item light tableOutput10 data-quick">
              3.50%<span>$1,456.88</span>
            </div>
            <div class="item light tableOutput11 data-square hide">
              3.40%<span>$1,490.25</span>
            </div>
            <div class="item light tableOutput12 data-stripe show">
              3.50%<span>$1,494.38</span>
            </div>
          </div>
          <div class="table-footer">
            <div class="label">Total Monthly Fees Paid</div>
            <div class="item dark tableNetOutput1 data-usb">$850.36</div>
            <div class="item light tableNetOutput2 data-quick">$906.84</div>
            <div class="item light tableNetOutput3 data-square hide">
              $985.50
            </div>
            <div class="item light tableNetOutput4 data-stripe show">
              $997.20
            </div>
          </div>
        </div>
      </div>

      <div class="tables">
        <div class="table">
          <div class="table-header">
            <div class="label">Payment Type</div>
            <div class="item prod-logo prod-logo1 data-usb">
              <img src="<?php echo $url; ?>img/calc/credit-card-comparison/10.png" />
            </div>
            <div class="item prod-logo prod-logo2 data-quick">
              <img src="<?php echo $url; ?>img/calc/credit-card-comparison/11.png" />
            </div>
            <div class="item prod-logo prod-logo3 data-square hide">
              <img src="<?php echo $url; ?>img/calc/credit-card-comparison/12.png" />
            </div>
            <div class="item prod-logo prod-logo4 data-stripe show">
              <img src="<?php echo $url; ?>img/calc/credit-card-comparison/13.png" />
            </div>
          </div>
          <div class="table-data">
            <div class="label label-logo">
              Invoicing
              <div class="images">
                <img src="<?php echo $url; ?>img/calc/credit-card-comparison/8.png" />
                <img src="<?php echo $url; ?>img/calc/credit-card-comparison/9.png" />
              </div>
            </div>
            <div class="item light tableOutput13 data-usb">
              3.59%<span>$1,616.84</span>
            </div>
            <div class="item dark tableOutput14 data-quick">
              2.99%<span>$1,244.59</span>
            </div>
            <div class="item light data-square hide">N/A</div>
            <div class="item light data-stripe show">N/A</div>
          </div>
          <div class="table-footer">
            <div class="label">Total Monthly Fees Paid</div>
            <div class="item dark tableNetOutput5 data-usb">$850.36</div>
            <div class="item light tableNetOutput6 data-quick">$906.84</div>
            <div class="item light data-square hide"></div>
            <div class="item light data-stripe show"></div>
          </div>
        </div>
      </div>
    </div>