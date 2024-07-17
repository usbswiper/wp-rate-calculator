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
  jQuery('.select-mobile').change(function () {
    var selectedOption = jQuery(this).val()
    if (parseInt(selectedOption) === 2) {
      jQuery('.data-stripe ').removeClass('show')
      jQuery('.data-stripe ').addClass('hide')

      jQuery('.data-quick ').removeClass('show')
      jQuery('.data-quick ').addClass('hide')

      jQuery('.data-square ').removeClass('hide')
      jQuery('.data-square ').addClass('show')
    } else if (parseInt(selectedOption) === 3) {
      jQuery('.data-stripe ').removeClass('show')
      jQuery('.data-stripe ').addClass('hide')

      jQuery('.data-square ').removeClass('show')
      jQuery('.data-square ').addClass('hide')

      jQuery('.data-quick ').removeClass('hide')
      jQuery('.data-quick ').addClass('show')
    } else {
      jQuery('.data-stripe ').removeClass('hide')
      jQuery('.data-stripe ').addClass('show')

      jQuery('.data-quick ').removeClass('show')
      jQuery('.data-quick ').addClass('hide')

      jQuery('.data-square ').removeClass('show')
      jQuery('.data-square ').addClass('hide')
    }
  })

  function initializeSlider1() {
    jQuery('#input1').slider({
      min: minRange1,
      max: maxRange1,
      step: 0.5,
      value: 166.5,
      slide: function (event, ui) {
        jQuery('#input1Value').val(formatNumberWithCommas(ui.value.toFixed(2))) // Set input field value with 2 decimal places
        calcTransactionAmount()
      },
    })
  }

  // Initialize the slider
  initializeSlider1()

  // Set initial value for input field
  jQuery('#input1Value').val(jQuery('#input1').slider('value').toFixed(2)) // Set initial value with 2 decimal places

  // Update slider value when input field changes
  jQuery('#input1Value').on('input', function () {
    var value = parseFloat(jQuery(this).val())
    if (!isNaN(value) && value >= 0 && value <= 1000) {
      jQuery('#input1').slider('value', value)
      calcTransactionAmount()
    }
  })

  const calcTransactionAmount = () => {
    let input1Value = jQuery('#input1Value').val()
    let input2Value = jQuery('#input2Value').val()
    output1 =
      parseFloat(removeNumberWithCommas(input1Value)) *
      parseFloat(removeNumberWithCommas(input2Value))

    jQuery('.output1').html('$' + formatNumberWithCommas(output1.toFixed(0)))
    createTable()
  }

  function initializeSlider2() {
    jQuery('#input2').slider({
      min: minRange2,
      max: maxRange2,
      step: 1,
      value: 1000,
      slide: function (event, ui) {
        jQuery('#input2Value').val(formatNumberWithCommas(ui.value.toFixed(0))) // Set input field value with 2 decimal places
        calcTransactionAmount()
      },
    })
  }

  // Initialize the slider
  initializeSlider2()

  jQuery('#input2Value').val(jQuery('#input2').slider('value').toFixed(0)) // Set initial value with 0 decimal places

  jQuery('#input2Value').on('input', function () {
    var value = parseFloat(jQuery(this).val())
    if (!isNaN(value) && value >= 0 && value <= 1000) {
      jQuery('#input2').slider('value', value)
      calcTransactionAmount()
    }
  })

  jQuery('#endInputValue1').on('input', function () {
    var newMaxValue = parseFloat(jQuery(this).val())
    maxRange1 = newMaxValue
    initializeSlider1()
  })

  jQuery('#startInputValue1').on('input', function () {
    var newMinValue = parseFloat(jQuery(this).val())
    minRange1 = newMinValue
    initializeSlider1()
  })

  jQuery('#endInputValue2').on('input', function () {
    var newMaxValue = parseFloat(jQuery(this).val())
    maxRange2 = newMaxValue
    initializeSlider2()
  })

  jQuery('#startInputValue2').on('input', function () {
    var newMinValue = parseFloat(jQuery(this).val())
    minRange2 = newMinValue
    initializeSlider2()
  })

  jQuery('#input3').slider({
    min: 0,
    max: 100,
    step: 1,
    value: 10,
    slide: function (event, ui) {
      jQuery('#input3Value').val(ui.value.toFixed(0)) // Set input field value with 0 decimal places
      createDognutChart()
      calcTransactionAmount()
    },
  })

  jQuery('#input3Value').val(jQuery('#input3').slider('value').toFixed(0)) // Set initial value with 0 decimal places

  jQuery('#input3Value').on('input', function () {
    var value = parseFloat(jQuery(this).val())
    if (!isNaN(value) && value >= 0 && value <= 100) {
      validatePaymentTypeTotal()
      jQuery('#input3').slider('value', value)
      createDognutChart()
      calcTransactionAmount()
    }
  })

  jQuery('#input4').slider({
    min: 0,
    max: 100,
    step: 1,
    value: 25,
    slide: function (event, ui) {
      jQuery('#input4Value').val(ui.value.toFixed(0)) // Set input field value with 0 decimal places
      createDognutChart()
      calcTransactionAmount()
    },
  })

  jQuery('#input4Value').val(jQuery('#input4').slider('value').toFixed(0)) // Set initial value with 0 decimal places

  jQuery('#input4Value').on('input', function () {
    var value = parseFloat(jQuery(this).val())
    if (!isNaN(value) && value >= 0 && value <= 100) {
      jQuery('#input4').slider('value', value)
      createDognutChart()
      calcTransactionAmount()
    }
  })

  jQuery('#input5').slider({
    min: 0,
    max: 100,
    step: 1,
    value: 40,
    slide: function (event, ui) {
      jQuery('#input5Value').val(ui.value.toFixed(0)) // Set input field value with 0 decimal places
      createDognutChart()
      calcTransactionAmount()
    },
  })

  jQuery('#input5Value').val(jQuery('#input5').slider('value').toFixed(0)) // Set initial value with 0 decimal places

  jQuery('#input5Value').on('input', function () {
    var value = parseFloat(jQuery(this).val())
    if (!isNaN(value) && value >= 0 && value <= 100) {
      jQuery('#input5').slider('value', value)
      createDognutChart()
      calcTransactionAmount()
    }
  })

  jQuery('#input6').slider({
    min: 0,
    max: 100,
    step: 1,
    value: 25,
    slide: function (event, ui) {
      jQuery('#input6Value').val(ui.value.toFixed(0)) // Set input field value with 0 decimal places
      createDognutChart()
      calcTransactionAmount()
    },
  })

  jQuery('#input6Value').val(jQuery('#input6').slider('value').toFixed(0)) // Set initial value with 0 decimal places

  jQuery('#input6Value').on('input', function () {
    var value = parseFloat(jQuery(this).val())
    if (!isNaN(value) && value >= 0 && value <= 100) {
      jQuery('#input6').slider('value', value)
      createDognutChart()
      calcTransactionAmount()
    }
  })

  const validatePaymentTypeTotal = () => {
    let v1 = parseFloat(jQuery('#input3Value').val())
    let v2 = parseFloat(jQuery('#input4Value').val())
    let v3 = parseFloat(jQuery('#input5Value').val())
    let v4 = parseFloat(jQuery('#input6Value').val())

    if (v1 + v2 + v3 + v4 != 100) {
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
    inputPie1 = jQuery('#input3Value').val()
    inputPie2 = jQuery('#input4Value').val()
    inputPie3 = jQuery('#input5Value').val()
    inputPie4 = jQuery('#input6Value').val()
  }

  let total =
    parseFloat(inputPie1) +
    parseFloat(inputPie2) +
    parseFloat(inputPie3) +
    parseFloat(inputPie4)
  jQuery('.output').html(total + '.00%')

  if (total !== 100) {
    jQuery('#paymentTypeError').show()
    jQuery('.output').addClass('error')
  } else {
    jQuery('#paymentTypeError').hide()
    jQuery('.output').removeClass('error')
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
  let avgMonthlyTransactions = jQuery('#input2Value').val()
  let ccgooglepay = jQuery('#input5Value').val()
  let terminal = jQuery('#input3Value').val()
  let keyed = jQuery('#input4Value').val()
  let paypal = jQuery('#input6Value').val()

  tableOutput1 =
    (output1 * (2.69 / 100) + (2.29 / 100) * avgMonthlyTransactions) *
    (ccgooglepay / 100)
  jQuery('.tableOutput1 span').html(
    '$' + formatNumberWithCommas(tableOutput1.toFixed(2))
  )

  tableOutput2 =
    (output1 * (2.99 / 100) + 0 * avgMonthlyTransactions) * (ccgooglepay / 100)
  jQuery('.tableOutput2 span').html(
    '$' + formatNumberWithCommas(tableOutput2.toFixed(2))
  )

  tableOutput3 =
    (output1 * (2.9 / 100) + 0.3 * avgMonthlyTransactions) * (ccgooglepay / 100)
  jQuery('.tableOutput3 span').html(
    '$' + formatNumberWithCommas(tableOutput3.toFixed(2))
  )

  tableOutput4 =
    (output1 * (3.3 / 100) + 0.3 * avgMonthlyTransactions) * (ccgooglepay / 100)
  jQuery('.tableOutput4 span').html(
    '$' + formatNumberWithCommas(tableOutput4.toFixed(2))
  )

  setLightDarkClasses(tableOutput1, tableOutput2, tableOutput3, tableOutput4, 0)

  tableOutput5 =
    (output1 * (2.29 / 100) + 0.09 * avgMonthlyTransactions) * (terminal / 100)
  jQuery('.tableOutput5 span').html(
    '$' + formatNumberWithCommas(tableOutput5.toFixed(2))
  )

  tableOutput6 =
    (output1 * (2.5 / 100) + 0 * avgMonthlyTransactions) * (terminal / 100)
  jQuery('.tableOutput6 span').html(
    '$' + formatNumberWithCommas(tableOutput6.toFixed(2))
  )

  tableOutput7 =
    (output1 * (2.7 / 100) + 0.05 * avgMonthlyTransactions) * (terminal / 100)
  jQuery('.tableOutput7 span').html(
    '$' + formatNumberWithCommas(tableOutput7.toFixed(2))
  )

  tableOutput8 =
    (output1 * (2.6 / 100) + 0.1 * avgMonthlyTransactions) * (terminal / 100)
  jQuery('.tableOutput8 span').html(
    '$' + formatNumberWithCommas(tableOutput8.toFixed(2))
  )

  setLightDarkClasses(tableOutput5, tableOutput6, tableOutput7, tableOutput8, 4)

  tableOutput9 =
    (output1 * (2.69 / 100) + 0.49 * avgMonthlyTransactions) * (keyed / 100)
  jQuery('.tableOutput9 span').html(
    '$' + formatNumberWithCommas(tableOutput9.toFixed(2))
  )

  tableOutput10 =
    (output1 * (3.5 / 100) + 0 * avgMonthlyTransactions) * (keyed / 100)
  jQuery('.tableOutput10 span').html(
    '$' + formatNumberWithCommas(tableOutput10.toFixed(2))
  )

  tableOutput11 =
    (output1 * (3.4 / 100) + 0.3 * avgMonthlyTransactions) * (keyed / 100)
  jQuery('.tableOutput11 span').html(
    '$' + formatNumberWithCommas(tableOutput11.toFixed(2))
  )

  tableOutput12 =
    (output1 * (3.5 / 100) + 0.15 * avgMonthlyTransactions) * (keyed / 100)
  jQuery('.tableOutput12 span').html(
    '$' + formatNumberWithCommas(tableOutput12.toFixed(2))
  )

  setLightDarkClasses(
    tableOutput9,
    tableOutput10,
    tableOutput11,
    tableOutput12,
    8
  )

  tableNetOutput1 = tableOutput1 + tableOutput5 + tableOutput9
  jQuery('.tableNetOutput1 ').html(
    '$' + formatNumberWithCommas(tableNetOutput1.toFixed(2))
  )

  tableNetOutput2 = tableOutput2 + tableOutput6 + tableOutput10
  jQuery('.tableNetOutput2 ').html(
    '$' + formatNumberWithCommas(tableNetOutput2.toFixed(2))
  )

  tableNetOutput3 = tableOutput3 + tableOutput7 + tableOutput11
  jQuery('.tableNetOutput3 ').html(
    '$' + formatNumberWithCommas(tableNetOutput3.toFixed(2))
  )

  tableNetOutput4 = tableOutput4 + tableOutput8 + tableOutput12
  jQuery('.tableNetOutput4 ').html(
    '$' + formatNumberWithCommas(tableNetOutput4.toFixed(2))
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
    (output1 * (3.59 / 100) + 0.49 * avgMonthlyTransactions) * (paypal / 100)
  jQuery('.tableOutput13 span').html(
    '$' + formatNumberWithCommas(tableOutput13.toFixed(2))
  )

  tableOutput14 =
    (output1 * (2.99 / 100) + 0 * avgMonthlyTransactions) * (paypal / 100)
  jQuery('.tableOutput14 span').html(
    '$' + formatNumberWithCommas(tableOutput14.toFixed(2))
  )

  setLightDarkClasses(tableOutput13, tableOutput14, 0, 0, 12, 'dual')

  tableNetOutput5 = tableOutput13 + tableNetOutput1
  jQuery('.tableNetOutput5 ').html(
    '$' + formatNumberWithCommas(tableNetOutput5.toFixed(2))
  )

  tableNetOutput6 = tableOutput14 + tableNetOutput2
  jQuery('.tableNetOutput6 ').html(
    '$' + formatNumberWithCommas(tableNetOutput6.toFixed(2))
  )

  setLightDarkClasses(tableNetOutput5, tableNetOutput6, 0, 0, 4, 'netdual')
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
  
  if (type == 'net') {

    jQuery(
      '.tableNetOutput' + (minIndex + (parseInt(1) + parseInt(gap)))
    ).addClass('dark')
    jQuery(
      '.tableNetOutput' + (minIndex + (parseInt(1) + parseInt(gap)))
    ).removeClass('light')

    for (let i = 0; i < 4; i++) {
      if (i !== minIndex) {
        jQuery('.tableNetOutput' + (parseInt(i + 1) + parseInt(gap))).addClass(
          'light'
        )
        jQuery(
          '.tableNetOutput' + (parseInt(i + 1) + parseInt(gap))
        ).removeClass('dark')
      }
    }


    if(minValue == 0) {
      for (let i = 0; i < 4; i++) {
        jQuery('.tableNetOutput'+ (parseInt(i + 1) + parseInt(gap))).removeClass('dark')
        jQuery('.tableNetOutput'+  (parseInt(i + 1) + parseInt(gap))).removeClass('light')
        jQuery('.tableNetOutput'+  (parseInt(i + 1) + parseInt(gap))).addClass('light')
      }
    }



  } else if (type == 'netdual') {
    jQuery('.tableNetOutput5').removeClass('dark')
    jQuery('.tableNetOutput6').removeClass('dark')
    jQuery('.tableNetOutput5').removeClass('light')

    jQuery(
      '.tableNetOutput' + (minIndex + (parseInt(1) + parseInt(gap)))
    ).addClass('dark')
    jQuery(
      '.tableNetOutput' + (minIndex + (parseInt(1) + parseInt(gap)))
    ).removeClass('light')

    if(minValue == 0) {
      for (let i = 5; i <= 6; i++) {
        jQuery('.tableNetOutput'+i).removeClass('dark')
        jQuery('.tableNetOutput'+i).removeClass('light')
        jQuery('.tableNetOutput'+i).addClass('light')
      }
    }

    
  } else if (type == 'dual') {
    jQuery(
      '.tableOutput' + (minIndex + (parseInt(1) + parseInt(gap)))
    ).addClass('dark')
    jQuery(
      '.tableOutput' + (minIndex + (parseInt(1) + parseInt(gap)))
    ).removeClass('light')

    // Add class 'light' to the rest of the inputs
    for (let i = 0; i < 4; i++) {
      if (i !== minIndex) {
        jQuery('.tableOutput' + (parseInt(i + 1) + parseInt(gap))).addClass(
          'light'
        )
      }
    }

    // handle equal case 
    if(tableOutput1 == tableOutput2) {
      jQuery('.tableOutput13').removeClass('dark')
      jQuery('.tableOutput13').addClass('light')
      jQuery('.tableOutput14').removeClass('dark')
    }

  } else {

    // Add class 'dark' to the input with the lowest value
    jQuery('.tableOutput' + (parseInt(minIndex) + parseInt(1) + parseInt(gap))).addClass('dark')
    jQuery('.tableOutput' + (parseInt(minIndex) + parseInt(1) + parseInt(gap))).removeClass('light')

    // Add class 'light' to the rest of the inputs
    for (let i = 0; i < 4; i++) {
      if (i !== minIndex) {
        jQuery('.tableOutput' +  (parseInt(i + 1) + parseInt(gap))).addClass('light')
      }
    }

    if(minValue == 0) {
      for (let i = 0; i < 4; i++) {
        jQuery('.tableOutput'+ (parseInt(i + 1) + parseInt(gap))).removeClass('dark')
        jQuery('.tableOutput'+  (parseInt(i + 1) + parseInt(gap))).removeClass('light')
        jQuery('.tableOutput'+  (parseInt(i + 1) + parseInt(gap))).addClass('light')
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