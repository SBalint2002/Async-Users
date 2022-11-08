"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
document.addEventListener('DOMContentLoaded', () => {
    var _a;
    (_a = document.getElementById('all')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
        let response = yield fetch('./users.json');
        let eredmeny = yield response.json();
        let adatok = document.getElementById('adatok');
        adatok.textContent = '';
        for (let p of eredmeny.users) {
            let li = document.createElement('li');
            li.innerHTML = p.lastName + " " + p.firstName;
            adatok.appendChild(li);
        }
    }));
});
