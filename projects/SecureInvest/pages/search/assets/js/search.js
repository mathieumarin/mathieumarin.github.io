/***********************************/
/*         Range Slider Bar        */
/***********************************/

class Slider {
    constructor (rangeElement, valueElement, options) {
      this.rangeElement = rangeElement
      this.valueElement = valueElement
      this.options = options
  
      // Attach a listener to "change" event
      this.rangeElement.addEventListener('input', this.updateSlider.bind(this))
    }
  
    // Initialize the slider
    init() {
      this.rangeElement.setAttribute('min', options.min)
      this.rangeElement.setAttribute('max', options.max)
      this.rangeElement.value = options.cur
  
      this.updateSlider()
    }
  
    // Format the money
    asMoney(value) {
      return parseFloat(value)
        .toLocaleString('fr-FR', { maximumFractionDigits: 0, style: 'currency', currency: 'EUR',})
    }
  
    generateBackground(rangeElement) {   
      if (this.rangeElement.value === this.options.min) {
        return
      }
  
      let percentage =  (this.rangeElement.value - this.options.min) / (this.options.max - this.options.min) * 100
      return 'background: linear-gradient(to right, rgba(81,206,169,1), rgba(25,93,157,1) ' + percentage + '%, #d3fff7 ' + percentage + '%, #dee1e2 100%)'
    }
  
    updateSlider (newValue) {
      this.valueElement.innerHTML = this.asMoney(this.rangeElement.value)
      this.rangeElement.style = this.generateBackground(this.rangeElement.value)
    }
  }
  
  let rangeElement = document.querySelector('.range [type="range"]')
  let valueElement = document.querySelector('.range .range_value span') 
  
  let options = {
    min: 1000,
    max: 1000000,
    cur: 500000
  }
  
  if (rangeElement) {
    let slider = new Slider(rangeElement, valueElement, options)
  
    slider.init()
  }
