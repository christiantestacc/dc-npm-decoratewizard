import { BorderWizard } from 'dc-npm-sw'


function DecorateWizard(options) {
  if(!options.decoration === 'underline') options.decoration = 'none'
  let texts = document.querySelectorAll('.shadowizard')
  texts.forEach((e) => {
    e.style.textDecoration = options.decoration
  })
  BorderWizard({
    borderType: 'black',
    padding: true,
  })
}

module.exports.DecorateWizard = DecorateWizard