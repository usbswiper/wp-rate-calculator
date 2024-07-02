let minRange1 = 0
let minRange2 = 0
let maxRange1 = 1000
let maxRange2 = 1000
let output1
let tableOutput1
let tableOutput2
let tableOutput3
let tableOutput4
let tableOutput5
let tableOutput6
let tableOutput7
let tableOutput8
let tableOutput9
let tableOutput10
let tableOutput11
let tableOutput12
let tableOutput13
let tableOutput14
let tableNetOutput1
let tableNetOutput2
let tableNetOutput3
let tableNetOutput4
let tableNetOutput5
let tableNetOutput6

jQuery(document).ready(function () {

  jQuery( document ).tooltip();

  $('.select-mobile').change(function () {
    var selectedOption = $(this).val()
    if (parseInt(selectedOption) === 2) {
      console.log('square')
      
      $('.data-stripe ').removeClass('show')
      $('.data-stripe ').addClass('hide')

      $('.data-quick ').removeClass('show')
      $('.data-quick ').addClass('hide')

      $('.data-square ').removeClass('hide')
      $('.data-square ').addClass('show')

    } else if (parseInt(selectedOption) === 3) {
        console.log('quick')
        
        $('.data-stripe ').removeClass('show')
        $('.data-stripe ').addClass('hide')
  
        $('.data-square ').removeClass('show')
        $('.data-square ').addClass('hide')

        $('.data-quick ').removeClass('hide')
        $('.data-quick ').addClass('show')

      
    } else {
      console.log('stripe')
      $('.data-stripe ').removeClass('hide')
      $('.data-stripe ').addClass('show')

      $('.data-quick ').removeClass('show')
      $('.data-quick ').addClass('hide')

      jQuery('.data-square ').removeClass('show')
      $('.data-square ').addClass('hide')
    }
  })

  function initializeSlider1() {
    $('#input1').slider({
      min: minRange1,
      max: maxRange1,
      step: 0.5,
      value: 166.5,
      slide: function (event, ui) {
        calcTransactionAmount()
        $('#input1Value').val(formatNumberWithCommas(ui.value.toFixed(2))) // Set input field value with 2 decimal places
      },
    })
  }

  $('#endInputValue1').on('input', function () {
    var newMaxValue = parseFloat($(this).val())
    maxRange1 = newMaxValue
    initializeSlider1()
  })

  $('#startInputValue1').on('input', function () {
    var newMinValue = parseFloat($(this).val())
    minRange1 = newMinValue
    initializeSlider1()
  })

  // Initialize the slider
  initializeSlider1()

  // Set initial value for input field
  $('#input1Value').val($('#input1').slider('value').toFixed(2)) // Set initial value with 2 decimal places

  // Update slider value when input field changes
  $('#input1Value').on('input', function () {
    var value = parseFloat($(this).val())
    if (!isNaN(value) && value >= 0 && value <= 1000) {
      $('#input1').slider('value', value)
      calcTransactionAmount()
    }
  })

  const calcTransactionAmount = () => {
    let input1Value = $('#input1Value').val()
    let input2Value = $('#input2Value').val()
    output1 =
      parseFloat(removeNumberWithCommas(input1Value)) *
      parseFloat(removeNumberWithCommas(input2Value))

    $('.output1').html('$' + formatNumberWithCommas(output1.toFixed(0)))
    createTable()
  }

  function initializeSlider2() {
    $('#input2').slider({
      min: minRange2,
      max: maxRange2,
      step: 50,
      value: 1000,
      slide: function (event, ui) {
        calcTransactionAmount()
        $('#input2Value').val(formatNumberWithCommas(ui.value.toFixed(2))) // Set input field value with 2 decimal places
      },
    })
  }

  $('#endInputValue2').on('input', function () {
    var newMaxValue = parseFloat($(this).val())
    maxRange2 = newMaxValue
    initializeSlider2()
  })

  $('#startInputValue2').on('input', function () {
    var newMinValue = parseFloat($(this).val())
    minRange2 = newMinValue
    initializeSlider2()
  })

  // Initialize the slider
  initializeSlider2()

  $('#input2Value').val($('#input2').slider('value').toFixed(2)) // Set initial value with 2 decimal places

  $('#input2Value').on('input', function () {
    var value = parseFloat($(this).val())
    if (!isNaN(value) && value >= 0 && value <= 1000) {
      $('#input2').slider('value', value)
      calcTransactionAmount()
    }
  })

  $('#input3').slider({
    min: 0,
    max: 100,
    step: 5,
    value: 10,
    slide: function (event, ui) {
      $('#input3Value').val(ui.value.toFixed(2)) // Set input field value with 2 decimal places
      createDognutChart()
      calcTransactionAmount()
    },
  })

  $('#input3Value').val($('#input3').slider('value').toFixed(2)) // Set initial value with 2 decimal places

  $('#input3Value').on('input', function () {
    var value = parseFloat($(this).val())
    if (!isNaN(value) && value >= 0 && value <= 100) {
      validatePaymentTypeTotal()
      $('#input3').slider('value', value)
      createDognutChart()
      calcTransactionAmount()
    }
  })

  $('#input4').slider({
    min: 0,
    max: 100,
    step: 5,
    value: 25,
    slide: function (event, ui) {
      $('#input4Value').val(ui.value.toFixed(2)) // Set input field value with 2 decimal places
      createDognutChart()
      calcTransactionAmount()
    },
  })

  $('#input4Value').val($('#input4').slider('value').toFixed(2)) // Set initial value with 2 decimal places

  $('#input4Value').on('input', function () {
    var value = parseFloat($(this).val())
    if (!isNaN(value) && value >= 0 && value <= 100) {
      $('#input4').slider('value', value)
      createDognutChart()
      calcTransactionAmount()
    }
  })

  $('#input5').slider({
    min: 0,
    max: 100,
    step: 5,
    value: 40,
    slide: function (event, ui) {
      $('#input5Value').val(ui.value.toFixed(2)) // Set input field value with 2 decimal places
      createDognutChart()
      calcTransactionAmount()
    },
  })

  $('#input5Value').val($('#input5').slider('value').toFixed(2)) // Set initial value with 2 decimal places

  $('#input5Value').on('input', function () {
    var value = parseFloat($(this).val())
    if (!isNaN(value) && value >= 0 && value <= 100) {
      $('#input5').slider('value', value)
      createDognutChart()
      calcTransactionAmount()
    }
  })

  $('#input6').slider({
    min: 0,
    max: 100,
    step: 5,
    value: 25,
    slide: function (event, ui) {
      $('#input6Value').val(ui.value.toFixed(2)) // Set input field value with 2 decimal places
      createDognutChart()
      calcTransactionAmount()
    },
  })

  $('#input6Value').val($('#input6').slider('value').toFixed(2)) // Set initial value with 2 decimal places

  $('#input6Value').on('input', function () {
    var value = parseFloat($(this).val())
    if (!isNaN(value) && value >= 0 && value <= 100) {
      $('#input6').slider('value', value)
      createDognutChart()
      calcTransactionAmount()
    }
  })

  const validatePaymentTypeTotal = () => {
    let v1 = parseFloat($('#input3Value').val())
    let v2 = parseFloat($('#input4Value').val())
    let v3 = parseFloat($('#input5Value').val())
    let v4 = parseFloat($('#input6Value').val())

    if (v1 + v2 + v3 + v4 != 100) {
      alert('Payment type values should add upto 100%')
      return false
    }
  }
})

let inputPie1
let inputPie2
let inputPie3
let inputPie4

const createDognutChart = (check) => {
  if (check === false) {
    inputPie1 = 10
    inputPie2 = 25
    inputPie3 = 40
    inputPie4 = 25
  } else {
    inputPie1 = $('#input3Value').val()
    inputPie2 = $('#input4Value').val()
    inputPie3 = $('#input5Value').val()
    inputPie4 = $('#input6Value').val()
  }

  let total =
    parseFloat(inputPie1) +
    parseFloat(inputPie2) +
    parseFloat(inputPie3) +
    parseFloat(inputPie4)
  $('.output').html(total + '.00%')

  if (total !== 100) {
    jQuery('#paymentTypeError').show()
    $('.output').addClass('error')
  } else {
    jQuery('#paymentTypeError').hide()
    $('.output').removeClass('error')
  }

  const labels = [
    'Paypal / Venmo',
    'Terminal Reader',
    'Keyed In',
    'Credit Card / Apple Pay / Google Pay',
  ]
  const data = {
    labels: labels,
    datasets: [
      {
        label: '% OF TRANSACTIONS',
        backgroundColor: ['#549cd4', '#9bc4e3', '#bcd4ec', '#2c74b4'],
        borderWidth: 1,
        data: [inputPie1, inputPie2, inputPie3, inputPie4], // Dummy sales data
      },
    ],
  }

  // Chart configuration
  const config = {
    type: 'doughnut',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  }

  // Get the existing chart instance
  var existingChart = Chart.getChart('myChart')

  // If an existing chart exists, destroy it
  if (existingChart) {
    existingChart.destroy()
  }

  // Create the chart
  var myChart = new Chart(document.getElementById('myChart'), config)
}

createDognutChart(false)

const createTable = () => {
  let avgMonthlyTransactions = $('#input2Value').val()
  let ccgooglepay = $('#input5Value').val()
  let terminal = $('#input3Value').val()
  let keyed = $('#input4Value').val()
  let paypal = $('#input6Value').val()

  tableOutput1 =
    (output1 * (2.69 / 100) + (2.29 / 100) * avgMonthlyTransactions) *
    (ccgooglepay / 100)
  $('.tableOutput1 span').html("$"+
    formatNumberWithCommas(tableOutput1.toFixed(2))
  )

  tableOutput2 =
    (output1 * (2.99 / 100) + 0 * avgMonthlyTransactions) *
    (ccgooglepay / 100)
  $('.tableOutput2 span').html("$"+
    formatNumberWithCommas(tableOutput2.toFixed(2))
  )

  tableOutput3 =
    (output1 * (2.9 / 100) + 0.3 * avgMonthlyTransactions) *
    (ccgooglepay / 100)
  $('.tableOutput3 span').html("$"+
    formatNumberWithCommas(tableOutput3.toFixed(2))
  )

  tableOutput4 =
    (output1 * (3.3 / 100) + 0.3 * avgMonthlyTransactions) *
    (ccgooglepay / 100)
  $('.tableOutput4 span').html("$"+
    formatNumberWithCommas(tableOutput4.toFixed(2))
  )

  setLightDarkClasses(
    tableOutput1,
    tableOutput2,
    tableOutput3,
    tableOutput4,
    0
  )

  tableOutput5 =
    (output1 * (2.29 / 100) + 0.09 * avgMonthlyTransactions) *
    (terminal / 100)
  $('.tableOutput5 span').html("$"+
    formatNumberWithCommas(tableOutput5.toFixed(2))
  )

  tableOutput6 =
    (output1 * (2.5 / 100) + 0 * avgMonthlyTransactions) *
    (terminal / 100)
  $('.tableOutput6 span').html("$"+
    formatNumberWithCommas(tableOutput6.toFixed(2))
  )

  tableOutput7 =
    (output1 * (2.7 / 100) + 0.05 * avgMonthlyTransactions) *
    (terminal / 100)
  $('.tableOutput7 span').html("$"+
    formatNumberWithCommas(tableOutput7.toFixed(2))
  )

  tableOutput8 =
    (output1 * (2.6 / 100) + 0.1 * avgMonthlyTransactions) *
    (terminal / 100)
  $('.tableOutput8 span').html("$"+
    formatNumberWithCommas(tableOutput8.toFixed(2))
  )

  setLightDarkClasses(
    tableOutput5,
    tableOutput6,
    tableOutput7,
    tableOutput8,
    4
  )

  tableOutput9 =
    (output1 * (2.69 / 100) + 0.49 * avgMonthlyTransactions) *
    (keyed / 100)
  $('.tableOutput9 span').html("$"+
    formatNumberWithCommas(tableOutput9.toFixed(2))
  )

  tableOutput10 =
    (output1 * (3.5 / 100) + 0 * avgMonthlyTransactions) * (keyed / 100)
  $('.tableOutput10 span').html("$"+
    formatNumberWithCommas(tableOutput10.toFixed(2))
  )

  tableOutput11 =
    (output1 * (3.4 / 100) + 0.3 * avgMonthlyTransactions) * (keyed / 100)
  $('.tableOutput11 span').html("$"+
    formatNumberWithCommas(tableOutput11.toFixed(2))
  )

  tableOutput12 =
    (output1 * (3.5 / 100) + 0.15 * avgMonthlyTransactions) *
    (keyed / 100)
  $('.tableOutput12 span').html("$"+
    formatNumberWithCommas(tableOutput12.toFixed(2))
  )

  setLightDarkClasses(
    tableOutput9,
    tableOutput10,
    tableOutput11,
    tableOutput12,
    8
  )

  tableNetOutput1 = tableOutput1 + tableOutput5 + tableOutput9
  $('.tableNetOutput1 ').html("$"+
    formatNumberWithCommas(tableNetOutput1.toFixed(2))
  )

  tableNetOutput2 = tableOutput2 + tableOutput6 + tableOutput10
  $('.tableNetOutput2 ').html("$"+
    formatNumberWithCommas(tableNetOutput2.toFixed(2))
  )

  tableNetOutput3 = tableOutput3 + tableOutput7 + tableOutput11
  $('.tableNetOutput3 ').html("$"+
    formatNumberWithCommas(tableNetOutput3.toFixed(2))
  )

  tableNetOutput4 = tableOutput4 + tableOutput8 + tableOutput12
  $('.tableNetOutput4 ').html("$"+
    formatNumberWithCommas(tableNetOutput4.toFixed(2))
  )

  setLightDarkClasses(
    tableNetOutput1,
    tableNetOutput2,
    tableNetOutput3,
    tableNetOutput4,
    0,
    'net'
  )

  tableOutput13 =
    (output1 * (3.59 / 100) + 0.49 * avgMonthlyTransactions) *
    (paypal / 100)
  $('.tableOutput13 span').html("$"+
    formatNumberWithCommas(tableOutput13.toFixed(2))
  )

  tableOutput14 =
    (output1 * (2.99 / 100) + 0 * avgMonthlyTransactions) * (paypal / 100)
  $('.tableOutput14 span').html("$"+
    formatNumberWithCommas(tableOutput14.toFixed(2))
  )

  setLightDarkClasses(tableOutput13, tableOutput14, 0, 0, 12, 'dual')

  tableNetOutput5 = tableOutput13 + tableNetOutput1
  $('.tableNetOutput5 ').html("$"+
    formatNumberWithCommas(tableNetOutput5.toFixed(2))
  )

  tableNetOutput6 = tableOutput14 + tableNetOutput2
  $('.tableNetOutput6 ').html("$"+
    formatNumberWithCommas(tableNetOutput6.toFixed(2))
  )

  setLightDarkClasses(
    tableNetOutput5,
    tableNetOutput6,
    0,
    0,
    4,
    'netdual'
  )
}

function setLightDarkClasses(
  tableOutput1,
  tableOutput2,
  tableOutput3,
  tableOutput4,
  gap,
  type = 'normal'
) {
  let values

  if (type === 'dual') {
    values = [parseFloat(tableOutput1), parseFloat(tableOutput2)]
  } else if (type === 'netdual') {
    values = [parseFloat(tableOutput1), parseFloat(tableOutput2)]
  } else {
    values = [
      parseFloat(tableOutput1),
      parseFloat(tableOutput2),
      parseFloat(tableOutput3),
      parseFloat(tableOutput4),
    ]
  }

  // Find the minimum value and its index
  let minValue = Math.min(...values)
  let minIndex = values.indexOf(minValue)

  if (type === 'dual') {
    console.log("minValue",minValue)
    console.log("minIndex",minIndex)
    }

  if (type == 'net' || type == 'netdual') {
    $(
      '.tableNetOutput' + (minIndex + (parseInt(1) + parseInt(gap)))
    ).addClass('dark')
    $(
      '.tableNetOutput' + (minIndex + (parseInt(1) + parseInt(gap)))
    ).removeClass('light')

    for (let i = 0; i < 4; i++) {
      if (i !== minIndex) {
        $('.tableNetOutput' + (parseInt(i + 1) + parseInt(gap))).addClass(
          'light'
        )
        $(
          '.tableNetOutput' + (parseInt(i + 1) + parseInt(gap))
        ).removeClass('dark')
      }
    }
  } else {
    console.log("dual dark here", minIndex)
    // Add class 'dark' to the input with the lowest value
    $('.tableOutput' + (minIndex + (parseInt(1) + parseInt(gap)))).addClass('dark')
    $('.tableOutput' + (minIndex + (parseInt(1) + parseInt(gap)))).removeClass('light')

    // Add class 'light' to the rest of the inputs
    for (let i = 0; i < 4; i++) {
      if (i !== minIndex) {
        $('.tableOutput' + (i + 1) + parseInt(gap)).addClass('light')
      }
    }
  }
}
function formatNumberWithCommas(number) {
  // Convert number to string
  let numberString = number.toString()

  // Split the number into integer and decimal parts, if any
  let parts = numberString.split('.')
  let integerPart = parts[0]
  let decimalPart = parts.length > 1 ? '.' + parts[1] : ''

  // Add commas for thousands separator
  integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',')

  // Concatenate integer and decimal parts
  return integerPart + decimalPart
}

function removeNumberWithCommas(numberWithCommas) {
  // Remove commas from the number
  let numberWithoutCommas = numberWithCommas.replace(/,/g, '')

  return numberWithoutCommas
}