const animationOnScroll = () => {
  const animateOnScroll = (Element) => {
    const screenBase = window.scrollY + window.innerHeight;
    const elementBase = Element.getBoundingClientRect().bottom + window.scrollY;

    if (screenBase > elementBase) {
      Element.style.animationPlayState = "running";
    }
  };

  const get = document.getElementById.bind(document);

  const contactElement = get("contact");
  const titleElement = get("about-title");
  const paragraphElement = get("about-paragraph");
  const bannerTitleElement = get("banner-title");
  const bannerSubtitleElement = get("banner-subtitle");
  const bannerButtonElement = get("banner-button");

  const Elements = [
    contactElement,
    titleElement,
    paragraphElement,
    bannerTitleElement,
    bannerSubtitleElement,
    bannerButtonElement,
  ];

  // Run function on page launch
  Elements.forEach((Element) => {
    animateOnScroll(Element);
  });

  window.addEventListener("scroll", () => {
    Elements.forEach((Element) => {
      animateOnScroll(Element);
    });
  });
};
animationOnScroll();
