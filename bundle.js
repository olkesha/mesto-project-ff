(()=>{"use strict";var e=function(e,t,n){var o;e.owner._id===n?(o=e._id,fetch("https://nomoreparties.co/v1/wff-cohort-17/cards/".concat(o),{method:"DELETE",headers:{authorization:"e0f1dd7e-428e-4577-8452-86478473bdb4"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))).then((function(){t.remove(),console.log("карточка удалена")})).catch((function(e){console.error("Ошибка при загрузке данных:",e)})):console.error("Ошибка: У вас нет прав на удаление этой карточки.")},t=function(e,t,n){var o;(o=e._id,fetch("https://nomoreparties.co/v1/wff-cohort-17/cards/likes/".concat(o),{method:"PUT",headers:{authorization:"e0f1dd7e-428e-4577-8452-86478473bdb4","Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))).then((function(o){t.classList.add("card__like-button_is-active"),n.textContent=o.likes.length,e.likes=o.likes})).catch((function(e){console.error("Ошибка при загрузке данных:",e)}))},n=function(e,t,n){var o;(o=e._id,fetch("https://nomoreparties.co/v1/wff-cohort-17/cards/likes/".concat(o),{method:"DELETE",headers:{authorization:"e0f1dd7e-428e-4577-8452-86478473bdb4","Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))).then((function(o){t.classList.remove("card__like-button_is-active"),n.textContent=o.likes.length,e.likes=o.likes})).catch((function(e){console.error("Ошибка при загрузке данных:",e)}))};function o(e,t,n,o,r,c){var a=document.querySelector("#card-template").content.querySelector(".places__item").cloneNode(!0),i=a.querySelector(".card__delete-button"),u=a.querySelector(".card__like-button"),s=a.querySelector(".card__image"),l=a.querySelector(".card__title"),p=a.querySelector(".card__like-number");return l.textContent=e.name,s.src=e.link,s.alt="На фотографии: ".concat(e.name),p.textContent=e.likes.length,i.addEventListener("click",(function(){return n(e,a,t)})),u.addEventListener("click",(function(){u.classList.contains("card__like-button_is-active")?r(e,u,p):o(e,u,p)})),s.addEventListener("click",(function(){return c(e.name,e.link)})),e.likes.some((function(e){return e._id===t}))?u.classList.add("card__like-button_is-active"):u.classList.remove("card__like-button_is-active"),e.owner._id===t?i.style.display="block":i.style.display="none",a}function r(e){e.classList.add("popup_is-opened"),e.addEventListener("click",a),document.addEventListener("keydown",i)}function c(e){e.classList.remove("popup_is-opened"),e.removeEventListener("click",a),document.removeEventListener("keydown",i)}function a(e){e.currentTarget===e.target&&c(e.target.closest(".popup"))}function i(e){"Escape"===e.key&&c(document.querySelector(".popup_is-opened"))}var u=function(e){var t=Array.from(e.querySelectorAll(".popup__input")),n=e.querySelector(".popup__button");t.forEach((function(t){s(e,t)})),l(t,n)},s=function(e,t){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.remove("popup__input_type_error"),n.classList.remove("popup__input-error-active"),n.textContent=""},l=function(e,t){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?t.classList.remove("popup__button-inactive"):t.classList.add("popup__button-inactive")};function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}Promise.all([fetch("https://nomoreparties.co/v1/wff-cohort-17/users/me ",{method:"GET",headers:{authorization:"e0f1dd7e-428e-4577-8452-86478473bdb4","Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})),fetch("https://nomoreparties.co/v1/wff-cohort-17/cards",{method:"GET",headers:{authorization:"e0f1dd7e-428e-4577-8452-86478473bdb4","Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat("Ошибка: ".concat(e.status)))}))]).then((function(r){var c,a,i=(a=2,function(e){if(Array.isArray(e))return e}(c=r)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,c,a,i=[],u=!0,s=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(o=c.call(n)).done)&&(i.push(o.value),i.length!==t);u=!0);}catch(e){s=!0,r=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw r}}return i}}(c,a)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}(c,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=i[0],s=i[1],l=u._id;g.textContent=u.name,j.textContent=u.about,C.style.backgroundImage="url(".concat(u.avatar,")"),function(r,c){r.forEach((function(r){var a=o(r,c,e,t,n,A);b.append(a)}))}(s,l)})).catch((function(e){console.error("Ошибка при загрузке данных:",e)}));var d=document.querySelector(".popup__form[name=new-place]"),f=document.querySelector(".popup__form[name=edit-profile]"),_=document.querySelector(".popup__form[name=update-avatar]"),m=document.querySelector(".popup_type_image"),v=document.querySelector(".popup_type_edit"),y=document.querySelector(".popup_type_new-card"),h=document.querySelector(".popup_type_update-avatar"),b=document.querySelector(".places__list"),S=document.querySelector(".popup__input_type_card-name"),k=document.querySelector(".popup__input_type_url"),q=document.querySelector(".popup__input_type_name"),L=document.querySelector(".popup__input_type_description"),E=document.querySelector(".popup__input_type_avatar-url"),g=document.querySelector(".profile__title"),j=document.querySelector(".profile__description"),C=document.querySelector(".profile__image"),w=document.querySelector(".popup__image"),T=document.querySelector(".popup__caption");function x(e,t){t.querySelector(".popup__button").textContent=e?"Сохранение...":"Сохранить"}function A(e,t){r(m),T.textContent=e,w.src=t,w.alt="На фотографии: ".concat(e)}v.classList.add("popup_is-animated"),y.classList.add("popup_is-animated"),m.classList.add("popup_is-animated"),h.classList.add("popup_is-animated"),d.addEventListener("submit",(function(r){var a;r.preventDefault(),x(!0,y),(a={name:S.value,link:k.value},fetch("https://nomoreparties.co/v1/wff-cohort-17/cards",{method:"POST",headers:{authorization:"e0f1dd7e-428e-4577-8452-86478473bdb4","Content-Type":"application/json"},body:JSON.stringify({name:a.name,link:a.link})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))).then((function(a){var i=o(a,void 0,e,t,n,A);b.prepend(i),c(y),r.target.reset(),u(y)})).catch((function(e){console.error("Ошибка при загрузке данных:",e)})).finally((function(){return x(!1,y)}))})),f.addEventListener("submit",(function(e){var t;e.preventDefault(),x(!0,v),(t={name:q.value,about:L.value},fetch("https://nomoreparties.co/v1/wff-cohort-17/users/me",{method:"PATCH",headers:{authorization:"e0f1dd7e-428e-4577-8452-86478473bdb4","Content-Type":"application/json"},body:JSON.stringify({name:t.name,about:t.about})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))).then((function(){g.textContent=q.value,j.textContent=L.value,c(v)})).catch((function(e){console.error("Ошибка при загрузке данных:",e)})).finally((function(){return x(!1,v)}))})),_.addEventListener("submit",(function(e){var t;e.preventDefault(),x(!0,h),(t={owner:{avatar:E.value}},fetch("https://nomoreparties.co/v1/wff-cohort-17/users/me/avatar",{method:"PATCH",headers:{authorization:"e0f1dd7e-428e-4577-8452-86478473bdb4","Content-Type":"application/json"},body:JSON.stringify({avatar:t.owner.avatar})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))).then((function(t){C.style.backgroundImage="url(".concat(t.avatar,")"),c(h),e.target.reset(),u(h)})).catch((function(e){console.error("Ошибка при загрузке данных:",e)})).finally((function(){return x(!1,h)}))})),C.addEventListener("click",(function(){r(h),E.value="",E.focus(),u(h)})),document.querySelector(".profile__add-button").addEventListener("click",(function(){r(y),S.focus()})),document.querySelector(".profile__edit-button").addEventListener("click",(function(){r(v),q.focus(),q.value=g.textContent,L.value=j.textContent,u(v)})),h.querySelector(".popup__close").addEventListener("click",(function(){return c(h)})),m.querySelector(".popup__close").addEventListener("click",(function(){return c(m)})),y.querySelector(".popup__close").addEventListener("click",(function(){return c(y)})),v.querySelector(".popup__close").addEventListener("click",(function(){return c(v)})),Array.from(document.querySelectorAll(".popup__form")).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e){var t=Array.from(e.querySelectorAll(".popup__input")),n=e.querySelector(".popup__button");l(t,n),t.forEach((function(o){o.addEventListener("input",(function(){l(t,n),function(e,t){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?s(e,t):function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add("popup__input_type_error"),o.classList.add("popup__input-error-active"),o.textContent=n}(e,t,t.validationMessage)}(e,o)}))}))}(e)}))})();