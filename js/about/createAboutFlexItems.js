import { aboutList } from './aboutList.js'
import { createElement } from '../helpers/createElement.js'

export const createAboutFlexItems = () => {
  const aboutCards = aboutList.map((aboutCard) => {
    const { key, image, title, text } = aboutCard

    const spring = createElement('img', {
      class: 'about__spring',
      src: './img/spring.svg',
      alt: '',
    })

    const aboutImage = createElement('img', {
      class: 'about__image',
      src: image,
      alt: '',
    })
    const imageContainer = createElement(
      'div',
      {
        class: 'about__image-container',
      },
      aboutImage
    )

    const aboutTitle = createElement(
      'h3',
      {
        class: 'about__title',
        tabindex: '0',
      },
      title
    )
    const aboutText = createElement(
      'p',
      {
        class: 'about__text',
        tabindex: '0',
      },
      text
    )
    const aboutTitleContainer = createElement(
      'div',
      { class: 'about__title-container' },
      aboutTitle
    )
    const aboutTextContainer = createElement(
      'div',
      {
        class: 'about__text-container',
      },
      aboutTitleContainer,
      aboutText
    )

    const aboutContent = createElement(
      'div',
      { class: 'about__content' },
      imageContainer,
      aboutTextContainer
    )

    const flexItem = createElement(
      'article',
      {
        class: 'about__flex-item',
        tabindex: '0',
      },
      spring,
      aboutContent
    )

    return flexItem
  })

  return document.querySelector('.about__flexbox').append(...aboutCards)
}
