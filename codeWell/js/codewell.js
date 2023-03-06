const dropdwon = document.querySelector('#listProducts')
const product = document.querySelector('#products')

product.addEventListener('mouseover', () => {
  dropdwon.style.display = 'flex'
})

dropdwon.addEventListener('mouseout', ()=> {
  dropdwon.style.display = 'none'
})