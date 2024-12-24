export function processElement(element: any, recipe: any, parentName = '', nthChild = 0) {
  // console.log("processing element: ", element, recipe);
  // Create a new element using the DOM API
  let tagName = recipe.tag_name || element.tagName.toLowerCase()
  // Handle underscored tags
  if (tagName.endsWith('_')) {
    tagName = tagName.slice(0, -1)
  }
  const newElement = document.createElement(tagName)

  // Extract text content based on the recipe
  let elementText = ''
  if (recipe.text_selector) {

    const textElement = element.querySelector(recipe.text_selector)
    if (textElement) {
      elementText = textElement.innerText || textElement.textContent || ''
    }
  } else if (recipe.text_js) {
    elementText = recipe.text_js(element);
    if (elementText === '' || elementText === undefined) {
      console.log("text js does not detect text for element", element);
    }
  } else if (recipe.add_text) {
    elementText = element.innerText || element.textContent || ''
  }
  elementText = elementText.replace(/\s+/g, ' ').trim()
  if (recipe.text_format && elementText) {
    elementText = recipe.text_format.replace('{}', elementText)
  } else if (recipe.text_format) {
    elementText = recipe.text_format
  }

  if (elementText && recipe.add_text) {
    newElement.textContent = elementText
  }


  // Build the node attributes
  let elementName = ''
  if (recipe.name) {
    if (recipe.name === 'from_text') {
      elementName = parentName ? parentName + '.' : ''
      if (!elementText) {
        // console.log("element text not found");
        elementName = '';
      } else {
        elementName += elementText.toLowerCase().replace(/[^\w]+/g, '_');
      }
    } else if (recipe.name === 'from_nth_child') {
      elementName = parentName ? parentName + '.' : ''
      elementName += nthChild.toString()
    } else {
      elementName = parentName ? parentName + '.' : ''
      elementName += recipe.name
    }
    newElement.setAttribute('name', elementName)
    parentName = elementName
  }

  if (recipe.generate_metadata) {
    const metadata = JSON.stringify(recipe.generate_metadata(element))
    element.setAttribute('data-element-meta', metadata);
  }

  // Handle clickables and inputs
  if (recipe.clickable) {
    if (!recipe.name) {
      throw new Error('clickable element must have a name')
    }
    // handle click_selector
    let click_element: Element | null
    if (recipe.click_selector) {
      click_element = element.querySelector(recipe.click_selector)
    } else {
      click_element = element
    }
    if (click_element) {
      click_element.setAttribute('data-clickable-id', elementName)
    } else {
      console.log('click-element not found', element, recipe)
    }
    if (!window.clickable_recipes) {
      window.clickable_recipes = {}
    }
    window.clickable_recipes[elementName] = recipe
  }
  if (tagName === 'input') {
    const inputType = element.getAttribute('type')
    if (['text', 'number'].includes(inputType)) {
      newElement.setAttribute('value', element.value)
      element.setAttribute('data-input-id', elementName)
    } else if (inputType === 'checkbox') {
      newElement.setAttribute('checked', element.checked)
    } else if (inputType === 'radio') {
      newElement.setAttribute('checked', element.checked)
      element.setAttribute('data-clickable-id', elementName)
    }
    if (!window.input_recipes) {
      window.input_recipes = {}
    }
    window.input_recipes[elementName] = recipe
  }
  // **Handle select elements**
  if (tagName === 'select') {
    // Tag the select element with data-select-id
    element.setAttribute('data-select-id', elementName)

    const options = element.querySelectorAll('option')
    options.forEach((option: any) => {
      const optionValue = option.getAttribute('value') || option.textContent.trim()
      const optionName = elementName + '.' + optionValue
      const newOption = document.createElement('option')
      newOption.textContent = option.textContent
      newOption.setAttribute('value', optionValue)
      newOption.setAttribute('name', optionName)
      newOption.setAttribute('selected', option.selected.toString())
      option.setAttribute('data-clickable-id', optionName) // Tag actual DOM option element
      newElement.appendChild(newOption)
    })
  }
  // Copy specified attributes
  const attrsToCopy = [
    'alt',
    'title',
    'type',
    'value',
    'role',
    'aria-label',
    'aria-hidden',
    'aria-selected'
  ]
  attrsToCopy.forEach((attr) => {
    const value = element.getAttribute(attr)
    if (value) {
      newElement.setAttribute(attr, value)
    }
  })
  if (recipe.keep_attr) {
    for (const key in recipe.keep_attr) {
      const value = element.getAttribute(key)
      if (value) {
        newElement.setAttribute(key, value)
      }
    }
  }
  if (recipe['class']) {
    newElement.setAttribute('class', recipe['class'])
  }
  if (recipe['id']) {
    newElement.setAttribute('id', recipe['id'])
  }

  // Override attributes if specified
  if (recipe.override_attr) {
    for (const key in recipe.override_attr) {
      newElement.setAttribute(key, eval(recipe.override_attr[key]))
    }
  }

  // Process children
  if (recipe.children && recipe.children.length > 0) {
    for (const childRecipe of recipe.children) {
      const selector = childRecipe.direct_child
        ? `:scope > ${childRecipe.selector}`
        : childRecipe.selector
      const childElements = element.querySelectorAll(selector)
      childElements.forEach((childElement: any, index: number) => {
        const childNode = processElement(childElement, childRecipe, parentName, index)
        newElement.appendChild(childNode)
        if (childRecipe.insert_split_marker) {
          const every = childRecipe.insert_split_marker_every || 1
          if (index % every == 0) {
            const splitMarker = document.createElement('split-marker')
            newElement.appendChild(splitMarker)
            // console.log("inserting split marker 1");
          }
        }
        if (childRecipe.insert_split_marker) {
          // console.log("inserting split marker 2");
          const splitMarker = document.createElement('split-marker')
          newElement.appendChild(splitMarker)
        } else {
          console.log('no split marker')
        }
      })
    }
  }

  // Handle empty messages
  if (recipe.empty_message && newElement.children.length === 0) {
    const emptyTextNode = document.createTextNode(recipe.empty_message)
    newElement.appendChild(emptyTextNode)
  }

  return newElement
}
