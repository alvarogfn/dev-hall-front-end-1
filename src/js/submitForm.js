const submitForm = () => {
  const get = document.getElementById.bind(document);

  const manageForm = ({ target }) => {
    form[target.id] = target.value;
    validateForm(form.name, form.tel);
  };

  const validateForm = (name, tel) => {
    const nameRegex = RegExp(/^[A-zÀ-ú '´]*$/);
    const telRegex = RegExp(/^\([0-9]{2}\) [0-9]{5} [0-9]{4}/);

    const buttonElement = get("submit");
    
    if (name.length == 0 || tel.length == 0) {
      buttonElement.setAttribute("disabled", true);
      return false;
    } else if (nameRegex.test(name) && telRegex.test(tel)) {
      buttonElement.removeAttribute("disabled");
      return true;
    } else {
      buttonElement.setAttribute("disabled", true);
      return false;
    }
  };

  const createResponseModal = (info) => {
    try {
      if (document.getElementById("contact-modal") !== null) throw new Error();
    } catch {
      document.getElementById("contact-modal").remove();
    } finally {
      const contactElement = document.getElementById("contact");

      const modalElement = document.createElement("aside");

      modalElement.classList.add("modal");
      modalElement.id = "contact-modal";

      const titleModalElement = document.createElement("h1");
      titleModalElement.innerText = info.title;
      titleModalElement.classList.add("modal__title");

      const paragraphModalElement = document.createElement("p");
      paragraphModalElement.innerText = info.content;
      paragraphModalElement.classList.add("modal__content");

      modalElement.appendChild(titleModalElement);
      modalElement.appendChild(paragraphModalElement);

      contactElement.appendChild(modalElement);

      setTimeout(() => {
        modalElement.remove();
      }, 5000);
    }
  };

  const formElement = get("form");
  formElement.onsubmit = (e) => e.preventDefault();

  const nameElement = get("name");
  const telElement = get("tel");

  const buttonElement = get("submit");

  const form = {
    name: nameElement.value,
    tel: telElement.value,
  };

  validateForm(form.name, form.tel);

  const actions = ["keyup", "change", "blur"];

  actions.forEach((action) => {
    nameElement.addEventListener(action, (e) => manageForm(e));
    telElement.addEventListener(action, (e) => manageForm(e));
  });

  buttonElement.addEventListener("click", () => {
    if (validateForm(form.name, form.tel)) {
      // fetch("https://api.muitofodamesmo.com/clients-list", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(form),
      // })
      //   .then((r) => {
      //     const info = {
      //       title: "Sua solicitação foi enviada com sucesso!",
      //       content: `Entraremos em contato logo, ${form.name}.`,
      //     };
      //     createResponseModal(r);
      //   })
      //   .catch((r) => {
      //     const info = {
      //       title: "Um erro aconteceu.",
      //       content: r,
      //     };
      //     createResponseModal(info);
      //   });
      const info = {
        title: `Recebemos seu contato ${form.name}.`,
        content: "Entraremos em contato em breve!",
      };
      createResponseModal(info);
    }
  });
};
submitForm();
