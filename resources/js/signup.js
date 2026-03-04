import 'htmx.org'
import Alpine from 'alpinejs'
import mask from '@alpinejs/mask'
import { animate, stagger } from 'motion'

function fadeinAnimation(){
    const targets = document.querySelectorAll("#signupContent > *");
    if (targets.length > 0){
        animate(targets,{ opacity: [0,1], y:[-20,0]},{ delay: stagger(0.05), duration: 0.4})
    }
}
function fadeoutAnimation(){
    animate("#signupContent",{ opacity:[1,0]},{ duration: 0.2 })
}

window.fadeinAnimation = fadeinAnimation;
window.fadeoutAnimation = fadeoutAnimation;

Alpine.plugin(mask)

document.addEventListener('alpine:init', () => {

    Alpine.store('signup', {
        userName:'jonatan de oliveira',
        userPassword:'',
        userEmail:'',
        userPhone:'',
        storeName:'',
        storeCNPJ:'',
        storeEmail:'',
        storePhone:'',
        userRole:'',

        showPassword:false,

        emailError: '',
        passwordError:'',
        cnpjError: '',

        validateCNPJ(value) {
            // Remove os caracteres da máscara para validar apenas os números
            const digits = value.replace(/\D/g, "");
            
            if (digits.length === 0) {
                this.cnpjError = "O CNPJ é obrigatório";
            } else if (digits.length < 14) {
                this.cnpjError = "CNPJ incompleto (deve ter 14 dígitos)";
            } else {
                this.cnpjError = "";
            }
        },

        validateEmail(value) {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!value) {
                this.emailError = 'O email é obrigatório';
            } else if (!regex.test(value)) {
                this.emailError = 'Digite um formato de email válido';
            } else {
                this.emailError = '';
            }
        },

        validatePassword(value) {
            if (!value) {
                this.passwordError = 'A senha é obrigatória';
                return;
            }
            
            const hasNumber = /\d/.test(value);
            const hasLetter = /[a-zA-Z]/.test(value);
            const isLongEnough = value.length >= 8;
        
            if (!isLongEnough) {
                this.passwordError = 'A senha deve ter pelo menos 8 caracteres';
            } else if (!hasNumber || !hasLetter) {
                this.passwordError = 'A senha deve conter letras e números';
            } else {
                this.passwordError = '';
            }
        },

        setUserInfo(){
            console.log(`${this.userName}, ${this.userEmail}, ${this.userPhone}`)
        },

        auth(){

        }
    })
})

window.Alpine = Alpine
window.Animate = animate
 
Alpine.start()