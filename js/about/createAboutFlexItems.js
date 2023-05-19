import { aboutList } from './aboutList.js'
import { createElement } from '../helpers/createElement.js'

export const createAboutFlexItems = () => {
  const aboutCards = aboutList.map((aboutCard) => {
    const { key, image, title, text } = aboutCard

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

    const spring = createElement('img', {
      class: 'about__spring',
      src: '/img/spring.svg',
      alt: '',
    })

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

    const aboutLogo = createElement('img', {
      class: 'about__logo',
      src: '/img/2050_log_white.svg',
      alt: '',
    })

    const flexItem = createElement(
      'article',
      {
        class: 'about__flex-item',
        tabindex: '0',
      },
      imageContainer,
      spring,
      aboutTextContainer,
      aboutLogo
    )

    return flexItem
  })

  return document.querySelector('.about').append(...aboutCards)
}
